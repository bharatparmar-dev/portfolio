import Link from "next/link";

export default function CtaBand({
  heading,
  ctaLabel,
  ctaHref,
  body,
}: {
  heading: string;
  ctaLabel: string;
  ctaHref: string;
  body?: string;
}) {
  return (
    <section className="border-t border-line px-6 py-16">
      <div className="mx-auto flex max-w-4xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <h2 className="font-display text-xl font-semibold sm:text-2xl">
            {heading}
          </h2>
          {body && <p className="mt-2 max-w-xl text-muted">{body}</p>}
        </div>
        <Link
          href={ctaHref}
          className="shrink-0 rounded-sm border border-brass px-5 py-3 font-mono text-xs uppercase tracking-wide text-brass transition-colors hover:bg-brass-soft"
        >
          {ctaLabel}
        </Link>
      </div>
    </section>
  );
}