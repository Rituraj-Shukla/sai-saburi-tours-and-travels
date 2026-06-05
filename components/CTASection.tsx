import Image from 'next/image';
import Reveal from './Reveal';
import AnimatedText from './interactions/AnimatedText';
import { ButtonLink, SectionLabel } from './ui';

/**
 * Closing statement band. With `image` it becomes an atmospheric, vignetted
 * cinematic moment — which also gives it a distinct surface from the flat-black
 * footer beneath, so the brand's final word never bleeds into the footer.
 */
export default function CTASection({
  eyebrow = 'Private Advisory',
  title,
  body,
  image,
  primary = { href: '/contact', label: 'Request Consultation' },
  secondary,
}: {
  eyebrow?: string;
  title: string;
  body: string;
  image?: string;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
}) {
  return (
    <section className="relative overflow-hidden bg-primary text-on-primary">
      {image && (
        <>
          <div className="absolute inset-0">
            <Image src={image} alt="" fill sizes="100vw" className="object-cover opacity-40" />
          </div>
          {/* Vignette + base wash keep type legible and edges dark. */}
          <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_40%,transparent_30%,rgba(16,14,12,0.85)_100%)]" />
          <div className="absolute inset-0 bg-primary/45" />
        </>
      )}

      <div className="relative z-10 shell flex flex-col items-center py-32 text-center md:py-44">
        <SectionLabel className="!text-tertiary-fixed">{eyebrow}</SectionLabel>
        <AnimatedText
          as="h2"
          className="mt-6 max-w-3xl font-serif text-headline-lg md:text-[56px] md:leading-[1.05]"
        >
          {title}
        </AnimatedText>
        <Reveal className="flex flex-col items-center" delay={120}>
          <p className="t-body-lg mt-6 max-w-xl text-on-primary/65">{body}</p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href={primary.href} variant="solid-light">
              {primary.label}
            </ButtonLink>
            {secondary && (
              <ButtonLink href={secondary.href} variant="outline" className="text-on-primary">
                {secondary.label}
              </ButtonLink>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
