import { RadicalHeader } from "./components/RadicalHeader";
import { CinematicHero } from "./components/CinematicHero";
import { FloatingFeatures } from "./components/FloatingFeatures";
import { ImmersiveCTA } from "./components/ImmersiveCTA";
import { RadicalFooter } from "./components/RadicalFooter";

export default function App() {
  return (
    <div className="min-h-screen relative bg-gradient-to-b from-white via-slate-50 to-blue-50">
      <RadicalHeader />
      <main className="relative z-10">
        <CinematicHero />
        <FloatingFeatures />
        <ImmersiveCTA />
      </main>
      <RadicalFooter />
    </div>
  );
}