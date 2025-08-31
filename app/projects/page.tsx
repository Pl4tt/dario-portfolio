import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import SectionCard from "@/components/SectionCard";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  return (
    <main>
      <Navbar />
      <PageHeader
        title="Selected projects"
        subtitle="Bridging ideas into systems—reliable APIs, useful tools, and playful demos."
      />
      <div className="mx-auto max-w-6xl px-4 pb-16 grid gap-6 md:grid-cols-2">
        <SectionCard>
          <ProjectCard
            title="Chess AI — classical search + service API"
            description="Maturaarbeit (grade 6 + recognition). Search/eval engine behind a small service API with deterministic tests and telemetry."
            href="https://github.com/pl4tt"
            tags={["TypeScript", "Algorithms", "Search/Eval", "API"]}
          />
          <ul className="mt-3 text-sm text-fg/75 list-disc pl-5">
            <li>Engine API designed for deterministic testing</li>
            <li>Benchmarked search depths & eval heuristics</li>
            <li>Simple observability hooks</li>
          </ul>
        </SectionCard>

        <SectionCard>
          <ProjectCard
            title="Hamilton Medical — SWE Internships (×3)"
            description="Internal tooling & automation focused on clarity and reliability—reducing failure rates, speeding feedback."
            href="https://github.com/pl4tt"
            tags={["Python/TS", "Automation", "Reliability", "MedTech"]}
          />
          <ul className="mt-3 text-sm text-fg/75 list-disc pl-5">
            <li>Retries + idempotency for jobs</li>
            <li>Measured speed‑ups; reduced failures</li>
            <li>Logging & alerts for fast triage</li>
          </ul>
        </SectionCard>

        <SectionCard>
          <ProjectCard
            title="Bike Club CMS — Django"
            description="Pragmatic content system—modeled core entities, kept ops simple, and prioritized clarity."
            href="https://github.com/pl4tt"
            tags={["Django", "Postgres", "Infra", "UX"]}
          />
        </SectionCard>

        <SectionCard>
          <ProjectCard
            title="Notes & Experiments"
            description="Retry/backoff, consensus metaphors, and UI touches that make systems more legible."
            href="/experiments"
            tags={["Reliability", "Distributed systems", "Play"]}
          />
        </SectionCard>
      </div>
    </main>
  );
}
