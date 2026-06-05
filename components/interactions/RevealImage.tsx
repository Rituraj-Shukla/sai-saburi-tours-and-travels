'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { gsap, useGSAP, prefersReducedMotion } from '@/lib/gsap';

/**
 * Image with two layered scroll moves:
 *  1. a clip-path "curtain" wipe the first time it enters view, and
 *  2. a continuous inner parallax (the photo drifts slower than its frame).
 * Both are pure transform/clip — GPU friendly. Falls back to a static image for
 * reduced-motion.
 */
export default function RevealImage({
  src,
  alt,
  sizes = '100vw',
  priority = false,
  className = '',
  imgClassName = '',
  parallax = true,
  cursor,
}: {
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
  imgClassName?: string;
  parallax?: boolean;
  cursor?: string;
}) {
  const frame = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const f = frame.current;
      const i = inner.current;
      if (!f || !i) return;

      gsap.fromTo(
        f,
        { clipPath: 'inset(0% 0% 100% 0%)' },
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: 1.3,
          ease: 'expo.out',
          scrollTrigger: { trigger: f, start: 'top 85%' },
        },
      );

      if (parallax) {
        gsap.fromTo(
          i,
          { yPercent: -8, scale: 1.12 },
          {
            yPercent: 8,
            scale: 1.12,
            ease: 'none',
            scrollTrigger: { trigger: f, start: 'top bottom', end: 'bottom top', scrub: true },
          },
        );
      }
    },
    { scope: frame },
  );

  return (
    <div
      ref={frame}
      className={`relative overflow-hidden bg-surface-dim ${className}`}
      data-cursor={cursor}
    >
      <div ref={inner} className="absolute inset-0 will-change-transform">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={`object-cover ${imgClassName}`}
        />
      </div>
    </div>
  );
}
