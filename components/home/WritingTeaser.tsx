import Link from "next/link";
import NewsletterForm from "@/components/NewsletterForm";
import { ArrowRight } from "lucide-react";
import { getAllPosts } from "@/lib/posts"; // your existing helper that reads /content/posts

export default async function WritingTeaser() {
  const posts = (await getAllPosts()).slice(0, 2); // latest two

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <header className="flex items-end justify-between">
        <h2 className="font-display text-2xl md:text-3xl">Writing & notes</h2>
        <Link href="/writing" className="btn-ghost">All posts</Link>
      </header>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <div className="card p-5 md:col-span-2">
          <div className="grid gap-4 sm:grid-cols-2">
            {posts.map((p) => (
              <Link key={p.slug} href={`/writing/${p.slug}`} className="block rounded-xl border border-outline/40 p-4 hover:bg-white/5">
                <div className="text-sm text-muted">{new Date(p.date).toLocaleDateString()}</div>
                <div className="mt-1 font-medium">{p.title}</div>
                <div className="mt-1 text-sm text-fg/70 line-clamp-2">{p.description}</div>
                <div className="mt-2 inline-flex items-center gap-1 text-xs text-accent">
                  Read <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="card p-5">
          <h3 className="font-medium">Newsletter</h3>
          <p className="mt-1 text-sm text-fg/70">Occasional updates—learning logs, experiments, and useful notes.</p>
          <div className="mt-3">
            <NewsletterForm />
          </div>
        </div>
      </div>
    </section>
  );
}