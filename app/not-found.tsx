import { ButtonLink, SectionLabel } from '@/components/ui';

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] flex-col items-center justify-center px-margin-mobile text-center">
      <SectionLabel className="!text-tertiary-fixed-dim">Error 404</SectionLabel>
      <h1 className="mt-6 font-serif text-display-lg-mobile md:text-display-lg">
        A quiet address.
      </h1>
      <p className="t-body-lg mt-5 max-w-md text-secondary">
        The page you sought is not part of our collection. Allow us to return you to the
        portfolio.
      </p>
      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <ButtonLink href="/">Return Home</ButtonLink>
        <ButtonLink href="/portfolio" variant="outline" className="text-on-surface">
          View Portfolio
        </ButtonLink>
      </div>
    </section>
  );
}
