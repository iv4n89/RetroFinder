export interface Computer {
  id: string;
  name: string;
  year: number;
  type:
    | "Mainframe"
    | "Micro"
    | "Personal"
    | "GUI Station"
    | "Revolution"
    | "Workstation";
  manufacturer: string;
  cpu: string;
  cpuSpeed: string;
  ram: string;
  os: string;
  price: string;
  description: string;
  significance: string;
}

export const computers: Computer[] = [
  {
    id: "eniac",
    name: "ENIAC",
    year: 1945,
    type: "Mainframe",
    manufacturer: "University of Pennsylvania",
    cpu: "Vacuum tubes (18,000)",
    cpuSpeed: "100 KHz",
    ram: "None (20 accumulators)",
    os: "None",
    price: "$487,000 (1945)",
    description:
      "The first general-purpose electronic computer. It occupied 167m², weighed 27 tons and consumed 150kW. It was designed to calculate ballistic tables for the U.S. Army.",
    significance:
      "First general-purpose electronic computer in history.",
  },
  {
    id: "altair-8800",
    name: "Altair 8800",
    year: 1975,
    type: "Micro",
    manufacturer: "MITS",
    cpu: "Intel 8080",
    cpuSpeed: "2 MHz",
    ram: "256 bytes (expandable to 64KB)",
    os: "Altair BASIC / CP/M",
    price: "$439 in kit (1975)",
    description:
      "The big bang of personal computers. It was sold in kit form to assemble at home. Bill Gates and Paul Allen wrote BASIC for it, founding Microsoft. It had no keyboard or display.",
    significance:
      "Triggered the PC revolution and the birth of Microsoft.",
  },
  {
    id: "apple-ii",
    name: "Apple II",
    year: 1977,
    type: "Personal",
    manufacturer: "Apple Computer",
    cpu: "MOS Technology 6502",
    cpuSpeed: "1.023 MHz",
    ram: "4KB (expandable to 64KB)",
    os: "Apple DOS / ProDOS",
    price: "$1,298 (1977)",
    description:
      "Designed by Steve Wozniak, it was one of the first massively successful personal computers. It featured an integrated keyboard, color output and expansion slots. VisiCalc, the first spreadsheet, turned it into a business tool.",
    significance: "First massively successful PC. Popularized spreadsheets.",
  },
  {
    id: "trs-80",
    name: "TRS-80 Model I",
    year: 1977,
    type: "Personal",
    manufacturer: "Tandy / Radio Shack",
    cpu: "Zilog Z80",
    cpuSpeed: "1.77 MHz",
    ram: "4KB (expandable to 16KB)",
    os: "TRS-DOS",
    price: "$599 (1977)",
    description:
      'Part of the "Trinity of 77" along with the Apple II and the Commodore PET. It was sold in Radio Shack stores throughout the U.S., making it extremely accessible. It was the best-selling computer of 1977.',
    significance:
      "The best-selling computer of 1977. Democratized PC access.",
  },
  {
    id: "ibm-pc",
    name: "IBM Personal Computer",
    year: 1981,
    type: "Personal",
    manufacturer: "IBM",
    cpu: "Intel 8088",
    cpuSpeed: "4.77 MHz",
    ram: "16KB (expandable to 256KB)",
    os: "PC-DOS / MS-DOS",
    price: "$1,565 (1981)",
    description:
      "The model 5150 established the open architecture standard that defines PCs to this day. IBM chose third-party components (Intel, Microsoft) instead of proprietary design, which allowed the clones that would dominate the market.",
    significance:
      "Defined the PC standard we still use. Created the MS-DOS ecosystem.",
  },
  {
    id: "commodore-64",
    name: "Commodore 64",
    year: 1982,
    type: "Personal",
    manufacturer: "Commodore Business Machines",
    cpu: "MOS Technology 6510",
    cpuSpeed: "1 MHz",
    ram: "64KB",
    os: "Commodore BASIC 2.0",
    price: "$595 (1982)",
    description:
      "The best-selling home computer in history with over 17 million units sold. Its SID sound chip and VIC-II graphics chip were far superior to the competition. It was the dominant gaming platform in Europe during the 80s.",
    significance:
      "The best-selling computer in history. King of video games in Europe.",
  },
  {
    id: "apple-lisa",
    name: "Apple Lisa",
    year: 1983,
    type: "GUI Station",
    manufacturer: "Apple Computer",
    cpu: "Motorola 68000",
    cpuSpeed: "5 MHz",
    ram: "1MB",
    os: "Lisa OS",
    price: "$9,995 (1983)",
    description:
      "The first commercial personal computer with a graphical interface and mouse. It was a commercial failure due to its exorbitant price but laid the groundwork for the Macintosh. It featured a 5MB hard drive and cooperative multitasking.",
    significance: "First commercial GUI with mouse. The father of Macintosh.",
  },
  {
    id: "macintosh-128k",
    name: "Macintosh 128K",
    year: 1984,
    type: "Revolution",
    manufacturer: "Apple Computer",
    cpu: "Motorola 68000",
    cpuSpeed: "8 MHz",
    ram: "128KB",
    os: "System 1",
    price: "$2,495 (1984)",
    description:
      'Presented with the legendary Super Bowl ad directed by Ridley Scott. It popularized the graphical interface, mouse and desktop for the home user. Its 9" black and white screen at 512x342 pixels was revolutionary.',
    significance:
      "Popularized the GUI for the general public. Changed computing forever.",
  },
  {
    id: "amiga-1000",
    name: "Commodore Amiga 1000",
    year: 1985,
    type: "Personal",
    manufacturer: "Commodore",
    cpu: "Motorola 68000",
    cpuSpeed: "7.16 MHz",
    ram: "256KB (expandable to 512KB)",
    os: "AmigaOS / Workbench",
    price: "$1,295 (1985)",
    description:
      "Technologically far ahead of its time. Its custom chipset (Agnus, Denise, Paula) enabled true multitasking, 4096 colors and 4-channel audio simultaneously. It was the favorite of artists, musicians and video producers.",
    significance:
      "The most advanced multimedia machine of the 80s. Years ahead of the competition.",
  },
  {
    id: "atari-st",
    name: "Atari ST",
    year: 1985,
    type: "Personal",
    manufacturer: "Atari Corporation",
    cpu: "Motorola 68000",
    cpuSpeed: "8 MHz",
    ram: "512KB",
    os: "TOS / GEM",
    price: "$799 (1985)",
    description:
      'The "musician\'s computer" for its integrated MIDI interface. It was the standard in professional recording studios for years. Its value-for-money ratio was unbeatable against the Amiga and the Mac.',
    significance:
      "Standard in professional music production thanks to its integrated MIDI.",
  },
];
