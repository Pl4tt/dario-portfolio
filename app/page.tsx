import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false });
const Hero = dynamic(() => import("@/components/home/Hero"), { ssr: false });

import FeaturedProjects from "@/components/home/FeaturedProjects";
import SkillsTeaser from "@/components/home/SkillsTeaser";
import WritingTeaser from "@/components/home/WritingTeaser";

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FeaturedProjects />
      <SkillsTeaser />
      {/* WritingTeaser is async (server) — safe to render directly in App Router */}
      {/* @ts-expect-error Async Server Component */}
      <WritingTeaser />
    </main>
  );
}
