'use client';

import { useRef } from 'react';
import { gsap, useGSAP, prefersReducedMotion } from '@/lib/gsap';

/**
 * Counts up to a numeric value when scrolled into view. `prefix`/`suffix` carry
 * the non-numeric parts (e.g. "AED " + "B"), so "AED 15.4B" animates 0 → 15.4.
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

      const obj = { n: 0 };
      gsap.to(obj, {
        n: value,
        duration: 2,
        ease: 'power3.out',
        onUpdate: () => {
          el.textContent = format(obj.n);
        },
        scrollTrigger: { trigger: el, start: 'top 90%' },
      });
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
