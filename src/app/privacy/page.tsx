import type { Metadata } from "next";
import { privacy } from "@/content/site";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "What information this site collects, and how it's used.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader eyebrow={privacy.title} title={`Last updated: ${privacy.lastUpdated}`} />
      <section className="mx-auto max-w-3xl px-6 py-16">


      <div className="mt-12 flex flex-col gap-8">
        {privacy.sections.map((s) => (
          <div key={s.heading}>
            <h2 className="font-display text-lg font-semibold">{s.heading}</h2>
            <p className="mt-2 text-muted">{s.body}</p>
          </div>
        ))}
      </div>
    </section>
    </>
  );
}