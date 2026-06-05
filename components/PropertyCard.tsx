import Image from 'next/image';
import Link from 'next/link';
import type { Property } from '@/lib/properties';
import { formatAED } from '@/lib/properties';
import { BedIcon, AreaIcon, ArrowRight } from './icons';

/**
 * Image-centric property card. Full-bleed photo with a slow hover scale; details
 * in label-caps below. `priority` for above-the-fold cards.
 */
export default function PropertyCard({
  property,
  priority = false,
  ratio = 'portrait',
  cursor,
}: {
  property: Property;
  priority?: boolean;
  ratio?: 'portrait' | 'landscape';
  cursor?: string;
}) {
  const aspect = ratio === 'portrait' ? 'aspect-[4/5]' : 'aspect-[3/2]';

  return (
    <Link href={`/portfolio/${property.slug}`} className="group block">
      <div className={`relative overflow-hidden bg-surface-dim ${aspect}`} data-cursor={cursor}>
        <Image
          src={property.hero}
          alt={`${property.name} — ${property.type} in ${property.area}, ${property.city}`}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-[900ms] ease-smooth group-hover:scale-105"
        />
        {property.offMarket && (
          <span className="t-label absolute left-4 top-4 bg-primary/85 px-3 py-1.5 text-on-primary backdrop-blur-sm">
            Off-Market
          </span>
        )}
        <span className="absolute bottom-4 right-4 flex h-11 w-11 translate-y-2 items-center justify-center bg-surface text-on-surface opacity-0 transition-all duration-500 ease-smooth group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowRight className="h-5 w-5" />
        </span>
      </div>

      <div className="mt-6">
        <p className="t-label text-secondary">
          {property.area} · {property.city}
        </p>
        <h3 className="mt-2 font-serif text-headline-md transition-colors group-hover:text-on-surface-variant">
          {property.name}
        </h3>
        <p className="t-body mt-2 text-secondary">{formatAED(property.price)}</p>
        <div className="mt-4 flex items-center gap-6 text-on-surface-variant">
          <span className="t-label inline-flex items-center gap-2 font-normal tracking-normal text-[11px]">
            <BedIcon className="h-4 w-4" /> {property.beds} Beds
          </span>
          <span className="t-label inline-flex items-center gap-2 font-normal tracking-normal text-[11px]">
            <AreaIcon className="h-4 w-4" /> {property.sqft.toLocaleString()} sqft
          </span>
        </div>
      </div>
    </Link>
  );
}
