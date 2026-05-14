"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  IconBrandInstagram,
  IconBrandTiktok,
  IconBrandThreads,
} from "@tabler/icons-react";
import {
  COMPANY_NAME,
  NAV_ITEMS,
  PHONE,
  ADDRESS,
  SOCIAL_LINKS,
  WHATSAPP_LINK,
} from "@/lib/constants";

export function SiteFooter() {
  return (
    <footer className="relative bg-[#2d6933] text-[#e8d5a3] overflow-hidden">
      {/* Watermark logo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <Image
          src="/Dr Lolo Logo.png"
          alt=""
          width={800}
          height={240}
          className="w-[150%] max-w-none opacity-5"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="inline-flex items-center justify-center rounded-full bg-white p-3 shadow-lg">
              <Image
                src="/Dr Lolo Logo.png"
                alt={COMPANY_NAME}
                width={200}
                height={60}
                className="h-14 w-auto"
              />
            </div>
            <p className="text-sm leading-relaxed text-[#e8d5a3]/80">
              Dr Lolo Cosmetics is a Tanzanian beauty and cosmetics brand
              offering skincare, body care, glow products, oils, serums, creams,
              soaps, and beauty sets from Kariakoo, Dar es Salaam.
            </p>
            <div className="flex gap-3">
              <motion.a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full bg-white/10 p-2 text-[#e8d5a3] hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <IconBrandInstagram size={20} />
              </motion.a>
              <motion.a
                href={SOCIAL_LINKS.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full bg-white/10 p-2 text-[#e8d5a3] hover:bg-white/20 transition-colors"
                aria-label="TikTok"
              >
                <IconBrandTiktok size={20} />
              </motion.a>
              <motion.a
                href={SOCIAL_LINKS.threads}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full bg-white/10 p-2 text-[#e8d5a3] hover:bg-white/20 transition-colors"
                aria-label="Threads"
              >
                <IconBrandThreads size={20} />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#e8d5a3]/80 hover:text-[#c9a24d] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Products</h3>
            <ul className="space-y-2">
              {[
                "Glow Collections",
                "Face Care",
                "Body Care",
                "Beauty Sets",
                "Specialty Products",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="/products"
                    className="text-sm text-[#e8d5a3]/80 hover:text-[#c9a24d] transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-[#e8d5a3]/80">
              <li>{ADDRESS}</li>
              <li>
                Phone:{" "}
                <a
                  href={`tel:${PHONE.replace(/\s/g, "")}`}
                  className="hover:text-[#c9a24d] transition-colors"
                >
                  {PHONE}
                </a>
              </li>
              <li>
                WhatsApp:{" "}
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#c9a24d] transition-colors"
                >
                  {PHONE}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-[#c9a24d]/20 text-center text-sm text-[#e8d5a3]/60">
          © {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
