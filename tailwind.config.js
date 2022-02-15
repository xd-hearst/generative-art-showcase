module.exports = {
	content: ['./app/**/*.{js,ts,jsx,tsx}'],
	mode: 'jit',
	purge: ['./app/**/*.{ts,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
