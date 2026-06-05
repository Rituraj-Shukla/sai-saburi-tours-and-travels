'use client';

import { useRef, type ElementType, type ReactNode } from 'react';
import { gsap, SplitText, useGSAP, prefersReducedMotion } from '@/lib/gsap';

/**
 * Kinetic headline — splits into lines and reveals them on scroll with a masked
 * "rise" (each line slides up from behind a clip). The detail that makes large
 * serif type feel authored rather than placed. Waits for fonts so line-splitting
 * measures correctly.
 */
export default function AnimatedText({
  children,
  as,
  className = '',
  delay = 0,
  stagger,
  split = 'lines',
}: {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
  stagger?: number;
  /** Reveal granularity: whole lines rise, or words rise individually. */
  split?: 'lines' | 'words';
}) {
  const Tag = (as ?? 'h2') as ElementType;
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      if (prefersReducedMotion()) {
        gsap.set(el, { autoAlpha: 1 });
        return;
      }

      const run = () => {
        const byWords = split === 'words';
        const instance = new SplitText(el, {
          type: byWords ? 'lines,words' : 'lines',
          linesClass: 'split-line',
          mask: byWords ? 'words' : 'lines',
        });
        const targets = byWords ? instance.words : instance.lines;
        gsap.set(el, { autoAlpha: 1 });
        gsap.from(targets, {
          yPercent: byWords ? 100 : 115,
          duration: byWords ? 0.9 : 1.1,
          ease: 'expo.out',
          stagger: stagger ?? (byWords ? 0.045 : 0.12),
          delay,
          scrollTrigger: { trigger: el, start: 'top 88%' },
        });
      };

      if (document.fonts?.ready) document.fonts.ready.then(run);
      else run();
    },
    { scope: ref },
  );

  return (
    <Tag ref={ref} className={`invisible ${className}`}>
      {children}
    </Tag>
  );
}
