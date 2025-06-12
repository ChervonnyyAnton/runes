import { runes, Rune } from "./runeData";

function getRandomRune(): { rune: Rune; orientation: "upright" | "reversed" } {
	const index = Math.floor(Math.random() * runes.length);
	const orientation = Math.random() < 0.5 ? "upright" : "reversed";
	return { rune: runes[index], orientation };
}

function showRune(rune: Rune, orientation: "upright" | "reversed"): void {
	const symbolElem = document.getElementById("rune-symbol") as HTMLElement;
	const nameElem = document.getElementById("rune-name") as HTMLElement;
	const descElem = document.getElementById("rune-desc") as HTMLElement;

	symbolElem.textContent = rune.symbol;
	symbolElem.setAttribute(
		"aria-label",
		`${rune.name} rune symbol, ${orientation}`
	);
	nameElem.textContent = `${rune.name} (${rune.transliteration}) - ${
		orientation.charAt(0).toUpperCase() + orientation.slice(1)
	}`;
	if (
		orientation === "reversed" &&
		rune.reversedDescription &&
		rune.reversedDescription.trim().length > 0
	) {
		descElem.textContent = rune.reversedDescription;
		symbolElem.style.transform = "rotate(180deg)";
	} else {
		descElem.textContent = rune.description;
		symbolElem.style.transform = "none";
	}
}

function clearRune(): void {
	(document.getElementById("rune-symbol") as HTMLElement).textContent = "";
	(document.getElementById("rune-symbol") as HTMLElement).style.transform =
		"none";
	(document.getElementById("rune-name") as HTMLElement).textContent = "";
	(document.getElementById("rune-desc") as HTMLElement).textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
	const drawBtn = document.getElementById("draw-btn") as HTMLButtonElement;
	drawBtn.addEventListener("click", () => {
		const { rune, orientation } = getRandomRune();
		showRune(rune, orientation);
		drawBtn.focus();
	});

	// Accessibility: clear rune on page load
	clearRune();

	// Keyboard: allow Enter/Space to trigger draw
	drawBtn.addEventListener("keydown", (e) => {
		if (e.key === "Enter" || e.key === " ") {
			e.preventDefault();
			drawBtn.click();
		}
	});
});
