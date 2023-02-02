import { defineNuxtConfig } from 'nuxt/config'
import vuetify from 'vite-plugin-vuetify'

// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
export default defineNuxtConfig({
	css: ['vuetify/styles', '@mdi/font/css/materialdesignicons.min.css'], // vuetify ships precompiled css, no need to import sass
	vite: {
		// @ts-ignore
		// curently this will lead to a type error, but hopefully will be fixed soon #justBetaThings
		ssr: {
			noExternal: ['vuetify'], // add the vuetify vite plugin
		},
	},
	modules: [
		// @ts-ignore
		// this adds the vuetify vite plugin
		// also produces type errors in the current beta release
		async (options, nuxt) => {
			nuxt.hooks.hook('vite:extendConfig', config =>
				config.plugins.push(vuetify())
			)
		},
	],
})
