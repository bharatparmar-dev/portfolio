import type { Metadata } from "next";
import { about } from "@/content/site";
import CtaBand from "@/components/CtaBand";
import PageHeader from "@/components/PageHeader";
import JourneyDiagram from "@/components/JourneyDiagram";

export const metadata: Metadata = {
  title: "About",
  description:
    "I didn't take the usual road into software. Here's the one I actually took.",
};

function ProseSection({
  heading,
  paragraphs,
}: {
  heading: string;
  paragraphs: string[];
}) {
  return (
    <div className="mt-14 first:mt-0">
      <h2 className="font-display text-xl font-semibold sm:text-2xl">{heading}</h2>
      <div className="mt-4 flex flex-col gap-4 text-muted">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
    <PageHeader eyebrow={about.header.eyebrow} title={about.header.title} />
      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <ProseSection
            heading={about.whereItStarted.heading}
            paragraphs={about.whereItStarted.paragraphs}
          />
          <ProseSection
            heading={about.whereItTurned.heading}
            paragraphs={about.whereItTurned.paragraphs}
          />
          <div className="mt-14">
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-brass">
              The Path So Far
            </p>
            <JourneyDiagram />
          </div>
          <ProseSection
            heading={about.howFar.heading}
            paragraphs={about.howFar.paragraphs}
          />
        </div>
      </section>
      <CtaBand
        heading={about.cta.heading}
        ctaLabel={about.cta.ctaLabel}
        ctaHref={about.cta.ctaHref}
      />
    </>
  );
}