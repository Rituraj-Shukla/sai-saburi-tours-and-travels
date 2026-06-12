import type { SVGProps } from 'react';

/**
 * Brand lockup, recreated from the supplied logo as clean vector + live type so
 * it stays razor-sharp on retina and theme-aware: everything paints in
 * `currentColor`, so the parent's text colour (ivory over dark heroes, warm ink
 * on light surfaces) flows straight through. No raster, no flashing on swap.
 */

/** Elegant single-stroke coupe — echoes the line-art car in the original mark. */
export function CarMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 200 70"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      {/* long low body sweep */}
      <path d="M8 54C28 54 45 53 61 46c20-9 49-15 78-14 23 1 43 7 60 19" opacity="0.95" />
      {/* swept fastback roofline */}
      <path d="M66 39c18-15 52-18 86-6" />
      {/* belt-line crease */}
      <path d="M60 47c34-5 96-5 128 2" opacity="0.55" />
      {/* wheel arches */}
      <path d="M42 55a14 14 0 0 1 28 0" />
      <path d="M132 55a14 14 0 0 1 28 0" />
    </svg>
  );
}

export default function Logo({
  compact = false,
  className = '',
}: {
  compact?: boolean;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex select-none flex-col items-center leading-none ${className}`}
      aria-label="Sai Saburi Tours & Travels"
    >
      <CarMark className={compact ? 'h-4 w-auto' : 'h-6 w-auto'} />
      <span
        className={`font-script ${compact ? 'text-[21px]' : 'text-[30px]'} mt-0.5 leading-[0.9]`}
      >
        Sai Saburi
      </span>
      <span
        className={`font-sans uppercase ${
          compact ? 'text-[6px]' : 'text-[8px]'
        } mt-0.5 tracking-[0.42em] opacity-80`}
      >
        Tours&nbsp;&amp;&nbsp;Travels
      </span>
    </span>
  );
}
