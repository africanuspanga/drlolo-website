"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const IMAGES = [
  {
    src: "/about pagee.jpeg",
    alt: "Rapid Glow product collection",
    label: "Rapid Glow Collection",
  },
  {
    src: "/abooot us page.jpeg",
    alt: "Marina Glow Gold whitening cream",
    label: "Marina Glow Gold",
  },
  {
    src: "/About us page.jpeg",
    alt: "Miranda Glow product line",
    label: "Miranda Glow Collection",
  },
];

export function AboutGallery() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold uppercase tracking-wider text-[#c9a24d] mb-3">
            Our Products
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1f4a24] mb-4">
            Beauty in Every <span className="text-[#2d6933]">Detail</span>
          </h2>
          <p className="text-[#5a7a5e] max-w-2xl mx-auto">
            From premium gold creams to glow-boosting serums, Dr Lolo Cosmetics
            offers carefully crafted products for every skincare need.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* Large left image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative overflow-hidden rounded-2xl md:row-span-2 aspect-[3/4] md:aspect-auto"
          >
            <Image
              src={IMAGES[0].src}
              alt={IMAGES[0].alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="inline-block rounded-full bg-[#c9a24d] px-4 py-1.5 text-xs font-semibold text-[#2d6933] mb-2">
                {IMAGES[0].label}
              </span>
              <p className="text-white font-semibold text-lg">
                Premium formulas for radiant skin
              </p>
            </div>
          </motion.div>

          {/* Top right image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative overflow-hidden rounded-2xl aspect-[4/3]"
          >
            <Image
              src={IMAGES[1].src}
              alt={IMAGES[1].alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <span className="inline-block rounded-full bg-[#c9a24d] px-4 py-1.5 text-xs font-semibold text-[#2d6933] mb-2">
                {IMAGES[1].label}
              </span>
              <p className="text-white font-semibold">
                Luxury gold care for your face
              </p>
            </div>
          </motion.div>

          {/* Bottom right image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group relative overflow-hidden rounded-2xl aspect-[4/3]"
          >
            <Image
              src={IMAGES[2].src}
              alt={IMAGES[2].alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <span className="inline-block rounded-full bg-[#c9a24d] px-4 py-1.5 text-xs font-semibold text-[#2d6933] mb-2">
                {IMAGES[2].label}
              </span>
              <p className="text-white font-semibold">
                Glow that turns heads
              </p>
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: "6+", label: "Product Collections" },
            { number: "30+", label: "Beauty Products" },
            { number: "100%", label: "Customer Support" },
            { number: "24/7", label: "WhatsApp Ordering" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center rounded-2xl bg-[#f7f3ea] p-6 border border-[#c9a24d]/10"
            >
              <p className="text-3xl sm:text-4xl font-bold text-[#2d6933] mb-1">
                {stat.number}
              </p>
              <p className="text-sm text-[#5a7a5e]">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
