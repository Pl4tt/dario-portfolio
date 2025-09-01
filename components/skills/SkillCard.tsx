"use client";
import { motion } from "framer-motion";
import LevelDots from "@/components/skills/LevelDots";
import { ReactNode } from "react";

export default function SkillCard({
  title,
  items,
  icon,
}: {
  title: string;
  items: { name: string; level?: number; note?: string }[];
  icon?: ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.35 }}
      className="rounded-2xl bg-card/80 backdrop-blur-md border border-outline/40 shadow-soft p-5"
    >
      <div className="flex items-center gap-3">
        {icon && <div className="text-accent">{icon}</div>}
        <h3 className="font-medium text-lg">{title}</h3>
      </div>
      <div className="mt-3 grid gap-2">
        {items.map((s) => (
          <div key={s.name} className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="rounded-full border border-outline/40 px-2.5 py-1 text-xs text-fg/90">
                {s.name}
              </span>
              {s.note && <span className="text-xs text-fg/60">{s.note}</span>}
            </div>
            <LevelDots level={s.level ?? 6} />
          </div>
        ))}
      </div>
    </motion.div>
  );
}