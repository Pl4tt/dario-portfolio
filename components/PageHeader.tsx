"use client";

import { motion } from "framer-motion";

export default function PageHeader(props: { title: string; subtitle?: string }) {
  const { title, subtitle } = props;
  return (
    <div className="relative mx-auto max-w-6xl px-4 pt-14 pb-8 md:pt-16 md:pb-10">
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="font-display text-4xl md:text-6xl font-semibold tracking-tight"
      >
        {title}
      </motion.h1>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
          className="mt-3 text-fg/75 max-w-2xl"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
