"use client";

import Link from "next/link";
import { Github, FileDown, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import ModeToggle from "@/components/ModeToggle"

const nav = [
  { href: "/projects", label: "Projects" },
  { href: "/experiments", label: "Experiments" },
  { href: "/writing", label: "Writing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="sticky top-0 z-40 backdrop-blur-md bg-black/20 border-b border-outline/30">
      <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2" aria-label="Home">
          <motion.span
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="font-display text-lg tracking-wide"
          >
            <span className="text-fg/80">Dario</span>{" "}
            <span className="text-white">Patt</span>
          </motion.span>
        </Link>

        <div className="hidden md:flex items-center gap-5">
          <nav className="flex items-center gap-1" aria-label="Primary">
            {nav.map((item) => {
              const active = pathname?.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={clsx(
                    "px-3 py-1.5 rounded-full text-sm border transition-colors",
                    active
                      ? "border-accent/40 bg-accent/15 text-white"
                      : "border-outline/40 text-fg/80 hover:bg-white/5"
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a href="https://github.com/pl4tt" target="_blank" className="btn-ghost" aria-label="GitHub">
              <Github className="h-4 w-4" />
              <span className="hidden lg:inline">GitHub</span>
            </a>
            <a href="/Dario_Patt_CV.pdf" className="btn-ghost" aria-label="Download CV">
              <FileDown className="h-4 w-4" />
              <span className="hidden lg:inline">CV</span>
            </a>
            <a href="mailto:hello@dariopatt.dev" className="btn-accent" aria-label="Contact">
              <Mail className="h-4 w-4" />
              <span className="hidden lg:inline">Contact</span>
            </a>
            <ModeToggle />
          </div>
        </div>
      </div>
    </div>
  );
}
