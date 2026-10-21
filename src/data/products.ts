// Product catalogue — every product page, card, menu and form option is generated from here.
// Copy follows the developer brief. Do not add melt-flow values, purity, recycled-content
// percentages or certifications unless an approved data sheet is available.

export type Colour = { key: 'natural' | 'white' | 'black' | 'blue' | 'mixed'; name: string };

export type Product = {
  slug: string;
  slot: string; // media slot id (see MEDIA-GUIDE.md)
  polymer: string;
  short: string;
  name: string;
  colours: Colour[];
  form: string;
  card: string;
  description: string[];
  applications: string[];
  process: string;
  grades?: string[]; // grade variants shown on the product page
  note?: string;
};

export type Regrind = {
  slug: string;
  slot: string;
  polymer: string;
  name: string;
  source: string;
  washing: string;
  colour: string;
  tags: string[];
  description: string;
};

export const PRODUCTS: Product[] = [
  {
    slug: 'hdpe-blue-drum-granules',
    slot: 'P1',
    polymer: 'HDPE',
    short: 'HDPE Blue Drum',
    name: 'HDPE Blue Drum Granules',
    colours: [{ key: 'blue', name: 'Blue' }],
    form: 'Recycled granules',
    process: 'Blow moulding (LBM / MBM)',
    grades: ['For LBM (Large Blow Moulding)', 'For MBM (Medium Blow Moulding)'],
    card: 'Recycled HDPE granules from blue drum material, for large and medium blow moulding.',
    description: [
      'Recycled HDPE granules made from blue drum material, offered for LBM (large blow moulding) and MBM (medium blow moulding).',
      'Share your product size, wall thickness and quality requirements so we can recommend the suitable grade.',
    ],
    applications: ['Large blow-moulded containers & drums', 'Medium blow-moulded containers', 'Jerrycans & hollow products'],
  },
  {
    slug: 'hdpe-pipe-grade-granules',
    slot: 'P7',
    polymer: 'HDPE',
    short: 'HDPE Pipe Grade',
    name: 'HDPE Pipe Grade Granules',
    colours: [{ key: 'black', name: 'Black' }],
    form: 'Recycled granules',
    process: 'Pipe extrusion',
    grades: ['PE 100 Black', 'PE 80 Black', 'PE 63 Black'],
    card: 'Black HDPE pipe-grade granules in PE 100, PE 80 and PE 63 grades for pipe extrusion.',
    description: [
      'Black HDPE pipe-grade granules available in PE 100, PE 80 and PE 63 grades for pipe extrusion.',
      'Tell us the grade, pipe size and pressure class you manufacture, along with your monthly quantity.',
    ],
    applications: ['HDPE pipe extrusion', 'Water & irrigation pipes', 'Conduit & duct pipes'],
    note: 'Grade details are confirmed with each offer. Finished pipes must meet the relevant material and product standards for their application.',
  },
  {
    slug: 'hdpe-blow-grade-granules',
    slot: 'P2',
    polymer: 'HDPE',
    short: 'HDPE Blow Grade',
    name: 'HDPE Blow Grade Granules',
    colours: [
      { key: 'natural', name: 'Natural' },
      { key: 'white', name: 'White' },
      { key: 'black', name: 'Black' },
    ],
    form: 'Recycled granules',
    process: 'Blow moulding',
    card: 'Recycled HDPE for blow-moulded non-food bottles, containers and hollow products.',
    description: [
      'Recycled HDPE granules for evaluation in non-food bottles, containers and other hollow plastic products made by blow moulding.',
      'Select the colour and share your container size, intended contents and quality requirements.',
    ],
    applications: ['Non-food bottles', 'Containers & jerrycans', 'Hollow blow-moulded products'],
  },
  {
    slug: 'pp-injection-grade-granules',
    slot: 'P3',
    polymer: 'PP',
    short: 'PP Injection',
    name: 'PP Injection Grade Granules',
    colours: [
      { key: 'natural', name: 'Natural' },
      { key: 'white', name: 'White' },
      { key: 'black', name: 'Black' },
    ],
    form: 'Recycled granules',
    process: 'Injection moulding',
    card: 'Recycled polypropylene for injection-moulded household and general plastic articles.',
    description: [
      'Recycled polypropylene granules for injection-moulded products such as household articles, storage products and general plastic components.',
      'The suitable grade depends on the required flow, strength, finish and end use — tell us about your part and moulding setup.',
    ],
    applications: ['Household articles', 'Storage products', 'General plastic components'],
  },
  {
    slug: 'ppcp-granules',
    slot: 'P4',
    polymer: 'PPCP',
    short: 'PPCP Grade',
    name: 'PPCP Grade Granules',
    colours: [
      { key: 'black', name: 'Black' },
      { key: 'white', name: 'White' },
    ],
    form: 'Recycled granules',
    process: 'Injection moulding',
    grades: ['PPCP Black (Battery)', 'PPCP White (Bucket)'],
    card: 'Recycled PP copolymer in black (from battery) and white (from bucket) grades.',
    description: [
      'Recycled polypropylene copolymer granules in two grades: PPCP Black, from battery material, and PPCP White, from bucket material.',
      'Please specify the grade, required melt flow, impact strength and shade with your enquiry.',
    ],
    applications: ['Pails & buckets', 'Battery cases & automotive parts', 'Utility containers & moulded articles'],
  },
  {
    slug: 'ldpe-film-grade-granules',
    slot: 'P5',
    polymer: 'LDPE',
    short: 'LDPE Film',
    name: 'LDPE Film Grade Granules',
    colours: [],
    form: 'Recycled granules',
    process: 'Film extrusion',
    card: 'Recycled LDPE for film extrusion — waste bags, liners and non-food packaging film.',
    description: [
      'Recycled LDPE granules for film extrusion. Potential uses include waste bags, liners and non-food packaging films, depending on the grade and production trial.',
      'Share your required colour, film thickness, strength and monthly quantity. Confirm melt flow, moisture, odour and visible particles before selecting the material. Colours and specifications will be confirmed with the offer.',
    ],
    applications: ['Waste / garbage bags', 'Liners', 'Non-food packaging film'],
  },
];

export const REGRINDS: Regrind[] = [
  {
    slug: 'hdpe-blue-drum-regrind',
    slot: 'R1',
    polymer: 'HDPE',
    name: 'HDPE Blue Drum Regrind',
    source: '200-litre blue drums',
    washing: 'Unwashed / Cold washed / Hot washed',
    colour: 'Blue',
    tags: ['HDPE', 'Blue', 'Unwashed', 'Cold washed', 'Hot washed'],
    description: 'HDPE regrind from 200-litre blue drums, available unwashed, cold washed or hot washed. Share your intended use, quantity and delivery location to check availability.',
  },
  {
    slug: 'ppcp-battery-regrind',
    slot: 'R2',
    polymer: 'PPCP',
    name: 'PPCP Battery Regrind',
    source: 'Battery cases',
    washing: 'Unwashed / Cold washed / Hot washed',
    colour: 'As available',
    tags: ['PPCP', 'Unwashed', 'Cold washed', 'Hot washed'],
    description: 'PPCP regrind from battery cases, available unwashed, cold washed or hot washed. Share your application, colour preference and quantity to check availability.',
  },
  {
    slug: 'abs-regrind',
    slot: 'R3',
    polymer: 'ABS',
    name: 'ABS Regrind',
    source: 'Confirmed with offer',
    washing: 'Unwashed / Cold washed / Hot washed',
    colour: 'As available',
    tags: ['ABS', 'Unwashed', 'Cold washed', 'Hot washed'],
    description: 'ABS regrind, available unwashed, cold washed or hot washed. Share your intended product, colour requirement and quantity to check availability.',
  },
  {
    slug: 'ppcp-white-paint-bucket-regrind',
    slot: 'R4',
    polymer: 'PPCP',
    name: 'PPCP White Paint Bucket Regrind',
    source: 'White paint buckets',
    washing: 'Washed',
    colour: 'White',
    tags: ['PPCP', 'Washed', 'White'],
    description: 'Washed PPCP regrind from white paint buckets. Share your required white shade, application and quantity to check availability.',
  },
  {
    slug: 'hdpe-blow-bottle-regrind',
    slot: 'R5',
    polymer: 'HDPE',
    name: 'HDPE Blow Bottle Regrind (FMCG)',
    source: 'FMCG blow-moulded bottles',
    washing: 'As specified',
    colour: 'Mixed / as available',
    tags: ['HDPE', 'FMCG bottles'],
    description: 'HDPE regrind from FMCG blow-moulded bottles. Share your washing requirement, colour, quantity and intended use to check availability.',
  },
];

export const colourNames = (p: Product) =>
  p.colours.length ? p.colours.map((c) => c.name).join(' / ') : 'Confirmed with offer';

// Colour options per product slug — used by the enquiry form
export const FORM_COLOURS: Record<string, string[]> = {
  ...Object.fromEntries(PRODUCTS.map((p) => [p.slug, p.colours.length ? p.colours.map((c) => c.name) : ['To be confirmed with offer']])),
  ...Object.fromEntries(REGRINDS.map((r) => [r.slug, [r.colour]])),
  'other-regrind': ['Please specify in message'],
};
