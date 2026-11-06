// Logos officiels (Simple Icons) injectés en SVG inline au build: nets à toute taille, zéro requête réseau.
import { siSpringboot, siSpringsecurity, siJsonwebtokens, siPostgresql, siRedis, siDocker,
  siGithubactions, siPython, siTypescript, siNextdotjs } from "simple-icons";

const icons: Record<string, { path: string; hex: string }> = {
  "Spring Boot": siSpringboot, "Spring Security": siSpringsecurity, JWT: siJsonwebtokens,
  PostgreSQL: siPostgresql, Redis: siRedis, Docker: siDocker, "GitHub Actions": siGithubactions,
  Python: siPython, TypeScript: siTypescript, "Next.js": siNextdotjs,
};

const dark = (hex: string) => { const [r, g, b] = [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16)); return 0.299 * r + 0.587 * g + 0.114 * b < 60; };

// Sur fond noir, les logos presque noirs (Next.js, JWT) passent en blanc.
export function logo(name: string) {
  // Java: retiré de Simple Icons. Maven: leur version est une plume rouge simplifiée, devicon garde le dégradé officiel.
  if (name === "Java" || name === "Maven") return { img: `logos/${name.toLowerCase()}.svg` };
  const i = icons[name];
  return i ? { path: i.path, color: dark(i.hex) ? "#fff" : `#${i.hex}` } : null;
}
