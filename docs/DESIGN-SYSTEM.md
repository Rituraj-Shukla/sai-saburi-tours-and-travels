# Meridian Estates — Luxury Design System & Build Brief

> A complete, self-contained reference for the visual language, motion system, and
> architecture of the Meridian Estates website (luxury real estate, Abu Dhabi / UAE).
> Hand this file to any AI or designer: it should be enough to **recreate the site,
> understand *why* each decision was made, and push it further toward top-1% quality.**

---

## 0. One-paragraph essence

Editorial minimalism for ultra-high-net-worth real estate. Think the precision of
Apple, the editorial calm of Aman, the prestige of Sotheby's, the emotional restraint
of Rolls-Royce — without copying any of them. The site must feel **alive, slow, and
expensive**: quiet confidence over decoration, negative space over density, one
champagne-gold signal over a rainbow, real cinematic motion over flashy effects. Every
interaction should whisper craftsmanship.

---

## 1. Tech stack (what powers the feel)

| Layer | Choice | Why |
|---|---|---|
| Framework | **Next.js 15 (App Router) + React 19 + TypeScript** | Static-export speed, SEO, image optimization |
| Styling | **Tailwind CSS 3.4** with a token-driven config | Consistent scale, fast iteration |
| Smooth scroll | **Lenis** (synced to the GSAP ticker) | Physics-based momentum scroll = the #1 "premium" tell |
| Motion | **GSAP 3.15 + ScrollTrigger + SplitText** via `@gsap/react` (`useGSAP`) | Scroll-driven cinema, kinetic type |
| Fonts | **`next/font`** (self-hosted Google fonts) | No render-blocking external request |
| Images | **`next/image`** (AVIF/WebP, responsive `sizes`, lazy) | Fast, sharp, light |
| Video | Self-hosted MP4 hero loops (`muted/loop/playsInline/autoPlay`, poster image) | "Living" heroes |

**Performance rules baked in:** transform/opacity-only animation (GPU), `prefers-reduced-motion`
everywhere, heavy effects gated to desktop / fine-pointer, `preconnect` to the image CDN,
one rAF loop shared by Lenis + GSAP (no scroll-jank).

---

## 2. Typography (the voice)

Two families, a strict editorial hierarchy.

- **Display / headlines — `Libre Caslon Text`** (serif). Literary, high-contrast, the
  "authoritative print journal" voice. Used large, with **tight negative tracking**.
- **Body / UI / labels — `Hanken Grotesk`** (sans). Sharp, contemporary, quiet.
- **ALL-CAPS labels** (`label-caps`) for eyebrows, nav, meta — wide `0.2em` tracking,
  weight 600, 11px. This rhythmic, architectural caps style is a luxury signature.

### Type scale (tokens — px)

| Token | Size | Line-height | Tracking | Use |
|---|---|---|---|---|
| `display-xl` | 120 | 0.95 | −0.03em | Hero headline (desktop) |
| `display-lg` | 88 | 0.98 | −0.025em | Page titles |
| `display-lg-mobile` | 46 | 1.02 | −0.02em | Hero/title on phones |
| `headline-lg` | 52 | 1.06 | −0.015em | Section headings |
| `headline-md` | 32 | 1.12 | −0.01em | Card titles |
| `body-lg` | 18 | 1.6 | 0.005em | Lead paragraphs |
| `body-md` | 16 | 1.55 | — | Body |
| `label-caps` | 11 | 1.3 | **0.2em** | Eyebrows, nav, meta |
| `quote` | 26 | 1.45 | — | Pull-quotes (italic serif) |

**Principles:** dramatic scale contrast (a 120px serif next to an 11px caps label is the
whole game). Generous body line-height so text "breathes." Italic Caslon reserved for
pull-quotes. Numerals (prices, stats) set in serif for gravitas.

### Typographic *motion* (type as experience, not just information)

- **Line reveal:** headings split into lines (GSAP SplitText, `mask: 'lines'`) that rise
  from behind a clip on scroll-in (`yPercent 115 → 0`, `expo.out`, staggered).
- **Word reveal:** for short, punchy statements — words rise individually (smaller stagger).
- **Count-up numerals:** stats animate `0 → value` when the band enters view
  (IntersectionObserver-triggered so it never fires off-screen).

---

## 3. Color (warm, material, restrained)

Rooted in the materiality of the Emirates: limestone, warm charcoal, champagne. **Warmer
and softer than clinical white/black — that warmth is what reads "expensive."**

| Role | Hex | Notes |
|---|---|---|
| Surface / background | `#F4EFE7` | Warm limestone ivory (the canvas) |
| Surface tiers | `#EFE9DF` → `#E9E2D6` → `#E2DACC` | Tonal layering, no shadows needed |
| Surface dim | `#DCD4C6` | Image placeholders |
| Ink (on-surface) | `#1A1714` | Warm near-black — never cold grey |
| Secondary text | `#6E665A` | Warm taupe |
| Primary (dark surfaces) | `#100E0C` | Deep warm charcoal (footer, stat band, CTAs) |
| On-primary | `#F4EFE7` | Ivory text on charcoal |
| **Gold accent** | `#A8884F` (and light `#D8B981`) | **The single luxury signal — used sparingly** |
| Outline / hairlines | `#CFC7B8` | 0.5–1px technical lines |

**Discipline:** one accent (gold) for high-value signals only — active states, eyebrows on
dark, hairlines, count-up numbers. Hierarchy via **tonal layering + atmosphere**, not drop
shadows. Dark sections (footer/stat/CTA) create rhythm: light → dark → light.

---

## 4. Shape, spacing, grid

- **Shape language: strictly sharp (0px corners).** Right angles everywhere — communicates
  the precision of marble/glass/steel. Only exception: pill nav/buttons where intentional.
- **8px baseline.** Everything aligns to it.
- **Spacing tokens:** `section-gap 160px`, `margin-desktop 80px`, `margin-mobile 24px`,
  `gutter 32px`, `container-max 1440px`.
- **Grid:** 12-column on desktop, asymmetric / off-center placements for a bespoke
  (non-templated) feel. Aggressive vertical rhythm (160px) so each section is "one moment."
- **Elevation:** ambient diffused shadow only when functional — `0 20px 40px rgba(26,26,26,.04)`;
  a stronger "lift" for floating cards.

---

## 5. Motion & cinematics (the "alive" layer)

The differentiator. All slow, intentional, expensive. **Never flashy, never trendy.**

| Effect | What it does | How |
|---|---|---|
| **Smooth scroll** | Momentum/inertia scrolling, no jump | Lenis (`lerp 0.09`, `duration 1.25`), driven by `gsap.ticker` |
| **Entrance curtain** | One-time charcoal intro: wordmark rises, hairline draws, panel lifts | GSAP timeline, once per tab (sessionStorage), gated to non-reduced-motion |
| **Hero reveal** | Video un-clips from inset, headline lines rise, copy fades up | `clip-path inset()` + SplitText, sequenced after the intro |
| **Hero parallax** | Background drifts slower than foreground (depth) | GSAP scrub `yPercent` |
| **Image reveal** | Clip-path "curtain" wipe + inner parallax drift on every photo | `clip-path inset(0 0 100% 0) → 0` + counter-scroll `yPercent` |
| **Pinned horizontal gallery** | Vertical scroll glides sideways through residences | ScrollTrigger `pin` + `x` scrub via `gsap.matchMedia` (desktop only; swipe carousel on mobile) |
| **Velocity marquee** | Location names scroll; speed/direction react to scroll velocity | GSAP loop + ScrollTrigger `getVelocity()` |
| **Count-up stats** | Numbers tick 0 → value when in view | IntersectionObserver + GSAP tween |
| **Magnetic buttons** | CTA drifts toward the cursor, eases back | `gsap.quickTo` (fine-pointer only) |
| **Ambient cursor light** | Warm gold glow drifts behind the footer, near-invisible until you move | pointer-tracked radial gradient, `mix-blend: screen`, desktop only |
| **Page transition** | Slow opacity wash on route change | `template.tsx`, opacity-only (never transform — would break fixed/pinned) |
| **Hover micro-interactions** | Image scale (1.02, 900ms), grayscale→color, underline draw, arrow slide | CSS transitions, 300–900ms, `ease` cubic-bezier(0.16,1,0.3,1) |
| **Film grain** | Faint analog noise over everything (kills the flat "digital" look) | Fixed SVG `feTurbulence` data-URI, `mix-blend: soft-light`, ~0.5 opacity |

**Easing signature:** `cubic-bezier(0.16, 1, 0.3, 1)` (expo-out) for reveals; `expo.inOut`
for the curtain; `none` (linear) for scrubbed parallax. Durations 1.1–1.6s for hero moments,
300–700ms for micro-interactions. **Slowness = luxury.**

**Scrollbar:** no loud custom scrollbar — Lenis provides the smoothness; native bar stays
minimal. The *feel* of the scroll is the effect, not a styled track.

---

## 6. Component & section anatomy

### Navigation
Floating top bar. Transparent over dark heroes (white text); turns to a frosted limestone
pill with ink text once scrolled OR on light-top pages (page-aware contrast). Hides on
scroll-down, returns on scroll-up. Wide-spaced caps links + a solid "Private Enquiry" pill.
Mobile: full-screen drawer.

### Hero
Full-height (`100svh`) video loop with poster fallback, gradient overlay, kinetic headline,
caps eyebrow (location), scroll cue. Clip-reveal + parallax. The cinematic first impression.

### Editorial statement / philosophy
Centered, max-width, big serif headline (line or word reveal) + a single restrained paragraph.
A "breath" between heavier sections.

### Marquee strip
Thin band of scrolling location names in italic serif — a subtle sign of life between sections.

### Signature residences — pinned horizontal gallery
The showpiece. Desktop: section pins, cards glide sideways as you scroll. Mobile: snap-scroll
swipe carousel. Intro panel + property panels + outro CTA panel.

### Stat band (dark)
Charcoal band, 4 oversized gold serif figures that **count up**, caps labels beneath.

### Portfolio (cinematic editorial)
**Not cards.** Each residence is a full-width row: a wide cinematic image with a **white
limestone info-card floating *on top of* the image** (alternating sides on desktop, overlapping
the image bottom on mobile), an **oversized faint index numeral** (01, 02…), serif name,
tagline, price + specs, "View Residence" arrow. Layered, editorial, magazine-like.

### Services (editorial two-column)
Alternating rows: image (7 cols) + copy (4 cols) with a single breathing gutter, tied together
by a large index numeral and a hairline. Balanced, never disconnected.

### Heritage / About
Hero → conviction statement → italic pull-quote (bordered, centered) → dark stat band →
"Visionary Leadership" grayscale portraits that warm to color on hover.

### Contact
Two intents, clearly separated: **Private Enquiry** (bottom-border-only form in a tactile
"registration" style, floating caps labels) and **Speak With Us Directly** (dark contact rail:
phone/email/HQ). Office cards with skyline imagery below.

### Closing CTA (atmospheric)
A vignetted background image (opacity 40 + radial dark wash) behind a gold eyebrow, kinetic
headline, and magnetic buttons. Gives the brand's final word its own cinematic surface —
distinct from the flat footer beneath.

### Footer (the closing experience)
A *conclusion*, not a dead end:
1. "The Final Word" invitation line + "Begin the Enquiry" arrow link.
2. Four columns (Contact / Offices / Explore / Private Briefings + newsletter).
3. **Oversized stacked wordmark monument** — `MERIDIAN` / `ESTATES` at ~12.5vw, 12% opacity,
   each word on its own line so the full name always reads (never clipped). The brand
   "exhaling."
4. Bottom bar (© + socials).
5. **Ambient cursor-reactive warm glow** drifting in the negative space (desktop).

---

## 7. Imagery direction

- High-definition architectural photography framed **as fine art** — generous negative space,
  full-bleed within containers, strict aspect-ratio crops (16/8, 16/10, 4/5, 4/3).
- **Editorial grayscale → color** on advisory/people imagery (hover or in-view).
- Every image enters with a **clip-path reveal + subtle inner parallax** (never a hard pop-in).
- `next/image` everywhere: AVIF/WebP, responsive `sizes`, lazy below the fold, `priority` for
  the LCP hero.
- **Honest limitation in the current build:** imagery is curated stock (Unsplash) + stock drone
  video. See §9 — replacing these is the single biggest lever to reach top 1%.

---

## 8. Accessibility & robustness (non-negotiable, even in luxury)

- `prefers-reduced-motion`: all reveals snap to final state, parallax/curtain/marquee disabled.
- Keyboard focus rings (hairline, offset). Alt text on meaningful images. Labelled form inputs.
- Contrast ≥ 4.5:1 (warm ink on limestone passes comfortably).
- No horizontal scroll at any width (375 / 768 / 1024 / 1440). Touch targets ≥ 44px.
- Heavy effects **gated** to fine-pointer / ≥768px; graceful fallbacks (swipe gallery, poster).
- Failsafes: intro can never trap the page; never hide the native cursor unless a working
  replacement is guaranteed.

---

## 9. The leap to top 1% (what separates "beautiful template" from Aman/Sotheby's)

Honest hierarchy of impact. **Code is ~80% there; brand/content is the gap.**

1. **Commissioned visuals (biggest lever).** Real photographer, one signature 60-sec film,
   the *actual* properties, art direction. Stock is the #1 tell — replace every asset.
2. **True, specific content.** Real figures, real people, provenance, architect names, years.
   Luxury copy is concrete and restrained — kill vague superlatives ("the discerning few").
3. **Product depth for UHNW.** Per residence: gallery + lightbox, floor plans, interactive map
   + neighborhood intelligence, private video tour, downloadable dossier (PDF), named advisor,
   multi-currency. A brochure → a tool.
4. **Bespoke type + Arabic.** License a distinctive display cut (refined Didone/Caslon) and pair
   a proper Arabic face (essential for UAE). Real optical kerning on big headlines.
5. **Art-directed motion *per page*** — one signature moment each (a hero that parts, a map that
   draws, a chapter that scrolls horizontally), not one reusable reveal applied everywhere.
   Tasteful WebGL/shader only where it earns its weight (subtle light, displacement).
6. **Brand craft at the edges.** Custom monogram + favicon + OG social cards, a designed loading
   identity, a designed 404, EN/AR i18n, currency switch, AAA accessibility.
7. **Credibility & discretion layer.** Press lockups, transaction record (tastefully), RERA/DLD
   licensing, NDA/discretion language, testimonials with real attributions, concierge-grade
   enquiry (WhatsApp/iMessage, response-SLA).

**Verdict to beat:** UX/code ≈ 8.5/10, brand/content ≈ 3/10. The next leap is **assets +
concept + product depth**, not more animation.

---

## 10. The Recombination Engine — how an AI should out-think the human default

You asked for the "A+B=D, Z+Y=W → therefore try A+Z, then W+B+C" method. Formalize it. This is
how to generate designs *better than a single human pass* — by systematic cross-pollination
instead of one linear attempt.

### 10.1 Decompose references into atomic "moves"
Take 4–6 best-in-class sites (e.g. Aman, Sotheby's Concierge Auctions, OKO Group, Zaha Hadid
Architects, Rolls-Royce, an Awwwards SOTD). Break each into **atomic design moves** — the
smallest reusable units:

- `A` = Aman's full-bleed silence + 1 line of caps type over a still film
- `B` = Sotheby's serif price typography + provenance line
- `C` = a horizontal chapter-scroll gallery
- `Y` = Rolls-Royce's slow material close-up + reveal-on-scroll
- `Z` = an architecture firm's index-numeral + hairline editorial grid
- … (label dozens of these)

### 10.2 Score each move on luxury axes
Rate every move 1–5 on: **calm, materiality, motion-quality, hierarchy clarity, memorability,
performance cost.** Keep only high scorers.

### 10.3 Recombine across systems (the core idea)
- Site 1 gives the winning **`A + B`** (composition + type).
- Site 2 gives the winning **`Z + Y`** (grid + material motion).
- **Don't copy either whole.** Synthesize: **`A + Z`** (Aman's silence wearing the architect's
  editorial grid) → a *new* third solution `D`. Then layer **`D + B + C`** (add Sotheby's
  numerals + a horizontal chapter) → solution `W`.
- Keep the cross-products that increase calm *and* memorability; discard combinations that add
  noise. The goal is **emergent novelty** — a look neither reference had alone.

### 10.4 Generate many, judge ruthlessly
For each key surface (hero, gallery, footer, residence page), produce **5–8 recombined
variants**, not one. Render them, score against §2–§6 tokens and the luxury axes, kill the
weak, breed the survivors (take the best half of variant A + best half of variant C → variant
A/C). Iterate 3–4 generations. This try-error-breed loop is exactly where an AI beats a single
human pass: it can explore the combinatorial space cheaply.

### 10.5 Constrain with the brand's invariants
Recombination is free to remix layout, motion, and composition — but **must obey the invariants**:
sharp 0px corners, Caslon + Hanken, warm limestone/charcoal/one gold, 160px rhythm, slow
expo easing, reduced-motion safety. Invariants keep 50 variants feeling like *one* brand.

### 10.6 "Make it feel live" directives (apply to every variant)
- Nothing pops in instantly — everything *arrives* (clip, rise, fade, count).
- Motion responds to the human: scroll velocity, cursor proximity, hover, viewport entry.
- One ambient, near-subliminal background life per dark surface (light, grain, drift).
- Latency hidden: optimistic states, skeletons that match final layout, no layout shift.
- Clean + smooth: GPU-only animation, one scroll loop, lazy media, ≤ ~170KB JS, AVIF/WebP.
- The interface should feel like it's *breathing* — present, unhurried, aware of you — never busy.

---

## 11. Quick-start checklist for the next AI/designer

```
[ ] Install: next@15 react@19 tailwindcss gsap @gsap/react lenis
[ ] Port tokens from §2–§4 into tailwind.config (colors, fontSize, spacing, radius:0)
[ ] next/font: Libre Caslon Text (serif var) + Hanken Grotesk (sans var)
[ ] Providers: Lenis↔GSAP ticker; Intro curtain; (optional) magnetic + ambient on desktop
[ ] Primitives: AnimatedText (SplitText), RevealImage (clip+parallax), Counter (IO),
    Marquee (velocity), Magnetic, Hero (video+clip+parallax)
[ ] Sections per §6; gate heavy motion to ≥768/fine-pointer; respect reduced-motion
[ ] Replace ALL stock with commissioned photo/film (§9.1) — highest priority
[ ] Add product depth: gallery/lightbox, floor plans, map, brochure, EN/AR, currency (§9.3–.4)
[ ] Run the Recombination Engine (§10) to art-direct one signature moment per page
[ ] Verify: 375/768/1024/1440 no overflow, Lighthouse, reduced-motion, no broken links
```

---

*Invariants are sacred. Everything else is a variable to recombine. Build slow, build warm,
build alive.*
