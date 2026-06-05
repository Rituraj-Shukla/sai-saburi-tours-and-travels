import Link from 'next/link';
import NewsletterForm from './NewsletterForm';
import AmbientField from './interactions/AmbientField';
import Reveal from './Reveal';
import { ArrowRight } from './icons';
import { FOOTER_LINKS, OFFICES, SITE } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-primary text-on-primary">
      {/* Cursor-reactive warm light in the negative space. */}
      <AmbientField />

      <div className="relative z-10 shell pt-28 md:pt-36">
        {/* Closing invitation */}
        <Reveal className="flex flex-col gap-8 border-b border-on-primary/10 pb-20 md:flex-row md:items-end md:justify-between md:pb-28">
          <div>
            <p className="t-label text-on-primary/45">The Final Word</p>
            <p className="mt-6 max-w-xl font-serif text-[28px] leading-[1.25] text-on-primary md:text-[40px] md:leading-[1.15]">
              When you are ready, a private conversation awaits.
            </p>
          </div>
          <Link
            href="/contact#enquiry"
            className="group inline-flex items-center gap-4 t-label text-tertiary-fixed"
          >
            <span className="link-underline">Begin the Enquiry</span>
            <ArrowRight className="h-5 w-5 transition-transform duration-500 ease-smooth group-hover:translate-x-2" />
          </Link>
        </Reveal>

        {/* Columns */}
        <div className="grid grid-cols-2 gap-x-gutter gap-y-12 py-20 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <p className="t-label text-on-primary/40">Contact</p>
            <div className="mt-5 space-y-2 t-body text-on-primary/70">
              <a href={`mailto:${SITE.email}`} className="block link-underline w-fit">
                {SITE.email}
              </a>
              <a href={`tel:${SITE.phone.replace(/\s/g, '')}`} className="block link-underline w-fit">
                {SITE.phone}
              </a>
            </div>
          </div>

          <div>
            <p className="t-label text-on-primary/40">Offices</p>
            <ul className="mt-5 space-y-2 t-body text-on-primary/70">
              {OFFICES.map((o) => (
                <li key={o.city}>
                  <Link
                    href="/contact"
                    className="inline-block transition-transform duration-300 hover:translate-x-1 hover:text-on-primary"
                  >
                    {o.city} {o.role}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="t-label text-on-primary/40">Explore</p>
            <ul className="mt-5 space-y-2 t-body text-on-primary/70">
              {FOOTER_LINKS.explore.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="inline-block transition-transform duration-300 hover:translate-x-1 hover:text-on-primary"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <p className="t-label text-on-primary/40">Private Briefings</p>
            <p className="t-body mt-5 text-on-primary/55">
              Off-market opportunities, delivered in confidence.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </div>

      {/* Oversized wordmark — a deliberate architectural close. Divider sits ABOVE
          the letters (never through them); the type is clipped only at the side
          margins, reading as a monument rather than a watermark. */}
      <div className="relative z-10 select-none overflow-hidden border-t border-on-primary/10 pt-14 md:pt-20">
        <div className="shell">
          <span className="block font-serif leading-[0.88] tracking-[-0.02em] text-on-primary/[0.13] text-[15vw] md:whitespace-nowrap md:text-[14vw] md:leading-[0.8]">
            {SITE.name.toUpperCase().split(' ')[0]}
            <br className="md:hidden" />{' '}
            {SITE.name.toUpperCase().split(' ')[1]}
          </span>
        </div>
      </div>

      <div className="relative z-10 shell flex flex-col items-start justify-between gap-6 py-10 md:flex-row md:items-center">
        <p className="t-body text-on-primary/40">
          © {new Date().getFullYear()} {SITE.name}. {SITE.tagline}.
        </p>
        <div className="flex gap-6 t-label text-on-primary/50">
          <a href="#" className="transition-colors hover:text-tertiary-fixed">
            Instagram
          </a>
          <a href="#" className="transition-colors hover:text-tertiary-fixed">
            LinkedIn
          </a>
          <a href="#" className="transition-colors hover:text-tertiary-fixed">
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
