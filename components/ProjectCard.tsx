"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard(props: { title: string; description: string; href?: string; tags?: string[] }) {
  const { title, description, href, tags = [] } = props;
  return (
    <motion.div whileHover={{ y: -4 }} className="rounded-2xl bg-card/80 backdrop-blur-md border border-outline/40 shadow-soft p-5">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-medium text-lg">{title}</h3>
        {href && <ArrowUpRight className="h-4 w-4 text-muted" />}
      </div>
      <p className="mt-2 text-sm text-fg/75">{description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span key={t} className="rounded-full border border-outline/40 px-2.5 py-1 text-xs text-fg/80">
            {t}
          </span>
        ))}
      </div>
      {href && <div className="mt-3 text-sm text-accent/90">Open ↗</div>}
    </motion.div>
  );
}
