import { runes, Rune } from "./runeData";

type Lang = "en" | "de" | "ru";
let currentLang: Lang = (localStorage.getItem("runeLang") as Lang) || "en";

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
		`${rune.name[currentLang]} rune symbol, ${orientation}`
	);
	nameElem.textContent = `${rune.name[currentLang]} (${
		rune.transliteration
	}) - ${orientation.charAt(0).toUpperCase() + orientation.slice(1)}`;

	if (orientation === "reversed") {
		if (
			rune.reversedDescription?.[currentLang] &&
			rune.reversedDescription[currentLang].trim().length > 0
		) {
			descElem.textContent = rune.reversedDescription[currentLang];
			symbolElem.style.transform = "rotate(180deg)";
		} else {
			// No reversed meaning for this rune
			descElem.textContent =
				{
					en: "This rune traditionally has no reversed meaning. Its interpretation remains the same.",
					de: "Diese Rune hat traditionell keine umgekehrte Bedeutung. Ihre Interpretation bleibt gleich.",
					ru: "У этой руны традиционно нет перевёрнутого значения. Толкование остаётся тем же.",
				}[currentLang] +
				"\n" +
				rune.description[currentLang];
			symbolElem.style.transform = "rotate(180deg)";
		}
	} else {
		descElem.textContent = rune.description[currentLang];
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

function updateUIText() {
	const appTitle = document.getElementById("app-title");
	const drawBtn = document.getElementById("draw-btn");
	const drawDesc = document.getElementById("draw-desc");
	if (appTitle) {
		appTitle.textContent = {
			en: "Elder Futhark Rune Revealer",
			de: "Elder Futhark Runen-Offenbarer",
			ru: "Гадание на рунах Футарк",
		}[currentLang];
	}
	if (drawBtn) {
		drawBtn.textContent = {
			en: "Draw Rune",
			de: "Rune ziehen",
			ru: "Вытянуть руну",
		}[currentLang];
		drawBtn.setAttribute("aria-label", drawBtn.textContent || "");
	}
	if (drawDesc) {
		drawDesc.textContent = {
			en: "Press to reveal a random Elder Futhark rune and its meaning. Result is announced for screen readers.",
			de: "Drücken Sie, um eine zufällige Elder Futhark Rune und ihre Bedeutung zu enthüllen. Das Ergebnis wird für Screenreader angesagt.",
			ru: "Нажмите, чтобы узнать случайную руну Футарк и её значение. Результат будет озвучен для экранных читалок.",
		}[currentLang];
	}
}

function createShareModal() {
	if (document.getElementById("share-modal")) return;
	const modal = document.createElement("div");
	modal.id = "share-modal";
	modal.innerHTML = `
		<div class="modal-backdrop"></div>
		<div class="modal-content">
			<p id="share-modal-text" style="white-space: pre-line;"></p>
			<button id="close-share-modal" type="button">Close</button>
		</div>
	`;
	modal.style.position = "fixed";
	modal.style.top = "0";
	modal.style.left = "0";
	modal.style.width = "100vw";
	modal.style.height = "100vh";
	modal.style.zIndex = "9999";
	modal.style.display = "flex";
	modal.style.alignItems = "center";
	modal.style.justifyContent = "center";
	const backdrop = modal.querySelector(".modal-backdrop");
	if (backdrop) {
		backdrop.setAttribute(
			"style",
			"position:absolute;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,0.5);"
		);
	}
	const content = modal.querySelector(".modal-content");
	if (content) {
		content.setAttribute(
			"style",
			"position:relative;background:#232634;color:#f8f8f2;padding:1.5rem 1rem;border-radius:12px;max-width:90vw;max-height:80vh;overflow:auto;box-shadow:0 2px 16px rgba(0,0,0,0.18);"
		);
	}
	document.body.appendChild(modal);
	const closeBtn = document.getElementById("close-share-modal");
	if (closeBtn) {
		closeBtn.addEventListener("click", () => {
			modal.remove();
		});
	}
	modal.addEventListener("click", (e) => {
		if (
			e.target === modal ||
			(e.target instanceof Element &&
				e.target.classList.contains("modal-backdrop"))
		) {
			modal.remove();
		}
	});
}

function getReversedText(rune: Rune, lang: Lang): string {
	if (
		rune.reversedDescription?.[lang] &&
		rune.reversedDescription[lang].trim().length > 0
	) {
		return rune.reversedDescription[lang];
	}
	return (
		{
			en: "This rune traditionally has no reversed meaning. Its interpretation remains the same.",
			de: "Diese Rune hat traditionell keine umgekehrte Bedeutung. Ihre Interpretation bleibt gleich.",
			ru: "У этой руны традиционно нет перевёрнутого значения. Толкование остаётся тем же.",
		}[lang] +
		"\n" +
		rune.description[lang]
	);
}

function updateShareModal(text: string) {
	createShareModal();
	const modalText = document.getElementById("share-modal-text");
	if (modalText) {
		modalText.textContent = text;
	}
}

document.addEventListener("DOMContentLoaded", () => {
	const drawBtn = document.getElementById("draw-btn") as HTMLButtonElement;
	const shareBtn = document.getElementById("share-btn") as HTMLButtonElement;
	const langBtns = [
		document.getElementById("lang-en") as HTMLButtonElement,
		document.getElementById("lang-de") as HTMLButtonElement,
		document.getElementById("lang-ru") as HTMLButtonElement,
	];

	let lastRune: Rune | null = null;
	let lastOrientation: "upright" | "reversed" = "upright";

	langBtns.forEach((btn) => {
		btn.addEventListener("click", () => {
			const lang = btn.id.replace("lang-", "") as "en" | "de" | "ru";
			currentLang = lang;
			localStorage.setItem("runeLang", currentLang);
			updateUIText();
			clearRune();
			langBtns.forEach((b) => b.classList.remove("active"));
			btn.classList.add("active");
		});
	});
	// Set initial active state
	langBtns.forEach((btn) => {
		const lang = btn.id.replace("lang-", "");
		if (lang === currentLang) btn.classList.add("active");
		else btn.classList.remove("active");
	});

	drawBtn.addEventListener("click", () => {
		const { rune, orientation } = getRandomRune();
		showRune(rune, orientation);
		const runeResult = document.getElementById("rune-result");
		if (runeResult) {
			runeResult.classList.remove("fade-in");
			// Force reflow to restart animation
			// eslint-disable-next-line @typescript-eslint/no-unused-expressions
			runeResult.offsetWidth;
			runeResult.classList.add("fade-in");
		}
		lastRune = rune;
		lastOrientation = orientation;
		drawBtn.focus();
	});

	if (shareBtn) {
		shareBtn.addEventListener("click", async () => {
			if (!lastRune) return;
			const reversedText =
				lastOrientation === "reversed"
					? getReversedText(lastRune, currentLang)
					: "";
			const runeText =
				`${lastRune.symbol} ${lastRune.name[currentLang]} (${lastRune.transliteration})\n` +
				(lastOrientation === "reversed"
					? reversedText
					: lastRune.description[currentLang]);

			async function copyToClipboard(text: string) {
				try {
					await navigator.clipboard.writeText(text);
					shareBtn.textContent = "Copied!";
					setTimeout(() => {
						shareBtn.textContent = "📋 Copy/Share";
					}, 1200);
				} catch (err) {
					updateShareModal(text + "\n\n(Copy manually if needed)");
				}
			}

			if (navigator.share) {
				try {
					await navigator.share({ text: runeText });
				} catch (e: unknown) {
					// Show error and fallback
					await copyToClipboard(runeText);
					if (
						typeof e === "object" &&
						e !== null &&
						"name" in e &&
						(e as { name?: string }).name !== "AbortError"
					) {
						updateShareModal(
							runeText +
								"\n\n(Sharing is not supported or was cancelled. Copy manually if needed.)"
						);
					}
				}
			} else {
				await copyToClipboard(runeText);
			}
		});
	}

	// Accessibility: clear rune on page load
	clearRune();
	updateUIText();

	// Keyboard: allow Enter/Space to trigger draw
	drawBtn.addEventListener("keydown", (e) => {
		if (e.key === "Enter" || e.key === " ") {
			e.preventDefault();
			drawBtn.click();
		}
	});
});
