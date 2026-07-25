import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/content/site";

export async function POST(request: NextRequest) {
  try {
    const { name, email, message, isSuspectedBot, honeypotFields } =
      await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      "unknown";
    const userAgent = request.headers.get("user-agent") ?? "unknown";

    const subject = isSuspectedBot
      ? `[SUSPECTED SPAM] New message from ${name} via your portfolio`
      : `New message from ${name} via your portfolio`;

    const bodyText = isSuspectedBot
      ? `⚠️ This submission filled hidden honeypot field(s) — likely a bot.\n\n` +
        `Honeypot values caught: ${JSON.stringify(honeypotFields)}\n` +
        `IP: ${ip}\n` +
        `User-Agent: ${userAgent}\n\n` +
        `--- Submitted content ---\n` +
        `From: ${name} <${email}>\n\n${message}`
      : `From: ${name} <${email}>\n\n${message}`;

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>",
      to: site.email,
      replyTo: email,
      subject,
      text: bodyText,
    });

    if (error) {
      console.error("Resend returned an error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    console.log(
      isSuspectedBot ? "Spam email flagged and sent:" : "Email sent successfully:",
      data
    );
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Send failed" }, { status: 500 });
  }
}