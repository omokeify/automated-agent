import HalideLanding from "@/components/ui/demo";
import { HalideTopoHero } from "@/components/ui/halide-topo-hero";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <HalideLanding />
      
      {/* Overlaying the Hero component for interactivity */}
      <div className="fixed bottom-24 left-16 z-50">
        <HalideTopoHero />
      </div>
    </main>
  );
}
