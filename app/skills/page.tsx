import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import SkillsSection from "@/components/skills/SkillsSection";

export const metadata = {
  title: "Skills — Dario Patt",
  description: "A visual snapshot of what I work with.",
};

export default function SkillsPage() {
  return (
    <main>
      <Navbar />
      <PageHeader
        title="Skills"
        subtitle="A snapshot of tools & concepts I use—grounded in reliability, driven by curiosity."
      />
      <SkillsSection />
    </main>
  );
}