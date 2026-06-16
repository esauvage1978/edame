/**
 * Génère des variantes optimisées du logo EDAME (AVIF + WebP) à des tailles
 * adaptées à l'affichage réel dans le header (~90px de large, densités 1x/2x/3x).
 * Objectif : éliminer l'audit « Améliorer l'affichage des images » de PageSpeed.
 * Exécution : npm run logo
 */
import sharp from 'sharp';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const src = join(root, 'public', 'image', 'cropped-logo-web-transparent.png');
const outDir = join(root, 'public', 'image');

// Largeurs cibles (px) pour un affichage ~96px en 1x / 2x / 3x
const widths = [96, 192, 288];

for (const w of widths) {
  const base = sharp(src).resize({ width: w, fit: 'inside', withoutEnlargement: true });

  await base
    .clone()
    .avif({ quality: 60, effort: 6 })
    .toFile(join(outDir, `logo-${w}.avif`));
  console.log('OK', `logo-${w}.avif`);

  await base
    .clone()
    .webp({ quality: 80, effort: 6 })
    .toFile(join(outDir, `logo-${w}.webp`));
  console.log('OK', `logo-${w}.webp`);
}

// PNG de repli léger (fallback navigateurs anciens)
await sharp(src)
  .resize({ width: 192, fit: 'inside', withoutEnlargement: true })
  .png({ compressionLevel: 9, palette: true })
  .toFile(join(outDir, 'logo-192.png'));
console.log('OK', 'logo-192.png');
