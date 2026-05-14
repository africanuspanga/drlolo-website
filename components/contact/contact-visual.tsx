"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

export function ContactVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 lg:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/Contact page.jpeg"
                alt="Dr Lolo Cosmetics products"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2d6933]/40 to-transparent" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-[#c9a24d]/20 -z-10" />
            <div className="absolute -top-4 -left-4 h-16 w-16 rounded-full bg-[#2d6933]/10 -z-10" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <span className="inline-block text-sm font-semibold uppercase tracking-wider text-[#c9a24d] mb-3">
                Reach Out
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1f4a24] mb-4">
                We Are Here to <span className="text-[#2d6933]">Help</span>
              </h2>
              <p className="text-[#5a7a5e] leading-relaxed">
                Whether you want to ask about a product, check availability, or
                place an order, our team is ready to assist you. You can visit our
                shop in Kariakoo or reach us anytime on WhatsApp.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 rounded-xl bg-[#f7f3ea] p-5 border border-[#c9a24d]/10">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#2d6933] text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-[#1f4a24]">WhatsApp Order</p>
                  <p className="text-sm text-[#5a7a5e]">
                    Message us on WhatsApp for fast replies and easy ordering.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl bg-[#f7f3ea] p-5 border border-[#c9a24d]/10">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#2d6933] text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-[#1f4a24]">Visit Our Shop</p>
                  <p className="text-sm text-[#5a7a5e]">
                    Kariakoo, Mafia and Jangwani Street, Dar es Salaam.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl bg-[#f7f3ea] p-5 border border-[#c9a24d]/10">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#2d6933] text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-[#1f4a24]">Email Us</p>
                  <p className="text-sm text-[#5a7a5e]">
                    Send us an email at info@drlolo.com
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
