'use client';

import Image from 'next/image';
import { useEffect, useRef, type ReactNode } from 'react';
import { gsap, SplitText, useGSAP, prefersReducedMotion } from '@/lib/gsap';
import { useIntroGate } from '@/lib/useIntroGate';
import { ArrowDown } from './icons';

interface HeroProps {
  /** Poster image (instant paint + reduced-motion fallback). */
  image: string;
  alt: string;
  /** Optional self-hosted video that plays behind the poster. */
  video?: string;
  eyebrow?: string;
  title: ReactNode;
  children?: ReactNode;
  height?: 'full' | 'tall' | 'mid';
  align?: 'center' | 'left';
  overlay?: 'soft' | 'medium' | 'strong';
  /** Bottom scroll cue. */
  cue?: string;
}

const HEIGHTS = {
  full: 'h-[100svh] min-h-[600px]',
  tall: 'h-[90svh] min-h-[560px]',
  mid: 'h-[72svh] min-h-[480px]',
};
const OVERLAYS = {
  soft: 'from-black/35 via-black/10 to-black/45',
  medium: 'from-black/50 via-black/20 to-black/55',
  strong: 'from-black/60 via-black/35 to-black/70',
};

export default function Hero({
  image,
  alt,
  video,
  eyebrow,
  title,
  children,
  height = 'full',
  align = 'center',
  overlay = 'medium',
  cue = 'Scroll',
}: HeroProps) {
  const root = useRef<HTMLElement>(null);
  const media = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const introReady = useIntroGate();

  // Respect reduced motion for the video itself.
  useEffect(() => {
    if (prefersReducedMotion()) videoRef.current?.pause();
  }, []);

  // Continuous scroll parallax (independent of the entrance).
  useGSAP(
    () => {
      if (prefersReducedMotion() || !media.current) return;
      gsap.to(media.current, {
        yPercent: 16,
        ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true },
      });
    },
    { scope: root },
  );

  // Intro-gated entrance: media un-clips, headline lines rise, copy fades up.
  useGSAP(
    () => {
      if (!introReady || !root.current) return;
      const titleEl = root.current.querySelector<HTMLElement>('.hero-title');

      if (prefersReducedMotion()) {
        gsap.set(['.hero-clip', '.hero-eyebrow', '.hero-actions', '.hero-cue', titleEl], {
          autoAlpha: 1,
        });
        return;
      }

      const tl = gsap.timeline();
      tl.fromTo(
        '.hero-clip',
        { clipPath: 'inset(14% 16% 14% 16%)' },
        { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.6, ease: 'expo.out' },
        0,
      );
      if (titleEl) {
        gsap.set(titleEl, { autoAlpha: 1 });
        const split = new SplitText(titleEl, { type: 'lines', mask: 'lines', linesClass: 'split-line' });
        tl.from(split.lines, { yPercent: 120, duration: 1.2, ease: 'expo.out', stagger: 0.12 }, 0.3);
      }
      tl.fromTo('.hero-eyebrow', { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, duration: 1, ease: 'expo.out' }, 0.25)
        .fromTo('.hero-actions', { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, duration: 1, ease: 'expo.out' }, 0.8)
        .fromTo('.hero-cue', { autoAlpha: 0 }, { autoAlpha: 1, duration: 1 }, 1);
    },
    { scope: root, dependencies: [introReady] },
  );

  return (
    <header ref={root} className={`relative w-full overflow-hidden ${HEIGHTS[height]}`}>
      <div className="hero-clip absolute inset-0 overflow-hidden">
        <div ref={media} className="absolute inset-0 scale-[1.12] will-change-transform">
          {video ? (
            <video
              ref={videoRef}
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster={image}
              preload="metadata"
            >
              <source src={video} type="video/mp4" />
            </video>
          ) : (
            <Image src={image} alt={alt} fill priority sizes="100vw" className="object-cover" />
          )}
        </div>
      </div>
      <div className={`absolute inset-0 bg-gradient-to-b ${OVERLAYS[overlay]}`} />

      <div
        className={`shell relative z-10 flex h-full flex-col justify-end pb-24 md:pb-28 ${
          align === 'center' ? 'items-center text-center' : 'items-start text-left'
        }`}
      >
        {eyebrow && (
          <p className="hero-eyebrow t-label invisible mb-5 text-white/85">{eyebrow}</p>
        )}
        <h1
          className={`hero-title t-display-xl invisible text-white ${
            align === 'center' ? 'max-w-5xl' : 'max-w-4xl'
          }`}
        >
          {title}
        </h1>
        {children && <div className="hero-actions invisible mt-9">{children}</div>}
      </div>

      {/* Scroll cue */}
      <div className="hero-cue invisible absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-white/70">
        <span className="t-label text-[10px]">{cue}</span>
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </div>
    </header>
  );
}
