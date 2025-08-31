"use client";

import { motion } from "framer-motion";
import { Compass, ShieldCheck, Sparkles, MessageSquare, CheckCircle2, Workflow } from "lucide-react";

const values = [
  { label: "Openness", icon: Compass, hue: "from-accent/30 to-accent/10" },
  { label: "Curiosity", icon: Sparkles, hue: "from-accent/30 to-accent/10" },
  { label: "Communicator", icon: MessageSquare, hue: "from-accent/30 to-accent/10" },
  { label: "Trust", icon: ShieldCheck, hue: "from-trust/30 to-trust/10" },
  { label: "Reliability", icon: CheckCircle2, hue: "from-trust/30 to-trust/10" },
  { label: "Versatility", icon: Workflow, hue: "from-accent/25 to-trust/15" },
] as const;

export default function ValuesBar() {
  return (
    <div className="flex flex-wrap gap-2">
      {values.map((v, i) => (
        <motion.div
          key={v.label}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.06 * i }}
          className={`group relative overflow-hidden rounded-full border border-outline/40 px-3.5 py-2 text-sm text-fg/90`}
        >
          <div className={`absolute inset-0 bg-gradient-to-b ${v.hue} opacity-0 group-hover:opacity-100 transition-opacity`} />
          <div className="relative flex items-center gap-2">
            <v.icon className="h-4 w-4" />
            <span>{v.label}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
