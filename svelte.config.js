import adapter from '@sveltejs/adapter-static'; // Use the static adapter for GitHub Pages
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte'],
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [vitePreprocess()],
	
	vitePlugin: {
		inspector: true,
	},
	kit: {
		// Use the static adapter with a custom base path for GitHub Pages
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '200.html'
		}),
		paths: {
			base: '/eddie-canyon-svlete', // Replace with your GitHub repository name
		},
	},
};

export default config;
