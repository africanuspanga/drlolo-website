import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { ProductsHero } from "@/components/products/products-hero";
import { ProductsList } from "@/components/products/products-list";
import { CTASection } from "@/components/sections/cta-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dr Lolo Cosmetics Products",
  description:
    "Explore Dr Lolo Cosmetics product collections, from skincare and body care to glow sets, oils, soaps, serums, and specialty beauty products. Order via WhatsApp.",
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
