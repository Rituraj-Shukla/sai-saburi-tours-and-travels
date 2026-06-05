import Link from 'next/link';
import type { ReactNode } from 'react';
import { ArrowRight } from './icons';
import Magnetic from './interactions/Magnetic';

/** Small uppercase eyebrow label with an optional leading hairline. */
export function SectionLabel({
  children,
  rule = false,
  className = '',
}: {
  children: ReactNode;
  rule?: boolean;
  className?: string;
}) {
  return (
    <span className={`t-label inline-flex items-center gap-3 text-secondary ${className}`}>
      {rule && <span className="h-px w-8 bg-current opacity-50" />}
      {children}
    </span>
  );
}

type ButtonVariant = 'solid' | 'outline' | 'ghost' | 'solid-light';

const VARIANTS: Record<ButtonVariant, string> = {
  solid: 'bg-primary text-on-primary hover:opacity-80',
  'solid-light': 'bg-white text-primary hover:bg-white/90',
  outline: 'border border-current text-current hover:bg-current/10',
  ghost: 'text-current',
};

/** Sharp-cornered CTA. Renders as a Link when href is set. */
export function ButtonLink({
  href,
  children,
  variant = 'solid',
  className = '',
  magnetic = true,
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  magnetic?: boolean;
}) {
  const link = (
    <Link
      href={href}
      data-cursor=""
      className={`group/btn relative t-label inline-flex items-center justify-center gap-2 overflow-hidden px-9 py-4 transition-colors duration-300 ${VARIANTS[variant]} ${className}`}
    >
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </Link>
  );
  return magnetic ? <Magnetic strength={0.35}>{link}</Magnetic> : link;
}

/** Inline "read more" style link with hairline underline + arrow. */
export function TextLink({
  href,
  children,
  className = '',
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link href={href} className={`group t-label inline-flex items-center gap-2 ${className}`}>
      <span className="link-underline">{children}</span>
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
}
