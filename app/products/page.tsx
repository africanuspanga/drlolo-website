import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { ProductsHero } from "@/components/products/products-hero";
import { ProductsList } from "@/components/products/products-list";
import { CTASection } from "@/components/sections/cta-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dr Lolo Cosmetics Products | Skincare, Glow & Beauty Sets",
  description:
    "Shop Dr Lolo Cosmetics products: Rapid Glow, Pink Glow, Miranda Glow, Marina Gold, Evert Glow, and Rana Slim. Buy serums, creams, soaps, lotions, shower gels, and beauty sets at our duka la vipodozi in Kariakoo, Dar es Salaam. Order via WhatsApp.",
  keywords: [
    "Dr Lolo Cosmetics products",
    "Rapid Glow Serum",
    "Rapid Glow Soap",
    "Telesa Pink Glow",
    "Miranda Glow Serum",
    "Marina Glow Gold Shower Gel",
    "Evert Glow Super Whiten",
    "Rana Slimming Powder",
    "whitening face cream",
    "body lotion Tanzania",
    "glow oil",
    "beauty sets Tanzania",
    "duka la vipodozi",
    "Kariakoo vipodozi",
    "Dar es Salaam skincare",
    "Tanzania beauty products",
    "face care products",
    "body care products",
    "slimming supplements",
    "acne remover soap",
    "glutathione drip",
  ],
};

export default function ProductsPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <ProductsHero />
        <ProductsList />
        <CTASection />
      </main>
      <SiteFooter />
      <FloatingWhatsApp />
    </>
  );
}
