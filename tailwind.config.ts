import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			container: {
				center: true,
				padding: {
					DEFAULT: "1rem",
				},
			},
			fontFamily: {
				sans: ["Inter", "sans-serif"],
				rubik: ["Rubik", "sans-serif"],
			},
			colors: {
				brand: {
					DEFAULT: "#060808",
				},
				primary: {
					DEFAULT: "#05A8A0",
					hover: "#0F9E95",
					light: "#DEFEFC",
				},
				secondary: {
					DEFAULT: "#F5B81C",
					hover: "#EDAE0B",
					light: "#F9F9ED",
				},
				success: {
					DEFAULT: "#027A48",
					light: "#ECFDF3",
				},
				danger: {
					DEFAULT: "#D7382D",
					light: "#FBEBEA",
				},
				warning: {
					DEFAULT: "#F68B27",
					light: "#FEF3E9",
				},
				info: {
					DEFAULT: "#DCAC32",
					light: "#FFF7F0",
				},
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [],
};
export default config;
