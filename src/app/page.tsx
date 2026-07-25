import Link from "next/link";
import { home } from "@/content/site";
import CtaBand from "@/components/CtaBand";
import CornerTicks from "@/components/CornerTicks";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative px-6 py-24 sm:py-32">
        <CornerTicks />
        <div className="mx-auto max-w-4xl">
        <p className="mb-6 font-mono text-xs uppercase tracking-widest text-brass">
          Bharat Parmar — Self-Taught Developer
        </p>
        <h1 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">
          {home.hero.headline}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted">
          {home.hero.subheadline}
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href={home.hero.primaryCta.href}
            className="rounded-sm bg-brass px-6 py-3 font-mono text-sm uppercase tracking-wide text-ink"
          >
            {home.hero.primaryCta.label}
          </Link>
          <Link
            href={home.hero.secondaryCta.href}
            className="rounded-sm border border-line px-6 py-3 font-mono text-sm uppercase tracking-wide text-paper hover:border-brass"
          >
            {home.hero.secondaryCta.label}
          </Link>
        </div>
        </div>
      </section>

      {/* 10-second version */}
      <section className="border-t border-line px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-xl font-semibold sm:text-2xl">
            {home.tenSecondVersion.heading}
          </h2>
          <p className="mt-4 text-muted">{home.tenSecondVersion.body}</p>
          <Link
            href={home.tenSecondVersion.ctaHref}
            className="mt-4 inline-block font-mono text-sm text-brass hover:underline"
          >
            {home.tenSecondVersion.ctaLabel} &rarr;
          </Link>
        </div>
      </section>

      {/* Proof, not promises */}
      <section className="border-t border-line px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-xl font-semibold sm:text-2xl">
            {home.proof.heading}
          </h2>
          <p className="mt-3 max-w-2xl text-muted">{home.proof.intro}</p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {home.proof.cards.map((card) => (
              <div
                key={card.title}
                  className="relative rounded-sm border border-line bg-surface p-6 transition-colors hover:border-brass"
              >
                <p className="font-mono text-xs uppercase tracking-wide text-brass">
                  {card.tag}
                </p>
                <h3 className="mt-3 font-display font-semibold">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {card.summary}
                </p>
              </div>
            ))}
          </div>

          <Link
            href={home.proof.ctaHref}
            className="mt-8 inline-block font-mono text-sm text-brass hover:underline"
          >
            {home.proof.ctaLabel} &rarr;
          </Link>
        </div>
      </section>

      {/* Why worth ten minutes */}
      <section className="border-t border-line px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-xl font-semibold sm:text-2xl">
            {home.worthTenMinutes.heading}
          </h2>
          <p className="mt-4 text-muted">{home.worthTenMinutes.body}</p>
          <Link
            href={home.worthTenMinutes.ctaHref}
            className="mt-4 inline-block font-mono text-sm text-brass hover:underline"
          >
            {home.worthTenMinutes.ctaLabel} &rarr;
          </Link>
        </div>
      </section>

      {/* Bottom CTA */}
      <CtaBand
        heading={home.bottomCta.heading}
        body={home.bottomCta.body}
        ctaLabel={home.bottomCta.ctaLabel}
        ctaHref={home.bottomCta.ctaHref}
      />
    </>
  );
}