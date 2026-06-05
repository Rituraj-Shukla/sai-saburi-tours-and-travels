/**
 * Central image registry. Every URL here was verified to return HTTP 200 from
 * images.unsplash.com. Swap these for the client's own photography later — every
 * page references images through this file, so updates happen in one place.
 *
 * next/image re-optimises these (AVIF/WebP + responsive sizes); the `w`/`q` here
 * just bound the master the optimiser pulls.
 */
function u(id: string, w = 2000, q = 80): string {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=${q}`;
}

export const IMAGES = {
  // Hero / cinematic
  heroPenthouse: u('photo-1512917774080-9991f1c4c750', 2400),
  heroNight: u('photo-1545324418-cc1a3fa10c00', 2400),
  servicesHero: u('photo-1518684079-3c830dcef090', 2400),
  heritageHero: u('photo-1486406146926-c627a92ad1ab', 2400),
  contactBackdrop: u('photo-1512453979798-5ea266f8880c', 2000),

  // Property exteriors
  villaSaadiyat: u('photo-1613490493576-7fde63acd811', 1800),
  estateNurai: u('photo-1582407947304-fd86f028f716', 1800),
  palaceMansion: u('photo-1600596542815-ffad4c1539a9', 1800),
  villaPalm: u('photo-1580587771525-78b9dba3b914', 1800),
  villaYas: u('photo-1564013799919-ab600027ffc6', 1800),

  // Interiors / penthouses
  penthouseReem: u('photo-1600607687939-ce8a6c25118c', 1800),
  skyResidence: u('photo-1600585154340-be6161a56a0c', 1800),
  interiorLiving: u('photo-1600210492486-724fe5c67fb0', 1600),
  interiorWarm: u('photo-1600566753086-00f18fb6b3ea', 1600),
  interiorStair: u('photo-1600047509807-ba8f99d2cdde', 1600),
  interiorKitchen: u('photo-1600121848594-d8644e57abab', 1600),
  interiorSuite: u('photo-1600573472550-8090b5e0745e', 1600),
  interiorLounge: u('photo-1505691938895-1758d7feb511', 1600),
  interiorMinimal: u('photo-1502672260266-1c1ef2d93688', 1600),
  interiorDining: u('photo-1560448204-e02f11c3d0e2', 1600),

  // Architectural detail / texture
  detailFacade: u('photo-1487958449943-2429e8be8625', 1400),
  detailLines: u('photo-1493809842364-78817add7ffb', 1400),
  detailMarble: u('photo-1531973576160-7125cd663d86', 1400),
  detailVilla2: u('photo-1583608205776-bfd35f0d9f83', 1600),

  // UAE context / aerials
  abuDhabiSkyline: u('photo-1546412414-e1885259563a', 1800),
  abuDhabiCorniche: u('photo-1551041777-ed277b8dd348', 1800),
  sheikhZayedMosque: u('photo-1512632578888-169bbbc64f33', 1800),
  dubaiSkyline: u('photo-1512453979798-5ea266f8880c', 1800),

  // People / advisory
  advisoryBoardroom: u('photo-1507003211169-0a1dd7228f2d', 1600),
  portraitMan1: u('photo-1560250097-0b93528c311a', 900),
  portraitWoman1: u('photo-1573497019940-1c28c88b4f3e', 900),
  portraitMan2: u('photo-1568602471122-7832951cc4c5', 900),
  portraitMan3: u('photo-1507591064344-4c6ce005b128', 900),
} as const;

export type ImageKey = keyof typeof IMAGES;
