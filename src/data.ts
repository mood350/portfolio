// Source unique du contenu: les deux designs (/v1, /v2) lisent ce fichier.
export const me = {
  name: "Prince Tanankouboussi",
  role: "Développeur Backend",
  tagline: "Je conçois des APIs et des services backend robustes, sécurisés et prêts pour la production, principalement avec Java et Spring Boot.",
  location: "Lomé, Togo",
  github: "https://github.com/mood350",
  email: "princetanankouboussi@gmail.com",
};

export const stack = [
  "Java", "Spring Boot", "Spring Security", "JWT", "PostgreSQL", "Redis",
  "Docker", "GitHub Actions", "Maven", "Python", "TypeScript", "Next.js",
];

export type Project = {
  title: string; kind: "real" | "explo"; desc: string; tags: string[];
  demo?: string; repo?: string; img?: string; // img: capture dans public/shots
};

export const projects: Project[] = [
  { title: "Kola", img: "shots/kola.webp", kind: "real", desc: "Application fintech (mobile money, épargne, microcrédit en XOF): API, app Flutter, espace web, console admin et CI/CD.", tags: ["Spring Boot", "Flutter", "Next.js"], repo: "https://github.com/mood350/kola" },
  { title: "Atlas (AgencyCRM)", img: "shots/atlas.webp", kind: "real", desc: "SaaS multi-tenant pour agences web africaines: CRM, devis, contrats, facturation Mobile Money (FedaPay/PayDunya), projets.", tags: ["Spring Boot", "Next.js 16", "PostgreSQL", "Redis"], demo: "https://atlas-brown-ten-23.vercel.app", repo: "https://github.com/mood350/atlas" },
  { title: "Armin", img: "shots/armin.webp", kind: "real", desc: "SaaS de création de contenu par IA: idées, scripts, titres SEO, projets d'équipe, quotas et plans payants.", tags: ["Spring Boot 4", "Next.js", "PostgreSQL", "IA"], demo: "https://armin-rho.vercel.app", repo: "https://github.com/mood350/armin" },
  { title: "ImmoCorp", img: "shots/immocorp.webp", kind: "real", desc: "Gestion immobilière: propriétés, locataires, baux, paiements et alertes, avec mode clair/sombre.", tags: ["Spring Boot", "Next.js", "Tailwind"], repo: "https://github.com/mood350/immocorp" },
  { title: "MyKpokpo", img: "shots/mykpokpo.webp", kind: "real", desc: "Plateforme B2B2C reliant garages et propriétaires de véhicules: rendez-vous, interventions, stock, facturation. Console web + app mobile.", tags: ["Spring Boot", "Next.js", "Expo"], repo: "https://github.com/mood350/my-kpokpo" },
  { title: "Miabôh — RSE", img: "shots/rse.webp", kind: "real", desc: "Site de formation RSE: parcours en 12 sections, 642 questions, quiz et progression sauvegardée.", tags: ["Next.js", "TypeScript"], repo: "https://github.com/mood350/rse" },
];

export const services = [
  { t: "Développement web", d: "Sites et applications web rapides, sécurisés et faciles à faire évoluer." },
  { t: "API & Back-end", d: "APIs REST sécurisées en Spring Boot: authentification, base de données, paiements et intégrations." },
  { t: "Applications mobiles", d: "Apps iOS & Android performantes, connectées à vos services existants." },
];

// TODO: remplacer par ton vrai parcours (seuls les faits trouvés dans tes fichiers sont ici).
export const experience = [
  { role: "Stage développeur backend", org: "IDS Technologie, Lomé", date: "Stage" }, // TODO: dates et missions
  { role: "Stage développeur backend", org: "Nas-Sarra Immobilier, Lomé", date: "Stage" }, // TODO: dates et missions
  { role: "Licence Génie Logiciel", org: "IPNET Institute of Technology, Lomé", date: "2023 – 2026" },
  { role: "Développeur backend indépendant", org: "Kola, Atlas, Armin, ImmoCorp, MyKpokpo…", date: "2025 – aujourd'hui" },
];

