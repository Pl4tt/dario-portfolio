"use client";

import { useEffect, useState } from "react";

export default function ReadingProgress() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const h = el.scrollHeight - el.clientHeight;
      const y = window.scrollY;
      setPct(Math.max(0, Math.min(1, h ? y / h : 0)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      aria-hidden
      className="fixed left-0 top-0 h-1 z-50"
      style={{
        width: `${pct * 100}%`,
        background: "linear-gradient(90deg, hsl(var(--accent)), hsl(var(--trust)))",
        boxShadow: "0 0 12px rgba(0,0,0,0.2)"
      }}
    />
  );
}
