/** Global brand + site configuration. Single source of truth for copy that
 *  repeats across pages (nav, footer, contact details, headline stats). */

export const SITE = {
  name: 'Meridian Estates',
  tagline: 'Architectural Permanence',
  description:
    'Meridian Estates curates the most exceptional residences across Abu Dhabi and the Emirates — a private advisory for the discerning few.',
  email: 'private@meridian-estates.ae',
  phone: '+971 2 555 0123',
  whatsapp: '+971 50 555 0123',
} as const;

export const NAV_LINKS = [
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Services', href: '/services' },
  { label: 'Heritage', href: '/heritage' },
] as const;

export const STATS = [
  { value: 15.4, prefix: 'AED ', suffix: 'B', decimals: 1, label: 'Portfolio Volume' },
  { value: 18, prefix: '', suffix: '', decimals: 0, label: 'Off-Market Exclusives' },
  { value: 15, prefix: '', suffix: '', decimals: 0, label: 'Years in the Emirates' },
  { value: 98, prefix: '', suffix: '%', decimals: 0, label: 'Client Retention' },
] as const;

export const OFFICES = [
  {
    city: 'Abu Dhabi',
    role: 'Headquarters',
    lines: ['Al Maryah Island', 'Abu Dhabi Global Market Square', 'Abu Dhabi, UAE'],
    phone: '+971 2 555 0123',
  },
  {
    city: 'Dubai',
    role: 'Private Office',
    lines: ['Gate Village 04', 'Dubai International Financial Centre', 'Dubai, UAE'],
    phone: '+971 4 555 0123',
  },
] as const;

export const FOOTER_LINKS = {
  explore: [
    { label: 'The Portfolio', href: '/portfolio' },
    { label: 'Bespoke Services', href: '/services' },
    { label: 'The Heritage', href: '/heritage' },
    { label: 'Private Enquiry', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/contact' },
    { label: 'Terms of Service', href: '/contact' },
    { label: 'Cookie Preferences', href: '/contact' },
  ],
} as const;

export type Office = (typeof OFFICES)[number];
