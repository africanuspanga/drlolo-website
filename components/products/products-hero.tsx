"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { WHATSAPP_LINK } from "@/lib/constants";

export function ProductsHero() {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-[#2d6933]">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#c9a24d_0%,transparent_60%)]" />
      </div>

      {/* Rotating rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="h-[500px] w-[500px] rounded-full border border-[#c9a24d]/20"
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="h-[350px] w-[350px] rounded-full border border-[#c9a24d]/30"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold text-white mb-4"
        >
          Our <span className="text-[#c9a24d]">Products</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-white/80 max-w-2xl mx-auto mb-8"
        >
          Explore Dr Lolo Cosmetics product collections, from skincare and body
          care to glow sets, oils, soaps, serums, and specialty beauty products.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-[#c9a24d] px-6 py-3 text-sm font-semibold text-[#2d6933] transition-transform hover:scale-105"
          >
            Order via WhatsApp
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
