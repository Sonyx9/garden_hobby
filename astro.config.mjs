import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Vlastní doména – stránka na kořeni URL (např. https://gardenandhobby.com/)
const site = 'https://gardenandhobby.com';
const base = '/';

export default defineConfig({
  integrations: [tailwind()],
  site,
  base,
  output: 'static',
  build: {
    assets: 'assets', // ne _astro (kvůli GitHub Pages/Jekyll)
  },
});
