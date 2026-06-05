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

      {/* Cinematic editorial reveals — alternating full-bleed imagery with an
          overlapping serif title and an oversized index numeral. */}
      <section className="border-t border-outline-variant/50">
        {PROPERTIES.map((property, i) => {
          const imageRight = i % 2 === 1;
          const index = String(i + 1).padStart(2, '0');
          return (
            <article key={property.slug} className="border-b border-outline-variant/50">
              <Link
                href={`/portfolio/${property.slug}`}
                className="group block shell py-16 md:py-28"
              >
                <div className="relative grid grid-cols-12 items-center gap-y-8">
                  {/* Image */}
                  <div
                    className={`col-span-12 md:col-span-8 md:row-start-1 ${
                      imageRight ? 'md:col-start-5' : 'md:col-start-1'
                    }`}
                  >
                    <RevealImage
                      src={property.hero}
                      alt={`${property.name} — ${property.type} in ${property.area}, ${property.city}.`}
                      sizes="(max-width: 768px) 100vw, 66vw"
                      priority={i < 2}
                      className="aspect-[16/11] transition-transform duration-[1.1s] ease-smooth group-hover:scale-[1.015]"
                    />
                  </div>

                  {/* Overlapping text panel */}
                  <div
                    className={`col-span-12 md:row-start-1 md:self-center ${
                      imageRight
                        ? 'md:col-span-5 md:col-start-1'
                        : 'md:col-span-5 md:col-start-8'
                    }`}
                  >
                    <div className="bg-background p-7 md:p-9 md:shadow-ambient">
                      {/* Unified index: same placement + treatment on every row. */}
                      <div className="mb-6 flex items-center gap-4">
                        <span className="font-serif text-[40px] leading-none text-tertiary-fixed-dim md:text-[52px]">
                          {index}
                        </span>
                        <span className="h-px flex-1 bg-outline-variant/70" />
                        <span className="t-label text-secondary">Residence</span>
                      </div>
                      <p className="t-label text-secondary">
                        {property.area} · {property.city}
                      </p>
                      <h2 className="mt-3 overflow-hidden font-serif text-[32px] leading-[1.05] md:text-[44px]">
                        <span className="inline-block transition-transform duration-700 ease-smooth group-hover:-translate-y-0.5">
                          {property.name}
                        </span>
                      </h2>
                      <p className="t-body mt-4 max-w-sm text-secondary">{property.tagline}</p>

                      <div className="mt-7 flex items-end justify-between gap-6 border-t border-outline-variant/70 pt-5">
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

                      <span className="mt-7 inline-flex items-center gap-3 t-label text-on-surface">
                        <span className="link-underline">View Residence</span>
                        <ArrowRight className="h-4 w-4 transition-transform duration-500 ease-smooth group-hover:translate-x-2" />
                      </span>
                    </div>
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
