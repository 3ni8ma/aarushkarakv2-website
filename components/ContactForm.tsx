"use client";

import { useState } from "react";
import GlowButton from "@/components/GlowButton";

type Status = "idle" | "sending" | "sent" | "fallback" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else if (res.status === 503) {
        // Email service not configured — fall back to mailto
        setStatus("fallback");
      } else {
        setStatus("error");
        setError(json?.error ?? "Something went wrong. Please try email instead.");
      }
    } catch {
      setStatus("error");
      setError("Network error. Please email directly instead.");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="rounded-xl border border-cyan/30 bg-cyan/5 p-6 text-center">
        <p className="text-lg font-bold text-white">Message sent ✓</p>
        <p className="mt-2 text-sm text-white/70">
          Thanks for reaching out — I usually reply within 1–2 days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      {/* Honeypot — humans leave this empty */}
      <input type="text" name="company" autoComplete="off" tabIndex={-1} className="hidden" aria-hidden="true" />
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          maxLength={100}
          className="glass-input w-full px-4 py-3 text-white placeholder-white/50"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          maxLength={254}
          className="glass-input w-full px-4 py-3 text-white placeholder-white/50"
          placeholder="your@email.com"
        />
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-white/70 mb-2">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          maxLength={150}
          className="glass-input w-full px-4 py-3 text-white placeholder-white/50"
          placeholder="What is this about?"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          maxLength={5000}
          className="glass-input w-full px-4 py-3 text-white placeholder-white/50 resize-none"
          placeholder="Your message..."
        />
      </div>
      {status === "error" && (
        <p role="alert" className="text-sm text-red-400">
          {error}{" "}
          <a href="mailto:worldshaans@gmail.com" className="underline">
            Email me directly
          </a>
        </p>
      )}
      {status === "fallback" && (
        <p role="status" className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white/80">
          The contact service isn&apos;t configured on this deployment yet —{" "}
          <a href="mailto:worldshaans@gmail.com" className="text-cyan underline">
            click here to email me directly
          </a>
          .
        </p>
      )}
      <GlowButton
        type="submit"
        className="w-full px-8 py-3 text-sm font-bold text-white hover:text-cyan transition-all cursor-pointer disabled:opacity-50"
      >
        {status === "sending" ? "Sending…" : "Send Message"}
      </GlowButton>
    </form>
  );
}
