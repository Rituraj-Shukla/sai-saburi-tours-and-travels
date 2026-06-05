'use client';

import { useEffect, useRef, useState, type ElementType, type ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  /** Stagger delay in ms before the curtain plays. */
  delay?: number;
  /** Render as a different element (default div). */
  as?: ElementType;
  className?: string;
}

/**
 * IntersectionObserver "curtain" reveal — fades + slides content up the first
 * time it enters the viewport. Transform/opacity only (GPU-friendly). Honours
 * prefers-reduced-motion via the CSS in globals.css (.reveal snaps visible).
 */
export default function Reveal({ children, delay = 0, as, className = '' }: RevealProps) {
  const Tag = (as ?? 'div') as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // SSR-safe guard + bail out if already past threshold on mount.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
