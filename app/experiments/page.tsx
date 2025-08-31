import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import SectionCard from "@/components/SectionCard";
import dynamic from "next/dynamic";

const NeuralMesh = dynamic(() => import("@/components/NeuralMesh"), { ssr: false });
const TruthSlider = dynamic(() => import("@/components/TruthSlider"), { ssr: false });
const BackoffViz = dynamic(() => import("@/components/BackoffViz"), { ssr: false });

export default function ExperimentsPage() {
  return (
    <main>
      <Navbar />
      <PageHeader
        title="Experiments"
        subtitle="Curiosity in motion—small demos for intuition about systems."
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 grid gap-6 md:grid-cols-2">
        <SectionCard>
          <h3 className="font-medium text-lg">Interactive neural mesh</h3>
          <p className="mt-1 text-sm text-fg/75">
            Cursor‑responsive network—exploration finding structure.
          </p>
          <div className="mt-4 h-64 rounded-xl overflow-hidden border border-outline/40">
            <NeuralMesh />
          </div>
        </SectionCard>

        <SectionCard>
          <h3 className="font-medium text-lg">Consensus tuner</h3>
          <p className="mt-1 text-sm text-fg/75">
            Blend two perspectives; a metaphor for how quorum and aggregation shape agreed state.
          </p>
          <div className="mt-4">
            <TruthSlider />
          </div>
        </SectionCard>

        <SectionCard>
          <h3 className="font-medium text-lg">Exponential backoff visualizer</h3>
          <p className="mt-1 text-sm text-fg/75">
            Tune base delay, retries, and jitter to see how retry strategies tame spikes and improve reliability.
          </p>
          <div className="mt-4">
            <BackoffViz />
          </div>
        </SectionCard>
      </div>
    </main>
  );
}
