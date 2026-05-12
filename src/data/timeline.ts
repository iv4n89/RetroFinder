export interface TimelineEvent {
  year: number;
  title: string;
  description: string;
  category: "hardware" | "software" | "industry";
}

export const timeline: TimelineEvent[] = [
  {
    year: 1936,
    title: "La Máquina de Turing",
    description:
      'Alan Turing publica "On Computable Numbers", definiendo los fundamentos matemáticos de la computación.',
    category: "hardware",
  },
  {
    year: 1945,
    title: "ENIAC",
    description:
      "Primer ordenador electrónico de propósito general. 18.000 válvulas de vacío, 27 toneladas.",
    category: "hardware",
  },
  {
    year: 1947,
    title: "El Transistor",
    description:
      "Bell Labs inventa el transistor, sustituyendo las válvulas de vacío y miniaturizando la electrónica.",
    category: "hardware",
  },
  {
    year: 1971,
    title: "Intel 4004",
    description:
      "Primer microprocesador comercial. 2.300 transistores, 4 bits, 740 KHz.",
    category: "hardware",
  },
  {
    year: 1975,
    title: "Altair 8800",
    description:
      "El big bang del PC. Gates y Allen escriben BASIC para él, fundando Microsoft.",
    category: "industry",
  },
  {
    year: 1976,
    title: "Apple I",
    description:
      "Wozniak diseña el Apple I. Jobs lo convierte en producto comercial vendido en kit por $666.",
    category: "hardware",
  },
  {
    year: 1977,
    title: "La Trinidad del 77",
    description:
      "Apple II, TRS-80 y Commodore PET se lanzan el mismo año. Nace el mercado del PC doméstico.",
    category: "industry",
  },
  {
    year: 1979,
    title: "VisiCalc",
    description:
      "Primera hoja de cálculo de la historia. Convierte el Apple II en herramienta de negocio.",
    category: "software",
  },
  {
    year: 1981,
    title: "IBM PC",
    description:
      "IBM lanza el modelo 5150 con MS-DOS. La arquitectura abierta define el estándar PC.",
    category: "hardware",
  },
  {
    year: 1982,
    title: "Commodore 64",
    description:
      "El ordenador más vendido de la historia. 17 millones de unidades. Rey de los juegos en Europa.",
    category: "hardware",
  },
  {
    year: 1983,
    title: "Apple Lisa",
    description:
      "Primera GUI comercial con ratón. $9.995. Fracaso comercial pero padre del Macintosh.",
    category: "hardware",
  },
  {
    year: 1984,
    title: "Macintosh 128K",
    description:
      "El anuncio del SuperBowl de Ridley Scott. La GUI llega al gran público.",
    category: "industry",
  },
  {
    year: 1985,
    title: "Amiga y Atari ST",
    description:
      "Los ordenadores de 16 bits llegan al mercado doméstico. Multimedia y MIDI integrado.",
    category: "hardware",
  },
  {
    year: 1990,
    title: "Windows 3.0",
    description:
      "Microsoft lanza Windows 3.0. Vende 10 millones de copias en 2 años.",
    category: "software",
  },
  {
    year: 1993,
    title: "Pentium",
    description:
      "Intel lanza el Pentium. Era multimedia: CD-ROM, sonido y vídeo se vuelven mainstream.",
    category: "hardware",
  },
];
