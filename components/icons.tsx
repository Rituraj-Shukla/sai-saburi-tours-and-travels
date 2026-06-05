import type { SVGProps } from 'react';

/**
 * Hairline SVG icon set (24×24, 1.25 stroke) — keeps the technical, drawn-line
 * aesthetic of the brand. No emoji, no icon-font dependency.
 */
type IconProps = SVGProps<SVGSVGElement>;

const base = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.25,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
};

export function BedIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M3 7v10M3 12h18v5M21 12V9a2 2 0 0 0-2-2H8v5" />
      <path d="M6 12V9.5A1.5 1.5 0 0 1 7.5 8" />
    </svg>
  );
}

export function BathIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M4 12V6a2 2 0 0 1 2-2 2 2 0 0 1 2 2M3 12h18v2a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-2ZM6 18l-1 2M18 18l1 2M8 6h1" />
    </svg>
  );
}

export function AreaIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M3 3h18v18H3zM3 9h3M3 15h3M18 3v3M12 3v3" />
    </svg>
  );
}

export function TypeIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M3 21V9l9-6 9 6v12M9 21v-6h6v6" />
    </svg>
  );
}

export function ArrowRight(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function ArrowDown(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 5v14M6 13l6 6 6-6" />
    </svg>
  );
}

export function PlusIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function PinIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 21s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12Z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

export function PhoneIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M4 4c0 9 7 16 16 16v-3.5a1 1 0 0 0-.8-1l-3-.6a1 1 0 0 0-1 .4l-.9 1.2A12.5 12.5 0 0 1 8 9.7l1.2-.9a1 1 0 0 0 .4-1l-.6-3a1 1 0 0 0-1-.8H4Z" />
    </svg>
  );
}

export function MailIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="3" y="5" width="18" height="14" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

export function QuoteMark(p: IconProps) {
  return (
    <svg {...base} {...p} strokeWidth={0} fill="currentColor">
      <path d="M9.5 6C6.5 7 5 9.5 5 13v5h5v-7H7.8c.1-1.8.9-3 2.5-3.6L9.5 6Zm9 0c-3 1-4.5 3.5-4.5 7v5h5v-7h-2.2c.1-1.8.9-3 2.5-3.6L18.5 6Z" />
    </svg>
  );
}
