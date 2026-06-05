'use client';

/**
 * Per-route wrapper that remounts on navigation. A slow opacity wash gives the
 * site a calm, deliberate "page settles in" feel. Opacity only — NO transform —
 * so it never creates a containing block that would break the fixed nav or
 * ScrollTrigger's pinning. Reduced-motion users skip it (handled in globals.css).
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-enter">{children}</div>;
}
