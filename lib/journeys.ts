/** Signature journeys & packages — built from Sai Saburi's listed services (Shirdi
 *  darshan, Shani Shingnapur & Aurangabad trips, custom/family/honeymoon packages,
 *  rail · flight · hotel booking) and the trips named in their Google reviews. */
import { IMAGES } from './images';

export interface Journey {
  slug: string;
  index: string;
  name: string;
  tagline: string;
  blurb: string;
  highlights: string[];
  image: string;
  duration: string;
}

export const JOURNEYS: Journey[] = [
  {
    slug: 'sai-darshan',
    index: '01',
    name: 'Shirdi Sai Darshan',
    tagline: 'Where every journey begins',
    blurb:
      'Doorstep pickup steps from the temple, darshan-time guidance and a clean cab ready whenever you are — the local package our travellers return to us for, year after year.',
    highlights: ['Darshan-time advice', 'Local sightseeing', 'Hotel booking on request'],
    image: IMAGES.journeyShirdi,
    duration: 'Half / full day',
  },
  {
    slug: 'shani-aurangabad',
    index: '02',
    name: 'Shani Shingnapur & Aurangabad',
    tagline: 'The trip our reviews talk about most',
    blurb:
      'Shani Shingnapur, Grishneshwar and the rock-cut wonders of Ellora and Aurangabad — a well-paced day or two with a polite driver and a well-kept, air-conditioned car.',
    highlights: ['Shani Shingnapur darshan', 'Ellora & Aurangabad', 'Salute-to-punctuality timing'],
    image: IMAGES.journeyCaves,
    duration: '1–2 days',
  },
  {
    slug: 'jyotirlinga-circuit',
    index: '03',
    name: 'Jyotirlinga Circuit',
    tagline: 'Trimbakeshwar · Grishneshwar · Bhimashankar',
    blurb:
      'Sacred Jyotirlingas planned around your darshan windows and your rest. Drivers who know every route, every queue and the calmest hours to arrive.',
    highlights: ['Multi-temple routing', 'Senior-friendly pacing', 'Nashik add-on'],
    image: IMAGES.journeyJyotirlinga,
    duration: '1–3 days',
  },
  {
    slug: 'bookings-packages',
    index: '04',
    name: 'Travel Desk & Custom Packages',
    tagline: 'Rail · Flight · Hotel · Family & Honeymoon',
    blurb:
      'A full travel desk under one roof — rail and flight tickets, domestic hotel booking, and custom family and honeymoon packages across India, all at transparent, convenient prices.',
    highlights: ['Rail & flight booking', 'Domestic hotel booking', 'Family & honeymoon tours'],
    image: IMAGES.journeyTransfer,
    duration: 'Tailored',
  },
];
