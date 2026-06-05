'use client';

import { useRef } from 'react';
import { gsap, ScrollTrigger, useGSAP, prefersReducedMotion } from '@/lib/gsap';

/**
 * Seamless infinite marquee whose direction flips with scroll direction and
 * whose speed nudges with scroll velocity — a subtle sign of life along section
 * breaks. Two duplicated tracks wrap with modulo for a true seamless loop.
 */
export default function Marquee({
  items,
  className = '',
  separator = '—',
}: {
  items: string[];
  className?: string;
  separator?: string;
}) {
  const track = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const el = track.current;
      if (!el) return;

      const loop = gsap.to(el, {
        xPercent: -50,
        repeat: -1,
        duration: 28,
        ease: 'none',
      });

      let direction = 1;
      const st = ScrollTrigger.create({
        onUpdate: (self) => {
          const v = self.getVelocity();
          if (v !== 0) direction = v < 0 ? -1 : 1;
          const speed = 1 + Math.min(Math.abs(v) / 1800, 2.5);
          loop.timeScale(direction * speed);
          gsap.to(loop, { timeScale: direction * 1, duration: 0.6, overwrite: true });
        },
      });

      return () => {
        loop.kill();
        st.kill();
      };
    },
    { scope: track },
  );

  const row = (
    <div className="flex shrink-0 items-center">
      {items.map((item) => (
        <span key={item} className="flex items-center">
          <span className="px-8 md:px-12">{item}</span>
          <span className="text-tertiary-fixed-dim/60">{separator}</span>
        </span>
      ))}
    </div>
  );

  return (
    <div className={`overflow-hidden ${className}`}>
      <div ref={track} className="flex w-max">
        {row}
        {row}
      </div>
    </div>
  );
}
