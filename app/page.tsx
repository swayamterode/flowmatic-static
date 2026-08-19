import { CallToAction } from "@/components/cta";
import { FaqsSection } from "@/components/faqs-page";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero";
import { Integrations } from "@/components/integrations";
import { PricingSection } from "@/components/pricing-section";
import ResearchBentoGrid from "@/components/ui/research-bento-grid";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Integrations />
      <ResearchBentoGrid id="features" className="scroll-mt-24 mt-20" />
      <div className="p-20 pb-10">
        <CallToAction />
      </div>
      <div id="pricing" className="scroll-mt-24 pb-20 pt-10">
        <PricingSection />
      </div>
      <div className="border-t" />
      <FaqsSection />
      <Footer />
    </>
  );
}
