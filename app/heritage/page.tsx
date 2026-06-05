import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import Reveal from '@/components/Reveal';
import StatBand from '@/components/StatBand';
import CTASection from '@/components/CTASection';
import AnimatedText from '@/components/interactions/AnimatedText';
import RevealImage from '@/components/interactions/RevealImage';
import { SectionLabel } from '@/components/ui';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'The Meridian Heritage',
  description:
    'A legacy of curated luxury in the UAE. Meet the advisory shaping the most significant private residential transactions in the Emirates.',
};

const LEADERS = [
  {
    name: 'Alistair Thorne',
    role: 'Founder & Principal',
    image: IMAGES.portraitMan1,
    bio: 'Three decades across London, Geneva and Abu Dhabi private markets.',
  },
  {
    name: 'Isabella Rossi',
    role: 'Head of Advisory',
    image: IMAGES.portraitWoman1,
    bio: 'Former private banker to the region’s most established families.',
  },
  {
    name: 'Khalid Al Mansoori',
    role: 'Head of Acquisitions',
    image: IMAGES.portraitMan2,
    bio: 'Unrivalled access to off-market estates across the Emirates.',
  },
];

export default function HeritagePage() {
  return (
    <>
      <Hero
        image={IMAGES.heritageHero}
        video="/videos/hero-coast.mp4"
        alt="Aerial drone footage of an exclusive coastal residential enclave."
        eyebrow="Est. 2009"
        title="The Meridian Heritage"
        align="left"
        overlay="strong"
        height="tall"
      >
        <p className="t-body-lg max-w-md text-white/80">
          A legacy of curated luxury, written one residence at a time.
        </p>
      </Hero>

      {/* Philosophy */}
      <section className="shell py-24 md:py-section-gap">
        <div className="grid grid-cols-1 gap-x-gutter gap-y-10 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <SectionLabel rule>Our Conviction</SectionLabel>
          </Reveal>
          <div className="md:col-span-8">
            <AnimatedText
              as="h2"
              split="words"
              className="font-serif text-headline-md md:text-headline-lg"
            >
              Curating exceptional lifestyles.
            </AnimatedText>
            <Reveal delay={120}>
              <p className="t-body-lg mt-6 max-w-2xl text-secondary">
                We believe in the power of place to elevate a life. Our residences are
                individually curated, each detail considered, to provide an unparalleled
                sense of refinement and exclusivity. We partner with world-renowned
                architects and designers to ensure every residence is a masterpiece —
                blending contemporary aesthetics with timeless elegance.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Pull quote */}
        <div className="mt-24 border-y border-outline-variant py-16 text-center md:mt-32 md:py-24">
          <AnimatedText
            as="p"
            className="mx-auto max-w-3xl font-serif text-quote italic text-on-surface md:text-[34px] md:leading-[50px]"
          >
            &ldquo;True luxury lies in the details that go unseen.&rdquo;
          </AnimatedText>
        </div>
      </section>

      <StatBand />

      {/* Leadership */}
      <section className="shell py-24 md:py-section-gap">
        <Reveal className="text-center">
          <SectionLabel>The Principals</SectionLabel>
          <h2 className="mt-5 font-serif text-headline-lg">Visionary Leadership</h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-x-gutter gap-y-14 sm:grid-cols-2 md:grid-cols-3">
          {LEADERS.map((leader, i) => (
            <Reveal key={leader.name} delay={i * 120}>
              <div className="group">
                <RevealImage
                  src={leader.image}
                  alt={`Portrait of ${leader.name}, ${leader.role} at Meridian Estates.`}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="aspect-[4/5]"
                  imgClassName="grayscale transition-all duration-700 group-hover:grayscale-0"
                  parallax={false}
                />
                <h3 className="mt-6 font-serif text-headline-md">{leader.name}</h3>
                <p className="t-label mt-2 text-tertiary-fixed-dim">{leader.role}</p>
                <p className="t-body mt-3 text-secondary">{leader.bio}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection
        eyebrow="The Meridian Standard"
        title="Built for the discerning. Trusted for a generation."
        body="Discover how our advisory can shape your next chapter in the Emirates."
        image={IMAGES.sheikhZayedMosque}
        primary={{ href: '/contact', label: 'Speak With Us' }}
        secondary={{ href: '/portfolio', label: 'View Portfolio' }}
      />
    </>
  );
}
