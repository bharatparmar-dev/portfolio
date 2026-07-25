import { site, navLinks } from "@/content/site";
import NavLink from "@/components/NavLink";

const footerLinks = [...navLinks, { href: "/privacy", label: "Privacy Policy" }];

export default function Footer() {
  return (
    <>
    <footer className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Column 1: Brand */}
          <div>
            <p className="font-display text-lg font-semibold">{site.name}</p>
            <p className="mt-2 max-w-xs text-sm text-muted">
              {site.role} · {site.location}
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <p className="font-mono text-xs uppercase tracking-wide text-brass">
              Quick Links
            </p>
            <ul className="mt-3 flex flex-col gap-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <NavLink
                    href={link.href}
                    className="text-sm text-muted hover:text-brass"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Get In Touch */}
          <div>
            <p className="font-mono text-xs uppercase tracking-wide text-brass">
              Get In Touch
            </p>

            <ul className="mt-3 flex flex-col gap-2 text-sm text-muted">
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-brass">
                  {site.email}
                </a>
              </li>
              <li>
                <a href={`tel:${site.phoneHref}`} className="hover:text-brass">
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${site.phoneHref.replace("+", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brass"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brass"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brass"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-6xl border-t border-line pt-6">
          <p className="font-mono text-xs text-muted">
            © {new Date().getFullYear()} {site.name} · {site.copyrightLine}
          </p>
        </div>
      </div>
    </footer>
    </>
  );
}