// Business details — taken from the approved business card.
export const SITE = {
  name: 'Nityan Polymers',
  tagline: 'Plastic Regrinds & Recycled Granules',
  // Leadership shown on the About page (photo slots L1, L2). Leave name/role blank until confirmed.
  team: [
    { slot: 'L1', name: 'Neetu Tripathi', role: 'Managing Director', img: '/images/site/team-1.jpg' },
    { slot: 'L2', name: 'Shweta Tripathi', role: 'Director Operations', img: '/images/site/team-2.jpg' },
  ],
  phone: '+91 91189 85119',
  tel: '+919118985119',
  whatsapp: '919118985119',
  email: 'sales@nityanpolymers.com',
  address: ['1202, Tower A1, Signature Global Solera,', 'Sector 107, Gurugram 122006,', 'Haryana, India'],
  mapQuery: 'Signature Global Solera, Sector 107, Gurugram, Haryana',
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
