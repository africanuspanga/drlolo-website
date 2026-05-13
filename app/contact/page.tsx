import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { ContactHero } from "@/components/contact/contact-hero";
import { ContactSection } from "@/components/sections/contact-section";
import { CTASection } from "@/components/sections/cta-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Dr Lolo Cosmetics",
  description:
    "Visit our shop in Kariakoo, Dar es Salaam or contact us directly on WhatsApp to ask about products, prices, and availability.",
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <ContactHero />
        <ContactSection />
        <CTASection />
      </main>
      <SiteFooter />
      <FloatingWhatsApp />
    </>
  );
}
