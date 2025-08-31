import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false });
const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
    </main>
  );
}
