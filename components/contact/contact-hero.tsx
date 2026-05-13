"use client";

import { motion } from "framer-motion";

export function ContactHero() {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#2d6933] to-[#1f4a24]">
      {/* Decorative rings */}
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
          Contact <span className="text-[#c9a24d]">Dr Lolo Cosmetics</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-white/80 max-w-2xl mx-auto"
        >
          Visit our shop in Kariakoo or contact us directly on WhatsApp to ask
          about products, prices, and availability.
        </motion.p>
      </div>
    </section>
  );
}
