import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import SectionCard from "@/components/SectionCard";
import NewsletterForm from "@/components/NewsletterForm";
import { getAllPosts } from "@/lib/posts";

export const dynamic = "force-static";

export default async function WritingPage() {
  const posts = await getAllPosts();
  return (
    <main>
      <Navbar />
      <PageHeader
        title="Writing & notes"
        subtitle="Short, honest posts from curiosity to impact."
      />
      <div className="mx-auto max-w-6xl px-4 pb-16 grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 grid gap-4">
        <NewsletterForm />
          {posts.map((p) => (
            <SectionCard key={p.slug}>
              <a href={`/writing/${p.slug}`} className="block">
                <h3 className="font-medium text-lg">{p.title}</h3>
                {p.description && <p className="mt-1 text-sm text-fg/75">{p.description}</p>}
              </a>
            </SectionCard>
          ))}
        </div>
      </div>
    </main>
  );
}
