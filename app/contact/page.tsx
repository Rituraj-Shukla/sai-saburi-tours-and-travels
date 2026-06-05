import type { Metadata } from 'next';
import Image from 'next/image';
import Reveal from '@/components/Reveal';
import ContactForm from '@/components/ContactForm';
import AnimatedText from '@/components/interactions/AnimatedText';
import { SectionLabel } from '@/components/ui';
import { PinIcon, PhoneIcon, MailIcon } from '@/components/icons';
import { IMAGES } from '@/lib/images';
import { OFFICES, SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Private Enquiry',
  description:
    'Begin a confidential conversation with Meridian Estates. Private consultations available in person and virtually across Abu Dhabi and Dubai.',
};

const officeImages = [IMAGES.abuDhabiCorniche, IMAGES.dubaiSkyline];

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="shell pb-12 pt-40 md:pb-20 md:pt-48">
        <div className="max-w-3xl">
          <Reveal>
            <SectionLabel rule>Private Consultations</SectionLabel>
          </Reveal>
          <AnimatedText
            as="h1"
            split="words"
            className="mt-5 font-serif text-display-lg-mobile leading-[1.03] md:text-[72px] md:leading-[1.0]"
          >
            Begin a private conversation.
          </AnimatedText>
          <Reveal delay={120}>
            <p className="t-body-lg mt-6 max-w-xl text-secondary">
              Bespoke real estate advisory for the discerning. Our advisors are available
              for in-person and virtual consultations across the Emirates and globally.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Form + contact rail */}
      <section id="enquiry" className="shell scroll-mt-28 pb-24 md:pb-section-gap">
        <div className="grid grid-cols-1 gap-x-gutter gap-y-16 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <div className="mb-10 border-b border-outline-variant pb-6">
              <SectionLabel rule>Private Enquiry</SectionLabel>
              <p className="t-body mt-4 max-w-md text-secondary">
                For acquisitions, representation and viewings. Share your brief in confidence
                — a senior advisor responds personally.
              </p>
            </div>
            <ContactForm />
          </Reveal>

          <Reveal delay={120} className="md:col-span-4 md:col-start-9">
            <div className="bg-primary p-8 text-on-primary md:p-10">
              <SectionLabel className="!text-tertiary-fixed">Speak With Us Directly</SectionLabel>
              <p className="t-body-lg mt-5 text-on-primary/70">
                Prefer to talk first? Our advisory line is answered personally, seven days
                a week — no form required.
              </p>
              <div className="mt-8 space-y-5 border-t border-on-primary/15 pt-8">
                <a href={`tel:${SITE.phone.replace(/\s/g, '')}`} className="flex items-start gap-4">
                  <PhoneIcon className="mt-0.5 h-5 w-5 text-tertiary-fixed-dim" />
                  <span>
                    <span className="t-label block text-on-primary/40">Call</span>
                    <span className="t-body mt-1 block text-on-primary">{SITE.phone}</span>
                  </span>
                </a>
                <a href={`mailto:${SITE.email}`} className="flex items-start gap-4">
                  <MailIcon className="mt-0.5 h-5 w-5 text-tertiary-fixed-dim" />
                  <span>
                    <span className="t-label block text-on-primary/40">Email</span>
                    <span className="t-body mt-1 block text-on-primary">{SITE.email}</span>
                  </span>
                </a>
                <div className="flex items-start gap-4">
                  <PinIcon className="mt-0.5 h-5 w-5 text-tertiary-fixed-dim" />
                  <span>
                    <span className="t-label block text-on-primary/40">Headquarters</span>
                    <span className="t-body mt-1 block text-on-primary">
                      Al Maryah Island, Abu Dhabi
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Office cards */}
      <section className="bg-surface-container-low py-24 md:py-section-gap">
        <div className="shell">
          <Reveal>
            <SectionLabel rule>Global Reach</SectionLabel>
            <h2 className="mt-5 font-serif text-headline-lg">Meridian Locations</h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 gap-gutter md:grid-cols-2">
            {OFFICES.map((office, i) => (
              <Reveal key={office.city} delay={i * 120}>
                <div className="group relative aspect-[3/2] overflow-hidden bg-surface-dim">
                  <Image
                    src={officeImages[i]}
                    alt={`${office.city} skyline`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-[900ms] ease-smooth group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-7 text-on-primary md:p-9">
                    <p className="t-label text-white/70">{office.role}</p>
                    <h3 className="mt-2 font-serif text-headline-md text-white">{office.city}</h3>
                    <div className="mt-3 t-body text-white/80">
                      {office.lines.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                      <p className="mt-2">{office.phone}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
