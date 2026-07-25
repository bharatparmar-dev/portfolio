import type { Metadata } from "next";
import { contact, site } from "@/content/site";
import ContactForm from "@/components/ContactForm";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "I'm actively looking for my first professional software development role. Get in touch.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader eyebrow={contact.header.eyebrow} title={contact.header.title} />
      <section className="px-6 py-16">
      <div className="mx-auto max-w-4xl grid gap-12 md:grid-cols-[1.4fr_1fr]">
        <div>
          <h2 className="font-display text-lg font-semibold">{contact.form.heading}</h2>
            <div className="relative mt-6">
                <ContactForm />
            </div>
        </div>

        <div>
          <h2 className="font-display text-lg font-semibold">{contact.direct.heading}</h2>
          <ul className="mt-6 flex flex-col gap-4">
            <li>
              <p className="font-mono text-xs uppercase tracking-wide text-muted">Email</p>
              <a href={`mailto:${site.email}`} className="text-paper hover:text-brass">
                {site.email}
              </a>
            </li>
            <li>
              <p className="font-mono text-xs uppercase tracking-wide text-muted">Phone</p>
              <a href={`tel:${site.phoneHref}`} className="text-paper hover:text-brass">
                {site.phone}
              </a>
            </li>
            <li>
              <p className="font-mono text-xs uppercase tracking-wide text-muted">WhatsApp</p>
              <a href={`https://wa.me/${site.phoneHref.replace("+", "")}`} target="_blank" rel="noopener noreferrer" className="text-paper hover:text-brass">
                WhatsApp
              </a>
            </li>
            <li>
              <p className="font-mono text-xs uppercase tracking-wide text-muted">LinkedIn</p>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="text-paper hover:text-brass">
                View Profile
              </a>
            </li>
            <li>
              <p className="font-mono text-xs uppercase tracking-wide text-muted">GitHub</p>
              <a href={site.github} target="_blank" rel="noopener noreferrer" className="text-paper hover:text-brass">
                View Profile
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
    </>
  );
}