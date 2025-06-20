export interface Rune {
	symbol: string;
	transliteration: string;
	name: {
		en: string;
		de: string;
		ru: string;
	};
	description: {
		en: string;
		de: string;
		ru: string;
	};
	reversedDescription?: {
		en: string;
		de: string;
		ru: string;
	};
}

export const runes: readonly Rune[] = [
	{
		symbol: "ᚠ",
		transliteration: "F",
		name: {
			en: "Fehu",
			de: "Fehu",
			ru: "Феху",
		},
		description: {
			en: "Fehu means 'cattle' and is the rune of wealth, abundance, and prosperity. In ancient societies, cattle represented mobile wealth and the ability to provide for family and community. Fehu signifies earned success, material gain, financial security, and new beginnings. It encourages responsible management of resources. In readings, it can indicate opportunity, growth, or prosperity.",
			de: "Fehu bedeutet 'Vieh' und ist die Rune des Reichtums, des Überflusses und des Wohlstands. In alten Gesellschaften stand Vieh für beweglichen Besitz und die Fähigkeit, für Familie und Gemeinschaft zu sorgen. Fehu steht für verdienten Erfolg, materiellen Gewinn, finanzielle Sicherheit und Neuanfänge. Sie ermutigt zu verantwortungsvollem Umgang mit Ressourcen. In Lesungen kann sie auf Chancen, Wachstum oder Wohlstand hinweisen.",
			ru: "Феху означает 'скот' и является руной богатства, изобилия и процветания. В древних обществах скот символизировал движимое богатство и способность обеспечивать семью и общину. Феху означает заслуженный успех, материальную прибыль, финансовую стабильность и новые начинания. Она призывает к ответственному управлению ресурсами. В гаданиях может указывать на возможности, рост или процветание.",
		},
		reversedDescription: {
			en: "Reversed: Loss of wealth, missed opportunities, instability, or poor management of resources. Can warn of greed, failure to share, or financial setbacks.",
			de: "Umgekehrt: Verlust von Reichtum, verpasste Chancen, Instabilität oder schlechter Umgang mit Ressourcen. Kann vor Gier, mangelnder Bereitschaft zu teilen oder finanziellen Rückschlägen warnen.",
			ru: "Перевернутая: Потеря богатства, упущенные возможности, нестабильность или плохое управление ресурсами. Может предупреждать о жадности, отказе делиться или финансовых неудачах.",
		},
	},
	{
		symbol: "ᚢ",
		transliteration: "U",
		name: {
			en: "Uruz",
			de: "Uruz",
			ru: "Уруз",
		},
		description: {
			en: "Uruz symbolizes the wild aurochs (an extinct species of wild ox) and represents raw physical strength, endurance, vitality, and health. It is a rune of primal energy, resilience, and untamed potential. Uruz encourages facing challenges with courage and determination, and often marks times of transformation or personal growth.",
			de: "Uruz symbolisiert den wilden Auerochsen (eine ausgestorbene Wildrindart) und steht für rohe körperliche Stärke, Ausdauer, Vitalität und Gesundheit. Es ist die Rune der Urkraft, Widerstandsfähigkeit und ungezähmten Potenzials. Uruz ermutigt dazu, Herausforderungen mit Mut und Entschlossenheit zu begegnen und markiert oft Zeiten der Transformation oder des persönlichen Wachstums.",
			ru: "Уруз символизирует дикого тура (вымерший вид дикого быка) и олицетворяет физическую силу, выносливость, жизненную энергию и здоровье. Это руна первозданной энергии, стойкости и нераскрытого потенциала. Уруз призывает с мужеством и решимостью встречать трудности и часто указывает на периоды трансформации или личностного роста.",
		},
		reversedDescription: {
			en: "Reversed: Weakness, lack of motivation, missed opportunities for growth, or poor health. Can indicate resistance to change or feeling powerless.",
			de: "Umgekehrt: Schwäche, fehlende Motivation, verpasste Wachstumschancen oder schlechte Gesundheit. Kann auf Widerstand gegen Veränderungen oder ein Gefühl der Machtlosigkeit hinweisen.",
			ru: "Перевернутая: Слабость, отсутствие мотивации, упущенные возможности для роста или плохое здоровье. Может указывать на сопротивление переменам или ощущение бессилия.",
		},
	},
	{
		symbol: "ᚦ",
		transliteration: "Th",
		name: {
			en: "Thurisaz",
			de: "Thurisaz",
			ru: "Турисаз",
		},
		description: {
			en: "Thurisaz is the rune of the thorn and giants (Thurs). It embodies powerful forces of chaos, defense, and catharsis. Associated with Thor, it can represent both destructive and protective energies. Thurisaz signals a time to confront obstacles, defend boundaries, or undergo necessary upheaval for renewal. It cautions against impulsive reactions.",
			de: "Thurisaz ist die Rune des Dorns und der Riesen (Thurs). Sie verkörpert mächtige Kräfte des Chaos, der Verteidigung und der Katharsis. Mit Thor assoziiert, kann sie sowohl zerstörerische als auch schützende Energien repräsentieren. Thurisaz signalisiert eine Zeit, Hindernisse zu überwinden, Grenzen zu verteidigen oder notwendige Umwälzungen zur Erneuerung zu durchlaufen. Sie warnt vor impulsiven Reaktionen.",
			ru: "Турисаз — руна шипа и великанов (турсов). Она воплощает мощные силы хаоса, защиты и очищения. Связана с Тором, может означать как разрушительные, так и защитные энергии. Турисаз указывает на время преодоления препятствий, защиты границ или необходимости перемен для обновления. Предостерегает от импульсивных поступков.",
		},
		reversedDescription: {
			en: "Reversed: Danger from within, defenselessness, recklessness, or being caught off guard. Can warn of self-destructive behavior or misdirected aggression.",
			de: "Umgekehrt: Gefahr von innen, Wehrlosigkeit, Leichtsinn oder Überrumpelung. Kann vor selbstzerstörerischem Verhalten oder fehlgeleiteter Aggression warnen.",
			ru: "Перевернутая: Опасность изнутри, беззащитность, безрассудство или внезапность. Может предупреждать о саморазрушительном поведении или ошибочной агрессии.",
		},
	},
	{
		symbol: "ᚨ",
		transliteration: "A",
		name: {
			en: "Ansuz",
			de: "Ansuz",
			ru: "Ансуз",
		},
		description: {
			en: "Ansuz is the rune of Odin, representing divine inspiration, communication, and wisdom. It is associated with the mouth, speech, and messages. Ansuz encourages clarity, understanding, and the pursuit of knowledge. In readings, it may signal important news, guidance from higher powers, or the need to listen and express oneself honestly.",
			de: "Ansuz ist die Rune Odins und steht für göttliche Inspiration, Kommunikation und Weisheit. Sie ist mit Mund, Sprache und Botschaften verbunden. Ansuz fördert Klarheit, Verständnis und das Streben nach Wissen. In Lesungen kann sie auf wichtige Nachrichten, Führung durch höhere Mächte oder die Notwendigkeit hinweisen, zuzuhören und sich ehrlich auszudrücken.",
			ru: "Ансуз — руна Одина, символизирует божественное вдохновение, общение и мудрость. Связана с речью, устами и посланиями. Ансуз способствует ясности, пониманию и стремлению к знаниям. В гаданиях может указывать на важные новости, руководство высших сил или необходимость слушать и выражать себя честно.",
		},
		reversedDescription: {
			en: "Reversed: Miscommunication, misunderstanding, deception, or ignored advice. Can indicate confusion, manipulation, or a lack of clarity.",
			de: "Umgekehrt: Missverständnisse, Täuschung, ignorierte Ratschläge oder Kommunikationsprobleme. Kann auf Verwirrung, Manipulation oder fehlende Klarheit hinweisen.",
			ru: "Перевернутая: Недопонимание, обман, игнорирование советов или проблемы с коммуникацией. Может указывать на путаницу, манипуляции или отсутствие ясности.",
		},
	},
	{
		symbol: "ᚱ",
		transliteration: "R",
		name: {
			en: "Raidho",
			de: "Raidho",
			ru: "Райдо",
		},
		description: {
			en: "Raidho means 'ride' or 'journey' and is the rune of travel, movement, and life’s journey. It denotes progress, rhythm, and the right order of things. Raidho can signify physical journeys, spiritual quests, or the need to make decisions and stay true to one’s path. It reminds us to move forward with purpose and integrity.",
			de: "Raidho bedeutet 'Reise' oder 'Fahrt' und ist die Rune des Reisens, der Bewegung und des Lebenswegs. Sie steht für Fortschritt, Rhythmus und die richtige Ordnung der Dinge. Raidho kann auf physische Reisen, spirituelle Quests oder die Notwendigkeit hinweisen, Entscheidungen zu treffen und dem eigenen Weg treu zu bleiben. Sie erinnert daran, mit Zielstrebigkeit und Integrität voranzugehen.",
			ru: "Райдо означает 'поездка' или 'путешествие' и является руной движения, пути и жизненного путешествия. Она обозначает прогресс, ритм и правильный порядок вещей. Райдо может указывать на физические поездки, духовные поиски или необходимость принимать решения и оставаться верным своему пути. Напоминает двигаться вперёд с целью и честью.",
		},
		reversedDescription: {
			en: "Reversed: Disruption, delays, being off course, or lack of direction. Can warn of travel problems, poor planning, or not learning from experience.",
			de: "Umgekehrt: Störungen, Verzögerungen, vom Kurs abkommen oder fehlende Richtung. Kann auf Reiseprobleme, schlechte Planung oder mangelndes Lernen aus Erfahrungen hinweisen.",
			ru: "Перевернутая: Нарушения, задержки, сбитый курс или отсутствие направления. Может предупреждать о проблемах в пути, плохом планировании или нежелании учиться на опыте.",
		},
	},
	{
		symbol: "ᚲ",
		transliteration: "K",
		name: {
			en: "Kenaz",
			de: "Kenaz",
			ru: "Кеназ",
		},
		description: {
			en: "Kenaz is the torch, symbolizing illumination, knowledge, creativity, and transformation. It brings clarity, insight, and the spark of inspiration. Kenaz is a rune of learning, artistic pursuits, and problem-solving. It can also represent healing and the uncovering of hidden truths.",
			de: "Kenaz ist die Fackel und symbolisiert Erleuchtung, Wissen, Kreativität und Transformation. Sie bringt Klarheit, Einsicht und den Funken der Inspiration. Kenaz ist die Rune des Lernens, der künstlerischen Bestrebungen und der Problemlösung. Sie kann auch Heilung und das Aufdecken verborgener Wahrheiten darstellen.",
			ru: "Кеназ — это факел, символизирующий просветление, знание, творчество и преобразование. Она приносит ясность, понимание и искру вдохновения. Кеназ — руна учёбы, искусства и решения проблем. Может также означать исцеление и раскрытие скрытых истин.",
		},
		reversedDescription: {
			en: "Reversed: Lack of creativity, confusion, ignorance, or loss of insight. Can indicate blocked energy, illness, or secrets remaining hidden.",
			de: "Umgekehrt: Mangel an Kreativität, Verwirrung, Unwissenheit oder Verlust von Einsicht. Kann auf blockierte Energie, Krankheit oder verborgene Geheimnisse hinweisen.",
			ru: "Перевернутая: Отсутствие творчества, путаница, невежество или потеря понимания. Может указывать на блокировку энергии, болезнь или скрытые тайны.",
		},
	},
	{
		symbol: "ᚷ",
		transliteration: "G",
		name: {
			en: "Gebo",
			de: "Gebo",
			ru: "Гебо",
		},
		description: {
			en: "Gebo means 'gift' and represents generosity, exchange, and partnership. It is the rune of balance, reciprocity, and harmonious relationships. Gebo encourages giving and receiving freely, symbolizing the interconnectedness of all things. It can also indicate contracts, alliances, or the need to maintain balance in relationships.",
			de: "Gebo bedeutet 'Geschenk' und steht für Großzügigkeit, Austausch und Partnerschaft. Sie ist die Rune des Gleichgewichts, der Gegenseitigkeit und harmonischer Beziehungen. Gebo ermutigt dazu, frei zu geben und zu empfangen und symbolisiert die Verbundenheit aller Dinge. Sie kann auch auf Verträge, Allianzen oder die Notwendigkeit hinweisen, das Gleichgewicht in Beziehungen zu wahren.",
			ru: "Гебо означает 'дар' и символизирует щедрость, обмен и партнёрство. Это руна баланса, взаимности и гармоничных отношений. Гебо призывает свободно давать и получать, символизируя взаимосвязь всего сущего. Может также указывать на договоры, союзы или необходимость поддерживать баланс в отношениях.",
		},
		reversedDescription: {
			en: "",
			de: "",
			ru: "",
		},
	},
	{
		symbol: "ᚹ",
		transliteration: "W",
		name: {
			en: "Wunjo",
			de: "Wunjo",
			ru: "Вуньо",
		},
		description: {
			en: "Wunjo is the rune of joy, harmony, and fulfillment. It represents happiness, comfort, and the achievement of goals. Wunjo signifies a time of prosperity, well-being, and emotional satisfaction. It encourages gratitude and the recognition of one’s successes, both material and spiritual.",
			de: "Wunjo ist die Rune der Freude, Harmonie und Erfüllung. Sie steht für Glück, Geborgenheit und das Erreichen von Zielen. Wunjo signalisiert eine Zeit des Wohlstands, des Wohlbefindens und der emotionalen Zufriedenheit. Sie ermutigt zu Dankbarkeit und zur Anerkennung eigener Erfolge, sowohl materiell als auch spirituell.",
			ru: "Вуньо — руна радости, гармонии и удовлетворения. Она символизирует счастье, комфорт и достижение целей. Вуньо указывает на время процветания, благополучия и эмоционального удовлетворения. Призывает к благодарности и признанию своих успехов, как материальных, так и духовных.",
		},
		reversedDescription: {
			en: "Reversed: Sorrow, alienation, disappointment, or disharmony. Can indicate blocked happiness, misunderstandings, or a need to address negativity.",
			de: "Umgekehrt: Kummer, Entfremdung, Enttäuschung oder Disharmonie. Kann auf blockiertes Glück, Missverständnisse oder die Notwendigkeit hinweisen, Negativität zu begegnen.",
			ru: "Перевернутая: Печаль, отчуждение, разочарование или дисгармония. Может указывать на блокировку счастья, недоразумения или необходимость справиться с негативом.",
		},
	},
	{
		symbol: "ᚺ",
		transliteration: "H",
		name: {
			en: "Hagalaz",
			de: "Hagalaz",
			ru: "Хагалаз",
		},
		description: {
			en: "Hagalaz means 'hail' and is the rune of disruption, natural forces, and sudden change. It represents trials, obstacles, and the destructive aspects of nature. Hagalaz often signals a period of crisis or upheaval that, while challenging, ultimately leads to growth and harmony once the storm has passed.",
			de: "Hagalaz bedeutet 'Hagel' и ist die Rune der Zerstörung, der Naturgewalten и plötzlicher Veränderungen. Sie steht für Prüfungen, Hindernisse и die zerstörerischen Aspekte der Natur. Hagalaz signalisiert oft eine Zeit der Krise oder Umwälzung, die zwar herausfordernd ist, aber letztlich zu Wachstum und Harmonie führt, sobald der Sturm vorüber ist.",
			ru: "Хагалаз означает 'град' и является руной разрушения, природных сил и внезапных перемен. Она символизирует испытания, препятствия и разрушительные стороны природы. Хагалаз часто указывает на период кризиса или потрясений, который, несмотря на трудности, в итоге ведёт к росту и гармонии после бури.",
		},
		reversedDescription: {
			en: "Reversed: Avoiding necessary change, stagnation, or being overwhelmed by chaos. Can indicate a refusal to face challenges or learn from experiences.",
			de: "Umgekehrt: Notwendige Veränderungen vermeiden, Stagnation oder Überforderung durch Chaos. Kann auf die Weigerung hinweisen, sich Herausforderungen zu stellen oder aus Erfahrungen zu lernen.",
			ru: "Перевернутая: Избегание необходимых перемен, застой или подавленность хаосом. Может указывать на отказ сталкиваться с трудностями или учиться на опыте.",
		},
	},
	{
		symbol: "ᚾ",
		transliteration: "N",
		name: {
			en: "Naudhiz",
			de: "Naudhiz",
			ru: "Наутиз",
		},
		description: {
			en: "Naudhiz is the rune of need, necessity, and constraint. It represents restriction, endurance, and the challenges that force us to grow. Naudhiz teaches patience, self-reliance, and the ability to overcome hardship. In readings, it can indicate delays, resistance, or the need to address unmet needs.",
			de: "Naudhiz ist die Rune der Not, des Mangels и der Einschränkung. Sie steht für Begrenzung, Ausdauer и die Herausforderungen, die uns zum Wachsen zwingen. Naudhiz lehrt Geduld, Selbstvertrauen и die Fähigkeit, Schwierigkeiten zu überwinden. In Lesungen kann sie auf Verzögerungen, Widerstand или die Notwendigkeit hinweisen, unerfüllte Bedürfnisse anzugehen.",
			ru: "Наутиз — руна нужды, необходимости и ограничений. Она символизирует сдержанность, выносливость и испытания, которые заставляют нас расти. Наутиз учит терпению, самостоятельности и способности преодолевать трудности. В гаданиях может указывать на задержки, сопротивление или необходимость удовлетворить неудовлетворённые потребности.",
		},
		reversedDescription: {
			en: "Reversed: Excess, indulgence, or lack of discipline. Can indicate being overwhelmed by circumstances or failing to learn from past difficulties.",
			de: "Umgekehrt: Übermaß, Nachgiebigkeit oder Mangel an Disziplin. Kann auf Überforderung durch Umstände oder das Versäumnis hinweisen, aus vergangenen Schwierigkeiten zu lernen.",
			ru: "Перевернутая: Избыток, потакание или отсутствие дисциплины. Может указывать на подавленность обстоятельствами или неспособность учиться на прошлых трудностях.",
		},
	},
	{
		symbol: "ᛁ",
		transliteration: "I",
		name: {
			en: "Isa",
			de: "Isa",
			ru: "Иса",
		},
		description: {
			en: "Isa means 'ice' and symbolizes stillness, stasis, and introspection. It is the rune of clarity, focus, and waiting. Isa can indicate a period of pause, obstacles, or the need to slow down and reflect. It cautions against rushing forward and encourages patience and inner clarity.",
			de: "Isa bedeutet 'Eis' und symbolisiert Stillstand, Starre и Innenschau. Sie ist die Rune der Klarheit, des Fokus и des Wartens. Isa kann auf eine Phase der Pause, Hindernisse или die Notwendigkeit hinweisen, langsamer zu werden и zu reflektieren. Sie warnt davor, voreilig voranzuschreiten, und ermutigt zu Geduld und innerer Klarheit.",
			ru: "Иса означает 'лёд' и символизирует неподвижность, застой и самоанализ. Это руна ясности, сосредоточенности и ожидания. Иса может указывать на период паузы, препятствия или необходимость замедлиться и поразмышлять. Она предостерегает от поспешности и призывает к терпению и внутренней ясности.",
		},
		reversedDescription: {
			en: "Reversed: Melting ice, movement, or lack of focus. Can indicate confusion, lack of direction, or being swept away by emotions.",
			de: "Umgekehrt: Schmelzendes Eis, Bewegung oder fehlender Fokus. Kann auf Verwirrung, Ziellosigkeit oder das Überwältigtsein von Emotionen hinweisen.",
			ru: "Перевернутая: Таяние льда, движение или отсутствие сосредоточенности. Может указывать на путаницу, отсутствие направления или захваченность эмоциями.",
		},
	},
	{
		symbol: "ᛃ",
		transliteration: "J",
		name: {
			en: "Jera",
			de: "Jera",
			ru: "Йера",
		},
		description: {
			en: "Jera means 'year' and represents cycles, harvest, and the fruition of efforts. It is the rune of natural cycles, completion, and reward for hard work. Jera signifies positive outcomes, prosperity, and the right timing for change. It reminds us that growth follows the cycles of nature and patience is rewarded.",
			de: "Jera bedeutet 'Jahr' und steht für Zyklen, Ernte и die Früchte der Arbeit. Sie ist die Rune der natürlichen Zyklen, des Abschlusses и der Belohnung für harte Arbeit. Jera steht für positive Ergebnisse, Wohlstand и den richtigen Zeitpunkt für Veränderungen. Sie erinnert daran, dass Wachstum den Zyklen der природы folgt и Geduld belohnt wird.",
			ru: "Йера означает 'год' и символизирует циклы, урожай и плоды усилий. Это руна природных циклов, завершения и награды за труд. Йера означает положительные результаты, процветание и правильное время для перемен. Напоминает, что рост следует за циклами природы, а терпение вознаграждается.",
		},
		reversedDescription: {
			en: "Reversed: Poor harvest, lack of rewards, or being out of sync with natural cycles. Can indicate impatience, frustration, or failure to learn from the past.",
			de: "Umgekehrt: Schlechte Ernte, fehlende Belohnung oder aus dem Rhythmus der natürlichen Zyklen geraten. Kann auf Ungeduld, Frustration oder das Versäumnis hinweisen, aus der Vergangenheit zu lernen.",
			ru: "Перевернутая: Плохой урожай, отсутствие награды или несоответствие природным циклам. Может указывать на нетерпение, разочарование или неспособность учиться на прошлом.",
		},
	},
	{
		symbol: "ᛇ",
		transliteration: "EI",
		name: {
			en: "Eiwaz",
			de: "Eiwaz",
			ru: "Эйваз",
		},
		description: {
			en: "Eiwaz is the yew tree, symbolizing endurance, transformation, and connection between worlds. It is associated with the world tree Yggdrasil and represents resilience, protection, and spiritual growth. Eiwaz can indicate transitions, the overcoming of obstacles, and the strength found in adaptability.",
			de: "Eiwaz ist die Rune der Eibe и symbolisiert Ausdauer, Transformation und die Verbindung zwischen den Welten. Sie ist mit dem Weltenbaum Yggdrasil verbunden und steht für Widerstandsfähigkeit, Schutz und spirituelles Wachstum. Eiwaz kann auf Übergänge, das Überwinden von Hindernissen und die Kraft der Anpassungsfähigkeit hinweisen.",
			ru: "Эйваз — руна тиса, символизирует выносливость, трансформацию и связь между мирами. Связана с мировым деревом Иггдрасиль и означает стойкость, защиту и духовный рост. Эйваз может указывать на переходы, преодоление препятствий и силу, найденную в гибкости.",
		},
		reversedDescription: {
			en: "Reversed: Confusion, weakness, or fear of change. Can indicate resistance to transformation or feeling stuck between worlds.",
			de: "Umgekehrt: Verwirrung, Schwäche или Angst vor Veränderung. Kann auf Widerstand gegen Transformation oder das Gefühl, zwischen den Welten festzustecken, hinweisen.",
			ru: "Перевернутая: Замешательство, слабость или страх перемен. Может указывать на сопротивление трансформации или ощущение застревания между мирами.",
		},
	},
	{
		symbol: "ᛈ",
		transliteration: "P",
		name: {
			en: "Perthro",
			de: "Perthro",
			ru: "Пертро",
		},
		description: {
			en: "Perthro is the dice cup or lot-cup, representing fate, mystery, and the unknown. It is the rune of secrets, chance, and hidden influences. Perthro encourages embracing uncertainty, intuition, and the unfolding of destiny. In readings, it may point to things yet to be revealed or the need to trust in the process.",
			de: "Perthro ist der Würfelbecher и steht für Schicksal, Geheimnisse и das Unbekannte. Sie ist die Rune des Zufalls, der verborgenen Einflüsse и der Intuition. Perthro ermutigt dazu, Unsicherheit zuzulassen, auf die Intuition zu vertrauen и dem Schicksal seinen Lauf zu lassen. In Lesungen kann sie auf noch verborgene Dinge oder die Notwendigkeit hinweisen, dem Prozess zu vertrauen.",
			ru: "Пертро — руна жребия, судьбы и тайны. Она символизирует секреты, случай и скрытые влияния. Пертро призывает принять неопределённость, доверять интуиции и разворачиванию судьбы. В гаданиях может указывать на то, что ещё не раскрыто, или на необходимость довериться процессу.",
		},
		reversedDescription: {
			en: "Reversed: Bad luck, secrets revealed, or feeling out of control. Can indicate a refusal to accept fate or ignoring intuition.",
			de: "Umgekehrt: Pech, aufgedeckte Geheimnisse oder Kontrollverlust. Kann auf die Weigerung hinweisen, das Schicksal zu akzeptieren oder die Intuition zu ignorieren.",
			ru: "Перевернутая: Неудача, раскрытие секретов или ощущение потери контроля. Может указывать на отказ принять судьбу или игнорирование интуиции.",
		},
	},
	{
		symbol: "ᛉ",
		transliteration: "Z",
		name: {
			en: "Algiz",
			de: "Algiz",
			ru: "Альгиз",
		},
		description: {
			en: "Algiz is the elk, symbolizing protection, defense, and higher self. It represents guardianship, instinct, and connection to the divine. Algiz is a powerful rune for shielding oneself and others, and for seeking spiritual guidance. It may also indicate the need to be alert and aware of one’s surroundings.",
			de: "Algiz ist die Rune des Elchs и symbolisiert Schutz, Verteidigung и das höhere Selbst. Sie steht für Wachsamkeit, Instinkt и die Verbindung zum Göttlichen. Algiz ist eine starke Schutzrune и hilft, spirituelle Führung zu suchen. Sie kann auch auf die Notwendigkeit hinweisen, aufmerksam и wachsam zu sein.",
			ru: "Альгиз — руна лося, символизирует защиту, оборону и высшее Я. Она означает опеку, инстинкт и связь с божественным. Альгиз — мощная руна для защиты себя и других, а также для поиска духовного руководства. Может указывать на необходимость быть настороже и осознанным.",
		},
		reversedDescription: {
			en: "Reversed: Vulnerability, danger, or lack of protection. Can indicate ignoring warnings, poor boundaries, or spiritual disconnection.",
			de: "Umgekehrt: Verletzlichkeit, Gefahr или fehlender Schutz. Kann auf das Ignorieren von Warnungen, schlechte Grenzen oder spirituelle Entfremdung hinweisen.",
			ru: "Перевернутая: Уязвимость, опасность или отсутствие защиты. Может указывать на игнорирование предупреждений, слабые границы или духовную оторванность.",
		},
	},
	{
		symbol: "ᛊ",
		transliteration: "S",
		name: {
			en: "Sowilo",
			de: "Sowilo",
			ru: "Совило",
		},
		description: {
			en: "Sowilo means 'sun' and is the rune of success, vitality, and wholeness. It represents light, clarity, and the achievement of goals. Sowilo brings energy, health, and a sense of purpose. It is a rune of victory, honor, and the cleansing power of the sun.",
			de: "Sowilo bedeutet 'Sonne' und ist die Rune des Erfolgs, der Vitalität und der Ganzheit. Sie steht für Licht, Klarheit und das Erreichen von Zielen. Sowilo bringt Energie, Gesundheit und ein Gefühl von Zielstrebigkeit. Sie ist die Rune des Sieges, der Ehre und der reinigenden Kraft der Sonne.",
			ru: "Совило означает 'солнце' и является руной успеха, жизненной силы и целостности. Она символизирует свет, ясность и достижение целей. Совило приносит энергию, здоровье и ощущение смысла. Это руна победы, чести и очищающей силы солнца.",
		},
		reversedDescription: {
			en: "",
			de: "",
			ru: "",
		},
	},
	{
		symbol: "ᛏ",
		transliteration: "T",
		name: {
			en: "Tiwaz",
			de: "Tiwaz",
			ru: "Тиваз",
		},
		description: {
			en: "Tiwaz is the rune of the god Tyr, representing justice, honor, and leadership. It is associated with sacrifice, law, and the pursuit of truth. Tiwaz encourages courage, integrity, and the willingness to fight for what is right. In readings, it can signify legal matters, self-discipline, or the need to act with honor.",
			de: "Tiwaz ist die Rune des Gottes Tyr und steht für Gerechtigkeit, Ehre und Führung. Sie ist mit Opfer, Gesetz und der Suche nach Wahrheit verbunden. Tiwaz ermutigt zu Mut, Integrität und der Bereitschaft, für das Richtige zu kämpfen. In Lesungen kann sie auf rechtliche Angelegenheiten, Selbstdisziplin oder die Notwendigkeit hinweisen, ehrenhaft zu handeln.",
			ru: "Тиваз — руна бога Тюра, символизирует справедливость, честь и лидерство. Связана с жертвой, законом и поиском истины. Тиваз призывает к мужеству, честности и готовности бороться за правое дело. В гаданиях может указывать на юридические вопросы, самодисциплину или необходимость действовать с честью.",
		},
		reversedDescription: {
			en: "Reversed: Injustice, dishonor, or abuse of power. Can indicate legal problems, lack of accountability, or being misled by false ideals.",
			de: "Umgekehrt: Ungerechtigkeit, Ehrlosigkeit oder Machtmissbrauch. Kann auf rechtliche Probleme, fehlende Verantwortlichkeit oder das Verleiten durch falsche Ideale hinweisen.",
			ru: "Перевернутая: Несправедливость, бесчестие или злоупотребление властью. Может указывать на юридические проблемы, отсутствие ответственности или заблуждение ложными идеалами.",
		},
	},
	{
		symbol: "ᛒ",
		transliteration: "B",
		name: {
			en: "Berkano",
			de: "Berkano",
			ru: "Беркана",
		},
		description: {
			en: "Berkano means 'birch' and is the rune of birth, renewal, and feminine energy. It symbolizes growth, healing, and nurturing. Berkano is associated with new beginnings, family, and fertility. It encourages care for oneself and others, and the gentle unfolding of potential.",
			de: "Berkano bedeutet 'Birke' und ist die Rune der Geburt, Erneuerung und weiblichen Energie. Sie symbolisiert Wachstum, Heilung und Fürsorge. Berkano ist mit Neuanfängen, Familie und Fruchtbarkeit verbunden. Sie ermutigt dazu, sich selbst und andere zu pflegen und das Potenzial sanft zu entfalten.",
			ru: "Беркана означает 'берёза' и является руной рождения, обновления и женской энергии. Она символизирует рост, исцеление и заботу. Беркана связана с новыми начинаниями, семьёй и плодородием. Призывает заботиться о себе и других и мягко раскрывать потенциал.",
		},
		reversedDescription: {
			en: "Reversed: Barrenness, stagnation, or lack of growth. Can indicate neglecting one’s needs or potential, or being cut off from feminine energy.",
			de: "Umgekehrt: Unfruchtbarkeit, Stagnation oder fehlendes Wachstum. Kann darauf hinweisen, dass eigene Bedürfnisse oder Potenziale vernachlässigt werden oder der Zugang zur weiblichen Energie fehlt.",
			ru: "Перевернутая: Бесплодие, застой или отсутствие роста. Может указывать на пренебрежение своими потребностями или потенциалом, либо на оторванность от женской энергии.",
		},
	},
	{
		symbol: "ᛖ",
		transliteration: "E",
		name: {
			en: "Ehwaz",
			de: "Ehwaz",
			ru: "Эваз",
		},
		description: {
			en: "Ehwaz means 'horse' and represents movement, progress, and partnership. It is the rune of trust, cooperation, and harmonious relationships. Ehwaz encourages adaptability, teamwork, and the journey towards new horizons. It may also signify travel or changes in one’s life path.",
			de: "Ehwaz bedeutet 'Pferd' und steht für Bewegung, Fortschritt und Partnerschaft. Sie ist die Rune des Vertrauens, der Zusammenarbeit und harmonischer Beziehungen. Ehwaz ermutigt zu Anpassungsfähigkeit, Teamarbeit und der Reise zu neuen Horizonten. Sie kann auch auf Reisen oder Veränderungen im Lebensweg hinweisen.",
			ru: "Эваз означает 'лошадь' и символизирует движение, прогресс и партнёрство. Это руна доверия, сотрудничества и гармоничных отношений. Эваз призывает к гибкости, командной работе и путешествию к новым горизонтах. Может также указывать на поездки или изменения в жизненном пути.",
		},
		reversedDescription: {
			en: "Reversed: Lack of progress, broken partnerships, or resistance to change. Can indicate being stuck, uncooperative, or facing travel delays.",
			de: "Umgekehrt: Fehlender Fortschritt, zerbrochene Partnerschaften oder Widerstand gegen Veränderungen. Kann auf Stillstand, mangelnde Kooperation oder Reiseverzögerungen hinweisen.",
			ru: "Перевернутая: Отсутствие прогресса, разрушенные партнёрства или сопротивление переменам. Может указывать на застой, неготовность к сотрудничеству или задержки в пути.",
		},
	},
	{
		symbol: "ᛗ",
		transliteration: "M",
		name: {
			en: "Mannaz",
			de: "Mannaz",
			ru: "Манназ",
		},
		description: {
			en: "Mannaz is the rune of humanity, self, and community. It symbolizes the interconnectedness of people, cooperation, and shared goals. Mannaz encourages self-awareness, mutual support, and the realization of one’s potential within a group. It can also indicate the importance of relationships and social bonds.",
			de: "Mannaz ist die Rune der Menschheit, des Selbst und der Gemeinschaft. Sie symbolisiert die Verbundenheit der Menschen, Zusammenarbeit und gemeinsame Ziele. Mannaz fördert Selbstbewusstsein, gegenseitige Unterstützung und die Entfaltung des eigenen Potenzials in der Gruppe. Sie kann auch auf die Bedeutung von Beziehungen und sozialen Bindungen hinweisen.",
			ru: "Манназ — руна человечества, личности и сообщества. Она символизирует взаимосвязь людей, сотрудничество и общие цели. Манназ способствует самопознанию, взаимной поддержке и раскрытию потенциала в коллективе. Может также указывать на важность отношений и социальных связей.",
		},
		reversedDescription: {
			en: "Reversed: Isolation, self-doubt, or lack of support. Can indicate feeling alienated, misunderstood, or struggling with self-identity.",
			de: "Umgekehrt: Isolation, Selbstzweifel oder fehlende Unterstützung. Kann auf Entfremdung, Missverständnisse oder Probleme mit der eigenen Identität hinweisen.",
			ru: "Перевернутая: Изоляция, неуверенность в себе или отсутствие поддержки. Может указывать на отчуждение, непонимание или трудности с самоидентификацией.",
		},
	},
	{
		symbol: "ᛚ",
		transliteration: "L",
		name: {
			en: "Laguz",
			de: "Laguz",
			ru: "Лагуз",
		},
		description: {
			en: "Laguz means 'water' and is the rune of intuition, emotion, and the unconscious. It represents flow, adaptability, and the mysteries of the deep. Laguz encourages trust in intuition, emotional healing, and going with the flow of life. It may also signal the need to address hidden feelings or subconscious patterns.",
			de: "Laguz bedeutet 'Wasser' und ist die Rune der Intuition, der Gefühle und des Unbewussten. Sie steht für Fluss, Anpassungsfähigkeit und die Geheimnisse der Tiefe. Laguz ermutigt dazu, der Intuition zu vertrauen, emotionale Heilung zuzulassen und mit dem Fluss des Lebens zu gehen. Sie kann auch darauf hinweisen, verborgene Gefühle oder unbewusste Muster zu bearbeiten.",
			ru: "Лагуз означает 'вода' и является руной интуиции, эмоций и подсознания. Она символизирует поток, гибкость и тайны глубин. Лагуз призывает доверять интуиции, исцелять эмоции и плыть по течению жизни. Может также указывать на необходимость разобраться с скрытыми чувствами или подсознательными шаблонами.",
		},
		reversedDescription: {
			en: "Reversed: Emotional blockages, confusion, or being overwhelmed. Can indicate ignoring intuition, fear of the unknown, or emotional instability.",
			de: "Umgekehrt: Emotionale Blockaden, Verwirrung oder Überforderung. Kann auf das Ignorieren der Intuition, Angst vor dem Unbekannten oder emotionale Instabilität hinweisen.",
			ru: "Перевернутая: Эмоциональные блоки, путаница или подавленность. Может указывать на игнорирование интуиции, страх перед неизвестным или эмоциональную нестабильность.",
		},
	},
	{
		symbol: "ᛜ",
		transliteration: "NG",
		name: {
			en: "Ingwaz",
			de: "Ingwaz",
			ru: "Ингваз",
		},
		description: {
			en: "Ingwaz is the rune of the god Ing, symbolizing fertility, potential, and inner growth. It represents gestation, peace, and the completion of cycles. Ingwaz is associated with family, harmony, and the nurturing of new ideas or projects. It often marks a time of rest before new beginnings.",
			de: "Ingwaz ist die Rune des Gottes Ing und symbolisiert Fruchtbarkeit, Potenzial und inneres Wachstum. Sie steht für Reifung, Frieden und den Abschluss von Zyklen. Ingwaz ist mit Familie, Harmonie und der Pflege neuer Ideen oder Projekte verbunden. Sie markiert oft eine Zeit der Ruhe vor neuen Anfängen.",
			ru: "Ингваз — руна бога Инга, символизирует плодородие, потенциал и внутренний рост. Она означает созревание, покой и завершение циклов. Ингваз связана с семьёй, гармонией и заботой о новых идеях или проектах. Часто указывает на период отдыха перед новыми начинаниями.",
		},
		reversedDescription: {
			en: "",
			de: "",
			ru: "",
		},
	},
	{
		symbol: "ᛞ",
		transliteration: "D",
		name: {
			en: "Dagaz",
			de: "Dagaz",
			ru: "Дагаз",
		},
		description: {
			en: "Dagaz means 'day' and is the rune of breakthrough, transformation, and awakening. It represents hope, clarity, and the balance between opposites (night and day). Dagaz signifies new perspectives, enlightenment, and the successful resolution of difficulties. It marks the dawn after darkness.",
			de: "Dagaz bedeutet 'Tag' und ist die Rune des Durchbruchs, der Transformation und des Erwachens. Sie steht für Hoffnung, Klarheit und das Gleichgewicht der Gegensätze (Nacht und Tag). Dagaz symbolisiert neue Perspektiven, Erleuchtung und die erfolgreiche Lösung von Schwierigkeiten. Sie markiert die Morgendämmerung nach der Dunkelheit.",
			ru: "Дагаз означает 'день' и является руной прорыва, трансформации и пробуждения. Она символизирует надежду, ясность и баланс противоположностей (ночи и дня). Дагаз означает новые взгляды, просветление и успешное разрешение трудностей. Это рассвет после тьмы.",
		},
		reversedDescription: {
			en: "",
			de: "",
			ru: "",
		},
	},
	{
		symbol: "ᛟ",
		transliteration: "O",
		name: {
			en: "Othala",
			de: "Othala",
			ru: "Отал",
		},
		description: {
			en: "Othala means 'heritage' or 'ancestral land' and is the rune of inheritance, tradition, and home. It represents family, roots, and the passing down of wisdom. Othala encourages honoring one’s heritage, maintaining boundaries, and preserving what is valuable. In readings, it can signify property, legacy, or spiritual inheritance.",
			de: "Othala bedeutet 'Erbe' oder 'Ahnenland' und ist die Rune des Erbes, der Tradition und des Zuhauses. Sie steht für Familie, Wurzeln und die Weitergabe von Weisheit. Othala ermutigt dazu, das eigene Erbe zu ehren, Grenzen zu wahren und Wertvolles zu bewahren. In Lesungen kann sie auf Besitz, Vermächtnis oder spirituelles Erbe hinweisen.",
			ru: "Отал означает 'наследие' или 'родовая земля' и является руной наследства, традиций и дома. Она символизирует семью, корни и передачу мудрости. Отал призывает чтить своё наследие, сохранять границы и оберегать ценное. В гаданиях может указывать на имущество, наследие или духовное преемство.",
		},
		reversedDescription: {
			en: "Reversed: Loss of inheritance, family disputes, or feeling rootless. Can indicate issues with boundaries, tradition, or letting go of the past.",
			de: "Umgekehrt: Verlust des Erbes, Familienstreitigkeiten oder das Gefühl der Wurzellosigkeit. Kann auf Probleme mit Grenzen, Tradition oder das Loslassen der Vergangenheit hinweisen.",
			ru: "Перевернутая: Потеря наследства, семейные споры или ощущение отсутствия корней. Может указывать на проблемы с границами, традициями или отпусканием прошлого.",
		},
	},
];
