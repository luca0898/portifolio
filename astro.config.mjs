// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://luca0898.github.io',
  base: '/portifolio',
  integrations: [tailwind()],
});
