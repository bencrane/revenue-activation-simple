import Hero from "@/components/Hero";
import ImagineSection from "@/components/ImagineSection";
import WhatWeDo from "@/components/WhatWeDo";
import Results from "@/components/Results";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <main className="bg-black">
      <Hero />
      <ImagineSection />
      <WhatWeDo />
      <Results />
      <FinalCTA />
    </main>
  );
}
