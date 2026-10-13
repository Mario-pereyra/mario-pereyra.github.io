// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Sitio de usuario de GitHub Pages: se sirve en la raíz, así que no lleva `base`.
export default defineConfig({
	site: 'https://mario-pereyra.github.io',
	trailingSlash: 'always',
	integrations: [sitemap()],
});
