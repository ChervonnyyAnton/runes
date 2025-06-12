export interface Rune {
	symbol: string;
	name: string;
	transliteration: string;
	description: string;
	reversedDescription?: string;
}

export const runes: readonly Rune[] = [
	{
		symbol: "ᚠ",
		name: "Fehu",
		transliteration: "F",
		description:
			"Fehu means 'cattle' and is the rune of wealth, abundance, and prosperity. In ancient societies, cattle represented mobile wealth and the ability to provide for family and community. Fehu signifies earned success, material gain, financial security, and new beginnings. It encourages responsible management of resources. In readings, it can indicate opportunity, growth, or prosperity.",
		reversedDescription:
			"Reversed: Loss of wealth, missed opportunities, instability, or poor management of resources. Can warn of greed, failure to share, or financial setbacks.",
	},
	{
		symbol: "ᚢ",
		name: "Uruz",
		transliteration: "U",
		description:
			"Uruz symbolizes the wild aurochs (an extinct species of wild ox) and represents raw physical strength, endurance, vitality, and health. It is a rune of primal energy, resilience, and untamed potential. Uruz encourages facing challenges with courage and determination, and often marks times of transformation or personal growth.",
		reversedDescription:
			"Reversed: Weakness, lack of motivation, missed opportunities for growth, or poor health. Can indicate resistance to change or feeling powerless.",
	},
	{
		symbol: "ᚦ",
		name: "Thurisaz",
		transliteration: "Th",
		description:
			"Thurisaz is the rune of the thorn and giants (Thurs). It embodies powerful forces of chaos, defense, and catharsis. Associated with Thor, it can represent both destructive and protective energies. Thurisaz signals a time to confront obstacles, defend boundaries, or undergo necessary upheaval for renewal. It cautions against impulsive reactions.",
		reversedDescription:
			"Reversed: Danger from within, defenselessness, recklessness, or being caught off guard. Can warn of self-destructive behavior or misdirected aggression.",
	},
	{
		symbol: "ᚨ",
		name: "Ansuz",
		transliteration: "A",
		description:
			"Ansuz is the rune of Odin, representing divine inspiration, communication, and wisdom. It is associated with the mouth, speech, and messages. Ansuz encourages clarity, understanding, and the pursuit of knowledge. In readings, it may signal important news, guidance from higher powers, or the need to listen and express oneself honestly.",
		reversedDescription:
			"Reversed: Miscommunication, misunderstanding, deception, or ignored advice. Can indicate confusion, manipulation, or a lack of clarity.",
	},
	{
		symbol: "ᚱ",
		name: "Raidho",
		transliteration: "R",
		description:
			"Raidho means 'ride' or 'journey' and is the rune of travel, movement, and life’s journey. It denotes progress, rhythm, and the right order of things. Raidho can signify physical journeys, spiritual quests, or the need to make decisions and stay true to one’s path. It reminds us to move forward with purpose and integrity.",
		reversedDescription:
			"Reversed: Disruption, delays, being off course, or lack of direction. Can warn of travel problems, poor planning, or not learning from experience.",
	},
	{
		symbol: "ᚲ",
		name: "Kenaz",
		transliteration: "K",
		description:
			"Kenaz is the torch, symbolizing illumination, knowledge, creativity, and transformation. It brings clarity, insight, and the spark of inspiration. Kenaz is a rune of learning, artistic pursuits, and problem-solving. It can also represent healing and the uncovering of hidden truths.",
		reversedDescription:
			"Reversed: Lack of creativity, confusion, ignorance, or loss of insight. Can indicate blocked energy, illness, or secrets remaining hidden.",
	},
	{
		symbol: "ᚷ",
		name: "Gebo",
		transliteration: "G",
		description:
			"Gebo means 'gift' and represents generosity, exchange, and partnership. It is the rune of balance, reciprocity, and harmonious relationships. Gebo encourages giving and receiving freely, symbolizing the interconnectedness of all things. It can also indicate contracts, alliances, or the need to maintain balance in relationships.",
		// Gebo is traditionally not reversed
	},
	{
		symbol: "ᚹ",
		name: "Wunjo",
		transliteration: "W",
		description:
			"Wunjo is the rune of joy, harmony, and fulfillment. It represents happiness, comfort, and the achievement of goals. Wunjo signifies a time of prosperity, well-being, and emotional satisfaction. It encourages gratitude and the recognition of one’s successes, both material and spiritual.",
		reversedDescription:
			"Reversed: Sorrow, alienation, disappointment, or disharmony. Can indicate blocked happiness, misunderstandings, or a need to address negativity.",
	},
	{
		symbol: "ᚺ",
		name: "Hagalaz",
		transliteration: "H",
		description:
			"Hagalaz means 'hail' and is the rune of disruption, natural forces, and sudden change. It represents trials, obstacles, and the destructive aspects of nature. Hagalaz often signals a period of crisis or upheaval that, while challenging, ultimately leads to growth and harmony once the storm has passed.",
		reversedDescription:
			"Reversed: Avoiding necessary change, stagnation, or being overwhelmed by chaos. Can indicate a refusal to face challenges or learn from experiences.",
	},
	{
		symbol: "ᚾ",
		name: "Naudhiz",
		transliteration: "N",
		description:
			"Naudhiz is the rune of need, necessity, and constraint. It represents restriction, endurance, and the challenges that force us to grow. Naudhiz teaches patience, self-reliance, and the ability to overcome hardship. In readings, it can indicate delays, resistance, or the need to address unmet needs.",
		reversedDescription:
			"Reversed: Excess, indulgence, or lack of discipline. Can indicate being overwhelmed by circumstances or failing to learn from past difficulties.",
	},
	{
		symbol: "ᛁ",
		name: "Isa",
		transliteration: "I",
		description:
			"Isa means 'ice' and symbolizes stillness, stasis, and introspection. It is the rune of clarity, focus, and waiting. Isa can indicate a period of pause, obstacles, or the need to slow down and reflect. It cautions against rushing forward and encourages patience and inner clarity.",
		reversedDescription:
			"Reversed: Melting ice, movement, or lack of focus. Can indicate confusion, lack of direction, or being swept away by emotions.",
	},
	{
		symbol: "ᛃ",
		name: "Jera",
		transliteration: "J",
		description:
			"Jera means 'year' and represents cycles, harvest, and the fruition of efforts. It is the rune of natural cycles, completion, and reward for hard work. Jera signifies positive outcomes, prosperity, and the right timing for change. It reminds us that growth follows the cycles of nature and patience is rewarded.",
		reversedDescription:
			"Reversed: Poor harvest, lack of rewards, or being out of sync with natural cycles. Can indicate impatience, frustration, or failure to learn from the past.",
	},
	{
		symbol: "ᛇ",
		name: "Eiwaz",
		transliteration: "EI",
		description:
			"Eiwaz is the yew tree, symbolizing endurance, transformation, and connection between worlds. It is associated with the world tree Yggdrasil and represents resilience, protection, and spiritual growth. Eiwaz can indicate transitions, the overcoming of obstacles, and the strength found in adaptability.",
		reversedDescription:
			"Reversed: Confusion, weakness, or fear of change. Can indicate resistance to transformation or feeling stuck between worlds.",
	},
	{
		symbol: "ᛈ",
		name: "Perthro",
		transliteration: "P",
		description:
			"Perthro is the dice cup or lot-cup, representing fate, mystery, and the unknown. It is the rune of secrets, chance, and hidden influences. Perthro encourages embracing uncertainty, intuition, and the unfolding of destiny. In readings, it may point to things yet to be revealed or the need to trust in the process.",
		reversedDescription:
			"Reversed: Bad luck, secrets revealed, or feeling out of control. Can indicate a refusal to accept fate or ignoring intuition.",
	},
	{
		symbol: "ᛉ",
		name: "Algiz",
		transliteration: "Z",
		description:
			"Algiz is the elk, symbolizing protection, defense, and higher self. It represents guardianship, instinct, and connection to the divine. Algiz is a powerful rune for shielding oneself and others, and for seeking spiritual guidance. It may also indicate the need to be alert and aware of one’s surroundings.",
		reversedDescription:
			"Reversed: Vulnerability, danger, or lack of protection. Can indicate ignoring warnings, poor boundaries, or spiritual disconnection.",
	},
	{
		symbol: "ᛊ",
		name: "Sowilo",
		transliteration: "S",
		description:
			"Sowilo means 'sun' and is the rune of success, vitality, and wholeness. It represents light, clarity, and the achievement of goals. Sowilo brings energy, health, and a sense of purpose. It is a rune of victory, honor, and the cleansing power of the sun.",
		// Sowilo is traditionally not reversed
	},
	{
		symbol: "ᛏ",
		name: "Tiwaz",
		transliteration: "T",
		description:
			"Tiwaz is the rune of the god Tyr, representing justice, honor, and leadership. It is associated with sacrifice, law, and the pursuit of truth. Tiwaz encourages courage, integrity, and the willingness to fight for what is right. In readings, it can signify legal matters, self-discipline, or the need to act with honor.",
		reversedDescription:
			"Reversed: Injustice, dishonor, or abuse of power. Can indicate legal problems, lack of accountability, or being misled by false ideals.",
	},
	{
		symbol: "ᛒ",
		name: "Berkano",
		transliteration: "B",
		description:
			"Berkano means 'birch' and is the rune of birth, renewal, and feminine energy. It symbolizes growth, healing, and nurturing. Berkano is associated with new beginnings, family, and fertility. It encourages care for oneself and others, and the gentle unfolding of potential.",
		reversedDescription:
			"Reversed: Barrenness, stagnation, or lack of growth. Can indicate neglecting one’s needs or potential, or being cut off from feminine energy.",
	},
	{
		symbol: "ᛖ",
		name: "Ehwaz",
		transliteration: "E",
		description:
			"Ehwaz means 'horse' and represents movement, progress, and partnership. It is the rune of trust, cooperation, and harmonious relationships. Ehwaz encourages adaptability, teamwork, and the journey towards new horizons. It may also signify travel or changes in one’s life path.",
		reversedDescription:
			"Reversed: Lack of progress, broken partnerships, or resistance to change. Can indicate being stuck, uncooperative, or facing travel delays.",
	},
	{
		symbol: "ᛗ",
		name: "Mannaz",
		transliteration: "M",
		description:
			"Mannaz is the rune of humanity, self, and community. It symbolizes the interconnectedness of people, cooperation, and shared goals. Mannaz encourages self-awareness, mutual support, and the realization of one’s potential within a group. It can also indicate the importance of relationships and social bonds.",
		reversedDescription:
			"Reversed: Isolation, self-doubt, or lack of support. Can indicate feeling alienated, misunderstood, or struggling with self-identity.",
	},
	{
		symbol: "ᛚ",
		name: "Laguz",
		transliteration: "L",
		description:
			"Laguz means 'water' and is the rune of intuition, emotion, and the unconscious. It represents flow, adaptability, and the mysteries of the deep. Laguz encourages trust in intuition, emotional healing, and going with the flow of life. It may also signal the need to address hidden feelings or subconscious patterns.",
		reversedDescription:
			"Reversed: Emotional blockages, confusion, or being overwhelmed. Can indicate ignoring intuition, fear of the unknown, or emotional instability.",
	},
	{
		symbol: "ᛜ",
		name: "Ingwaz",
		transliteration: "NG",
		description:
			"Ingwaz is the rune of the god Ing, symbolizing fertility, potential, and inner growth. It represents gestation, peace, and the completion of cycles. Ingwaz is associated with family, harmony, and the nurturing of new ideas or projects. It often marks a time of rest before new beginnings.",
		// Ingwaz is traditionally not reversed
	},
	{
		symbol: "ᛞ",
		name: "Dagaz",
		transliteration: "D",
		description:
			"Dagaz means 'day' and is the rune of breakthrough, transformation, and awakening. It represents hope, clarity, and the balance between opposites (night and day). Dagaz signifies new perspectives, enlightenment, and the successful resolution of difficulties. It marks the dawn after darkness.",
		// Dagaz is traditionally not reversed
	},
	{
		symbol: "ᛟ",
		name: "Othala",
		transliteration: "O",
		description:
			"Othala means 'heritage' or 'ancestral land' and is the rune of inheritance, tradition, and home. It represents family, roots, and the passing down of wisdom. Othala encourages honoring one’s heritage, maintaining boundaries, and preserving what is valuable. In readings, it can signify property, legacy, or spiritual inheritance.",
		reversedDescription:
			"Reversed: Loss of inheritance, family disputes, or feeling rootless. Can indicate issues with boundaries, tradition, or letting go of the past.",
	},
];
