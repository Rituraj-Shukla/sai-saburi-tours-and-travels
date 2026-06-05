'use client';

import { useRef } from 'react';
import { gsap, useGSAP, prefersReducedMotion } from '@/lib/gsap';

/**
 * A near-invisible volume of warm light that drifts after the cursor inside its
 * parent (give the parent `position: relative`). It only reveals itself through
 * movement — restrained, atmospheric, never decorative. Mix-blend `screen` keeps
 * it living *in* the dark surface rather than sitting on top of it.
 *
 * Off entirely for reduced-motion or coarse pointers (no cursor to react to).
 */
export default function AmbientField() {
  const layer = useRef<HTMLDivElement>(null);
  const glow = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const host = layer.current?.parentElement;
      const g = glow.current;
      if (!host || !g) return;
      if (prefersReducedMotion()) return;
      if (!window.matchMedia('(pointer: fine)').matches) return;

      const xTo = gsap.quickTo(g, 'x', { duration: 1.1, ease: 'power3' });
      const yTo = gsap.quickTo(g, 'y', { duration: 1.1, ease: 'power3' });
      const oTo = gsap.quickTo(g, 'opacity', { duration: 0.9, ease: 'power2' });

      const move = (e: PointerEvent) => {
        const r = host.getBoundingClientRect();
        const inside =
          e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom;
        if (inside) {
          xTo(e.clientX - r.left);
          yTo(e.clientY - r.top);
          oTo(1);
        } else {
          oTo(0);
        }
      };

      window.addEventListener('pointermove', move, { passive: true });
      return () => window.removeEventListener('pointermove', move);
    },
    { scope: layer },
  );

  return (
    <div ref={layer} aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        ref={glow}
        className="absolute left-0 top-0 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 opacity-0 mix-blend-screen blur-[80px]"
        style={{
          background:
            'radial-gradient(circle, rgba(216,185,129,0.22) 0%, rgba(216,185,129,0.10) 38%, transparent 70%)',
        }}
      />
    </div>
  );
}
