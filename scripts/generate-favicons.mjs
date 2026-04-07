/**
 * Rasterise public/favicon.svg vers les PNG + favicon.ico (anciens navigateurs / favoris).
 * Exécution : npm run favicons
 */
import pngToIco from 'png-to-ico';
import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const svgPath = join(root, 'public', 'favicon.svg');
const svg = readFileSync(svgPath);

const outputs = [
  ['favicon-16x16.png', 16],
  ['favicon-32x32.png', 32],
  ['favicon-48x48.png', 48],
  ['apple-touch-icon.png', 180],
  ['android-chrome-192x192.png', 192],
  ['android-chrome-512x512.png', 512],
];

for (const [filename, size] of outputs) {
  await sharp(svg)
    .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ compressionLevel: 9 })
    .toFile(join(root, 'public', filename));
  console.log('OK', filename, size);
}

const icoPaths = [
  join(root, 'public', 'favicon-16x16.png'),
  join(root, 'public', 'favicon-32x32.png'),
  join(root, 'public', 'favicon-48x48.png'),
];
const icoBuf = await pngToIco(icoPaths);
writeFileSync(join(root, 'public', 'favicon.ico'), icoBuf);
console.log('OK', 'favicon.ico', '(16+32+48)');
