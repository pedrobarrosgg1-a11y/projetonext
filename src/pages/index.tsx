import { FeatureSection } from "../components/feature-section";
import { HeroSection } from "@/src/components/hero-section";
import { SupportSection } from "../components/support-section";
import { CustomerStorySection as CustomerSection } from "@/src/components/customer-section";
import { CallToAction } from "../components/call-to-action/call-to-action";

export default function Home() {
  return (
    <>
      <article className="flex flex-col">
        <HeroSection />
        <FeatureSection />
        <SupportSection />
        <CustomerSection />
        <CallToAction />  
      </article>
    </>
  );
}
