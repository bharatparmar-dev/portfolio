import type { Metadata } from "next";
import { skills } from "@/content/site";
import CtaBand from "@/components/CtaBand";
import PageHeader from "@/components/PageHeader";
import CornerTicks from "@/components/CornerTicks";

export const metadata: Metadata = {
  title: skills.meta.title,
  description: skills.meta.description,
};

export default function SkillsPage() {
  return (
    <>
      <PageHeader eyebrow={skills.header.eyebrow} title={skills.header.title} />
      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-col gap-12">
            {skills.sections.map((s) => (
              <div key={s.heading}>
                <h2 className="font-display text-lg font-semibold sm:text-xl">{s.heading}</h2>
                <p className="mt-3 text-muted">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="relative mt-14 rounded-sm border border-line bg-surface p-8 transition-colors pointer-fine:hover:border-brass">
            <CornerTicks />
            <p className="font-mono text-xs uppercase tracking-widest text-brass mb-3">{skills.toolsLabel}</p>
            <h2 className="font-display text-lg font-semibold">{skills.tools.heading}</h2>
            <p className="mt-3 text-muted">{skills.tools.body}</p>
          </div>
      </div>
    </section>
    <CtaBand
        heading={skills.cta.heading}
        ctaLabel={skills.cta.ctaLabel}
        ctaHref={skills.cta.ctaHref}
        />
    </>
  );
}