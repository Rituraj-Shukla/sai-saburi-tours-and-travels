'use client';

import { useEffect, useState } from 'react';

/**
 * Resolves true once the entrance Intro has lifted (or immediately on internal
 * navigation where no intro plays). Hero animations wait on this so the very
 * first reveal happens *after* the curtain, not behind it.
 */
export function useIntroGate(): boolean {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (window.__introDone) {
      setReady(true);
      return;
    }
    const onDone = () => setReady(true);
    window.addEventListener('intro:done', onDone, { once: true });
    // Safety: never wait forever if the event was missed.
    const t = setTimeout(() => setReady(true), 3500);
    return () => {
      window.removeEventListener('intro:done', onDone);
      clearTimeout(t);
    };
  }, []);

  return ready;
}
