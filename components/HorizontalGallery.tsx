'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { gsap, useGSAP } from '@/lib/gsap';
import type { Property } from '@/lib/properties';
import PropertyCard from './PropertyCard';
import { SectionLabel, TextLink } from './ui';

/**
 * Signature residences as a pinned horizontal scroll on desktop — vertical
 * scrolling drives a lateral glide through the collection (the hallmark "this is
 * an experience, not a page" moment). On touch / small screens it degrades to a
 * native snap-scroll carousel, and to a simple row under reduced-motion.
 */
export default function HorizontalGallery({ properties }: { properties: Property[] }) {
  const trigger = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [pinned, setPinned] = useState(false);

  useGSAP(
    () => {
      const t = track.current;
      const section = trigger.current;
      if (!t || !section) return;

      // gsap.matchMedia sets the pin up at >=768 (no reduced-motion) and tears it
      // down cleanly below that — so a resize across the breakpoint just works.
      const mm = gsap.matchMedia();
      mm.add('(min-width: 768px) and (prefers-reduced-motion: no-preference)', () => {
        setPinned(true);
        const getDistance = () => t.scrollWidth - window.innerWidth;

        gsap.to(t, {
          x: () => -getDistance(),
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: () => `+=${getDistance()}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        });

        return () => setPinned(false);
      });

      return () => mm.revert();
    },
    { scope: trigger },
  );

  return (
    <section
      ref={trigger}
      className={`relative bg-surface-container-low ${pinned ? 'h-screen overflow-hidden' : ''}`}
    >
      <div
        ref={track}
        className={`flex ${
          pinned
            ? 'h-full w-max items-center gap-8 px-margin-mobile md:px-margin-desktop'
            : 'w-full snap-x snap-mandatory items-center gap-6 overflow-x-auto px-margin-mobile py-24 md:gap-8 md:px-margin-desktop md:py-section-gap [-ms-overflow-style:none] [scrollbar-width:none]'
        }`}
      >
        {/* Intro panel */}
        <div className="flex w-[78vw] shrink-0 snap-start flex-col justify-center sm:w-[44vw] lg:w-[26vw]">
          <SectionLabel rule>Curated Selection</SectionLabel>
          <h2 className="mt-5 font-serif text-headline-lg">Signature Residences</h2>
          <p className="t-body mt-5 max-w-xs text-secondary">
            A glance across the collection. Scroll to move through each address.
          </p>
          <div className="mt-8">
            <TextLink href="/portfolio">View all listings</TextLink>
          </div>
        </div>

        {/* Property panels */}
        {properties.map((p, i) => (
          <div
            key={p.slug}
            className="w-[80vw] shrink-0 snap-center sm:w-[48vw] lg:w-[30vw]"
          >
            <PropertyCard property={p} priority={i === 0} cursor="View" />
          </div>
        ))}

        {/* Outro / CTA panel */}
        <div className="flex w-[78vw] shrink-0 snap-start flex-col justify-center sm:w-[40vw] lg:w-[24vw]">
          <p className="font-serif text-headline-md text-on-surface">
            Many of our finest residences are never published.
          </p>
          <Link
            href="/contact"
            data-cursor="Enquire"
            className="t-label mt-8 inline-flex w-fit items-center gap-3 bg-primary px-9 py-4 text-on-primary transition-opacity duration-300 hover:opacity-80"
          >
            Request Private Access
          </Link>
        </div>
      </div>
    </section>
  );
}
