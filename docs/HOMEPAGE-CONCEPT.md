# Home Page — Design Concept (for approval)

Brand: **Fun On The Wheels Tours & Travels** · Positioning: balanced **pilgrimage + corporate**.
Status: concept only — no build until approved + logo.png received.

## Design language

- **Palette.** Deep ink `#1C1917` base · temple-gold `#CA8A04` accent · warm off-white `#FAFAF9` (light) · stone greys for support. Gold used sparingly — eyebrows, rules, CTA, stars. Dark mode = ink canvas with gold; light mode = off-white with ink text + gold. Logo auto-swaps (dark logo on light, light logo on dark).
- **Type.** Display: **Bodoni Moda** (sacred, editorial, high-contrast serif) for hero + section titles. UI/body: **Jost** (geometric, clean, modern, trustworthy). Rhythm: oversized display (clamp 3–6rem) → calm 16–18px body, 1.6 line-height, 65–75ch.
- **Feel.** Premium-but-warm. Editorial whitespace, thin gold hairlines, soft film-grain/vignette over imagery. Cinematic Maharashtra/temple/road photography — NOT generic tourist stock.

## Section flow (top → bottom)

1. **Nav** — floating, glass, top-4 inset. Logo left · links (Journeys · Fleet · About · Contact) · phone CTA "+91 91759 31544" + subtle theme toggle tucked by it. Magnetic CTA, hide-on-scroll-down/show-on-up.
2. **Hero** — full-viewport cinematic video/still of a car on a Maharashtra temple road at golden hour. Bodoni headline reveals line-by-line (mask-up): *"Sacred journeys, cared for like our own."* Sub: owner-led Shirdi travel. Dual CTA: **Plan my journey** (gold) + **View fleet** (ghost). Trust strip pinned bottom: ★ 4.8 · 141 reviews · Open 24/7 · Owner-led since-years. Slow parallax + grain.
3. **Trust bar** — animated count-up stats: 4.8★ rating · 141+ reviews · 24/7 · 100% doorstep drop. Pre-empts the fare/drop pain points up front.
4. **Value proposition** — 3 pillars from real reviews: **Safe** (felt completely secure) · **Honest fares** (transparent, doorstep, no surprises) · **Cared for** (owner follows up after your trip). Stagger-in on scroll.
5. **Signature journeys (Services preview)** — bento/asymmetric cards: Shirdi Sai Darshan · Jyotirlinga Circuit (Trimbakeshwar/Grishneshwar/Bhimashankar) · Ajanta & Ellora Heritage · Airport & Outstation Transfers (the corporate/practical track). Hover = image zoom + gold underline reveal.
6. **Fleet preview** — horizontal scroll/snap of premium cards: Sedan (Dzire) · MPV (Ertiga) · Premium SUV (Innova) · Tempo Traveller · Coach. Each: capacity, comfort, use-case. Tilt/parallax micro-interaction. "Clean cars" promise echoed.
7. **The honesty story** — editorial pull-quote feature built on the returned-foot-chain anecdote → "The kind of people who courier a lost anklet back to you." Differentiator no competitor can copy.
8. **Testimonials / review showcase** — real 5★ quotes (Atishay, Chukkala the solo traveler, Ram from USA, Vi from Nepal). Marquee or fade-carousel + reviewer name + ★. Safety + international reach front and center.
9. **Owner / experience highlight** — Happy Singh, family-run, multilingual, 24/7, near temple entrance. Warm human trust.
10. **CTA band** — "Tell us your dates, we'll plan the rest." Gold band, magnetic button → Contact.
11. **Footer** — address (Opp. Laxmi Temple, Pimpalwadi Rd, Shirdi 423109), phone, hours, map link, quick links, logo. Quiet, premium.

## Motion system

- Reveal: mask-up text + opacity/translate stagger (IntersectionObserver, 400–600ms, ease curves).
- Scroll: hero parallax, fleet tilt, section pinning where tasteful.
- Hover: magnetic CTAs, image-zoom cards, gold underline draws.
- Theme switch: cross-fade, no layout shift, persisted to localStorage.
- All gated behind `prefers-reduced-motion`. Purposeful only — quality signal, no gimmicks.

## Copy voice

Warm, confident, devotional-but-modern. Short. Trust-first. Every line earns belief. No lorem, no generic travel filler.
