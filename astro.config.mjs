// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

/** Pages avec meta noindex : ne pas les annoncer dans le sitemap */
const SITEMAP_EXCLUDE_PATHS = new Set([
  '/cgu/',
  '/cgv/',
  '/cookies/',
  '/mentions-legales/',
  '/politique-confidentialite/',
]);

// https://astro.build/config
export default defineConfig({
  site: 'https://edame.fr',
  build: {
    // Inline tout le CSS pour éliminer les requêtes bloquantes (FCP/LCP)
    inlineStylesheets: 'always',
  },
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    sitemap({
      filter: (page) => {
        try {
          const { pathname } = new URL(page);
          return !SITEMAP_EXCLUDE_PATHS.has(pathname);
        } catch {
          return true;
        }
      },
      changefreq: 'weekly',
      priority: 0.7,
      serialize(item) {
        const home = 'https://edame.fr/';
        if (item.url === home || item.url === 'https://edame.fr') {
          return { ...item, changefreq: 'weekly', priority: 1.0 };
        }
        return item;
      },
    }),
  ],
});