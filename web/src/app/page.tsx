import HalideLanding from "@/components/ui/demo";
import { HalideTopoHero } from "@/components/ui/halide-topo-hero";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <HalideLanding />
      
      {/* Overlaying the Hero component for interactivity */}
      <div className="fixed bottom-4 left-4 right-4 sm:bottom-24 sm:left-16 sm:right-auto z-50 flex justify-center sm:block">
        <HalideTopoHero />
      </div>
    </main>
  );
}
