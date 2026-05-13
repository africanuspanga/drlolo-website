"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { IconPlus } from "@tabler/icons-react";
import { FEATURED_PRODUCTS, WHATSAPP_LINK } from "@/lib/constants";
import { useCart } from "@/lib/cart-context";

export function FeaturedProducts() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { addItem } = useCart();

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1f4a24] mb-4">
            Popular Product Lines
          </h2>
          <p className="text-[#5a7a5e] max-w-2xl mx-auto">
            Discover our most loved products, trusted by customers across
            Tanzania.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_PRODUCTS.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group rounded-2xl bg-[#f7f3ea] overflow-hidden border border-[#c9a24d]/10 hover:border-[#c9a24d]/30 transition-all hover:shadow-lg flex flex-col"
            >
              <div className="relative h-64 overflow-hidden bg-white">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-6"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-semibold text-[#1f4a24] mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-[#5a7a5e] mb-4 flex-1">
                  {product.description}
                </p>
                <div className="flex items-center gap-2 mt-auto">
                  <Link
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-full bg-[#2d6933] px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-105"
                  >
                    {product.cta}
                  </Link>
                  <button
                    onClick={() =>
                      addItem({
                        name: product.name,
                        image: product.image,
                        description: product.description,
                      })
                    }
                    className="inline-flex items-center gap-1 rounded-full border-2 border-[#2d6933] px-3 py-2 text-sm font-semibold text-[#2d6933] hover:bg-[#2d6933] hover:text-white transition-colors"
                    aria-label={`Add ${product.name} to cart`}
                  >
                    <IconPlus size={16} />
                    Add
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
