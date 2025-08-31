"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle"|"loading"|"ok"|"error">("idle");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("ok");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl bg-card/80 backdrop-blur-md border border-outline/40 shadow-soft p-4 flex flex-col gap-3">
      <label className="text-sm text-fg/80">Join the newsletter and accompany my learning with passion.</label>
      <div className="flex gap-2">
        <input
          type="email"
          required
          placeholder="you@domain.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 rounded-lg bg-transparent border border-outline/40 px-3 py-2 text-sm outline-none focus:border-accent/60"
        />
        <button className="btn-accent" disabled={status === "loading"}>
          {status === "loading" ? "Subscribing..." : "Subscribe"}
        </button>
      </div>
      {status === "ok" && <p className="text-sm text-trust">Thanks! Check your inbox.</p>}
      {status === "error" && <p className="text-sm text-red-300">Something went wrong—try again.</p>}
    </form>
  );
}
