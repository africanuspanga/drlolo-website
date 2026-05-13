import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { AboutHero } from "@/components/about/about-hero";
import { AboutContent } from "@/components/about/about-content";
import { ValuesSection } from "@/components/about/values-section";
import { FounderSection } from "@/components/sections/founder-section";
import { CTASection } from "@/components/sections/cta-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Dr Lolo Cosmetics",
  description:
    "A Tanzanian cosmetics brand helping customers discover beauty, glow, and self-care products with confidence. Founded by Ritha in Kariakoo, Dar es Salaam.",
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <AboutHero />
        <AboutContent />
        <ValuesSection />
        <FounderSection />
        <CTASection />
      </main>
      <SiteFooter />
      <FloatingWhatsApp />
    </>
  );
}
