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
  metadataBase: new URL("https://www.drlolo.com"),
  title: {
    template: "%s | Dr Lolo Cosmetics",
    default: "Dr Lolo Cosmetics | Premium Skincare & Natural Beauty",
  },
  description:
    "Dr Lolo Cosmetics offers premium skincare treatments, natural beauty products, and personalized skin consultations. Discover radiant, healthy skin with our expert team.",
  keywords: [
    "skincare",
    "cosmetics",
    "beauty products",
    "facial treatments",
    "natural skincare",
    "anti-aging",
    "body care",
    "skin consultation",
    "Tanzania",
    "Kariakoo",
    "Dar es Salaam",
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
    url: "https://www.drlolo.com",
    siteName: "Dr Lolo Cosmetics",
    title: "Dr Lolo Cosmetics | Premium Skincare & Natural Beauty",
    description: "Premium skincare treatments and natural beauty products.",
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
    canonical: "https://www.drlolo.com",
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
