#!/usr/bin/env python3
"""Veille automatisée - BTS SIO SISR.
Sujet : Sécurité et souveraineté des données à l'ère de l'IA : le local-first comme réponse.
1. Lit feeds.txt  2. Filtre (données/sécurité ET IA/local/cloud)  3. Normalise les dates
4. Écrit veille_archive.json (historique complet, jamais purgé) et articles.json (12 derniers, pour le site)."""
import json, os, re, sys, urllib.request, xml.etree.ElementTree as ET
from datetime import datetime, timezone
from email.utils import parsedate_to_datetime

SUBJECT = "Sécurité et souveraineté des données à l'ère de l'IA : le local-first comme réponse"
SITE_MAX, PER_FEED_MAX = 12, 5
TRUSTED = ("cert.ssi.gouv.fr", "cnil.fr", "privacyguides.org")  # pertinents sans mot-clé de contexte

DATA_KW = [r"donn[ée]es", r"\bdata\b", r"privacy", r"vie priv[ée]e", r"rgpd", r"gdpr", r"cnil", r"souverain", r"sovereign",
           r"chiffrement", r"encrypt", r"sauvegarde", r"backup", r"fuite", r"breach", r"leak", r"cloud act", r"ransomware",
           r"vuln[ée]rabilit", r"cve-\d", r"zero.?day", r"pare-feu", r"firewall", r"vpn", r"surveillance"]
CTX_KW = [r"\bia\b", r"\bai\b", r"\bllm", r"intelligence artificielle", r"chatgpt", r"openai", r"copilot", r"\blocal", r"on-?prem",
          r"self-?host", r"homelab", r"home lab", r"open.?source", r"ollama", r"llama", r"\bcloud\b", r"docker", r"linux", r"proxmox"]
CATEGORIES = {
    "IA locale & Self-hosting": [r"ollama", r"llama", r"\bllm", r"self-?host", r"homelab", r"on-?prem", r"\blocal", r"open.?source", r"docker", r"proxmox"],
    "Souveraineté & RGPD": [r"rgpd", r"gdpr", r"cnil", r"souverain", r"sovereign", r"privacy", r"vie priv[ée]e", r"cloud act", r"openai", r"chatgpt", r"donn[ée]es"],
    "Sécurité & Infrastructure": [r"vuln[ée]rabilit", r"cve-\d", r"ransomware", r"chiffrement", r"encrypt", r"pare-feu", r"firewall", r"vpn", r"backup", r"sauvegarde", r"breach", r"fuite"],
}

def has(pats, text): return any(re.search(p, text) for p in pats)
def clean(t): return " ".join(re.sub(r"<.*?>", "", t or "").replace("&amp;", "&").replace("&quot;", '"').replace("&#39;", "'").replace("&nbsp;", " ").split())
def category(text):
    for cat, pats in CATEGORIES.items():
        if has(pats, text): return cat
    return "Sécurité & Infrastructure"
def iso_date(s):
    try: return parsedate_to_datetime(s).astimezone(timezone.utc).strftime("%Y-%m-%d")
    except Exception: pass
    try: return datetime.fromisoformat(s.replace("Z", "+00:00")).strftime("%Y-%m-%d")
    except Exception: return datetime.now(timezone.utc).strftime("%Y-%m-%d")

def fetch_feed(url):
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 BTS-SIO-Veille/2.0"})
    with urllib.request.urlopen(req, timeout=10) as r:
        root = ET.fromstring(r.read())
    A = "{http://www.w3.org/2005/Atom}"
    rows = []
    for it in root.findall(".//item"):
        g = lambda t: (it.findtext(t) or "")
        rows.append((g("title"), g("link"), g("description"), g("pubDate")))
    for e in root.findall(f".//{A}entry"):
        l = e.find(f"{A}link")
        rows.append((e.findtext(f"{A}title") or "", l.attrib.get("href", "") if l is not None else "",
                     e.findtext(f"{A}summary") or e.findtext(f"{A}content") or "", e.findtext(f"{A}published") or e.findtext(f"{A}updated") or ""))
    host = url.split("/")[2].replace("www.", "")
    out = []
    for title, link, desc, date in rows:
        text = f"{title} {clean(desc)}".lower()
        if not has(DATA_KW, text): continue
        if not (host in TRUSTED or has(CTX_KW, text)): continue
        summary = clean(desc)
        out.append({"title": clean(title), "link": link.strip(), "date": iso_date(date), "source": host,
                    "category": category(text), "summary": summary[:277] + "..." if len(summary) > 280 else summary,
                    "tags": ["Veille RSS", category(text)]})
    return sorted(out, key=lambda a: a["date"], reverse=True)[:PER_FEED_MAX]

def load(path, default):
    try:
        with open(path, encoding="utf-8") as f: return json.load(f)
    except Exception: return default

def main():
    archive = load("veille_archive.json", {"articles": []})["articles"]
    seen = {a["link"] for a in archive}
    new = 0
    if os.path.exists("feeds.txt"):
        for line in open("feeds.txt", encoding="utf-8"):
            url = line.strip()
            if not url or url.startswith("#"): continue
            try:
                for a in fetch_feed(url):
                    if a["link"] and a["link"] not in seen:
                        a["added"] = datetime.now(timezone.utc).strftime("%Y-%m-%d")
                        archive.append(a); seen.add(a["link"]); new += 1
            except Exception as e:
                print(f"[WARN] flux indisponible : {url} ({e})", file=sys.stderr)
    archive.sort(key=lambda a: (a["date"], a.get("added", "")), reverse=True)
    now = datetime.now(timezone.utc)
    json.dump({"subject": SUBJECT, "last_updated": now.strftime("%Y-%m-%d"), "total_articles": len(archive), "articles": archive},
              open("veille_archive.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    site = archive[:SITE_MAX]
    json.dump({"subject": SUBJECT, "last_updated": now.strftime("%Y-%m-%d"), "total_articles": len(site), "articles": site},
              open("articles.json", "w", encoding="utf-8"), ensure_ascii=False, indent=2)
    print(f"[OK] {new} nouveaux articles, {len(archive)} archivés, {len(site)} affichés sur le site")

if __name__ == "__main__":
    main()
