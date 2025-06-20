import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		include: [
			"tests/**/*.{test,spec}.{js,ts,jsx,tsx}",
			"src/**/*.{test,spec}.{js,ts,jsx,tsx}",
		],
		environment: "jsdom",
	},
});
