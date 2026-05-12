export interface TimelineEvent {
  year: number;
  title: string;
  description: string;
  category: "hardware" | "software" | "industry";
}

export const timeline: TimelineEvent[] = [
  {
    year: 1936,
    title: "The Turing Machine",
    description:
      'Alan Turing publishes "On Computable Numbers", defining the mathematical foundations of computation.',
    category: "hardware",
  },
  {
    year: 1945,
    title: "ENIAC",
    description:
      "First general-purpose electronic computer. 18,000 vacuum tubes, 27 tons.",
    category: "hardware",
  },
  {
    year: 1947,
    title: "The Transistor",
    description:
      "Bell Labs invents the transistor, replacing vacuum tubes and miniaturizing electronics.",
    category: "hardware",
  },
  {
    year: 1971,
    title: "Intel 4004",
    description:
      "First commercial microprocessor. 2,300 transistors, 4 bits, 740 KHz.",
    category: "hardware",
  },
  {
    year: 1975,
    title: "Altair 8800",
    description:
      "The PC big bang. Gates and Allen write BASIC for it, founding Microsoft.",
    category: "industry",
  },
  {
    year: 1976,
    title: "Apple I",
    description:
      "Wozniak designs the Apple I. Jobs turns it into a commercial product sold as a kit for $666.",
    category: "hardware",
  },
  {
    year: 1977,
    title: "The Trinity of '77",
    description:
      "Apple II, TRS-80, and Commodore PET launch the same year. The home PC market is born.",
    category: "industry",
  },
  {
    year: 1979,
    title: "VisiCalc",
    description:
      "First spreadsheet in history. Transforms the Apple II into a business tool.",
    category: "software",
  },
  {
    year: 1981,
    title: "IBM PC",
    description:
      "IBM launches the 5150 model with MS-DOS. Open architecture defines the PC standard.",
    category: "hardware",
  },
  {
    year: 1982,
    title: "Commodore 64",
    description:
      "The best-selling computer in history. 17 million units. King of games in Europe.",
    category: "hardware",
  },
  {
    year: 1983,
    title: "Apple Lisa",
    description:
      "First commercial GUI with mouse. $9,995. Commercial failure but father of Macintosh.",
    category: "hardware",
  },
  {
    year: 1984,
    title: "Macintosh 128K",
    description:
      "Ridley Scott's Super Bowl commercial. The GUI reaches the mainstream.",
    category: "industry",
  },
  {
    year: 1985,
    title: "Amiga and Atari ST",
    description:
      "16-bit computers arrive at the home market. Multimedia and integrated MIDI.",
    category: "hardware",
  },
  {
    year: 1990,
    title: "Windows 3.0",
    description:
      "Microsoft launches Windows 3.0. Sells 10 million copies in 2 years.",
    category: "software",
  },
  {
    year: 1993,
    title: "Pentium",
    description:
      "Intel launches the Pentium. The multimedia era: CD-ROM, sound, and video go mainstream.",
    category: "hardware",
  },
];
