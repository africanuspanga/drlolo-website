"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { IconArrowRight } from "@tabler/icons-react";
import { PRODUCT_CATEGORIES } from "@/lib/constants";

export function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-[#f7f3ea]">
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
            Explore Our Categories
          </h2>
          <p className="text-[#5a7a5e] max-w-2xl mx-auto">
            From glow collections and face care to body care, beauty sets, and
            specialty products, Dr Lolo Cosmetics offers a wide range of products
            designed for people who love a clean, polished, and radiant look.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCT_CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative rounded-2xl bg-white border border-[#c9a24d]/20 overflow-hidden transition-shadow hover:shadow-xl hover:border-[#c9a24d]/40"
            >
              <div className="relative h-56 overflow-hidden bg-white">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-[#1f4a24] mb-2 flex items-center gap-2">
                  {cat.title}
                  <IconArrowRight
                    size={18}
                    className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#c9a24d]"
                  />
                </h3>
                <p className="text-sm text-[#5a7a5e] mb-4">
                  {cat.description}
                </p>
                <Link
                  href="/products"
                  className="inline-flex items-center text-sm font-semibold text-[#2d6933] hover:text-[#c9a24d] transition-colors"
                >
                  {cat.cta}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
