import Reveal from '@/components/Reveal';
import Hero from '@/components/Hero';
import HorizontalGallery from '@/components/HorizontalGallery';
import StatBand from '@/components/StatBand';
import CTASection from '@/components/CTASection';
import Marquee from '@/components/interactions/Marquee';
import AnimatedText from '@/components/interactions/AnimatedText';
import RevealImage from '@/components/interactions/RevealImage';
import { ButtonLink, SectionLabel } from '@/components/ui';
import { QuoteMark } from '@/components/icons';
import { PROPERTIES } from '@/lib/properties';
import { IMAGES } from '@/lib/images';

const LOCATIONS = [
  'Saadiyat Island',
  'Nurai Island',
  'Al Reem Island',
  'Emirates Palace District',
  'Al Maryah Island',
  'Palm Jumeirah',
];

export default function HomePage() {
  return (
    <>
      <Hero
        image={IMAGES.heroPenthouse}
        video="/videos/hero-home.mp4"
        alt="Aerial view of a luxury waterfront residence on the Abu Dhabi coastline at golden hour."
        eyebrow="Saadiyat Island · Abu Dhabi"
        title={
          <>
            The Address
            <br />
            Beyond Address
          </>
        }
      >
        <div className="flex flex-col gap-4 sm:flex-row">
          <ButtonLink href="/portfolio" variant="solid-light">
            Explore Portfolio
          </ButtonLink>
          <ButtonLink href="/contact" variant="outline" className="text-white">
            Private Enquiry
          </ButtonLink>
        </div>
      </Hero>

      {/* Philosophy statement */}
      <section className="shell py-28 md:py-section-gap">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <SectionLabel className="!text-tertiary-fixed-dim">Our Philosophy</SectionLabel>
          </Reveal>
          <AnimatedText
            as="h2"
            split="words"
            className="mt-7 font-serif text-headline-md md:text-headline-lg"
          >
            Architectural permanence for the discerning few.
          </AnimatedText>
          <Reveal delay={150}>
            <p className="t-body-lg mx-auto mt-8 max-w-2xl text-secondary">
              Meridian Estates curates more than residences; we broker legacies. In the
              shifting sands of global luxury, we represent the definitive standard of
              architectural integrity and enduring value within the Emirates&apos; most
              exclusive addresses.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Location marquee */}
      <div className="border-y border-outline-variant/60 py-6 md:py-8">
        <Marquee
          items={LOCATIONS}
          className="font-serif text-2xl italic text-on-surface/80 md:text-4xl"
        />
      </div>

      {/* Signature residences — pinned horizontal scroll */}
      <HorizontalGallery properties={PROPERTIES.slice(0, 5)} />

      <StatBand />

      {/* Testimonial */}
      <section className="shell py-28 md:py-section-gap">
        <div className="grid grid-cols-1 items-center gap-x-gutter gap-y-12 md:grid-cols-2">
          <Reveal>
            <QuoteMark className="h-12 w-12 text-tertiary-fixed-dim" />
            <blockquote className="mt-6 font-serif text-quote italic text-on-surface-variant md:text-[30px] md:leading-[44px]">
              &ldquo;Meridian understands that time is the ultimate luxury. Their advisory
              was never simply about property — it was about curating a life that matched
              my mobility and my standards. Peerless in the region.&rdquo;
            </blockquote>
            <div className="mt-8 flex items-center gap-4">
              <span className="h-px w-12 bg-on-surface" />
              <p className="t-label">Chairman · Global Investments Group</p>
            </div>
          </Reveal>

          <div className="relative">
            <RevealImage
              src={IMAGES.advisoryBoardroom}
              alt="A private advisory meeting in a minimalist boardroom, shot in black and white."
              sizes="(max-width: 768px) 100vw, 50vw"
              className="aspect-[4/3]"
              imgClassName="grayscale"
            />
            <div className="absolute -bottom-6 -left-2 z-10 hidden bg-background p-7 shadow-ambient md:block">
              <p className="t-label text-secondary">Private Advisory</p>
              <p className="mt-2 font-serif text-headline-md">Discretion Assured.</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Begin a Conversation"
        title="Your next residence is not listed. It is introduced."
        body="The most significant transactions in the Emirates happen quietly. Begin a private, confidential conversation with our advisory."
        image={IMAGES.heroNight}
        primary={{ href: '/contact', label: 'Request Consultation' }}
        secondary={{ href: '/portfolio', label: 'View Portfolio' }}
      />
    </>
  );
}
