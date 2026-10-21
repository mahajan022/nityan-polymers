// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Update to the live domain before launch (used for canonical URLs and the sitemap)
  site: 'https://www.nityanpolymers.com',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
