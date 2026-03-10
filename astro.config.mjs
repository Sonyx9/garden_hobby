import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// GitHub Pages project site: https://<user>.github.io/garden_hobby/
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] || '';
const base = repoName ? `/${repoName}/` : '/';
const site = process.env.GITHUB_REPOSITORY
  ? `https://${process.env.GITHUB_REPOSITORY.split('/')[0]}.github.io`
  : 'https://example.com';

export default defineConfig({
  integrations: [tailwind()],
  site,
  base,
  output: 'static',
});
