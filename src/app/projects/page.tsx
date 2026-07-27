import type { Metadata } from "next";
import { projects } from "@/content/site";
import CtaBand from "@/components/CtaBand";
import PageHeader from "@/components/PageHeader";
import CornerTicks from "@/components/CornerTicks";

export const metadata: Metadata = {
  title: projects.meta.title,
  description: projects.meta.description,
};

function Label({ children }: { children: string }) {
  return (
    <p className="font-mono text-xs uppercase tracking-wide text-muted">
      {children}
    </p>
  );
}

function TechTags({ tech }: { tech: string[] }) {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {tech.map((t) => (
        <span
          key={t}
          className="rounded-sm border border-brass px-2 py-1 font-mono text-[11px] text-muted"
        >
          {t}
        </span>
      ))}
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <>
      <PageHeader eyebrow={projects.header.eyebrow} title={projects.header.title} />
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          {/* Featured project card */}
          <div className="relative rounded-sm border border-brass bg-surface p-8 transition-colors hover:bg-ink/40">
            <CornerTicks />
            <p className="font-mono text-xs uppercase tracking-widest text-brass">
              {projects.featured.tag}
            </p>
            <h2 className="mt-2 font-display text-2xl font-semibold">{projects.featured.title}</h2>

            <div className="mt-5">
              <Label>{projects.labels.problem}</Label>
              <p className="mt-1 text-paper">{projects.featured.problem}</p>
            </div>
            <div className="mt-4">
              <Label>{projects.labels.what}</Label>
              <p className="mt-1 text-paper">{projects.featured.what}</p>
            </div>
            <div className="mt-4">
              <Label>{projects.labels.outcome}</Label>
              <p className="mt-1 text-paper">{projects.featured.outcome}</p>
            </div>

            <TechTags tech={projects.featured.tech} />
          </div>

          {/* Every remaining project */}
          <div className="mt-8 flex flex-col gap-6">
            {projects.list.map((project) => (
              <div
                key={project.title}
                className="relative rounded-sm border border-line bg-surface p-8 transition-colors hover:border-brass"
              >
                <CornerTicks />
                <p className="font-mono text-xs uppercase tracking-widest text-brass">
                  {project.tag}
                </p>
                <h2 className="mt-2 font-display text-xl font-semibold">{project.title}</h2>

                <div className="mt-5">
                  <Label>{projects.labels.problem}</Label>
                  <p className="mt-1 text-paper">{project.problem}</p>
                </div>
                {"context" in project && (
                  <div className="mt-4">
                    <Label>{projects.labels.context}</Label>
                    <p className="mt-1 text-paper">{project.context}</p>
                  </div>
                )}
                <div className="mt-4">
                  <Label>{projects.labels.what}</Label>
                  <p className="mt-1 text-paper">{project.what}</p>
                </div>
                <div className="mt-4">
                  <Label>{projects.labels.outcome}</Label>
                  <p className="mt-1 text-paper">{project.outcome}</p>
                </div>

                <TechTags tech={project.tech} />
              </div>
            ))}
          </div>
      </div>
    </section>
    <CtaBand
        heading={projects.cta.heading}
        ctaLabel={projects.cta.ctaLabel}
        ctaHref={projects.cta.ctaHref}
      />
    </>
  );
}