"use client";

import { useRef } from "react";
import {
  IconSparkles,
  IconAccessible,
  IconHeart,
  IconPalette,
  IconTrendingUp,
} from "@tabler/icons-react";
import { motion, useInView } from "framer-motion";
import { VALUES } from "@/lib/constants";

const ICON_MAP: Record<string, React.ElementType> = {
  IconSparkles,
  IconAccessible,
  IconHeart,
  IconPalette,
  IconTrendingUp,
};

export function ValuesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-[#f7f3ea]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1f4a24] mb-4">
            What We <span className="text-[#2d6933]">Stand For</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {VALUES.map((value, i) => {
            const Icon = ICON_MAP[value.icon] || IconSparkles;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group rounded-2xl bg-white p-6 border border-[#c9a24d]/10 hover:border-[#c9a24d]/30 transition-all hover:shadow-lg text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#eef6ef] text-[#2d6933] mx-auto mb-4 transition-colors group-hover:bg-[#2d6933] group-hover:text-[#c9a24d]"
                >
                  <Icon size={28} />
                </motion.div>
                <h3 className="text-lg font-semibold text-[#1f4a24] mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-[#5a7a5e] leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
