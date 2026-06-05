'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap, useGSAP, prefersReducedMotion } from '@/lib/gsap';
import { SITE } from '@/lib/site';

/**
 * One-time entrance curtain: brand name fades up over a charcoal field while a
 * hairline draws across, then the panel lifts to reveal the page. Shown once per
 * tab (sessionStorage) so internal navigation stays instant. Skipped entirely
 * for reduced-motion.
 */
export default function Intro() {
  const root = useRef<HTMLDivElement>(null);
  const [done, setDone] = useState(false);

  // Hard failsafe: whatever happens with the animation, never let the curtain
  // hold the page captive. After 4s, force it away and restore interaction.
  useEffect(() => {
    const t = setTimeout(() => {
      document.body.style.overflow = '';
      window.__introDone = true;
      window.dispatchEvent(new Event('intro:done'));
      setDone(true);
    }, 4000);
    return () => clearTimeout(t);
  }, []);

  useGSAP(
    () => {
      const fire = () => {
        window.__introDone = true;
        window.dispatchEvent(new Event('intro:done'));
      };

      const seen = sessionStorage.getItem('me-intro');
      if (seen || prefersReducedMotion()) {
        setDone(true);
        fire();
        return;
      }

      document.body.style.overflow = 'hidden';
      const tl = gsap.timeline({
        onComplete: () => {
          document.body.style.overflow = '';
          sessionStorage.setItem('me-intro', '1');
          setDone(true);
          fire();
        },
      });

      tl.set('.intro-word', { yPercent: 120 })
        .set('.intro-rule', { scaleX: 0 })
        .to('.intro-word', { yPercent: 0, duration: 1.1, ease: 'expo.out', stagger: 0.08 }, 0.15)
        .to('.intro-rule', { scaleX: 1, duration: 1.1, ease: 'expo.inOut' }, 0.3)
        .to('.intro-content', { autoAlpha: 0, duration: 0.5, ease: 'power2.in' }, '+=0.55')
        .to(
          root.current,
          { yPercent: -100, duration: 1.1, ease: 'expo.inOut' },
          '-=0.15',
        );
    },
    { scope: root },
  );

  if (done) return null;

  return (
    <div
      ref={root}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-primary text-on-primary"
    >
      <div className="intro-content flex flex-col items-center px-8">
        <div className="overflow-hidden">
          <h1 className="intro-word font-serif text-3xl tracking-[0.28em] md:text-5xl">
            {SITE.name.toUpperCase()}
          </h1>
        </div>
        <div className="intro-rule mt-6 h-px w-40 origin-center bg-tertiary-fixed/70 md:w-56" />
        <div className="overflow-hidden">
          <p className="intro-word t-label mt-6 text-on-primary/50">{SITE.tagline}</p>
        </div>
      </div>
    </div>
  );
}
