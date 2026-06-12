/**
 * Local image registry — every asset is self-hosted in /public, so the site has
 * NO remote image dependency and nothing can break offline or on a fresh deploy.
 *
 * Sources: vehicle + landmark photos from Wikimedia Commons (CC-licensed);
 * scenic/atmospheric shots from Unsplash, downloaded into the repo.
 * next/image still re-optimises these (AVIF/WebP + responsive sizes).
 */
export const IMAGES = {
  // Hero / atmospheric
  heroRoad: '/hero/temple-golden.jpg',
  ctaNightRoad: '/cta/gopuram-dusk.jpg',

  // Signature journeys
  journeyShirdi: '/journeys/shirdi-samadhi.jpg', // Shirdi Sai Baba Samadhi murti
  journeyJyotirlinga: '/journeys/jyotirlinga.jpg',
  journeyCaves: '/journeys/ellora.jpg', // Ellora rock-cut caves, Maharashtra
  journeyTransfer: '/journeys/transfer.jpg',
  storyTemple: '/journeys/story-heritage.jpg',

  // Fleet (accurate models)
  fleetSedan: '/fleet/sedan.jpg', // Hyundai Verna (new gen)
  fleetMpv: '/fleet/mpv.jpg', // Toyota Innova Crysta
  fleetSuv: '/fleet/suv.jpg', // Toyota Fortuner
  fleetTempo: '/fleet/tempo.jpg', // Force Tempo Traveller
  fleetCoach: '/fleet/coach.jpg',
} as const;

export type ImageKey = keyof typeof IMAGES;
