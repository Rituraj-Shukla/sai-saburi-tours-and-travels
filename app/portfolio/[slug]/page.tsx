import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Reveal from '@/components/Reveal';
import CTASection from '@/components/CTASection';
import AnimatedText from '@/components/interactions/AnimatedText';
import RevealImage from '@/components/interactions/RevealImage';
import { SectionLabel, TextLink } from '@/components/ui';
import { BedIcon, BathIcon, AreaIcon, TypeIcon, PlusIcon, PinIcon } from '@/components/icons';
import { PROPERTIES, getProperty, formatAED } from '@/lib/properties';

export function generateStaticParams() {
  return PROPERTIES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const property = getProperty(slug);
  if (!property) return { title: 'Residence Not Found' };
  return {
    title: `${property.name} · ${property.area}`,
    description: property.blurb,
    openGraph: { images: [property.hero], title: property.name, description: property.blurb },
  };
}

export default async function PropertyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const property = getProperty(slug);
  if (!property) notFound();

  const specs = [
    { icon: BedIcon, value: property.beds, label: 'Bedrooms' },
    { icon: BathIcon, value: property.baths, label: 'Bathrooms' },
    { icon: AreaIcon, value: property.sqft.toLocaleString(), label: 'Sq Ft' },
    { icon: TypeIcon, value: property.type, label: 'Residence' },
  ];

  return (
    <>
      {/* Split hero */}
      <section className="grid grid-cols-1 md:grid-cols-12">
        <div className="relative h-[58svh] min-h-[420px] md:col-span-8 md:h-[88svh]">
          <Image
            src={property.hero}
            alt={`Exterior of ${property.name}, a ${property.type} in ${property.area}.`}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 66vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
            <span className="t-label flex items-center gap-2 text-white/85">
              <PinIcon className="h-4 w-4" /> {property.area} · {property.city}
            </span>
          </div>
        </div>
        <div className="relative h-[36svh] min-h-[260px] md:col-span-4 md:h-[88svh]">
          <Image
            src={property.detail}
            alt={`Interior detail of ${property.name}.`}
            fill
            sizes="(max-width: 768px) 100vw, 34vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* Title + price */}
      <section className="shell py-16 md:py-24">
        <div className="flex flex-col justify-between gap-8 border-b border-outline-variant pb-16 md:flex-row md:items-end">
          <div>
            <Reveal>
              <SectionLabel>{property.type}</SectionLabel>
            </Reveal>
            <AnimatedText
              as="h1"
              className="mt-4 max-w-2xl font-serif text-display-lg-mobile leading-[1.05] md:text-[64px] md:leading-[1.02]"
            >
              {property.name}
            </AnimatedText>
            <Reveal delay={120}>
              <p className="t-body-lg mt-5 max-w-xl text-secondary">{property.tagline}</p>
            </Reveal>
          </div>
          <Reveal delay={120} className="md:text-right">
            <p className="t-label text-secondary">Guide Price</p>
            <p className="mt-2 font-serif text-headline-md md:text-headline-lg">
              {formatAED(property.price)}
            </p>
          </Reveal>
        </div>

        {/* Spec row */}
        <div className="mt-16 grid grid-cols-2 gap-y-12 md:grid-cols-4">
          {specs.map((spec, i) => (
            <Reveal key={spec.label} delay={i * 80} className="text-center">
              <spec.icon className="mx-auto h-7 w-7 text-on-surface-variant" />
              <p className="mt-4 font-serif text-headline-md">{spec.value}</p>
              <p className="t-label mt-2 text-secondary">{spec.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Narrative + detail image */}
      <section className="bg-surface-container-low py-24 md:py-section-gap">
        <div className="shell grid grid-cols-1 items-center gap-x-gutter gap-y-12 md:grid-cols-12">
          <Reveal className="md:col-span-6">
            <SectionLabel rule>The Residence</SectionLabel>
            <h2 className="mt-5 font-serif text-headline-md md:text-headline-lg">
              Architectural Permanence.
            </h2>
            <p className="t-body-lg mt-6 text-secondary">{property.narrative}</p>
            <div className="mt-10">
              <TextLink href="/contact">Arrange a Private Viewing</TextLink>
            </div>
          </Reveal>
          <div className="md:col-span-6">
            <RevealImage
              src={property.aerial}
              alt={`The setting of ${property.name} in ${property.city}.`}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="aspect-[5/6]"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="shell py-24 md:py-section-gap">
        <Reveal>
          <SectionLabel rule>Specification</SectionLabel>
          <h2 className="mt-5 max-w-2xl font-serif text-headline-md md:text-headline-lg">
            Every detail, considered.
          </h2>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 gap-x-gutter gap-y-px border-t border-outline-variant sm:grid-cols-2">
          {property.features.map((feature, i) => (
            <Reveal
              key={feature}
              delay={(i % 2) * 80}
              className="flex items-center gap-4 border-b border-outline-variant py-6"
            >
              <PlusIcon className="h-4 w-4 shrink-0 text-tertiary-fixed-dim" />
              <span className="t-body-lg text-on-surface">{feature}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection
        eyebrow="Private Viewing"
        title={`Interested in ${property.name}?`}
        body="Our advisors arrange discreet, in-person and virtual viewings for qualified clients across the Emirates and beyond."
        image={property.detail}
        primary={{ href: '/contact#enquiry', label: 'Request Private Viewing' }}
        secondary={{ href: '/portfolio', label: 'Back to Portfolio' }}
      />
    </>
  );
}
