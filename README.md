# Site vitrine EDAME

Site statique pour **EDAME** — *Educ à la Maison et à l'Ecole* ([edame.fr](https://edame.fr/)).

## Contenu

- **Accueil** — Présentation, objectifs, axes d'intervention
- **Qui suis-je ?** — Portrait (`public/image/me.jpg`) avec effet de fondu sur les bords
- **Mes services** — Publics, objectifs, modalités, devis
- **Contact** — 06 79 92 74 53, contact@edame.fr, 266 rue nationale Lille
- Pages légales (mentions, confidentialité, cookies, CGV, CGU)

## Identité visuelle

- Couleurs : `#2cafc4` (cyan), `#30d431` (vert)
- Logo : `public/image/cropped-logo-web-transparent.png`
- Favicons générés à partir du logo : `favicon-16x16.png`, `favicon-32x32.png`, `favicon-48x48.png`, `apple-touch-icon.png`, `android-chrome-*.png`, `favicon.svg`, `site.webmanifest`

## Configuration

Éditer `src/config.ts` (SIRET, adresse, hébergeur, URL LinkedIn si besoin).

## Commandes

| Commande | Action |
|----------|--------|
| `npm run dev` | Développement |
| `npm run build` | Build → `dist/` |
| `npm run preview` | Prévisualisation |

## Régénérer les favicons PNG

```bash
node -e "const s=require('sharp');const src='public/image/cropped-logo-web-transparent.png';const o=[['public/favicon-16x16.png',16],['public/favicon-32x32.png',32],['public/apple-touch-icon.png',180],['public/android-chrome-192x192.png',192],['public/android-chrome-512x512.png',512]];(async()=>{for(const[p,z]of o)await s(src).resize(z,z,{fit:'contain',background:{r:255,g:255,b:255,a:0}}).png().toFile(p);console.log('ok')})();"
```

(Nécessite le module `sharp` installé globalement ou en local.)
