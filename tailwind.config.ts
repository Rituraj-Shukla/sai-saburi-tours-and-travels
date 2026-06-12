import type { Config } from 'tailwindcss';

/**
 * Sai Saburi Tours & Travels design tokens — "Sandalwood & Temple Teal".
 * Devotional warmth: sandal-cream surfaces / deep peacock-teal ink / saffron-marigold
 * accent. Softly rounded shape language, 8px baseline, calmer 128px vertical rhythm.
 * Differentiated from the Fun On The Wheels base (limestone / charcoal / champagne-gold,
 * sharp 0px corners) while keeping the same structure, GSAP motion and smooth scroll.
 */
const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Surfaces — soft sandalwood (chandan) cream base + tonal tiers. Warmer and
        // creamier than the limestone base it replaces, with a faint green undertone.
        surface: '#F7F2E9',
        'surface-dim': '#E4DBC9',
        'surface-bright': '#FCF9F2',
        'surface-container-lowest': '#FFFFFF',
        'surface-container-low': '#F1EBDD',
        'surface-container': '#EBE4D3',
        'surface-container-high': '#E4DBC9',
        'surface-container-highest': '#DCD2BF',
        'surface-variant': '#E4DBC9',
        background: '#F7F2E9',
        // Ink — very dark teal-charcoal, never cold grey.
        'on-surface': '#15211E',
        'on-surface-variant': '#44524D',
        'on-background': '#15211E',
        'inverse-surface': '#103833',
        'inverse-on-surface': '#F1ECE0',
        outline: '#7C8A82',
        'outline-variant': '#CDC6B6',
        // Primary — deep peacock / temple teal. Carries every dark band (hero base,
        // stat band, story, footer, CTA) with a devotional, women-led calm.
        primary: '#0E3B36',
        'on-primary': '#F7F2E9',
        'primary-container': '#103833',
        'on-primary-container': '#9DB3AC',
        'primary-fixed': '#CDE0DB',
        'primary-fixed-dim': '#A9C6BF',
        'on-primary-fixed': '#06231F',
        'on-primary-fixed-variant': '#2E4A44',
        'inverse-primary': '#A9C6BF',
        // Secondary — muted teal-slate for calm body copy (AA on cream).
        secondary: '#4E5E59',
        'on-secondary': '#FFFFFF',
        'secondary-container': '#DCE5DF',
        'on-secondary-container': '#3A4641',
        // Tertiary / saffron-marigold accent — the single devotional signal. Deep
        // saffron reads AA on cream; the brighter "fixed" marigold sits on teal.
        tertiary: '#B45816',
        'on-tertiary': '#FFFFFF',
        'tertiary-container': '#2A1404',
        'on-tertiary-container': '#F0A85A',
        'tertiary-fixed': '#EFA64A',
        'tertiary-fixed-dim': '#DB9038',
        gold: '#B45816',
        'on-tertiary-fixed': '#2A1404',
        'on-tertiary-fixed-variant': '#6B3A10',
        // Feedback
        error: '#ba1a1a',
        'on-error': '#ffffff',
        'error-container': '#ffdad6',
        'on-error-container': '#93000a',
      },
      spacing: {
        unit: '8px',
        gutter: '36px',
        'margin-mobile': '24px',
        'margin-desktop': '72px',
        'section-gap': '128px',
      },
      maxWidth: {
        'container-max': '1440px',
      },
      fontFamily: {
        serif: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
        script: ['var(--font-script)', 'cursive'],
      },
      fontSize: {
        'display-xl': ['120px', { lineHeight: '0.95', letterSpacing: '-0.03em', fontWeight: '400' }],
        'display-lg': ['88px', { lineHeight: '0.98', letterSpacing: '-0.025em', fontWeight: '400' }],
        'display-lg-mobile': ['46px', { lineHeight: '1.02', letterSpacing: '-0.02em', fontWeight: '400' }],
        'headline-lg': ['52px', { lineHeight: '1.06', letterSpacing: '-0.015em', fontWeight: '400' }],
        'headline-md': ['32px', { lineHeight: '1.12', letterSpacing: '-0.01em', fontWeight: '400' }],
        'body-lg': ['18px', { lineHeight: '1.6', letterSpacing: '0.005em', fontWeight: '400' }],
        'body-md': ['16px', { lineHeight: '1.55', fontWeight: '400' }],
        'label-caps': ['11px', { lineHeight: '1.3', letterSpacing: '0.2em', fontWeight: '600' }],
        quote: ['26px', { lineHeight: '1.45', fontWeight: '400' }],
      },
      borderRadius: {
        // Soft, hospitable shape language — gently rounded surfaces (the clearest
        // structural break from the base brand's hard 0px corners).
        none: '0',
        sm: '6px',
        DEFAULT: '10px',
        md: '12px',
        lg: '16px',
        xl: '22px',
        '2xl': '28px',
        '3xl': '36px',
        full: '9999px',
      },
      boxShadow: {
        ambient: '0px 20px 40px rgba(26, 26, 26, 0.04)',
        lift: '0px 30px 60px rgba(26, 26, 26, 0.08)',
      },
      letterSpacing: {
        widest: '0.2em',
        caps: '0.15em',
      },
      transitionTimingFunction: {
        curtain: 'cubic-bezier(0.16, 1, 0.3, 1)',
        smooth: 'cubic-bezier(0.33, 1, 0.68, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        kenburns: {
          '0%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1.12)' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'fade-up': 'fadeUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        kenburns: 'kenburns 18s ease-out alternate infinite',
      },
    },
  },
  plugins: [],
};

export default config;
