'use client';

import { ReactLenis, type LenisRef } from 'lenis/react';
import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';

/**
 * Lenis smooth-scroll, synced to GSAP's ticker (the production-standard setup the
 * top studios use). Driving Lenis from gsap.ticker keeps ScrollTrigger and Lenis
 * on the exact same frame — no scroll-jank, no double rAF loops.
 *
 * Honours prefers-reduced-motion by handing scrolling back to the browser.
 */
export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;

    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    // Keep ScrollTrigger in step with Lenis.
    const lenis = lenisRef.current?.lenis;
    const onScroll = () => ScrollTrigger.update();
    lenis?.on('scroll', onScroll);

    ScrollTrigger.refresh();

    // If the page loads with a hash (e.g. a shared #fleet link or a nav anchor
    // followed across a route change), glide to that section once layout settles.
    if (window.location.hash) {
      const id = window.location.hash;
      requestAnimationFrame(() => {
        setTimeout(() => lenis?.scrollTo(id, { offset: -80 }), 250);
      });
    }

    return () => {
      gsap.ticker.remove(update);
      lenis?.off('scroll', onScroll);
    };
  }, []);

  // Smooth-scroll same-page anchor clicks (nav + footer links) through Lenis.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement)?.closest('a');
      const href = a?.getAttribute('href');
      if (!href || !href.startsWith('#') || href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const lenis = lenisRef.current?.lenis;
      if (lenis) lenis.scrollTo(target as HTMLElement, { offset: -80 });
      else target.scrollIntoView({ behavior: 'smooth' });
      history.replaceState(null, '', href);
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return (
    <ReactLenis
      root
      ref={lenisRef}
      options={{
        lerp: 0.09,
        duration: 1.25,
        smoothWheel: true,
        syncTouch: false,
        autoRaf: false,
        wheelMultiplier: 1,
        touchMultiplier: 1.6,
      }}
    >
      {children}
    </ReactLenis>
  );
}
