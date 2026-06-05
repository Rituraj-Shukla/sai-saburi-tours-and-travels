# Meridian Estates

A luxury real-estate marketing site for Abu Dhabi, UAE — **Next.js (App Router) + React + TypeScript + Tailwind**. Editorial-minimalist design (Libre Caslon Text + Hanken Grotesk, warm limestone / warm-charcoal / champagne-gold, sharp corners) with a handcrafted, award-tier motion layer.

## Motion stack (the "alive" layer)

| Library | Role |
| --- | --- |
| **Lenis** | Physics-based smooth scroll, synced to the GSAP ticker (one rAF loop, no jank) |
| **GSAP + ScrollTrigger** | All scroll-driven motion: parallax, clip reveals, pinned horizontal gallery, counters |
| **GSAP SplitText** | Line-by-line masked headline reveals (`AnimatedText`) |
| **@gsap/react** | `useGSAP` for automatic context cleanup |

Handcrafted interactions live in `components/interactions/`:
`Cursor` (bespoke magnetic cursor), `Magnetic` (CTA pull), `AnimatedText` (kinetic headings),
`RevealImage` (clip-path + parallax), `Marquee` (scroll-velocity reactive), `Counter`
(count-up stats), `Intro` (one-time entrance curtain). Heroes (`components/Hero.tsx`) play
self-hosted cinematic video (`public/videos/`) with poster fallbacks.

**Everything is gated by `prefers-reduced-motion`** and degrades gracefully (e.g. the pinned
horizontal gallery becomes a native swipe carousel on touch / small screens via
`gsap.matchMedia`).

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Structure

| Path | Purpose |
| --- | --- |
| `app/` | Pages — Home, `portfolio`, `portfolio/[slug]`, `services`, `heritage`, `contact` |
| `components/` | `Nav`, `Footer`, `Hero`, `Reveal`, `PropertyCard`, `StatBand`, `CTASection`, `ContactForm`, `ui`, `icons` |
| `lib/` | `site.ts` (brand/config), `properties.ts` (listings + helpers), `images.ts` (image registry) |
| `tailwind.config.ts` | Design tokens (colors, type scale, spacing) from the brand system |
| `app/globals.css` | Base styles, motion primitives, `prefers-reduced-motion` handling |

## Customising

- **Brand / contact / offices / stats** → `lib/site.ts`
- **Listings** → `lib/properties.ts` (the `[slug]` detail pages generate statically from this)
- **Imagery** → `lib/images.ts` — curated Unsplash stills; replace with the client's own
  photography in one place. (`next.config.mjs` allow-lists `images.unsplash.com`.)
- **Hero video** → `public/videos/*.mp4` — licensed cinematic drone footage (royalty-free,
  Pexels). Swap any clip for AI-generated or real drone footage of the actual properties; the
  `video` prop on `<Hero>` is the only reference.

## Notes

- Animations (reveals, hero parallax, hover scales) are transform/opacity only and fully disabled
  under `prefers-reduced-motion`.
- The contact form is front-end only (success state on submit). Wire `components/ContactForm.tsx`
  to an email/CRM endpoint to make it live.
