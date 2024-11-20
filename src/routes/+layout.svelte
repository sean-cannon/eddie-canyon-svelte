<script lang="ts">
	export const prerender = true;

	import { page } from '$app/stores';
	import { base } from '$app/paths';
  
	import '../app.postcss';

	// Highlight JS
	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	import xml from 'highlight.js/lib/languages/xml'; // for HTML
	import css from 'highlight.js/lib/languages/css';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';

	hljs.registerLanguage('xml', xml); // for HTML
	hljs.registerLanguage('css', css);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('typescript', typescript);
	storeHighlightJs.set(hljs);
	
	// Reactive declaration to track the current URL
	$: currentPath = $page.url.pathname;
  
	// Define navigation links
	interface NavLink {
	  href: string;
	  label: string;
	}
  
	const links: NavLink[] = [
		{ href: `${base}/`, label: 'Home' },
		{ href: `${base}/listen`, label: 'Listen' },
		{ href: `${base}/watch`, label: 'Watch' },
		{ href: `${base}/think`, label: 'Think' },
		{ href: `${base}/socials`, label: 'Socials' },
	];
  </script>
  
  <style>
	nav {
	  background-color: var(--bg-primary, #f8f9fa); /* Skeleton-compatible fallback */
	}
  </style>
  
  <!-- Navbar -->
  <nav class="shadow-md sticky top-0 z-10 p-4 bg-primary-50 flex justify-between items-center">
	<a href="/" class="text-2xl font-bold text-primary-900">Eddie Canyon</a>
	<ul class="flex space-x-4">
	  {#each links as { href, label }}
		<li>
		  <a
			href={href}
			class="text-lg font-medium px-4 py-2 rounded-md transition-colors duration-200
			  {currentPath === href ? 'bg-primary-100 text-primary-900' : 'hover:bg-primary-100 text-primary-700'}"
		  >
			{label}
		  </a>
		</li>
	  {/each}
	</ul>
  </nav>
  
  <!-- Content -->
  <main class="p-6">
	<slot />
  </main>
  