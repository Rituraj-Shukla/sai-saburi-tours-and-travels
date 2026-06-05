import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import Reveal from '@/components/Reveal';
import CTASection from '@/components/CTASection';
import AnimatedText from '@/components/interactions/AnimatedText';
import RevealImage from '@/components/interactions/RevealImage';
import { SectionLabel, TextLink } from '@/components/ui';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Bespoke Real Estate Services',
  description:
    'Acquisition, representation and lifestyle management — a discreet, end-to-end advisory for the world’s most discerning property owners.',
};

const SERVICES = [
  {
    no: '01',
    title: 'Acquisition',
    body: 'We source the unsourceable. Through fifteen years of relationships across the Emirates, we secure off-market residences, negotiate on your behalf and conduct rigorous architectural and legal due diligence — so you acquire with absolute conviction.',
    image: IMAGES.detailFacade,
    points: ['Off-market sourcing', 'Negotiation & structuring', 'Due diligence'],
  },
  {
    no: '02',
    title: 'Representation',
    body: 'For owners of significant residences, discretion is paramount. We represent your asset to a private, vetted network of qualified buyers, with editorial-grade presentation and absolute confidentiality at every stage.',
    image: IMAGES.detailMarble,
    points: ['Private marketing', 'Vetted buyer network', 'Confidential sale'],
  },
  {
    no: '03',
    title: 'Lifestyle Management',
    body: 'Ownership is the beginning. Our lifestyle division curates interior architects, staffing, security and yacht-to-jet logistics — ensuring each residence is maintained, and experienced, to the standard it was conceived.',
    image: IMAGES.interiorDining,
    points: ['Interior architecture', 'Estate staffing', 'Concierge & logistics'],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Hero
        image={IMAGES.servicesHero}
        video="/videos/hero-estate.mp4"
        alt="Aerial drone footage of a grand estate set within mature private grounds."
        eyebrow="The Advisory"
        title="Bespoke Real Estate Services"
        align="left"
        overlay="strong"
        height="tall"
      />

      {/* Intro */}
      <section className="shell py-24 md:py-section-gap">
        <div className="grid grid-cols-1 gap-x-gutter gap-y-8 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <SectionLabel rule>Our Approach</SectionLabel>
          </Reveal>
          <div className="md:col-span-8">
            <AnimatedText as="h2" className="font-serif text-headline-md md:text-headline-lg">
              A single, discreet point of contact for the entire arc of ownership.
            </AnimatedText>
            <Reveal delay={120}>
              <p className="t-body-lg mt-6 max-w-2xl text-secondary">
                Most firms transact. We advise. From the first private viewing to the
                decades that follow, Meridian acts as a permanent fixture in your portfolio
                — quiet, exacting and entirely aligned with your interests.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Service rows — balanced editorial two-column. Image (7 cols) and copy
          (4 cols) hug the grid with a single breathing gutter between; the large
          index numeral ties the pair into one composition. */}
      <section className="divide-y divide-outline-variant/50">
        {SERVICES.map((service, i) => {
          const imageRight = i % 2 === 1;
          return (
            <div key={service.no} className="shell py-20 md:py-28">
              <div className="grid grid-cols-1 items-center gap-x-gutter gap-y-8 md:grid-cols-12">
                <div
                  className={`md:row-start-1 md:col-span-7 ${
                    imageRight ? 'md:col-start-6' : 'md:col-start-1'
                  }`}
                >
                  <RevealImage
                    src={service.image}
                    alt={`${service.title} — Meridian Estates advisory.`}
                    sizes="(max-width: 768px) 100vw, 58vw"
                    className="aspect-[4/3]"
                  />
                </div>
                <Reveal
                  delay={120}
                  className={`md:row-start-1 md:col-span-5 md:self-center ${
                    imageRight ? 'md:col-start-1' : 'md:col-start-8'
                  }`}
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-serif text-5xl leading-none text-tertiary-fixed-dim md:text-7xl">
                      {service.no}
                    </span>
                    <span className="h-px flex-1 bg-outline-variant" />
                  </div>
                  <h3 className="mt-6 font-serif text-headline-md md:text-headline-lg">
                    {service.title}
                  </h3>
                  <p className="t-body mt-4 text-secondary">{service.body}</p>
                  <ul className="mt-7 space-y-3">
                    {service.points.map((p) => (
                      <li key={p} className="flex items-center gap-3 t-label text-on-surface">
                        <span className="h-px w-6 bg-tertiary-fixed-dim" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <TextLink href="/contact#enquiry">Enquire</TextLink>
                  </div>
                </Reveal>
              </div>
            </div>
          );
        })}
      </section>

      <CTASection
        eyebrow="Bespoke Advisory"
        title="Confidential by design. Personal by default."
        body="Our commitment to privacy and strategic insight defines our approach. Begin a confidential conversation with a senior advisor."
        image={IMAGES.detailMarble}
        primary={{ href: '/contact', label: 'Request a Consultation' }}
      />
    </>
  );
}
