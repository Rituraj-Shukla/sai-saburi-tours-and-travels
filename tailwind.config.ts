import type { Config } from 'tailwindcss';

/**
 * Meridian Estates design tokens — ported verbatim from the reference DESIGN.md.
 * Editorial Minimalism: charcoal / warm-ivory / champagne-gold, sharp 0px corners,
 * 8px baseline, aggressive 160px vertical rhythm.
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
        // Surfaces — warm limestone base + tonal tiers (reads "expensive": warmer,
        // softer and lower-key than a clinical white).
        surface: '#F4EFE7',
        'surface-dim': '#DCD4C6',
        'surface-bright': '#FBF8F2',
        'surface-container-lowest': '#FFFFFF',
        'surface-container-low': '#EFE9DF',
        'surface-container': '#E9E2D6',
        'surface-container-high': '#E2DACC',
        'surface-container-highest': '#DCD4C6',
        'surface-variant': '#E2DACC',
        background: '#F4EFE7',
        // Ink — warm near-black, never cold grey.
        'on-surface': '#1A1714',
        'on-surface-variant': '#4A453D',
        'on-background': '#1A1714',
        'inverse-surface': '#26221E',
        'inverse-on-surface': '#F2ECE2',
        outline: '#8A8275',
        'outline-variant': '#CFC7B8',
        // Primary — deep warm charcoal (richer than pure black under warm light).
        primary: '#100E0C',
        'on-primary': '#F4EFE7',
        'primary-container': '#1A1714',
        'on-primary-container': '#9A9183',
        'primary-fixed': '#E2DACC',
        'primary-fixed-dim': '#C7BDAA',
        'on-primary-fixed': '#1A1714',
        'on-primary-fixed-variant': '#4A453D',
        'inverse-primary': '#C7BDAA',
        // Secondary — warm taupe.
        secondary: '#6E665A',
        'on-secondary': '#FFFFFF',
        'secondary-container': '#E0D9CC',
        'on-secondary-container': '#5F584D',
        // Tertiary / champagne gold accent — the single luxury signal.
        tertiary: '#A8884F',
        'on-tertiary': '#FFFFFF',
        'tertiary-container': '#2A1E0A',
        'on-tertiary-container': '#C9A86A',
        'tertiary-fixed': '#D8B981',
        'tertiary-fixed-dim': '#BC9C63',
        gold: '#A8884F',
        'on-tertiary-fixed': '#2A1E0A',
        'on-tertiary-fixed-variant': '#5C461F',
        // Feedback
        error: '#ba1a1a',
        'on-error': '#ffffff',
        'error-container': '#ffdad6',
        'on-error-container': '#93000a',
      },
      spacing: {
        unit: '8px',
        gutter: '32px',
        'margin-mobile': '24px',
        'margin-desktop': '80px',
        'section-gap': '160px',
      },
      maxWidth: {
        'container-max': '1440px',
      },
      fontFamily: {
        serif: ['var(--font-libre-caslon)', 'Georgia', 'serif'],
        sans: ['var(--font-hanken)', 'system-ui', 'sans-serif'],
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
        // Sharp shape language — right angles everywhere.
        none: '0',
        DEFAULT: '0',
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
