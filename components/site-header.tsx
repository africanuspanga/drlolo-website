"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { NAV_ITEMS, WHATSAPP_LINK, COMPANY_NAME } from "@/lib/constants";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const bgSolid = !isHome || scrolled;

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          bgSolid
            ? "bg-white shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 md:h-24 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/Dr Lolo Logo.png"
                alt={COMPANY_NAME}
                width={240}
                height={72}
                className="h-14 w-auto md:h-16"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    pathname === item.href
                      ? bgSolid
                        ? "text-white bg-[#2d6933]"
                        : "text-[#c9a24d] bg-white/10"
                      : bgSolid
                        ? "text-[#2d6933] hover:text-white hover:bg-[#2d6933]"
                        : "text-[#c9a24d]/80 hover:text-[#c9a24d] hover:bg-white/10"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#c9a24d] px-5 py-2.5 text-sm font-semibold text-[#2d6933] transition-transform hover:scale-105"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2d6933] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#2d6933]" />
                </span>
                Order on WhatsApp
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className={`md:hidden p-2 ${bgSolid ? "text-[#2d6933]" : "text-[#c9a24d]"}`}
              aria-label="Open menu"
            >
              <IconMenu2 size={32} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-[60] bg-black/50"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-[70] w-[85%] max-w-sm bg-[#2d6933] shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-[#c9a24d]/20">
                <Image
                  src="/Dr Lolo Logo.png"
                  alt={COMPANY_NAME}
                  width={200}
                  height={60}
                  className="h-14 w-auto"
                />
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 text-[#c9a24d]"
                  aria-label="Close menu"
                >
                  <IconX size={32} />
                </button>
              </div>
              <nav className="flex flex-col p-6 gap-2 flex-1 overflow-y-auto">
                {NAV_ITEMS.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block rounded-lg px-4 py-4 text-lg font-medium transition-colors ${
                        pathname === item.href
                          ? "text-[#c9a24d] bg-white/10"
                          : "text-[#c9a24d]/80 hover:text-[#c9a24d] hover:bg-white/10"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: NAV_ITEMS.length * 0.1 }}
                  className="mt-6"
                >
                  <Link
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-center gap-2 rounded-full bg-[#c9a24d] px-5 py-4 text-base font-semibold text-[#2d6933]"
                  >
                    Order on WhatsApp
                  </Link>
                </motion.div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
