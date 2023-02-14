import adapter from '@sveltejs/adapter-auto'
import { vitePreprocess } from '@sveltejs/kit/vite'
import previewProcessor from './scripts/preview.js'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [previewProcessor(), vitePreprocess()],
	kit: {
		adapter: adapter(),
		alias: {
			// this will match a file
			$components: './src/components',
			'$components/*': './src/components/*',
			yesvelte: './src/lib',
			'yesvelte/*': './src/lib/*',
		},
	},
}

export default config
