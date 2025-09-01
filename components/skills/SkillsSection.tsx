import SkillCard from "@/components/skills/SkillCard";
import { Code, ServerCog, Cloud, Cpu, MessageSquare, Users, Brain, Target, BookOpen, Handshake } from "lucide-react";

/** TECHNICAL SKILLS (your updated levels) */
const tech = [
  {
    title: "Languages & Frameworks",
    icon: <Code className="h-5 w-5" />,
    items: [
      { name: "Python", level: 9, note: "primary language" },
      { name: "FastAPI", level: 8, note: "typed REST services" },
      { name: "Django", level: 9, note: "full-stack apps" },
      { name: "Angular", level: 7, note: "component patterns" },
      { name: "React", level: 5, note: "modern UIs" },
      { name: "Java Spring", level: 4, note: "service basics" },
    ],
  },
  {
    title: "Containers, Ops & CI/CD",
    icon: <ServerCog className="h-5 w-5" />,
    items: [
      { name: "Git", level: 9, note: "branching, reviews" },
      { name: "Linux", level: 8, note: "daily driver" },
      { name: "Containerization", level: 8, note: "packaging services" },
      { name: "Docker", level: 8, note: "containers & images" },
      { name: "Kubernetes", level: 6, note: "workload orchestration" },
      { name: "CI/CD", level: 6, note: "pipelines & testing" },
      { name: "Bash scripting", level: 6, note: "automation" },
    ],
  },
  {
    title: "Cloud, Data & Web",
    icon: <Cloud className="h-5 w-5" />,
    items: [
      { name: "APIs & HTTP", level: 9, note: "design & contracts" },
      { name: "Databases", level: 8, note: "schemas & queries" },
      { name: "Nginx", level: 7, note: "reverse proxying" },
      { name: "S3 Object Storage", level: 7, note: "static & backups" },
      { name: "Cloudflare", level: 7, note: "DNS/CDN/caching" },
    ],
  },
  {
    title: "AI & Networking",
    icon: <Cpu className="h-5 w-5" />,
    items: [
      { name: "AI (general)", level: 6, note: "classical + applied" },
      { name: "Large Language Models", level: 6, note: "prompting & evals" },
      { name: "RAG pipelines", level: 7, note: "retrieval + grounding" },
      { name: "Network architecture", level: 7, note: "topologies & routing" },
      { name: "Computer networks", level: 7, note: "TCP/IP, OSI, DNS" },
      { name: "Security", level: 5, note: "authn/z & basics" },
    ],
  },
] as const;

/** SOFT SKILLS & PRACTICES (from your dossier + tone) */
const soft = [
  {
    title: "Communication & Collaboration",
    icon: <MessageSquare className="h-5 w-5" />,
    items: [
      { name: "Teamwork", level: 9, note: "pairing & reviews" },
      { name: "Public speaking/debate", level: 9, note: "coherent arguments" },
      { name: "Technical writing", level: 8, note: "clear docs & summaries" },
      { name: "Teaching & tutoring", level: 8, note: "explain by building" },
      { name: "Stakeholder alignment", level: 7, note: "requirements → scope" },
    ],
  },
  {
    title: "Mindset & Process",
    icon: <Brain className="h-5 w-5" />,
    items: [
      { name: "Problem framing", level: 8, note: "clarify constraints" },
      { name: "Analytical rigor", level: 8, note: "measurements > vibes" },
      { name: "Learning agility", level: 9, note: "rapid upskilling" },
      { name: "Curiosity-driven research", level: 9, note: "explore then focus" },
      { name: "Reliability & ownership", level: 7, note: "predictable delivery" },
      { name: "Iteration & timeboxing", level: 7, note: "small artifacts out" },
    ],
  },
  {
    title: "Leadership & Impact",
    icon: <Users className="h-5 w-5" />,
    items: [
      { name: "Leading small initiatives", level: 6, note: "class/team contexts" },
      { name: "Mentoring peers", level: 6, note: "unblock & support" },
      { name: "Cross-disciplinary thinking", level: 8, note: "CS × med-tech × ethics" },
      { name: "Product sense & UX empathy", level: 6, note: "useful > flashy" },
      { name: "Collaboration & trust", level: 7, note: "steady follow-through" },
    ],
  },
] as const;

export default function SkillsSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-16 space-y-10">
      {/* Technical skills */}
      <header className="flex items-end justify-between">
        <h2 className="font-display text-2xl md:text-3xl">Technical skills</h2>
        <span className="text-sm text-fg/60">Snapshot of tools & systems</span>
      </header>
      <div className="grid gap-6 md:grid-cols-2">
        {tech.map((group) => (
          <SkillCard key={group.title} title={group.title} items={group.items} icon={group.icon} />
        ))}
      </div>

      <hr className="my-4 opacity-60" />

      {/* Soft skills & practices */}
      <header className="flex items-end justify-between">
        <h2 className="font-display text-2xl md:text-3xl">Soft skills & practices</h2>
        <span className="text-sm text-fg/60">How I work with people & problems</span>
      </header>
      <div className="grid gap-6 md:grid-cols-2">
        {soft.map((group) => (
          <SkillCard key={group.title} title={group.title} items={group.items} icon={group.icon} />
        ))}
      </div>

      <p className="mt-2 text-sm text-fg/60">
        Levels indicate current familiarity (1–10) and evolve with projects. I value versatility—crossing layers to ship reliable systems.
      </p>
    </section>
  );
}