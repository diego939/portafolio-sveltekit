/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
		'./src/**/*.{html,js,svelte,ts,md}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
} 