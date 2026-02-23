// astro.config.mjs
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://todoesdigital.com',
  trailingSlash: 'never', // Fuerza a Astro a no usar barras finales
  integrations: [sitemap()],
});