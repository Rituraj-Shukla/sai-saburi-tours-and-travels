'use client';

import { useState, type FormEvent } from 'react';
import { ArrowRight } from './icons';

/** Footer newsletter capture — front-end only, swaps to a confirmation on submit. */
export default function NewsletterForm() {
  const [done, setDone] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDone(true);
  };

  if (done) {
    return (
      <p className="t-body mt-5 text-tertiary-fixed">
        Thank you — you are on the list for private briefings.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mt-5 flex items-center border-b border-on-primary/30 pb-2">
      <label htmlFor="footer-email" className="sr-only">
        Email address
      </label>
      <input
        id="footer-email"
        type="email"
        required
        placeholder="Email address"
        className="w-full bg-transparent t-body text-on-primary placeholder:text-on-primary/30 focus:outline-none"
      />
      <button
        type="submit"
        aria-label="Subscribe"
        className="ml-3 text-on-primary transition-colors hover:text-tertiary-fixed"
      >
        <ArrowRight className="h-5 w-5" />
      </button>
    </form>
  );
}
