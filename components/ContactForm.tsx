'use client';

import { useState, type FormEvent } from 'react';
import { ArrowRight } from './icons';

const INTERESTS = ['Acquisition', 'Sale / Representation', 'Private Viewing', 'Advisory'];
const BUDGETS = [
  'AED 20M – 50M',
  'AED 50M – 100M',
  'AED 100M – 200M',
  'AED 200M+',
];

/** Bottom-border field set in the brand's tactile registration style.
 *  Front-end only — shows a success state on submit. */
export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex min-h-[420px] flex-col items-start justify-center border-t border-outline-variant">
        <span className="t-label text-tertiary-fixed-dim">Enquiry Received</span>
        <h3 className="mt-5 font-serif text-headline-md text-on-surface">
          Thank you — your enquiry is with us.
        </h3>
        <p className="t-body-lg mt-4 max-w-md text-secondary">
          A private advisor will respond within one business day. For time-sensitive
          matters, reach us directly on the numbers opposite.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="t-label mt-8 text-on-surface link-underline"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      <div className="grid grid-cols-1 gap-x-gutter gap-y-10 md:grid-cols-2">
        <Field id="firstName" label="First Name" autoComplete="given-name" required />
        <Field id="lastName" label="Last Name" autoComplete="family-name" required />
        <Field id="email" label="Email Address" type="email" autoComplete="email" required />
        <Field id="phone" label="Phone" type="tel" autoComplete="tel" />
      </div>

      <SelectField id="interest" label="I am interested in" options={INTERESTS} />
      <SelectField id="budget" label="Investment range" options={BUDGETS} />

      <div className="relative">
        <label htmlFor="message" className="t-label text-secondary">
          Brief / Requirements
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          placeholder="Tell us what you are looking for…"
          className="mt-3 w-full resize-none border-b border-on-surface bg-transparent pb-3 t-body text-on-surface placeholder:text-outline focus:border-tertiary-fixed-dim focus:outline-none"
        />
      </div>

      <button
        type="submit"
        className="t-label group inline-flex items-center gap-3 bg-primary px-10 py-4 text-on-primary transition-opacity duration-300 hover:opacity-80"
      >
        Send Enquiry
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </button>
    </form>
  );
}

function Field({
  id,
  label,
  type = 'text',
  required = false,
  autoComplete,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div className="relative">
      <label htmlFor={id} className="t-label text-secondary">
        {label}
        {required && <span className="text-tertiary-fixed-dim"> *</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="mt-3 w-full border-b border-on-surface bg-transparent pb-3 t-body text-on-surface placeholder:text-outline focus:border-tertiary-fixed-dim focus:outline-none"
      />
    </div>
  );
}

function SelectField({ id, label, options }: { id: string; label: string; options: string[] }) {
  return (
    <div className="relative">
      <label htmlFor={id} className="t-label text-secondary">
        {label}
      </label>
      <select
        id={id}
        name={id}
        defaultValue=""
        className="mt-3 w-full cursor-pointer border-b border-on-surface bg-transparent pb-3 t-body text-on-surface focus:border-tertiary-fixed-dim focus:outline-none"
      >
        <option value="" disabled>
          Please select…
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
