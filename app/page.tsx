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
      <div className="p-2">
        <HeroSection />
      </div>
      <div className="px-2 sm:px-4 md:px-2">
        <Integrations />
      </div>
      <ResearchBentoGrid id="features" className="scroll-mt-24 mt-20" />
      <div className="py-10 md:py-0 p-2 md:p-20 md:pb-10">
        <CallToAction />
      </div>
      <div id="pricing" className="scroll-mt-24 pb-20 pt-10 p-2">
        <PricingSection />
      </div>
      <div className="border-t" />
      <FaqsSection />
      <Footer />
    </>
  );
}
