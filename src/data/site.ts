// Business details — Akshita Recycle (logo, GST certificate and contact details supplied by the client).
export const SITE = {
  name: 'Akshita Recycle',
  tagline: 'Plastic Regrinds & Recycled Granules',
  // Leadership shown on the About page (photo slots L1, L2). Leave name/role blank until confirmed.
  team: [
    { slot: 'L1', name: 'Neetu Tripathi', role: 'Managing Director', img: '/images/site/team-1.jpg' },
    { slot: 'L2', name: 'Shweta Tripathi', role: 'Director Operations', img: '/images/site/team-2.jpg' },
  ],
  phone: '+91 95371 12360',
  tel: '+919537112360',
  whatsapp: '919537112360',
  email: 'care.akshitarecycle@gmail.com',
  gstin: '24AAECR4654C2ZM',
  address: ['1168-1172, 1189-1193, 1st Floor,', 'Sangini Trade Center, Saroli,', 'Surat, Gujarat 395010, India'],
  mapQuery: 'Sangini Trade Center, Saroli, Surat, Gujarat 395010',
  mapLink: 'https://maps.app.goo.gl/xcMZThAom6eEnu586',
  polymers: ['HDPE', 'PP', 'PPCP', 'LDPE'],
};

export const NAV = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/products', label: 'Products' },
  { href: '/contact', label: 'Contact Us' },
];

export const waLink = (text?: string) =>
  `https://wa.me/${SITE.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`;

export const quoteLink = (slug?: string, colour?: string) => {
  const p = new URLSearchParams();
  if (slug) p.set('product', slug);
  if (colour) p.set('colour', colour);
  const q = p.toString();
  return `/contact${q ? `?${q}` : ''}#enquiry`;
};
