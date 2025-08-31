"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

function mulberry32(a: number) {
  return function() {
    let t = (a += 0x6D2B79F5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export default function BackoffViz() {
  const [base, setBase] = useState(250);
  const [retries, setRetries] = useState(6);
  const [jitter, setJitter] = useState(30);
  const [seed, setSeed] = useState(42);

  const attempts = useMemo(() => {
    const rand = mulberry32(seed);
    const arr: { attempt: number; wait: number; waitJ: number; cum: number }[] = [];
    let cum = 0;
    for (let i = 0; i < retries; i++) {
      const wait = base * Math.pow(2, i);
      const jitterFactor = 1 + (rand() * 2 - 1) * (jitter / 100);
      const waitJ = Math.max(0, wait * jitterFactor);
      cum += waitJ;
      arr.push({ attempt: i + 1, wait, waitJ, cum });
    }
    return arr;
  }, [base, retries, jitter, seed]);

  const total = attempts.length ? attempts[attempts.length - 1].cum : 0;
  const fmt = (ms: number) => (ms >= 1000 ? (ms / 1000).toFixed(2) + "s" : Math.round(ms) + "ms");

  return (
    <div className="w-full max-w-3xl">
      <div className="card p-4">
        <div className="flex flex-wrap gap-3">
          <label className="text-sm">Base:
            <input type="range" min={50} max={1000} value={base}
              onChange={(e) => setBase(parseInt(e.target.value))} className="ml-2" />
            <span className="ml-2 text-fg/70">{fmt(base)}</span>
          </label>
          <label className="text-sm">Retries:
            <input type="range" min={1} max={10} value={retries}
              onChange={(e) => setRetries(parseInt(e.target.value))} className="ml-2" />
            <span className="ml-2 text-fg/70">{retries}</span>
          </label>
          <label className="text-sm">Jitter:
            <input type="range" min={0} max={60} value={jitter}
              onChange={(e) => setJitter(parseInt(e.target.value))} className="ml-2" />
            <span className="ml-2 text-fg/70">{jitter}%</span>
          </label>
          <label className="text-sm">Seed:
            <input type="number" value={seed}
              onChange={(e) => setSeed(parseInt(e.target.value) || 0)}
              className="ml-2 w-20 bg-transparent border border-outline/40 rounded px-1 py-0.5 text-sm" />
          </label>
        </div>

        <div className="mt-4 relative h-28 rounded-xl bg-white/5 border border-outline/40 overflow-hidden">
          <div className="absolute inset-0 p-3">
            <div className="relative h-10 mt-4">
              {attempts.map((a, idx) => {
                const left = (a.cum / total) * 100;
                return (
                  <motion.div key={idx}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className="absolute top-0 h-10" style={{ left: `calc(${left}% - 1px)` }}>
                    <div className="w-[2px] h-10 bg-white/60" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-3 text-sm text-fg/70">
          Total wait (worst-case expected): <span className="text-fg/90">{fmt(total)}</span>.  
          Exponential backoff with jitter reduces thundering-herd effects → more reliable systems.
        </div>
      </div>
    </div>
  );
}
