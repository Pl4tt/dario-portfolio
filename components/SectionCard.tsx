"use client";

import { PropsWithChildren } from "react";
import { motion } from "framer-motion";

export default function SectionCard({ children }: PropsWithChildren) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="rounded-2xl bg-card/80 backdrop-blur-md border border-outline/40 shadow-soft p-6"
    >
      {children}
    </motion.section>
  );
}
