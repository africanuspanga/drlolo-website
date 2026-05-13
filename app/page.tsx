import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { HeroSection } from "@/components/sections/hero-section";
import { ServicesMarquee } from "@/components/sections/services-marquee";
import { AboutSection } from "@/components/sections/about-section";
import { FeaturedProducts } from "@/components/sections/featured-products";
import { ServicesSection } from "@/components/sections/services-section";
import { WhyChooseSection } from "@/components/sections/why-choose-section";
import { FounderSection } from "@/components/sections/founder-section";
import { SocialSection } from "@/components/sections/social-section";
import { CTASection } from "@/components/sections/cta-section";
import { ContactSection } from "@/components/sections/contact-section";

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
