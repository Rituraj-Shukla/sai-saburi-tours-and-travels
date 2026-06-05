'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';

// Register GSAP plugins at module scope (client only). registerPlugin is
// idempotent, so calling it once per module load is safe.
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);
}

/** Single source of truth for motion timing so every animation shares a feel. */
export const EASE = {
  /** Expressive, decelerating — the brand's signature curtain. */
  curtain: 'expo.out',
  /** Smooth, balanced. */
  smooth: 'power3.out',
  /** Gentle in/out for parallax scrubs. */
  scrub: 'none',
} as const;

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export { gsap, ScrollTrigger, SplitText, useGSAP };
