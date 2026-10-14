/* Portfolio BTS SIO SISR — Mathias Alcide */

const LOGO = "assets/logo-toit-et-joie.png";

const E5 = {
  pat: "Gérer le patrimoine informatique",
  inc: "Répondre aux incidents et aux demandes d'assistance",
  web: "Développer la présence en ligne",
  prj: "Travailler en mode projet",
  srv: "Mettre à disposition un service informatique",
  dev: "Organiser son développement professionnel"
};

const MODALS = {
  company: {
    company: true,
    title: "Toit et Joie – Poste Habitat",
    logo: LOGO,
    badge: "Stage de première année · 01/06/2025 au 03/07/2025",
    context: "Stage de 5 semaines à temps plein au sein du pôle informatique, en collaboration avec l'équipe Support utilisateur (N1/N2) puis l'équipe Réseau & Systèmes. Outils rencontrés : Active Directory, RSAT, Windows 11 Pro, FreshService, MDM, ToIP 3CX, pare-feu Orange.",
    missions: [
      "Déploiement du softphone 3CX et installation réseau du nouveau service CRC",
      "Enrôlement et sécurisation d'une flotte de 60 iPhone (MDM & VPP)",
      "Administration Windows 11, RSAT, Active Directory et dépannage BitLocker",
      "Participation à la campagne de sensibilisation au phishing (pare-feu Orange, Microsoft 365)"
    ],
    skills: [E5.pat, E5.inc, E5.prj, E5.srv, E5.dev]
  },
  "stage-3cx": {
    title: "Déploiement de la téléphonie ToIP 3CX & aménagement réseau CRC",
    badge: "Stage (Entreprise)",
    desc: "Participation à la transition vers la téléphonie sur IP (softphone 3CX) pour remplacer les téléphones fixes, puis installation réseau complète du nouveau service CRC (Centre de Relation Client).",
    tech: ["ToIP 3CX", "Switching RJ45", "Brassage réseau", "Service CRC", "FreshService"],
    missions: [
      "Activer et raccorder les prises RJ45 au niveau des switchs de brassage",
      "Installer et configurer le client 3CX sur les postes",
      "Résoudre les incidents : micro bloqué, flux audio dans les casques, notifications en arrière-plan",
      "Rédiger la procédure interne et le guide utilisateur, former le personnel d'accueil",
      "Installer les postes du CRC : câblage, branchements, vérification de la connectivité, déploiement des logiciels"
    ],
    skills: [E5.pat, E5.inc, E5.prj, E5.srv]
  },
  "stage-mdm": {
    title: "Enrôlement et sécurisation d'une flotte de 60 iPhone (MDM & VPP)",
    badge: "Stage (Entreprise)",
    desc: "Préparation, enrôlement et déploiement de profils de sécurité sur 60 smartphones Apple d'entreprise, avec diagnostic d'un incident empêchant l'installation des applications professionnelles.",
    tech: ["MDM", "Apple VPP", "Microsoft Authenticator", "MFA", "Flotte mobile"],
    missions: [
      "Attribuer les profils MDM et les licences VPP aux téléphones",
      "Diagnostiquer l'absence d'Outlook et Edge : rupture de synchronisation de la licence VPP, puis rétablir les flux",
      "Déployer l'authentification multifacteur via Microsoft Authenticator",
      "Mettre à jour la base de données de suivi de la flotte"
    ],
    skills: [E5.pat, E5.inc, E5.srv, E5.dev]
  },
  "stage-win": {
    title: "Administration Windows 11, RSAT, Active Directory & dépannage BitLocker",
    badge: "Stage (Entreprise)",
    desc: "Enrôlement de postes Windows 11 Pro au domaine Active Directory et dépannage d'un poste bloqué par le chiffrement BitLocker.",
    tech: ["Windows 11 Pro", "Active Directory", "RSAT", "GPO", "BitLocker", "FreshService"],
    missions: [
      "Intégrer les postes au domaine via RSAT et appliquer les GPO",
      "Rédiger et mettre à jour la procédure d'enrôlement interne",
      "Créer un média Windows 11 bootable, réinstaller depuis le serveur de déploiement et réintégrer le poste au domaine",
      "Diagnostiquer le parc Lenovo et gérer les retours sous garantie via FreshService"
    ],
    skills: [E5.pat, E5.inc, E5.srv]
  },
  "stage-phishing": {
    title: "Cybersécurité opérationnelle & campagne anti-phishing",
    badge: "Stage (Entreprise)",
    desc: "Participation à la campagne de sensibilisation à l'ingénierie sociale menée avec le prestataire AAI2.",
    tech: ["Pare-feu Orange", "Microsoft 365 / Exchange Online", "Filtrage de flux", "Anti-phishing"],
    missions: [
      "Paramétrer les règles de filtrage du pare-feu pour autoriser les flux de test",
      "Whitelister les domaines de simulation sur les passerelles de messagerie Microsoft 365",
      "Suivre les remontées d'incidents et sensibiliser les collaborateurs"
    ],
    skills: [E5.pat, E5.dev]
  },
  "proj-homelab": {
    title: "Homelab personnel d'infrastructure locale & serveur d'agents IA",
    badge: "Personnel / Homelab",
    desc: "Environnement serveur dédié à domicile hébergeant des agents d'intelligence artificielle, exécutés localement sans dépendance au cloud.",
    tech: ["Homelab", "Agents IA locaux", "Linux / Docker", "Virtualisation", "Segmentation réseau", "On-premise"],
    missions: [
      "Segmenter le réseau local avec adressage statique",
      "Sécuriser l'accès distant (SSH, reverse proxy)",
      "Déployer des environnements virtualisés et conteneurisés sous Linux",
      "Gérer l'allocation des ressources (CPU, mémoire, accélération d'inférence)",
      "Mettre en place des modèles d'IA locaux pour l'assistance et l'automatisation"
    ],
    skills: ["Administration Linux", "Conteneurisation et virtualisation", "Segmentation réseau", "Accès distant sécurisé", "IA locale"]
  },
  "proj-powershell": {
    title: "Automatisation Active Directory par script PowerShell (gestion-eleves.ps1)",
    badge: "TP SISR",
    desc: "Script de provisionnement massif de comptes utilisateurs dans un annuaire Active Directory à partir d'un fichier CSV.",
    tech: ["PowerShell", "Active Directory", "Windows Server", "Import CSV", "Automatisation"],
    missions: [
      "Créer dynamiquement l'arborescence des unités d'organisation",
      "Générer les identifiants et mots de passe temporaires",
      "Affecter automatiquement les comptes aux groupes de sécurité",
      "Journaliser les actions dans un fichier de log horodaté"
    ],
    skills: [E5.pat, E5.srv]
  },
  "proj-vlan": {
    title: "Architecture réseau d'entreprise, VLAN & trunking 802.1Q",
    badge: "AP / Réseau",
    desc: "Modélisation et simulation d'une infrastructure d'entreprise sous Cisco Packet Tracer.",
    tech: ["Cisco Packet Tracer", "VLAN", "Trunk 802.1Q", "Routage inter-VLAN", "Switching"],
    missions: [
      "Segmenter le réseau par VLAN selon les services",
      "Configurer le trunking inter-switchs (IEEE 802.1Q)",
      "Résoudre un conflit CDP (Native VLAN Mismatch)",
      "Mettre en place le routage inter-VLAN (Router-on-a-Stick)",
      "Sécuriser les ports d'accès avec Port-Security contre l'usurpation MAC"
    ],
    skills: [E5.pat, E5.inc]
  },
  "proj-glpi": {
    title: "Déploiement et sécurisation d'un serveur ITSM GLPI sous Debian",
    badge: "TP SISR",
    desc: "Installation et configuration de GLPI, solution de gestion de parc et d'incidents, sur une machine virtuelle Debian.",
    tech: ["Debian", "GLPI", "Apache / PHP 8.4", "MariaDB", "ITSM"],
    missions: [
      "Déployer la pile LAMP (Apache, MariaDB, PHP 8.4)",
      "Résoudre les problèmes de compatibilité PHP et de liens symboliques",
      "Sécuriser le DocumentRoot Apache",
      "Paramétrer les entités, profils techniciens, catégories de tickets et inventaire"
    ],
    skills: [E5.inc, E5.srv]
  },
  "proj-pki": {
    title: "Conception d'une architecture sécurisée PKI, DMZ & filtrage réseau",
    badge: "Cybersécurité",
    desc: "Dossier d'architecture technique de cybersécurité pour une infrastructure d'organisation.",
    tech: ["PKI / X.509", "DMZ", "Pare-feu", "Matrice de flux"],
    missions: [
      "Définir une autorité de certification à deux niveaux (racine hors-ligne et autorité émettrice)",
      "Sécuriser les flux internes via des certificats X.509",
      "Concevoir une DMZ pour isoler les serveurs exposés à Internet",
      "Rédiger les matrices de filtrage pare-feu inter-VLAN"
    ],
    skills: [E5.pat, E5.dev]
  }
};

(function initModals() {
  const modal = document.getElementById("modal");
  const body = document.getElementById("modal-body");
  const panel = modal.querySelector(".modal-panel");
  let last = null;

  const el = (t, c, x) => {
    const e = document.createElement(t);
    if (c) e.className = c;
    if (x) e.textContent = x;
    return e;
  };

  const block = (title, items, cls) => {
    const s = el("div", "modal-block");
    s.appendChild(el("h4", "", title));
    const u = el("ul", cls || "modal-list");
    items.forEach((i) => u.appendChild(el("li", "", i)));
    s.appendChild(u);
    return s;
  };

  function render(d, src) {
    body.textContent = "";
    if (src && !d.company) {
      const hero = el("div", "modal-hero");
      const hi = el("img");
      hi.src = src;
      hi.alt = "";
      hero.appendChild(hi);
      body.appendChild(hero);
    }
    if (d.company) {
      const h = el("div", "modal-company");
      const im = el("img");
      im.src = d.logo;
      im.alt = "Logo " + d.title;
      im.width = 120;
      im.height = 80;
      h.appendChild(im);
      body.appendChild(h);
    }
    body.appendChild(el("span", "modal-badge", d.badge));
    const t = el("h3", "modal-title", d.title);
    t.id = "modal-title";
    body.appendChild(t);
    const intro = d.company
      ? block("Contexte du stage", [d.context], "modal-list plain")
      : block("Description", [d.desc], "modal-list plain");
    body.appendChild(intro);
    if (d.tech) {
      const s = el("div", "modal-block");
      s.appendChild(el("h4", "", "Technologies utilisées"));
      const r = el("div", "tags-row");
      d.tech.forEach((x) => r.appendChild(el("span", "tag", x)));
      s.appendChild(r);
      body.appendChild(s);
    }
    body.appendChild(block("Missions réalisées", d.missions));
    body.appendChild(block(d.company ? "Compétences acquises" : "Compétences développées", d.skills));
  }

  function open(id, trigger) {
    const d = MODALS[id];
    if (!d) return;
    last = trigger;
    const mi = trigger && trigger.querySelector ? trigger.querySelector(".pcard-media img") : null;
    render(d, mi ? mi.src : null);
    if (trigger && trigger.getBoundingClientRect) {
      const r = trigger.getBoundingClientRect();
      const p = panel.getBoundingClientRect();
      panel.style.transformOrigin = (r.left + r.width / 2 - p.left) + "px " + (r.top + r.height / 2 - p.top) + "px";
    }
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    body.parentElement.scrollTop = 0;
    panel.focus({ preventScroll: true });
  }

  function close() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    if (last) last.focus({ preventScroll: true });
  }

  document.querySelectorAll("[data-modal]").forEach((c) => {
    c.addEventListener("click", (e) => {
      if (e.target.closest("a")) return;
      open(c.dataset.modal, c);
    });
    c.addEventListener("keydown", (e) => {
      if (c.tagName !== "BUTTON" && (e.key === "Enter" || e.key === " ")) {
        e.preventDefault();
        open(c.dataset.modal, c);
      }
    });
  });

  modal.querySelectorAll("[data-close]").forEach((b) => b.addEventListener("click", close));

  document.addEventListener("keydown", (e) => {
    if (!modal.classList.contains("open")) return;
    if (e.key === "Escape") close();
    if (e.key === "Tab") {
      const f = [...panel.querySelectorAll("button,a[href]")];
      if (!f.length) {
        e.preventDefault();
        return;
      }
      const a = document.activeElement;
      const first = f[0];
      const lastEl = f[f.length - 1];
      if (e.shiftKey && (a === first || a === panel)) {
        e.preventDefault();
        lastEl.focus();
      } else if (!e.shiftKey && a === lastEl) {
        e.preventDefault();
        first.focus();
      }
    }
  });
})();

function formatVeilleDate(dateStr) {
  if (!dateStr) return "";
  const d = new Date(dateStr + "T00:00:00");
  if (Number.isNaN(d.getTime())) return dateStr;
  return d.toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
}

function renderVeilleArticles(articles) {
  const container = document.getElementById("veille-articles");
  if (!container) return;
  container.innerHTML = "";

  articles.forEach((art) => {
    const card = document.createElement("div");
    card.className = "veille-card";
    card.setAttribute("data-category", art.category);

    const header = document.createElement("div");
    header.className = "v-date";
    const dateLabel = formatVeilleDate(art.date);
    header.textContent = dateLabel ? `${dateLabel} · ${art.source}` : `${art.source} · ${art.category}`;

    const h4 = document.createElement("h4");
    const link = document.createElement("a");
    link.href = art.link;
    link.target = "_blank";
    link.rel = "noopener";
    link.textContent = art.title;
    h4.appendChild(link);

    const p = document.createElement("p");
    p.textContent = art.summary;

    const tagsRow = document.createElement("div");
    tagsRow.className = "tags-row";
    if (Array.isArray(art.tags)) {
      art.tags.forEach((t) => {
        const tagSpan = document.createElement("span");
        tagSpan.className = "tag";
        tagSpan.textContent = t;
        tagsRow.appendChild(tagSpan);
      });
    }

    card.appendChild(header);
    card.appendChild(h4);
    card.appendChild(p);
    card.appendChild(tagsRow);
    container.appendChild(card);
  });
}

function filterVeille(category) {
  const cards = document.querySelectorAll("#veille-articles .veille-card");
  cards.forEach((card) => {
    const cardCat = card.getAttribute("data-category");
    card.hidden = !(category === "all" || cardCat === category);
  });
  document.querySelectorAll("[data-veille-filter]").forEach((btn) => {
    const active = btn.getAttribute("data-veille-filter") === category;
    btn.classList.toggle("is-active", active);
    btn.setAttribute("aria-pressed", active ? "true" : "false");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-veille-filter]").forEach((btn) => {
    btn.addEventListener("click", () => filterVeille(btn.getAttribute("data-veille-filter")));
  });

  fetch("articles.json")
    .then((res) => {
      if (!res.ok) throw new Error("Fichier articles.json indisponible");
      return res.json();
    })
    .then((data) => {
      if (!data || !Array.isArray(data.articles) || !data.articles.length) return;
      renderVeilleArticles(data.articles);
      const badge = document.getElementById("veille-sync-badge");
      if (badge && data.last_updated) {
        badge.textContent = `Actualisé le ${formatVeilleDate(data.last_updated)}`;
      }
      filterVeille("all");
    })
    .catch((err) => {
      console.log("Mode affichage statique actif :", err.message);
    });
});

(function initNav() {
  const nav = document.querySelector("nav");
  const btn = nav.querySelector(".nav-toggle");
  const list = document.getElementById("nav-links");
  const setOpen = (o) => {
    list.classList.toggle("open", o);
    btn.setAttribute("aria-expanded", o);
    btn.setAttribute("aria-label", o ? "Fermer le menu" : "Ouvrir le menu");
  };
  btn.setAttribute("aria-label", "Ouvrir le menu");
  btn.addEventListener("click", () => setOpen(!list.classList.contains("open")));
  list.addEventListener("click", (e) => {
    if (e.target.closest("a")) setOpen(false);
  });
  document.addEventListener("click", (e) => {
    if (!nav.contains(e.target)) setOpen(false);
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && list.classList.contains("open")) {
      setOpen(false);
      btn.focus();
    }
  });

  const links = {};
  list.querySelectorAll('a[href^="#"]').forEach((a) => {
    links[a.getAttribute("href").slice(1)] = a;
  });
  const io = new IntersectionObserver(
    (es) =>
      es.forEach((en) => {
        if (!en.isIntersecting) return;
        const id = en.target.id;
        Object.values(links).forEach((a) => a.classList.remove("active"));
        if (links[id] && id !== "contact" && id !== "accueil") links[id].classList.add("active");
      }),
    { rootMargin: "-40% 0px -55% 0px" }
  );
  document.querySelectorAll("section[id]").forEach((s) => io.observe(s));
})();

document.documentElement.classList.add("js");
(function initReveal() {
  if (!("IntersectionObserver" in window)) return;
  const io = new IntersectionObserver(
    (es) =>
      es.forEach((e) => {
        if (!e.isIntersecting) return;
        const t = e.target;
        t.classList.add("in");
        io.unobserve(t);
        setTimeout(() => {
          t.style.transitionDelay = "";
        }, 800);
      }),
    { rootMargin: "0px 0px -8% 0px" }
  );
  document.querySelectorAll(".pcard,.company-card").forEach((c, i) => {
    c.classList.add("reveal");
    c.style.transitionDelay = (i % 2) * 70 + "ms";
    io.observe(c);
  });
})();
