"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { SOCIAL_LINKS } from "@/lib/constants";

export function FounderSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-[#f7f3ea]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] max-w-md mx-auto rounded-2xl overflow-hidden bg-white shadow-xl">
              <Image
                src="/Ritha-Founder.png"
                alt="Ritha - Founder of Dr Lolo Cosmetics"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-[#c9a24d]/20 -z-10" />
            <div className="absolute -top-6 -left-6 h-24 w-24 rounded-full bg-[#2d6933]/10 -z-10" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block text-sm font-semibold uppercase tracking-wider text-[#c9a24d] mb-3">
              Meet the Founder
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1f4a24] mb-4">
              Founded by <span className="text-[#2d6933]">Ritha</span>
            </h2>
            <p className="text-[#5a7a5e] leading-relaxed mb-6">
              Dr Lolo Cosmetics was founded by{" "}
              <strong className="text-[#1f4a24]">Ritha</strong>, with a vision
              to make beauty products more accessible, stylish, and easy to
              discover for customers in Tanzania. Through the Dr Lolo Cosmetics
              shop and online platforms, customers can explore different product
              options, ask questions, and receive guidance before placing their
              orders.
            </p>
            <p className="text-[#5a7a5e] leading-relaxed mb-8">
              Her goal is to build a trusted beauty destination where customers
              can explore products, ask questions, and receive support before
              purchasing.
            </p>
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-[#2d6933] px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
            >
              Follow @drlolo_product
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
