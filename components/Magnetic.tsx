"use client";
import { useRef } from "react";

export default function Magnetic({
  children, radius = 120, strength = 0.18,
}: { children: React.ReactNode; radius?: number; strength?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  function onMove(e: React.MouseEvent) {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
    const dx = e.clientX - cx, dy = e.clientY - cy;
    const dist = Math.hypot(dx, dy);
    if (dist < radius) {
      const f = (1 - dist / radius) * strength;
      el.style.transform = `translate3d(${dx * f}px, ${dy * f}px, 0)`;
    } else {
      el.style.transform = `translate3d(0,0,0)`;
    }
  }
  function reset() { const el = ref.current; if (el) el.style.transform = `translate3d(0,0,0)`; }
  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={reset} className="inline-block will-change-transform">
      {children}
    </div>
  );
}