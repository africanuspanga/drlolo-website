"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { WHATSAPP_LINK } from "@/lib/constants";

export function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#2d6933] via-[#2d6933] to-[#1f4a24] p-10 sm:p-16 text-center"
        >
          {/* Decorative blur circles */}
          <div className="absolute top-0 left-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c9a24d]/10 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-64 w-64 translate-x-1/2 translate-y-1/2 rounded-full bg-[#c9a24d]/10 blur-3xl" />

          {/* Decorative rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="h-[500px] w-[500px] rounded-full border border-[#c9a24d]/10" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="h-[350px] w-[350px] rounded-full border border-[#c9a24d]/20" />
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Order Your{" "}
              <span className="text-[#c9a24d]">Beauty Products?</span>
            </h2>
            <p className="text-white/80 max-w-xl mx-auto mb-8">
              Contact Dr Lolo Cosmetics today to check product availability,
              ask for prices, or place your order directly through WhatsApp.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-[#c9a24d] px-6 py-3 text-sm font-semibold text-[#2d6933] transition-transform hover:scale-105"
              >
                Chat on WhatsApp
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full border border-[#c9a24d] px-6 py-3 text-sm font-semibold text-[#c9a24d] transition-colors hover:bg-[#c9a24d]/10"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
