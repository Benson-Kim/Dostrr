module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
		"./node_modules/react-tailwindcss-select/dist/index.esm.js",
	],

	// enable dark mode via class strategy
	darkMode: "class",

	theme: {
		extend: {
			colors: {
				black: "#09090c",
				darkGray: "#121212",
				brightRed: "hsl(12, 88%, 59%)",
				brightRedLight: "hsl(12, 88%, 69%)",
				brightRedSupLight: "hsl(12, 88%, 95%)",
				darkBlue: "hsl(228, 39%, 23%)",
				darkGrayishBlue: "hsl(227, 12%, 61%)",
				veryDarkBlue: "hsl(233, 12%, 13%)",
			},
			keyframes: {
				"fade-in-down": {
					"0%": {
						opacity: "0",
						transform: "scaleY(0)",
					},
					"100%": {
						opacity: "1",
						transform: "scaleY(1)",
					},
				},
				"fade-out-up": {
					from: {
						opacity: "1",
						transform: "scaleY(1)",
					},
					to: {
						opacity: "0",
						transform: "scaleY(0)",
					},
				},
			},
			animation: {
				"fade-in-down": "fade-in-down 0.5s ease-out",
				"fade-out-up": "fade-out-up 1s ease-out",
			},
		},
	},
};
