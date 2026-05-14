import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { HeroSection } from "@/components/sections/hero-section";
import { ServicesMarquee } from "@/components/sections/services-marquee";
import { AboutSection } from "@/components/sections/about-section";
import { FeaturedProducts } from "@/components/sections/featured-products";
import { ServicesSection } from "@/components/sections/services-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { BlogSection } from "@/components/sections/blog-section";
import { WhyChooseSection } from "@/components/sections/why-choose-section";
import { FounderSection } from "@/components/sections/founder-section";
import { SocialSection } from "@/components/sections/social-section";
import { CTASection } from "@/components/sections/cta-section";
import { ContactSection } from "@/components/sections/contact-section";

export const metadata: Metadata = {
  title: "Dr Lolo Cosmetics | Premium Skincare & Natural Beauty in Tanzania",
  description:
    "Dr Lolo Cosmetics offers beauty, skincare, glow, body care, and specialty products in Tanzania. Collections include Rapid Glow, Pink Glow, Miranda Glow, Marina Gold, Evert Glow, and Rana Slim. Visit our duka la vipodozi in Kariakoo, Dar es Salaam or order via WhatsApp.",
  keywords: [
    "Dr Lolo Cosmetics",
    "duka la vipodozi",
    "Kariakoo vipodozi",
    "Tanzania cosmetics",
    "Dar es Salaam beauty shop",
    "Rapid Glow",
    "Pink Glow",
    "Miranda Glow",
    "Marina Gold",
    "Evert Glow",
    "Rana Slim",
    "skincare Tanzania",
    "beauty products Tanzania",
    "whitening cream",
    "face serum",
    "body lotion",
    "shower gel",
    "glow soap",
    "slimming powder",
    "natural skincare",
    "Kariakoo cosmetics",
    "Mafia and Jangwani Street",
    "Ritha cosmetics",
    "face cream",
    "body cream",
    "whitening oil",
    "glutathione drip",
    "beauty sets",
  ],
};

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <ServicesMarquee />
        <AboutSection />
        <FeaturedProducts />
        <ServicesSection />
        <TestimonialsSection />
        <BlogSection />
        <WhyChooseSection />
        <FounderSection />
        <SocialSection />
        <CTASection />
        <ContactSection />
      </main>
      <SiteFooter />
      <FloatingWhatsApp />
    </>
  );
}
