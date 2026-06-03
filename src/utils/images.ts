import type { ImageMetadata } from 'astro';

/** URL publique d'une image (assets Astro ou chemin absolu legacy). */
export function getImageSrc(image: ImageMetadata | string): string {
  return typeof image === 'string' ? image : image.src;
}

/** URL absolue pour Open Graph / JSON-LD. */
export function getImageAbsoluteUrl(image: ImageMetadata | string, site: URL | string): string {
  const src = getImageSrc(image);
  if (src.startsWith('http://') || src.startsWith('https://')) {
    return src;
  }
  return new URL(src, site).href;
}
