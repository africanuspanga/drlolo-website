"use client";

import { motion } from "framer-motion";

const ITEMS = [
  "Rapid Glow",
  "Pink Glow",
  "Marina Gold",
  "Miranda Glow",
  "Evert Glow",
  "Face Care",
  "Body Care",
  "Beauty Sets",
  "Soaps",
  "Serums",
  "Creams",
  "Rana Slim",
];

export function ServicesMarquee() {
  const content = (
    <>
      {ITEMS.map((item, i) => (
        <span key={i} className="flex items-center gap-6 whitespace-nowrap">
          <span className="text-base font-semibold uppercase tracking-wider text-[#2d6933]">
            {item}
          </span>
          <span className="text-[#2d6933]/40">✦</span>
        </span>
      ))}
    </>
  );

  return (
    <section className="bg-[#c9a24d] border-y border-[#2d6933]/10 py-4 overflow-hidden">
      <div className="flex">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex shrink-0 items-center gap-6"
        >
          {content}
          {content}
        </motion.div>
      </div>
    </section>
  );
}
