"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { ArrowRight } from "lucide-react";
import ValuesBar from "@/components/ValuesBar";
import Magnetic from "@/components/Magnetic";
import EvasiveButtonViewport from "@/components/EvasiveButtonViewport";

const NeuralMesh = dynamic(() => import("@/components/NeuralMesh"), { ssr: false });
const TrustRings = dynamic(() => import("@/components/TrustRings"), { ssr: false });

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Decorative interactive objects */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 w-[60vw] max-w-[900px] h-[70vh] -translate-x-1/3 -translate-y-1/4 opacity-70 pointer-events-auto">
          <NeuralMesh />
        </div>
        <div className="absolute right-[-10%] top-[-20%] w-[50vw] max-w-[680px] h-[70vh] opacity-60">
          <TrustRings />
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <p className="font-display text-sm tracking-[0.2em] text-muted uppercase mb-3">
            ETH Zürich • Computer Science
          </p>
          <h1 className="font-display text-5xl md:text-7xl leading-[0.95] font-semibold mb-4">
            <span className="block text-white">Dario Patt</span>
            <span className="block text-fg/80 mt-2">
              {/* Tagline options (pick one): 
                - Curious systems. Dependable software.
                - Learning in public. Building reliable tools.
                - Systems-minded. Human-centered. */}
              Curious systems. <span className="text-accent">Dependable</span> software.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-fg/70 max-w-2xl">
            I explore, prototype, and ship — bridging ideas into systems that people can trust. MedTech / AI internships, backend-leaning projects, and playful experiments.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Magnetic><a href="mailto:hello@dariopatt.dev" className="btn-accent">
              Let’s collaborate <ArrowRight className="h-4 w-4" />
            </a></Magnetic>
            <a href="/projects" className="btn-ghost">
              See selected work
            </a>
              {/* Troll mode 😈 */}
            <EvasiveButtonViewport
              href="/projects"
              className="btn-ghost"
              maxEvades={10}                    // stop after 10 jumps
            >SUPER SECRET WORK 😈</EvasiveButtonViewport>
          </div>

          <div className="mt-10">
            <ValuesBar />
          </div>
        </motion.div>

        {/* Highlights row */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="card p-5">
            <div className="text-sm text-muted">Recent</div>
            <div className="mt-2 text-fg/90">Starting BSc CS @ ETH Zürich</div>
          </div>
          <div className="card p-5">
            <div className="text-sm text-muted">Experience</div>
            <div className="mt-2 text-fg/90">3× Software Engineering Internships</div>
          </div>
          <div className="card p-5">
            <div className="text-sm text-muted">Focus</div>
            <div className="mt-2 text-fg/90">Systems • Reliability • Exploration</div>
          </div>
        </div>
      </div>
    </section>
  );
}
