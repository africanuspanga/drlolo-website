"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { IconArrowRight, IconPlus } from "@tabler/icons-react";
import { PRODUCT_COLLECTIONS, PRODUCT_CATEGORIES, FEATURED_PRODUCTS, WHATSAPP_LINK } from "@/lib/constants";
import { useCart } from "@/lib/cart-context";
import { getAdminProducts, type AdminProduct } from "@/lib/admin-storage";

export function ProductsList() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { addItem } = useCart();
  const [adminProducts, setAdminProducts] = useState<AdminProduct[]>([]);

  useEffect(() => {
    setAdminProducts(getAdminProducts());
  }, []);

  const allProducts = FEATURED_PRODUCTS.map((p) => ({
    ...p,
    category: "Featured",
  }));

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1f4a24] mb-4">
            Find the Right Product for Your Routine
          </h2>
          <p className="text-[#5a7a5e] max-w-3xl mx-auto">
            Dr Lolo Cosmetics offers a wide selection of beauty, skincare, glow,
            body care, and specialty products. Our collections include Rapid Glow,
            Pink Glow, Miranda Glow, Marina Gold, Evert Glow, and Rana Slim
            products. Product availability may vary, so customers can contact us
            directly on WhatsApp to confirm stock, prices, and current offers.
          </p>
        </motion.div>

        {/* Collections */}
        <div className="space-y-20">
          {PRODUCT_COLLECTIONS.map((collection, i) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white border border-gray-100">
                  <Image
                    src={collection.image}
                    alt={collection.title}
                    fill
                    className="object-contain p-8"
                  />
                </div>
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <span className="inline-block text-sm font-semibold uppercase tracking-wider text-[#c9a24d] mb-2">
                  Collection {i + 1}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#1f4a24] mb-4">
                  {collection.title}
                </h3>
                <p className="text-[#5a7a5e] leading-relaxed mb-6">
                  {collection.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#2d6933] px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
                  >
                    {collection.cta}
                    <IconArrowRight size={18} />
                  </Link>
                  <button
                    onClick={() =>
                      addItem({
                        name: collection.title,
                        image: collection.image,
                        description: collection.description,
                      })
                    }
                    className="inline-flex items-center gap-2 rounded-full border-2 border-[#2d6933] px-5 py-3 text-sm font-semibold text-[#2d6933] transition-transform hover:scale-105 hover:bg-[#2d6933] hover:text-white"
                  >
                    <IconPlus size={16} />
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Shop by Category */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-28"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-[#1f4a24] text-center mb-4">
            Shop by Category
          </h3>
          <p className="text-[#5a7a5e] text-center max-w-2xl mx-auto mb-12">
            Browse our products by category to find exactly what you need for your skincare and beauty routine.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCT_CATEGORIES.map((cat, i) => (
              <div
                key={cat.id}
                className="group relative rounded-2xl bg-[#f7f3ea] border border-[#c9a24d]/20 overflow-hidden transition-shadow hover:shadow-xl hover:border-[#c9a24d]/40"
              >
                <div className="relative h-48 overflow-hidden bg-white">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-[#1f4a24] mb-2">
                    {cat.title}
                  </h4>
                  <p className="text-sm text-[#5a7a5e] mb-4">
                    {cat.description}
                  </p>
                  <Link
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-semibold text-[#2d6933] hover:text-[#c9a24d] transition-colors"
                  >
                    {cat.cta}
                    <IconArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Featured products grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-28"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-[#1f4a24] text-center mb-12">
            Featured Products
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProducts.map((product, i) => (
              <div
                key={product.name}
                className="group rounded-2xl bg-[#f7f3ea] overflow-hidden border border-[#c9a24d]/10 hover:border-[#c9a24d]/30 transition-all hover:shadow-lg flex flex-col"
              >
                <div className="relative h-56 overflow-hidden bg-white border-b border-gray-50">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h4 className="text-lg font-semibold text-[#1f4a24] mb-2">
                    {product.name}
                  </h4>
                  <p className="text-sm text-[#5a7a5e] mb-4 flex-1">
                    {product.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    <Link
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-semibold text-[#2d6933] hover:text-[#c9a24d] transition-colors"
                    >
                      {product.cta}
                      <IconArrowRight size={16} className="ml-1" />
                    </Link>
                    <button
                      onClick={() =>
                        addItem({
                          name: product.name,
                          image: product.image,
                          description: product.description,
                        })
                      }
                      className="ml-auto inline-flex items-center gap-1 rounded-full bg-[#2d6933] px-3 py-1.5 text-xs font-semibold text-white hover:bg-[#1f4a24] transition-colors"
                    >
                      <IconPlus size={14} />
                      Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Admin Products */}
        {adminProducts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-28"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-[#1f4a24] text-center mb-12">
              New Arrivals
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {adminProducts.map((product) => (
                <div
                  key={product.id}
                  className="group rounded-2xl bg-[#f7f3ea] overflow-hidden border border-[#c9a24d]/10 hover:border-[#c9a24d]/30 transition-all hover:shadow-lg flex flex-col"
                >
                  <div className="relative h-56 overflow-hidden bg-white border-b border-gray-50">
                    <Image
                      src={product.image || "/Dr Lolo Logo.png"}
                      alt={product.name}
                      fill
                      className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <span className="text-xs font-semibold text-[#c9a24d] uppercase tracking-wider mb-1">
                      {product.collection}
                    </span>
                    <h4 className="text-lg font-semibold text-[#1f4a24] mb-2">
                      {product.name}
                    </h4>
                    <p className="text-sm text-[#5a7a5e] mb-4 flex-1">
                      {product.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      <Link
                        href={WHATSAPP_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-semibold text-[#2d6933] hover:text-[#c9a24d] transition-colors"
                      >
                        {product.cta}
                        <IconArrowRight size={16} className="ml-1" />
                      </Link>
                      <button
                        onClick={() =>
                          addItem({
                            name: product.name,
                            image: product.image || "/Dr Lolo Logo.png",
                            description: product.description,
                          })
                        }
                        className="ml-auto inline-flex items-center gap-1 rounded-full bg-[#2d6933] px-3 py-1.5 text-xs font-semibold text-white hover:bg-[#1f4a24] transition-colors"
                      >
                        <IconPlus size={14} />
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 rounded-2xl bg-[#eef6ef] p-8 border border-[#2d6933]/10"
        >
          <h4 className="text-lg font-semibold text-[#1f4a24] mb-3">
            Important Note
          </h4>
          <p className="text-sm text-[#5a7a5e] leading-relaxed">
            Product results may vary from person to person. Customers are
            encouraged to read product instructions carefully and contact Dr
            Lolo Cosmetics for product information before use. For sensitive
            skin or medical skin concerns, consult a qualified skincare or
            health professional before starting any new product.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
