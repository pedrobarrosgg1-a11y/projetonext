import { FeatureSection } from "../components/feature-section";
import { HeroSection } from "@/src/components/hero-section";
import { SupportSection } from "../components/support-section";

export default function Home() {
  return (
    <>
      <article className="flex flex-col">
        <HeroSection />
        <FeatureSection />
        <SupportSection />
      </article>
    </>
  );
}
