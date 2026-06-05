import type { Metadata } from 'next';
import { Libre_Caslon_Text, Hanken_Grotesk } from 'next/font/google';
import './globals.css';
import 'lenis/dist/lenis.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/providers/SmoothScroll';
import Intro from '@/components/interactions/Intro';
import { SITE } from '@/lib/site';

const libreCaslon = Libre_Caslon_Text({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-libre-caslon',
  display: 'swap',
});

const hanken = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-hanken',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://meridian-estates.ae'),
  title: {
    default: `${SITE.name} — ${SITE.tagline} | Luxury Real Estate, Abu Dhabi`,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    'luxury real estate Abu Dhabi',
    'Saadiyat Island villas',
    'Al Reem penthouse',
    'Nurai Island estate',
    'UAE property advisory',
    'off-market residences',
  ],
  openGraph: {
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    type: 'website',
    locale: 'en_AE',
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
    <html lang="en" className={`${libreCaslon.variable} ${hanken.variable}`}>
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
