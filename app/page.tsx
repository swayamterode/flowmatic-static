import { CallToAction } from "@/components/cta";
import { FaqsSection, faqs } from "@/components/faqs-page";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero";
import { Integrations } from "@/components/integrations";
import { JsonLd } from "@/components/json-ld";
import { PricingSection, plans } from "@/components/pricing-section";
import { siteConfig } from "@/lib/site-config";
import ResearchBentoGrid from "@/components/ui/research-bento-grid";

const softwareApplicationJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: siteConfig.name,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: siteConfig.description,
  url: siteConfig.url,
  offers: plans.map((plan) => ({
    "@type": "Offer",
    name: plan.name,
    description: plan.tagline,
    price: plan.price,
    priceCurrency: "INR",
    url: `${siteConfig.url}/#pricing`,
  })),
};

const faqPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.title,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.content,
    },
  })),
};

export default function Home() {
  return (
    <>
      <JsonLd data={softwareApplicationJsonLd} />
      <JsonLd data={faqPageJsonLd} />
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
