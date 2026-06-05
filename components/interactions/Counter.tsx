'use client';

import { useRef } from 'react';
import { gsap, useGSAP, prefersReducedMotion } from '@/lib/gsap';

/**
 * Counts up to a numeric value the moment the number is genuinely on screen.
 * `prefix`/`suffix` carry the non-numeric parts (e.g. "AED " + "B"), so
 * "AED 15.4B" animates 0 → 15.4.
 *
 * The trigger is a plain IntersectionObserver (not ScrollTrigger) on purpose:
 * ScrollTrigger's start position can be mis-measured when a pinned section sits
 * above this band, causing the count to fire off-screen and finish before the
 * reader arrives. IntersectionObserver fires exactly when the element is in view.
 */
export default function Counter({
  value,
  prefix = '',
  suffix = '',
  decimals = 0,
  className = '',
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const format = (n: number) => `${prefix}${n.toFixed(decimals)}${suffix}`;

      if (prefersReducedMotion()) {
        el.textContent = format(value);
        return;
      }

      // Start visibly at zero so the count always plays in front of the reader.
      el.textContent = format(0);
      const obj = { n: 0 };
      let played = false;

      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !played) {
              played = true;
              gsap.to(obj, {
                n: value,
                duration: 2.4,
                ease: 'power2.out',
                onUpdate: () => {
                  el.textContent = format(obj.n);
                },
              });
              io.disconnect();
            }
          });
        },
        { threshold: 0.45 },
      );

      io.observe(el);
      return () => io.disconnect();
    },
    { scope: ref },
  );

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
}
