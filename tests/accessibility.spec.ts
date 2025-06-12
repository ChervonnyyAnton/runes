import { describe, it, expect } from "vitest";
import { axe } from "jest-axe";
import { readFile } from "fs/promises";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

describe("Accessibility", () => {
	it("index.html should have no accessibility violations", async () => {
		const html = await readFile(
			resolve(__dirname, "../src/index.html"),
			"utf8"
		);
		const container = document.createElement("div");
		container.innerHTML = html;
		const results = await axe(container);
		if (results.violations.length > 0) {
			// Print details for debugging
			console.log(
				"Accessibility Violations:",
				JSON.stringify(results.violations, null, 2)
			);
		}
		expect(results.violations.length).toBe(0);
	});
});
