import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import SectionCard from "@/components/SectionCard";

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <PageHeader
        title="About"
        subtitle="CS @ ETH Zürich. Curious and impact‑driven—building reliable, versatile systems."
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 grid gap-6 md:grid-cols-3">
        <SectionCard>
          <h3 className="font-medium text-lg">Bio</h3>
          <p className="mt-2 text-sm text-fg/75">
            I like crossing ideas—algorithms, UI, systems—and turning them into tools people can trust.
            My med‑tech internships taught me to respect reliability; my experiments keep me open.
          </p>
        </SectionCard>

        <SectionCard>
          <h3 className="font-medium text-lg">Highlights</h3>
          <ul className="mt-2 space-y-2 text-sm text-fg/80 list-disc pl-5">
            <li>3× Software Engineering Internships — Hamilton Medical</li>
            <li>Maturaarbeit: Chess AI + website (grade 6 + recognition)</li>
            <li>Awards: Känguru Top‑20 CH, Biber 99th percentile</li>
          </ul>
        </SectionCard>

        <SectionCard>
          <h3 className="font-medium text-lg">Interests & skills</h3>
          <ul className="mt-2 space-y-2 text-sm text-fg/80 list-disc pl-5">
            <li>Systems & reliability • Human‑centered AI</li>
            <li>TypeScript/React • Python • Django</li>
            <li>Playful visuals for learning</li>
          </ul>
        </SectionCard>
      </div>
    </main>
  );
}
