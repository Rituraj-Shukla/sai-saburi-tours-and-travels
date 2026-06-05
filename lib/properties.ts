import { IMAGES } from './images';

export interface Property {
  slug: string;
  name: string;
  /** Community / island. */
  area: string;
  city: string;
  /** Price in AED (number, for formatting). */
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  /** e.g. "Beachfront Villa", "Sky Penthouse". */
  type: string;
  /** Single-line marketing hook. */
  tagline: string;
  /** Short editorial paragraph for the listing + detail intro. */
  blurb: string;
  /** Longer architectural narrative for the detail page. */
  narrative: string;
  features: string[];
  /** Primary exterior / hero image. */
  hero: string;
  /** Secondary detail image (interior or architectural). */
  detail: string;
  /** Aerial / location context image. */
  aerial: string;
  /** Whether this is an off-market / private listing. */
  offMarket?: boolean;
}

export const PROPERTIES: Property[] = [
  {
    slug: 'villa-saadiyat',
    name: 'Villa Saadiyat',
    area: 'Saadiyat Island',
    city: 'Abu Dhabi',
    price: 95_000_000,
    beds: 6,
    baths: 8,
    sqft: 18_500,
    type: 'Beachfront Villa',
    tagline: 'A private stretch of the Cultural District coastline.',
    blurb:
      'Set against the protected sands of Saadiyat, this beachfront residence frames the Arabian Gulf through a procession of full-height glazing and book-matched stone.',
    narrative:
      'Conceived as a single, uninterrupted gesture toward the sea, Villa Saadiyat is an exercise in restraint. The architecture recedes so the horizon may lead. Interiors are rendered in warm travertine and oiled walnut, anchored by a double-height reception that opens entirely onto a thirty-metre infinity edge. Minutes from the Louvre Abu Dhabi and the emerging Guggenheim, it is a residence for those who collect both art and quiet.',
    features: [
      'Private beach frontage',
      '30m infinity pool',
      'Book-matched travertine interiors',
      'Cinema & wellness wing',
      'Staff quarters & service kitchen',
      'Smart-home integration',
    ],
    hero: IMAGES.villaSaadiyat,
    detail: IMAGES.interiorLiving,
    aerial: IMAGES.abuDhabiCorniche,
  },
  {
    slug: 'nurai-private-estate',
    name: 'Nurai Private Estate',
    area: 'Nurai Island',
    city: 'Abu Dhabi',
    price: 185_000_000,
    beds: 9,
    baths: 11,
    sqft: 32_000,
    type: 'Private Island Estate',
    tagline: 'An entire shoreline, held in absolute privacy.',
    blurb:
      'A rare freehold estate on Nurai Island — a sanctuary of water gardens, private jetty and uninterrupted sea on three sides.',
    narrative:
      'Few addresses in the Emirates can claim true seclusion. The Nurai Private Estate is one of them. Reached by private launch from the mainland, the compound unfolds across manicured water gardens toward a deep-water jetty. Pavilions of glass and pale limestone are arranged around a central reflecting court, each suite afforded its own terrace and plunge pool. This is not a house so much as a small, sovereign world.',
    features: [
      'Three-sided sea frontage',
      'Private deep-water jetty',
      'Nine ensuite pavilion suites',
      'Reflecting water gardens',
      'Spa, hammam & gymnasium',
      'Helipad access nearby',
    ],
    hero: IMAGES.estateNurai,
    detail: IMAGES.interiorWarm,
    aerial: IMAGES.abuDhabiSkyline,
    offMarket: true,
  },
  {
    slug: 'reem-sky-penthouse',
    name: 'The Reem Penthouse',
    area: 'Al Reem Island',
    city: 'Abu Dhabi',
    price: 42_000_000,
    beds: 4,
    baths: 5,
    sqft: 9_800,
    type: 'Sky Penthouse',
    tagline: 'The skyline of the capital, gathered into a single floor.',
    blurb:
      'A full-floor penthouse crowning Al Reem Island, wrapped in glass and oriented toward the Corniche and the open Gulf beyond.',
    narrative:
      'Occupying the entire summit of one of Al Reem’s landmark towers, this penthouse trades square footage for altitude and light. A continuous terrace circles the residence, dissolving the boundary between interior and sky. The material language is deliberately cool — pale marble, bronze, smoked glass — a counterpoint to the warmth of the city below at dusk.',
    features: [
      'Full-floor, 360° orientation',
      'Wraparound sky terrace',
      'Private lift lobby',
      'Bronze & smoked-glass joinery',
      'Wine room & catering kitchen',
      'Two secure parking bays',
    ],
    hero: IMAGES.penthouseReem,
    detail: IMAGES.interiorMinimal,
    aerial: IMAGES.abuDhabiSkyline,
  },
  {
    slug: 'palace-gardens-mansion',
    name: 'Palace Gardens Mansion',
    area: 'Al Ras Al Akhdar',
    city: 'Abu Dhabi',
    price: 130_000_000,
    beds: 8,
    baths: 10,
    sqft: 26_000,
    type: 'Garden Mansion',
    tagline: 'Beside the Emirates Palace, within mature private grounds.',
    blurb:
      'A stately garden mansion in the embassy district, set among decades-old date palms a short walk from the Emirates Palace.',
    narrative:
      'In a city of new towers, true establishment is measured in trees. Palace Gardens Mansion sits within two acres of mature, irrigated grounds in Al Ras Al Akhdar — Abu Dhabi’s most discreet address. The residence pairs classical proportion with contemporary engineering: colonnaded loggias, a formal majlis, and a private spa wing, all wrapped around a central courtyard fountain.',
    features: [
      'Two acres of mature gardens',
      'Formal majlis & reception',
      'Colonnaded courtyard',
      'Private spa & hammam wing',
      'Eight-car motor court',
      'Independent guest villa',
    ],
    hero: IMAGES.palaceMansion,
    detail: IMAGES.interiorStair,
    aerial: IMAGES.sheikhZayedMosque,
  },
  {
    slug: 'palm-jumeirah-signature-villa',
    name: 'Signature Villa, Palm Jumeirah',
    area: 'Palm Jumeirah',
    city: 'Dubai',
    price: 85_000_000,
    beds: 5,
    baths: 6,
    sqft: 12_500,
    type: 'Frond Villa',
    tagline: 'Private beach frontage on the world’s most coveted frond.',
    blurb:
      'A signature villa on a tip frond of Palm Jumeirah, with uninterrupted views toward the Burj Al Arab and the open sea.',
    narrative:
      'Our singular Dubai offering. Positioned on a sought-after tip frond, this villa is engineered around the view: a glazed reception folds away entirely, drawing the lap pool and beach into the living space. Interiors balance warm cedar against pale stone, while the upper terrace commands the Burj Al Arab on the horizon. A rare, turnkey trophy in a market that seldom releases them.',
    features: [
      'Private beach & lap pool',
      'Tip-frond orientation',
      'Folding glass reception',
      'Rooftop entertaining terrace',
      'Cedar & limestone interiors',
      'Fully turnkey',
    ],
    hero: IMAGES.villaPalm,
    detail: IMAGES.interiorLounge,
    aerial: IMAGES.dubaiSkyline,
  },
  {
    slug: 'maryah-sky-residence',
    name: 'Maryah Sky Residence',
    area: 'Al Maryah Island',
    city: 'Abu Dhabi',
    price: 68_000_000,
    beds: 4,
    baths: 5,
    sqft: 11_200,
    type: 'Sky Residence',
    tagline: 'Above the capital’s financial heart.',
    blurb:
      'A duplex sky residence on Al Maryah Island, steps from the Galleria and the ADGM financial district.',
    narrative:
      'Designed for the principal who values proximity as much as privacy, the Maryah Sky Residence is a duplex held high above Abu Dhabi’s financial centre. An internal stair of cantilevered stone connects living and sleeping levels, each opening to a sheltered loggia. Hotel-grade services — concierge, valet, residents’ spa — are a private lift away.',
    features: [
      'Duplex with private stair',
      'Cantilevered stone staircase',
      'Sheltered sky loggias',
      'Concierge & valet services',
      'Residents’ spa & pool',
      'Direct Galleria access',
    ],
    hero: IMAGES.skyResidence,
    detail: IMAGES.interiorSuite,
    aerial: IMAGES.abuDhabiCorniche,
  },
];

export function getProperty(slug: string): Property | undefined {
  return PROPERTIES.find((p) => p.slug === slug);
}

/** AED price formatter, e.g. 95000000 -> "AED 95,000,000". */
export function formatAED(price: number): string {
  return `AED ${price.toLocaleString('en-US')}`;
}
