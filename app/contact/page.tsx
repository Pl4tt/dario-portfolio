import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import SectionCard from "@/components/SectionCard";
import { Mail, Github } from "lucide-react";

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <PageHeader
        title="Contact"
        subtitle="Open to internships, collaborations, and learning conversations."
      />
      <div className="mx-auto max-w-3xl px-4 pb-16 grid gap-6">
        <SectionCard>
          <div className="flex flex-col gap-4">
            <a href="mailto:hello@dariopatt.dev" className="btn-accent w-fit">
              <Mail className="h-4 w-4" /> Email me
            </a>
            <a href="https://github.com/pl4tt" target="_blank" className="btn-ghost w-fit">
              <Github className="h-4 w-4" /> GitHub /pl4tt
            </a>
          </div>
        </SectionCard>
        <SectionCard>
          <p className="text-sm text-fg/75">
            Prefer async? Send a note with a bit of context and I’ll reply as soon as I can.
          </p>
        </SectionCard>
      </div>
    </main>
  );
}
