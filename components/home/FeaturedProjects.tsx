import Link from "next/link";
import { ArrowRight, Github } from "lucide-react";

const projects = [
  {
    title: "Chess AI (from scratch)",
    blurb: "Search + evaluation + UI; strength vs. heuristics; built to learn, not just win.",
    href: "/projects#chess-ai",
    repo: "https://github.com/pl4tt", // swap to exact repo if you like
    stack: ["Python", "Sockets", "UI"],
  },
  {
    title: "Hamilton Medical internships ×3",
    blurb: "Automation & reliability improvements; shipped code in real environments.",
    href: "/projects#hamilton",
    repo: undefined,
    stack: ["Backend", "Automation", "Quality"],
  },
  {
    title: "Club CMS (Django)",
    blurb: "Stakeholder-driven CMS with auth, content models, and deploy pipeline.",
    href: "/projects#club-cms",
    repo: "https://github.com/pl4tt", // swap
    stack: ["Django", "PostgreSQL", "Docker"],
  },
];

export default function FeaturedProjects() {
  return (
    <section className="relative mx-auto max-w-6xl px-4 py-12 md:py-16">
      <header className="flex items-end justify-between">
        <h2 className="font-display text-2xl md:text-3xl">Selected work</h2>
        <Link href="/projects" className="btn-ghost">
          See all <ArrowRight className="h-4 w-4" />
        </Link>
      </header>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {projects.map((p) => (
          <div key={p.title} className="card p-5 h-full flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-medium">{p.title}</h3>
              <p className="mt-2 text-sm text-fg/70">{p.blurb}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="rounded-full border border-outline/40 px-2.5 py-1 text-xs text-fg/80">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <Link href={p.href} className="btn-ghost">Details</Link>
              {p.repo && (
                <a href={p.repo} target="_blank" className="btn-ghost" aria-label="GitHub">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}