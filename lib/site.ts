/** Global brand + site configuration. Single source of truth for copy that
 *  repeats across pages (nav, footer, contact details, headline stats).
 *  Brand: Sai Saburi Tours & Travels — a family-run, women-led travel agency in
 *  Shirdi, Maharashtra (est. 2005). Figures verified from Google Maps (5.0★,
 *  66 reviews) and the client business profile. */

export const SITE = {
  name: 'Sai Saburi',
  legalName: 'Sai Saburi Tours & Travels',
  tagline: 'Journeys Made with Faith & Patience',
  description:
    'Family-run, women-led travel from Shirdi — Sai darshan, Shani Shingnapur & Aurangabad tours, Jyotirlinga circuits, plus rail, flight and hotel booking and custom family & honeymoon packages. Clean cars, trusted drivers, no hidden charges — 5.0★ across 66 traveller reviews.',
  email: 'mayurilahare11@gmail.com',
  phone: '+91 96041 03710',
  phoneIntl: '+919604103710',
  whatsapp: '+919604103710',
  address: 'Gate No. 2, Sun-n-Sand Road, opp. Sai Baba Temple, Shirdi, Maharashtra 423109',
  mapsUrl:
    'https://www.google.com/maps/place/Sai+Saburi+Tours+%26+Travels+Shirdi/@19.7690967,74.4782712,17z',
} as const;

/** Home is a single-scroll experience for this milestone — nav targets in-page
 *  anchors. Dedicated routes get wired as those pages are approved. */
export const NAV_LINKS = [
  { label: 'Journeys', href: '#journeys' },
  { label: 'Fleet', href: '#fleet' },
  { label: 'Our Story', href: '#story' },
  { label: 'Contact', href: '#contact' },
] as const;

/** Count-up trust band — every figure verified from Google Maps or the profile. */
export const STATS = [
  { value: 5.0, prefix: '', suffix: '/5', decimals: 1, label: 'Google Rating' },
  { value: 66, prefix: '', suffix: '+', decimals: 0, label: 'Five-Star Reviews' },
  { value: 21, prefix: '', suffix: '+', decimals: 0, label: 'Years of Service' },
  { value: 100, prefix: '', suffix: '%', decimals: 0, label: 'Transparent Fares' },
] as const;

export const OFFICES = [
  {
    city: 'Shirdi',
    role: 'Travel Desk',
    lines: ['Gate No. 2, Sun-n-Sand Road', 'Opp. Sai Baba Temple', 'Shirdi, Maharashtra 423109'],
    phone: '+91 96041 03710',
  },
] as const;

export const FOOTER_LINKS = {
  explore: [
    { label: 'Signature Journeys', href: '#journeys' },
    { label: 'Our Fleet', href: '#fleet' },
    { label: 'Our Story', href: '#story' },
    { label: 'Plan a Trip', href: '#contact' },
  ],
  legal: [
    { label: 'Privacy', href: '#contact' },
    { label: 'Terms', href: '#contact' },
    { label: 'Cancellation', href: '#contact' },
  ],
} as const;

export type Office = (typeof OFFICES)[number];
