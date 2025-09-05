import Link from "next/link";

const chips = [
  "Python", "Django", "FastAPI", "Docker", "Kubernetes",
  "PostgreSQL", "Nginx", "APIs", "LLMs", "RAG", "Sockets",
];

export default function SkillsTeaser() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <header className="flex items-end justify-between">
        <h2 className="font-display text-2xl md:text-3xl">Skills snapshot</h2>
        <Link href="/skills" className="btn-ghost">Full skills</Link>
      </header>

      <div className="mt-6 card p-5">
        <p className="text-sm text-fg/70">
          Versatile across layers: backend-leaning systems with strong web foundations and hands-on ops.
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {chips.map((c) => (
            <span key={c} className="rounded-full border border-outline/40 px-2.5 py-1 text-xs text-fg/90">
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}