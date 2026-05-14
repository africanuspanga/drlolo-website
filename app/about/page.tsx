import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { AboutHero } from "@/components/about/about-hero";
import { AboutContent } from "@/components/about/about-content";
import { AboutGallery } from "@/components/about/about-gallery";
import { ValuesSection } from "@/components/about/values-section";
import { FounderSection } from "@/components/sections/founder-section";
import { CTASection } from "@/components/sections/cta-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Dr Lolo Cosmetics | Beauty Shop in Kariakoo, Dar es Salaam",
  description:
    "Learn about Dr Lolo Cosmetics, a Tanzanian beauty brand founded by Ritha. We sell skincare, glow products, creams, serums, soaps, and beauty sets at our duka la vipodozi in Kariakoo, Dar es Salaam.",
  keywords: [
    "About Dr Lolo Cosmetics",
    "Ritha founder",
    "Tanzanian cosmetics brand",
    "Kariakoo beauty shop",
    "duka la vipodozi",
    "Kariakoo vipodozi",
    "Dar es Salaam cosmetics",
    "Mafia and Jangwani Street",
    "natural skincare Tanzania",
    "Dr Lolo story",
  ],
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <AboutHero />
        <AboutContent />
        <AboutGallery />
        <ValuesSection />
        <FounderSection />
        <CTASection />
      </main>
      <SiteFooter />
      <FloatingWhatsApp />
    </>
  );
}
