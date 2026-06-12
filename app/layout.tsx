import type { Metadata } from 'next';
import { Fraunces, Mukta, Great_Vibes } from 'next/font/google';
import './globals.css';
import 'lenis/dist/lenis.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/providers/SmoothScroll';
import Intro from '@/components/interactions/Intro';
import { SITE } from '@/lib/site';

// Display — Fraunces: a warm, old-style optical serif. Softer and more humanist
// than the base brand's high-contrast Didone, fitting a devotional, family-run feel.
const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

// Body / UI — Mukta: a friendly humanist sans (Latin + Devanagari ready), calm
// and approachable, replacing the geometric Jost.
const mukta = Mukta({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

// Script — for the wordmark only.
const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-script',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://saisaburitravels.in'),
  title: {
    default: `${SITE.legalName} — ${SITE.tagline} | Shirdi Tours & Taxi`,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    'Sai Saburi Tours and Travels',
    'Shirdi tours and travels',
    'Shirdi Sai darshan package',
    'Shirdi taxi service',
    'Shani Shingnapur Aurangabad tour',
    'Jyotirlinga tour package',
    'flight rail hotel booking Shirdi',
    'family honeymoon packages Shirdi',
  ],
  openGraph: {
    title: `${SITE.legalName} — ${SITE.tagline}`,
    description: SITE.description,
    type: 'website',
    locale: 'en_IN',
    siteName: SITE.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${mukta.variable} ${greatVibes.variable}`}>
      <body className="grain overflow-x-hidden">
        <Intro />
        <SmoothScroll>
          <Nav />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
