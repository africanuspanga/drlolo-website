import type { Metadata, Viewport } from "next";
import { Manrope, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.drlolocosmetics.com"),
  title: {
    template: "%s | Dr Lolo Cosmetics",
    default: "Dr Lolo Cosmetics | Premium Skincare & Natural Beauty",
  },
  description:
    "Dr Lolo Cosmetics offers premium skincare, glow products, beauty sets, creams, serums, soaps, lotions, and oils in Tanzania. Visit our duka la vipodozi in Kariakoo, Dar es Salaam or order via WhatsApp.",
  keywords: [
    "Dr Lolo Cosmetics",
    "duka la vipodozi",
    "Kariakoo vipodozi",
    "Tanzania cosmetics",
    "Dar es Salaam beauty shop",
    "skincare Tanzania",
    "beauty products",
    "Rapid Glow",
    "Pink Glow",
    "Miranda Glow",
    "Marina Gold",
    "Evert Glow",
    "Rana Slim",
    "serum",
    "face cream",
    "body lotion",
    "shower gel",
    "soap",
    "whitening oil",
    "slimming powder",
    "glutathione drip",
    "beauty sets",
    "natural skincare",
    "Kariakoo",
    "Dar es Salaam",
    "Mafia and Jangwani Street",
    "face care",
    "body care",
    "glow collection",
    "acne soap",
    "skin consultation",
  ],
  creator: "Dr Lolo Cosmetics",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.drlolocosmetics.com",
    siteName: "Dr Lolo Cosmetics",
    title: "Dr Lolo Cosmetics | Premium Skincare & Natural Beauty",
    description: "Premium skincare treatments and natural beauty products in Tanzania. Duka la vipodozi in Kariakoo, Dar es Salaam.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dr Lolo Cosmetics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr Lolo Cosmetics",
    description: "Premium skincare treatments and natural beauty products.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.drlolocosmetics.com",
  },
  icons: {
    icon: "/Dr Lolo Favicon.png",
    shortcut: "/Dr Lolo Favicon.png",
    apple: "/Dr Lolo Favicon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#2d6933",
  maximumScale: 5,
};

import { CartProvider } from "@/lib/cart-context";
import { CartButton } from "@/components/cart-button";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable} ${playfair.variable} h-full`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <CartProvider>
          {children}
          <CartButton />
        </CartProvider>
        <div className="grain-overlay" aria-hidden="true" />
      </body>
    </html>
  );
}
