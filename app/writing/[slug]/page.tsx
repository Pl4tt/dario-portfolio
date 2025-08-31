import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Prose from "@/components/Prose";
import ReadingProgress from "@/components/ReadingProgress";
import { getAllSlugs, getPostBySlug } from "@/lib/posts";
import { renderMarkdownToHtml } from "@/lib/markdown";

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { meta } = await getPostBySlug(params.slug);
  return {
    title: meta.title,
    description: meta.description,
    openGraph: { title: meta.title, description: meta.description },
  };
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const { content, meta } = await getPostBySlug(params.slug);
  const html = renderMarkdownToHtml(content);
  return (
    <main>
      <ReadingProgress />
      <Navbar />
      <PageHeader title={meta.title} subtitle={meta.description} />
      <div className="mx-auto max-w-3xl px-4 pb-16">
        <Prose>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </Prose>
      </div>
    </main>
  );
}
