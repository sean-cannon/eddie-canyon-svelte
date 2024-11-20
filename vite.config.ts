import { purgeCss } from 'vite-plugin-tailwind-purgecss';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { existsSync, readFileSync } from 'fs';

const version = existsSync('./VERSION') ? readFileSync('./VERSION', 'utf-8').trim() : '0.0.0';

export default defineConfig({
	plugins: [sveltekit(), purgeCss()],
	define: {
		__APP_VERSION__: JSON.stringify(version),
	  }
});