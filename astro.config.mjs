// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Live domain (registered at GoDaddy, site hosted on Netlify). Used for canonical URLs and the sitemap.
  site: 'https://nityanpolymers.com',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
