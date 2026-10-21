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
    process: 'Extrusion & compounding',
    card: 'Recycled HDPE granules from blue drum material, for extrusion and compounding enquiries.',
    description: [
      'Recycled HDPE granules made from blue drum material. Buyers can enquire for suitable extrusion and compounding uses.',
      'Share your intended product and technical requirements so we can assess whether the material suits your process.',
    ],
    applications: ['Extrusion (non-pressure)', 'Compounding', 'General HDPE products — subject to trial'],
    note: 'Blue drum material is not automatically PE100. Any pipe application must meet the relevant material and finished-product requirements. This material is not offered as PE100 pressure-pipe grade.',
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
    slug: 'ppcp-white-granules',
    slot: 'P4',
    polymer: 'PPCP',
    short: 'PPCP White',
    name: 'PPCP White Granules',
    colours: [{ key: 'white', name: 'White' }],
    form: 'Recycled granules',
    process: 'Injection moulding',
    card: 'White recycled PP copolymer for pails, utility containers and moulded articles.',
    description: [
      'White recycled polypropylene copolymer granules for evaluation in pails, utility containers and other moulded articles.',
      'Please specify the required melt flow, impact strength and white shade with your enquiry.',
    ],
    applications: ['Pails & buckets', 'Utility containers', 'Moulded articles'],
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
    washing: 'Washed',
    colour: 'Blue',
    tags: ['HDPE', 'Washed', 'Blue'],
    description: 'Washed HDPE regrind from 200-litre blue drums. Share your intended use, quantity and delivery location to check availability.',
  },
  {
    slug: 'ppcp-battery-regrind',
    slot: 'R2',
    polymer: 'PPCP',
    name: 'PPCP Battery Regrind',
    source: 'Battery cases',
    washing: 'Hot washed',
    colour: 'As available',
    tags: ['PPCP', 'Hot washed'],
    description: 'Hot-washed PPCP regrind from battery cases. Share your application, colour preference and quantity to check availability.',
  },
  {
    slug: 'abs-regrind',
    slot: 'R3',
    polymer: 'ABS',
    name: 'ABS Regrind',
    source: 'Confirmed with offer',
    washing: 'Hot washed',
    colour: 'As available',
    tags: ['ABS', 'Hot washed'],
    description: 'Hot-washed ABS regrind. Share your intended product, colour requirement and quantity to check availability.',
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
