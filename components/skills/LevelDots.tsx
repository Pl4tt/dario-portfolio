"use client";
import { memo } from "react";
import { motion } from "framer-motion";

export default memo(function LevelDots({ level = 6, max = 10 }: { level?: number; max?: number }) {
  const dots = Array.from({ length: max }, (_, i) => i < level);
  return (
    <div className="flex items-center gap-1.5">
      {dots.map((filled, i) => (
        <motion.span
          key={i}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.25, delay: i * 0.03 }}
          className={`h-2 w-2 rounded-full ${filled ? "bg-[hsl(var(--accent))]" : "bg-white/15"}`}
          aria-hidden
        />
      ))}
    </div>
  );
});