"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { IconSparkles, IconLeaf, IconHeart } from "@tabler/icons-react";

const CARDS = [
  {
    icon: IconSparkles,
    title: "Premium Quality",
    description:
      "Carefully selected skincare and glow products for a radiant look.",
  },
  {
    icon: IconLeaf,
    title: "Natural Beauty",
    description: "Products designed to help you feel confident every day.",
  },
  {
    icon: IconHeart,
    title: "Trusted Brand",
    description: "Growing through customer trust and social media presence.",
  },
];

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-20 lg:py-28 overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-[#eef6ef] to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-sm font-semibold uppercase tracking-wider text-[#c9a24d] mb-3">
              About Dr Lolo
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1f4a24] mb-6">
              Beauty Products Made for{" "}
              <span className="text-[#2d6933]">Everyday Confidence</span>
            </h2>
            <p className="text-[#5a7a5e] leading-relaxed mb-6">
              Dr Lolo Cosmetics is a Tanzanian cosmetics brand based in
              Kariakoo, Dar es Salaam, offering a growing collection of beauty,
              glow, skincare, and personal care products. The brand is built
              around confidence, elegance, and accessibility.
            </p>
            <p className="text-[#5a7a5e] leading-relaxed mb-8">
              Founded by <strong className="text-[#1f4a24]">Ritha</strong>, Dr
              Lolo Cosmetics continues to serve customers through its physical
              shop and online platforms, making it easy to discover products,
              ask questions, and place orders directly through WhatsApp or
              social media.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center rounded-full bg-[#2d6933] px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
            >
              Learn More About Us
            </Link>
          </motion.div>

          {/* Cards */}
          <div className="grid gap-6">
            {CARDS.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * (i + 1) }}
                className="group rounded-2xl bg-[#f7f3ea] p-6 transition-colors hover:bg-[#eef6ef]"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#2d6933] text-white transition-colors group-hover:bg-[#c9a24d] group-hover:text-[#2d6933]">
                    <card.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1f4a24] mb-1">
                      {card.title}
                    </h3>
                    <p className="text-sm text-[#5a7a5e]">{card.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
