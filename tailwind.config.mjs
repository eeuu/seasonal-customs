import defaultTheme from 'tailwindcss/defaultTheme'
/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ['class'],
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			colors: {},
			fontFamily: {
				sans: ['Noto Sans JP Variable', "sans-serif", ...defaultTheme.fontFamily.sans],
				serif: ['Noto Serif JP Variable', "serif"],
				inter: ['Inter Variable', "sans-serif", ...defaultTheme.fontFamily.sans],
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
}
