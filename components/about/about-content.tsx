"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { IconTarget, IconEye } from "@tabler/icons-react";

export function AboutContent() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1f4a24] mb-6">
            A Beauty Brand Built Around{" "}
            <span className="text-[#2d6933]">Confidence</span>
          </h2>
          <p className="text-[#5a7a5e] leading-relaxed">
            Dr Lolo Cosmetics is a cosmetics and skincare brand based in Dar es
            Salaam, Tanzania. The brand offers a wide selection of beauty and
            personal care products, including body lotions, creams, oils,
            serums, soaps, shower gels, and curated glow sets. The company
            serves customers from its shop in{" "}
            <strong className="text-[#1f4a24]">
              Kariakoo, Mafia and Jangwani Street
            </strong>
            , while also connecting with customers online through WhatsApp and
            social media.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl bg-[#2d6933] p-8 text-white"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-[#c9a24d] mb-4">
              <IconTarget size={24} />
            </div>
            <h3 className="text-xl font-semibold text-[#c9a24d] mb-3">
              Our Mission
            </h3>
            <p className="text-white/80 leading-relaxed">
              To provide accessible, stylish, and trusted cosmetics products
              that help customers feel confident, radiant, and cared for every
              day.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl bg-[#f7f3ea] p-8 border border-[#c9a24d]/20"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#2d6933] text-[#c9a24d] mb-4">
              <IconEye size={24} />
            </div>
            <h3 className="text-xl font-semibold text-[#1f4a24] mb-3">
              Our Vision
            </h3>
            <p className="text-[#5a7a5e] leading-relaxed">
              To become one of Tanzania's trusted cosmetics destinations, known
              for product variety, customer care, and a strong beauty community.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
