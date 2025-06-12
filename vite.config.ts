import { defineConfig } from "vite";

export default defineConfig({
	base: "/runes/", // Set base path for GitHub Pages
	root: "src",
	build: {
		outDir: "../dist",
		emptyOutDir: true,
	},
	server: {
		open: true,
	},
});
