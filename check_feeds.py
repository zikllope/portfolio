# check_feeds.py - Verifie que chaque flux RSS du fichier feeds.txt fonctionne
# Usage : python check_feeds.py
import urllib.request
import xml.etree.ElementTree as ET

def check(url):
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, timeout=15) as r:
            data = r.read()
        root = ET.fromstring(data)
        # Compte les articles (items dans les deux formats RSS/Atom)
        items = root.findall(".//item") or root.findall(".//{http://www.w3.org/2005/Atom}entry")
        return f"OK  ({len(items)} articles)"
    except Exception as e:
        return f"KO  -> {e}"

with open("feeds.txt", encoding="utf-8") as f:
    urls = [l.strip() for l in f if l.strip() and not l.startswith("#")]

print(f"{len(urls)} flux a tester\n" + "-" * 60)
for url in urls:
    print(f"{check(url):<30} {url}")
