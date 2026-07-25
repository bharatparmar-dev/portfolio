import type { Metadata } from "next";
import { experience } from "@/content/site";
import CtaBand from "@/components/CtaBand";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Years of computer-based work across five roles, from a travel agency at sixteen to running the technical backbone of a jewellery business today.",
};

export default function ExperiencePage() {
  return (
    <>
      <PageHeader eyebrow={experience.header.eyebrow} title={experience.header.title} />
      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <ol className="relative flex flex-col gap-12 border-l border-line pl-8">
            {experience.entries.map((entry) => (
              <li key={entry.company} className="relative">
                <span className="absolute -left-[37px] top-1 h-3 w-3 rounded-full border-2 border-brass bg-ink" />
                <p className="font-mono text-xs uppercase tracking-wide text-brass">
                  {entry.duration}
                </p>
                <h2 className="mt-2 font-display text-lg font-semibold">{entry.role}</h2>
                <p className="text-sm text-muted">{entry.company}</p>
                <p className="mt-3 text-muted">{entry.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <CtaBand
        heading={experience.cta.heading}
        ctaLabel={experience.cta.ctaLabel}
        ctaHref={experience.cta.ctaHref}
      />
    </>
  );
}