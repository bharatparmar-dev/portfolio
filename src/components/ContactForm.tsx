"use client";

import { useState, type FormEvent } from "react";
import { contact } from "@/content/site";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const honeypotFields = {
      company: data.get("company"),
      website: data.get("website"),
      phone_alt: data.get("phone_alt"),
    };
    const isSuspectedBot = Object.values(honeypotFields).some((v) => v);

    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
          isSuspectedBot,
          honeypotFields,
        }),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input type="text" id="company" name="company" tabIndex={-1} autoComplete="off" />

        <label htmlFor="website">Website</label>
        <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />

        <label htmlFor="phone_alt">Phone</label>
        <input type="text" id="phone_alt" name="phone_alt" tabIndex={-1} autoComplete="off" />
      </div>
      <div>
        <label htmlFor="name" className="font-mono text-xs uppercase tracking-wide text-muted">
          {contact.form.labels.name}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-2 w-full rounded-sm border border-line bg-surface px-4 py-3 text-paper outline-none focus:border-brass"
        />
      </div>

      <div>
        <label htmlFor="email" className="font-mono text-xs uppercase tracking-wide text-muted">
          {contact.form.labels.email}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-2 w-full rounded-sm border border-line bg-surface px-4 py-3 text-paper outline-none focus:border-brass"
        />
      </div>

      <div>
        <label htmlFor="message" className="font-mono text-xs uppercase tracking-wide text-muted">
          {contact.form.labels.message}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-2 w-full rounded-sm border border-line bg-surface px-4 py-3 text-paper outline-none focus:border-brass"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-2 rounded-sm bg-brass px-6 py-3 font-mono text-sm uppercase tracking-wide text-ink disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : contact.form.submitLabel}
      </button>

      {status === "success" && (
        <p className="text-sm text-brass">{contact.form.success}</p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-400">{contact.form.error}</p>
      )}
    </form>
  );
}