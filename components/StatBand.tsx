import Reveal from './Reveal';
import Counter from './interactions/Counter';
import { STATS } from '@/lib/site';

/** Dark statement band of headline figures that count up on scroll-in. */
export default function StatBand() {
  return (
    <section className="relative bg-primary text-on-primary">
      <div className="shell py-24 md:py-32">
        <div className="grid grid-cols-2 gap-x-gutter gap-y-14 md:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 90} className="text-center">
              <Counter
                value={stat.value}
                prefix={stat.prefix ?? ''}
                suffix={stat.suffix}
                decimals={stat.decimals}
                className="block font-serif text-4xl text-tertiary-fixed md:text-display-lg md:leading-none"
              />
              <p className="t-label mt-4 text-on-primary/55">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
