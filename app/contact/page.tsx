import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { ContactHero } from "@/components/contact/contact-hero";
import { ContactVisual } from "@/components/contact/contact-visual";
import { ContactSection } from "@/components/sections/contact-section";
import { CTASection } from "@/components/sections/cta-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Dr Lolo Cosmetics | WhatsApp & Kariakoo Shop",
  description:
    "Contact Dr Lolo Cosmetics on WhatsApp or visit our duka la vipodozi at Kariakoo, Mafia and Jangwani Street, Dar es Salaam. Ask about Rapid Glow, Pink Glow, Marina Gold, Miranda Glow, Evert Glow, and Rana Slim products.",
  keywords: [
    "Contact Dr Lolo Cosmetics",
    "Dr Lolo WhatsApp",
    "Kariakoo cosmetics shop",
    "duka la vipodozi",
    "Kariakoo vipodozi",
    "Dar es Salaam beauty shop",
    "Tanzania skincare contact",
    "Dr Lolo phone number",
    "order cosmetics Tanzania",
    "beauty consultation Dar es Salaam",
  ],
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <ContactHero />
        <ContactVisual />
        <ContactSection />
        <CTASection />
      </main>
      <SiteFooter />
      <FloatingWhatsApp />
    </>
  );
}
