"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks, site, resumeLabel } from "@/content/site";
import NavLink from "@/components/NavLink";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <NavLink
          href="/"
          onNavigate={() => setOpen(false)}
          className="font-display text-lg font-semibold text-paper transition-colors pointer-fine:hover:text-brass"
        >
          {site.name}
        </NavLink>

        {/* Desktop links — hidden below md breakpoint */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <NavLink
                href={link.href}
                className={
                  pathname === link.href
                    ? "font-mono text-sm text-brass"
                    : "font-mono text-sm text-muted hover:text-paper"
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <a
          href="/Bharat_Parmar_Resume.pdf"
          download
          className="hidden rounded-sm border border-brass px-4 py-2 font-mono text-xs uppercase tracking-wide text-brass hover:bg-brass-soft md:inline-block"
        >
          {resumeLabel}
        </a>

        {/* Hamburger button — hidden above md breakpoint */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex flex-col gap-1.5 md:hidden"
        >
          <span
            className={`h-px w-6 bg-paper transition-transform ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-paper transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-paper transition-transform ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu — only rendered when open is true */}
      {open && (
        <ul className="flex flex-col gap-1 border-t border-line px-6 py-4 md:hidden">
          {navLinks.map((link) => (
            <li key={link.href}>
              <NavLink
                href={link.href}
                onNavigate={() => setOpen(false)}
                className={`block py-2 font-mono text-sm ${
                  pathname === link.href ? "text-brass" : "text-muted"
                }`}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li>
            <a
              href="/Bharat_Parmar_Resume.pdf"
              download
              onClick={() => setOpen(false)}
              className="mt-2 inline-block rounded-sm border border-brass px-4 py-2 font-mono text-xs uppercase tracking-wide text-brass"
            >
              {resumeLabel}
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}