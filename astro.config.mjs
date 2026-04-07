// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

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

  integrations: [sitemap()]
});