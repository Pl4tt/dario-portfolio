"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function TruthSlider() {
  const [v, setV] = useState(50);
  return (
    <div className="w-full max-w-3xl">
      <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-outline/40 bg-black/30">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(1200px_800px_at_0%_0%,rgba(0,200,255,.25),transparent_60%),radial-gradient(900px_600px_at_100%_0%,rgba(0,255,200,.2),transparent_60%)]" />
          <div
            className="absolute inset-y-0 right-0 bg-[radial-gradient(1200px_800px_at_100%_0%,rgba(45,212,191,.28),transparent_60%),radial-gradient(900px_600px_at_0%_100%,rgba(45,212,191,.18),transparent_60%)]"
            style={{ width: `${v}%` }}
          />
          <motion.div className="absolute inset-y-0 right-0 w-1 bg-white/60 mix-blend-overlay" initial={false} />
        </div>
      </div>
      <div className="mt-3 flex items-center gap-3">
        <span className="text-sm text-fg/70">Perspective A</span>
        <input
          aria-label="Consensus tuner"
          type="range"
          min={0}
          max={100}
          value={v}
          onChange={(e) => setV(parseInt(e.target.value, 10))}
          className="w-full accent-[hsl(var(--accent))]"
        />
        <span className="text-sm text-fg/70">Perspective B</span>
      </div>
      <p className="mt-2 text-sm text-fg/70">
        Slide to explore how quorum and weighting affect agreed state.
      </p>
    </div>
  );
}
