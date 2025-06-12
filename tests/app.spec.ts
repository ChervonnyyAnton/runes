import { describe, it, expect } from "vitest";
import { runes } from "../src/runeData";

function getRandomRune(): (typeof runes)[number] {
	const index = Math.floor(Math.random() * runes.length);
	return runes[index];
}

describe("Rune App", () => {
	it("should return a rune from the list", () => {
		const rune = getRandomRune();
		expect(runes).toContainEqual(rune);
	});

	it("should have 24 unique runes", () => {
		const symbols = runes.map((r) => r.symbol);
		const unique = new Set(symbols);
		expect(unique.size).toBe(24);
	});

	it("all runes should have a name, symbol, transliteration, and description", () => {
		runes.forEach((rune) => {
			expect(rune.name).toBeTruthy();
			expect(rune.symbol).toBeTruthy();
			expect(rune.transliteration).toBeTruthy();
			expect(rune.description).toBeTruthy();
		});
	});

	it("reversed runes should have a reversedDescription if traditionally reversed", () => {
		runes.forEach((rune) => {
			if (!["Gebo", "Sowilo", "Ingwaz", "Dagaz"].includes(rune.name)) {
				expect(rune.reversedDescription).toBeTruthy();
			}
		});
	});

	it("upright and reversed meanings should be different when both exist", () => {
		runes.forEach((rune) => {
			if (rune.reversedDescription) {
				expect(rune.reversedDescription).not.toBe(rune.description);
			}
		});
	});
});
