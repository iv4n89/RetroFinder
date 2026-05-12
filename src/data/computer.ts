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
      "El primer ordenador electrónico de propósito general. Ocupaba 167m², pesaba 27 toneladas y consumía 150kW. Fue diseñado para calcular tablas balísticas para el ejército de EE.UU.",
    significance:
      "Primer ordenador electrónico de propósito general de la historia.",
  },
  {
    id: "altair-8800",
    name: "Altair 8800",
    year: 1975,
    type: "Micro",
    manufacturer: "MITS",
    cpu: "Intel 8080",
    cpuSpeed: "2 MHz",
    ram: "256 bytes (expandible a 64KB)",
    os: "Altair BASIC / CP/M",
    price: "$439 en kit (1975)",
    description:
      "El big bang del ordenador personal. Se vendía en kit para montar en casa. Bill Gates y Paul Allen escribieron BASIC para él, fundando Microsoft. No tenía teclado ni pantalla.",
    significance:
      "Desencadenó la revolución del PC y el nacimiento de Microsoft.",
  },
  {
    id: "apple-ii",
    name: "Apple II",
    year: 1977,
    type: "Personal",
    manufacturer: "Apple Computer",
    cpu: "MOS Technology 6502",
    cpuSpeed: "1.023 MHz",
    ram: "4KB (expandible a 64KB)",
    os: "Apple DOS / ProDOS",
    price: "$1,298 (1977)",
    description:
      "Diseñado por Steve Wozniak, fue uno de los primeros ordenadores personales de éxito masivo. Incluía teclado integrado, salida de color y ranuras de expansión. VisiCalc, la primera hoja de cálculo, lo convirtió en herramienta de negocio.",
    significance: "Primer PC de éxito masivo. Popularizó las hojas de cálculo.",
  },
  {
    id: "trs-80",
    name: "TRS-80 Model I",
    year: 1977,
    type: "Personal",
    manufacturer: "Tandy / Radio Shack",
    cpu: "Zilog Z80",
    cpuSpeed: "1.77 MHz",
    ram: "4KB (expandible a 16KB)",
    os: "TRS-DOS",
    price: "$599 (1977)",
    description:
      'Parte de la "Trinidad del 77" junto al Apple II y el Commodore PET. Se vendía en las tiendas Radio Shack de todo EE.UU., haciéndolo extremadamente accesible. Fue el ordenador más vendido de 1977.',
    significance:
      "El ordenador más vendido de 1977. Democratizó el acceso al PC.",
  },
  {
    id: "ibm-pc",
    name: "IBM Personal Computer",
    year: 1981,
    type: "Personal",
    manufacturer: "IBM",
    cpu: "Intel 8088",
    cpuSpeed: "4.77 MHz",
    ram: "16KB (expandible a 256KB)",
    os: "PC-DOS / MS-DOS",
    price: "$1,565 (1981)",
    description:
      "El modelo 5150 estableció el estándar de arquitectura abierta que define los PCs hasta hoy. IBM eligió componentes de terceros (Intel, Microsoft) en lugar de diseño propio, lo que permitió los clones que dominarían el mercado.",
    significance:
      "Definió el estándar PC que aún usamos. Creó el ecosistema MS-DOS.",
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
      "El ordenador doméstico más vendido de la historia con más de 17 millones de unidades. Su chip de sonido SID y su chip gráfico VIC-II eran muy superiores a la competencia. Fue la plataforma de juegos dominante en Europa durante los 80.",
    significance:
      "El ordenador más vendido de la historia. Rey de los videojuegos en Europa.",
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
      "El primer ordenador personal comercial con interfaz gráfica y ratón. Fue un fracaso comercial por su precio desorbitado pero sentó las bases del Macintosh. Incorporaba un disco duro de 5MB y multitarea cooperativa.",
    significance: "Primera GUI comercial con ratón. El padre del Macintosh.",
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
      'Presentado con el legendario anuncio del SuperBowl dirigido por Ridley Scott. Popularizó la interfaz gráfica, el ratón y el escritorio para el usuario doméstico. Su pantalla de 9" en blanco y negro a 512x342 píxeles era revolucionaria.',
    significance:
      "Popularizó la GUI para el gran público. Cambió la informática para siempre.",
  },
  {
    id: "amiga-1000",
    name: "Commodore Amiga 1000",
    year: 1985,
    type: "Personal",
    manufacturer: "Commodore",
    cpu: "Motorola 68000",
    cpuSpeed: "7.16 MHz",
    ram: "256KB (expandible a 512KB)",
    os: "AmigaOS / Workbench",
    price: "$1,295 (1985)",
    description:
      "Tecnológicamente muy adelantado a su tiempo. Su chipset personalizado (Agnus, Denise, Paula) permitía multitarea real, 4096 colores y audio de 4 canales simultáneamente. Era el favorito de artistas, músicos y productores de vídeo.",
    significance:
      "La máquina multimedia más avanzada de los 80. Años por delante de la competencia.",
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
      'El "ordenador del músico" por su interfaz MIDI integrada. Fue el estándar en estudios de grabación profesionales durante años. Su relación calidad-precio era imbatible frente al Amiga y el Mac.',
    significance:
      "Estándar en producción musical profesional gracias a su MIDI integrado.",
  },
];
