import type { Metadata } from 'next';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import AnimatedText from '@/components/interactions/AnimatedText';
import RevealImage from '@/components/interactions/RevealImage';
import { SectionLabel } from '@/components/ui';
import { BedIcon, AreaIcon, ArrowRight } from '@/components/icons';
import { PROPERTIES, formatAED } from '@/lib/properties';

export const metadata: Metadata = {
  title: 'The Portfolio Selection',
  description:
    'A curated selection of the Emirates’ most exceptional residences — beachfront villas, private island estates and sky penthouses across Abu Dhabi and Dubai.',
};

export default function PortfolioPage() {
  const regions = Array.from(new Set(PROPERTIES.map((p) => p.city)));

  return (
    <>
      {/* Editorial header */}
      <section className="shell pb-20 pt-40 md:pb-28 md:pt-48">
        <div className="grid grid-cols-1 items-end gap-y-10 md:grid-cols-12">
          <div className="md:col-span-8">
            <Reveal>
              <SectionLabel rule>The Collection</SectionLabel>
            </Reveal>
            <AnimatedText
              as="h1"
              className="mt-5 font-serif text-display-lg-mobile leading-[1.0] md:text-[88px] md:leading-[0.96]"
            >
              The Portfolio
              <br />
              Selection
            </AnimatedText>
          </div>
          <Reveal delay={120} className="md:col-span-4">
            <p className="t-body-lg max-w-md text-secondary">
              Each residence is selected for architectural significance, provenance and
              enduring value. Many of our finest opportunities are never published.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              <span className="t-label text-on-surface">All Regions</span>
              {regions.map((r) => (
                <span key={r} className="t-label text-secondary">
                  {r}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Cinematic editorial reveals — a wide cinematic image with the residence
          card floating ON the image (alternating side), oversized index numeral. */}
      <section className="border-t border-outline-variant/50">
        {PROPERTIES.map((property, i) => {
          const cardLeft = i % 2 === 1;
          const index = String(i + 1).padStart(2, '0');
          return (
            <article key={property.slug} className="border-b border-outline-variant/50">
              <Link
                href={`/portfolio/${property.slug}`}
                className="group block shell py-14 md:py-24"
              >
                <div className="relative">
                  {/* Cinematic image */}
                  <RevealImage
                    src={property.hero}
                    alt={`${property.name} — ${property.type} in ${property.area}, ${property.city}.`}
                    sizes="100vw"
                    priority={i < 2}
                    className="aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/8] transition-transform duration-[1.1s] ease-smooth group-hover:scale-[1.02]"
                  />

                  {/* Floating card — overlaps the image bottom on mobile, sits ON the
                      image (alternating side) on desktop. */}
                  <div
                    className={`relative z-10 mx-4 -mt-20 bg-surface-bright p-7 shadow-lift sm:mx-8 sm:-mt-24 md:absolute md:bottom-10 md:mt-0 md:w-[40%] md:max-w-md md:p-9 ${
                      cardLeft ? 'md:left-10' : 'md:right-10'
                    }`}
                  >
                    <div className="mb-5 flex items-center gap-4">
                      <span className="font-serif text-[40px] leading-none text-tertiary-fixed-dim md:text-[52px]">
                        {index}
                      </span>
                      <span className="h-px flex-1 bg-outline-variant/70" />
                      <span className="t-label text-secondary">Residence</span>
                    </div>
                    <p className="t-label text-secondary">
                      {property.area} · {property.city}
                    </p>
                    <h2 className="mt-3 font-serif text-[30px] leading-[1.05] md:text-[40px]">
                      <span className="inline-block transition-transform duration-700 ease-smooth group-hover:-translate-y-0.5">
                        {property.name}
                      </span>
                    </h2>
                    <p className="t-body mt-3 text-secondary">{property.tagline}</p>

                    <div className="mt-6 flex flex-col gap-4 border-t border-outline-variant/70 pt-5 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
                      <div>
                        <p className="t-label text-secondary">Guide</p>
                        <p className="mt-1 font-serif text-headline-md">
                          {formatAED(property.price)}
                        </p>
                      </div>
                      <div className="flex items-center gap-5 text-on-surface-variant">
                        <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.12em]">
                          <BedIcon className="h-4 w-4" /> {property.beds}
                        </span>
                        <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.12em]">
                          <AreaIcon className="h-4 w-4" /> {property.sqft.toLocaleString()}
                        </span>
                      </div>
                    </div>

                    <span className="mt-6 inline-flex items-center gap-3 t-label text-on-surface">
                      <span className="link-underline">View Residence</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-500 ease-smooth group-hover:translate-x-2" />
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          );
        })}
      </section>

      {/* Closing quote band */}
      <section className="bg-surface-container py-24 md:py-32">
        <Reveal className="shell text-center">
          <p className="mx-auto max-w-3xl font-serif text-quote italic text-on-surface-variant md:text-[30px] md:leading-[46px]">
            &ldquo;We do not sell property. We arrange the acquisition of permanence.&rdquo;
          </p>
          <p className="t-label mt-8 text-secondary">Meridian Estates</p>
        </Reveal>
      </section>
    </>
  );
}
