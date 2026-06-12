'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { NAV_LINKS, SITE } from '@/lib/site';
import Logo from './Logo';

/**
 * Minimal floating nav. Hides on scroll-down, reappears on scroll-up. Turns from
 * transparent (over hero) to a frosted pill once the page has scrolled. Includes
 * an accessible mobile drawer.
 */
export default function Nav() {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      if (y > 160 && y > lastY.current) setHidden(true);
      else setHidden(false);
      lastY.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  // Pages whose top is a dark hero (video / dark image) — nav floats transparent
  // with light text there. Everywhere else the top is light limestone, so the nav
  // must render solid (dark text) on load or it vanishes into the background.
  const darkHero = pathname === '/';

  const solid = scrolled || open || !darkHero;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-transform duration-500 ease-smooth ${
          hidden ? '-translate-y-full' : 'translate-y-0'
        }`}
      >
        <nav
          className={`shell mt-4 flex items-center justify-between rounded-2xl px-5 py-3 transition-colors duration-500 md:px-7 ${
            solid ? 'bg-surface/85 shadow-ambient backdrop-blur-md' : 'bg-transparent'
          }`}
        >
          <Link
            href="/"
            className={`transition-colors ${solid ? 'text-on-surface' : 'text-white'}`}
            onClick={() => setOpen(false)}
            aria-label={`${SITE.legalName} — home`}
          >
            <Logo compact />
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-9 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`t-label link-underline transition-colors ${
                  solid
                    ? isActive(link.href)
                      ? 'text-on-surface'
                      : 'text-secondary hover:text-on-surface'
                    : isActive(link.href)
                      ? 'text-white'
                      : 'text-white/75 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${SITE.phoneIntl}`}
              className="t-label rounded-full bg-primary px-6 py-3 text-on-primary transition-opacity duration-300 hover:opacity-80"
            >
              Plan a Trip
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={`flex h-11 w-11 flex-col items-center justify-center gap-[5px] md:hidden ${
              solid ? 'text-on-surface' : 'text-white'
            }`}
          >
            <span
              className={`h-px w-6 bg-current transition-transform duration-300 ${
                open ? 'translate-y-[6px] rotate-45' : ''
              }`}
            />
            <span className={`h-px w-6 bg-current transition-opacity duration-300 ${open ? 'opacity-0' : ''}`} />
            <span
              className={`h-px w-6 bg-current transition-transform duration-300 ${
                open ? '-translate-y-[6px] -rotate-45' : ''
              }`}
            />
          </button>
        </nav>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-30 bg-surface transition-opacity duration-500 md:hidden ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="flex h-full flex-col justify-center gap-2 px-margin-mobile">
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-outline-variant py-5 font-serif text-headline-md text-on-surface"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`tel:${SITE.phoneIntl}`}
            onClick={() => setOpen(false)}
            className="t-label mt-8 inline-block rounded-full bg-primary px-7 py-4 text-center text-on-primary"
          >
            Plan a Trip · {SITE.phone}
          </a>
        </div>
      </div>
    </>
  );
}
