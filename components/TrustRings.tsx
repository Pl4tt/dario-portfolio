"use client";

import { useEffect, useRef } from "react";

export default function TrustRings() {
  const ref = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const svg = ref.current!;
    let raf = 0;
    let t = 0;
    const circles = Array.from(svg.querySelectorAll("circle"));

    const step = () => {
      t += 0.008;
      circles.forEach((c, i) => {
        const base = parseFloat(c.getAttribute("data-base") || "0");
        const amp = 2 + i * 0.2;
        const r = base + Math.sin(t + i * 0.8) * amp;
        c.setAttribute("r", r.toFixed(2));
        const alpha = 0.12 + (i / circles.length) * 0.25;
        c.setAttribute("stroke", `rgba(45, 212, 191, ${alpha.toFixed(3)})`);
      });
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <svg ref={ref} className="w-full h-full" viewBox="0 0 600 600">
      {[120, 160, 200, 240, 280].map((r, i) => (
        <circle
          key={i}
          cx="300"
          cy="300"
          r={r}
          data-base={r}
          fill="none"
          strokeWidth={1.2}
          stroke="rgba(45,212,191,0.18)"
        />
      ))}
    </svg>
  );
}
