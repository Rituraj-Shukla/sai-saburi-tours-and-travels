# Sai Saburi — Tours & Travels

Premium website for **Sai Saburi Tours & Travels**, a family-run, women-led travel
agency in Shirdi, Maharashtra (est. 2005 · 5.0★ across 66 Google reviews). Sai darshan,
Shani Shingnapur & Aurangabad tours and Jyotirlinga circuits, plus a full travel desk:
rail / flight / hotel booking and custom family & honeymoon packages.

A single-page, cinematic Home experience: sacred-journey hero, trust strip, family-run
value pillars, signature journeys & packages, fleet showcase, the owner story, real
Google testimonials, and a call/WhatsApp CTA.

> Cloned from the *Fun On The Wheels* build and re-skinned with a distinct
> **"Sandalwood & Temple Teal"** identity (sandal-cream / peacock-teal / saffron-marigold,
> softly rounded shapes) while keeping the same structure, GSAP motion and tech stack.

## Tech stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15 (App Router) · React 19 · TypeScript |
| Styling | Tailwind CSS 3.4 (token-driven) |
| Fonts | `next/font`: Fraunces (display), Mukta (body), Great Vibes (logo script) |
| Motion | GSAP 3 + ScrollTrigger + SplitText, Lenis smooth-scroll (synced to GSAP ticker) |
| Images | `next/image`; **all assets self-hosted in `/public`** (no remote dependency) |

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build && npm run start   # production
```

## Structure

```
app/            App Router — layout, home page, template, not-found, globals.css
components/     Nav, Hero, Footer, StatBand, CTASection, Logo, icons, interactions/*
lib/            Typed content + config — site.ts, journeys.ts, fleet.ts, images.ts
public/         All images — hero/, cta/, journeys/, fleet/, videos/
docs/           RESEARCH.md (business + review analysis), HOMEPAGE-CONCEPT.md
```

All copy and figures are content — edit the `lib/*.ts` data files to update the site.

## Image credits

Vehicle & landmark photos from **Wikimedia Commons** (CC-licensed); scenic/atmospheric
shots from **Unsplash**. All downloaded and self-hosted under `/public`.
Replace with the client's own photography when available.

## Notes

- The navbar logo is an SVG car mark + web-font wordmark. For a pixel-exact logo, drop the
  original artwork at `public/logo.png` and wire it into `components/Logo.tsx`.
- Business facts (5.0★ / 66 reviews, est. 2005, owner Mrs. Mayuri Deore, driver-guide Manoj
  Patil, services & contact) are sourced from the Google Maps listing and the client's
  business profile. Testimonials are verbatim 5★ Google reviews.
- Replace the placeholder `/public` imagery with the client's own photography when available.
