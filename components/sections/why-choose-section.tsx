"use client";

import { useRef } from "react";
import {
  IconPackage,
  IconMessageCircle,
  IconMapPin,
  IconShieldCheck,
  IconHeart,
  IconShare,
} from "@tabler/icons-react";
import { motion, useInView } from "framer-motion";
import { WHY_CHOOSE } from "@/lib/constants";

const ICON_MAP: Record<string, React.ElementType> = {
  IconPackage,
  IconMessageCircle,
  IconMapPin,
  IconShieldCheck,
  IconHeart,
  IconShare,
};

export function WhyChooseSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-[#2d6933]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Why Customers Choose{" "}
            <span className="text-[#c9a24d]">Dr Lolo Cosmetics</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE.map((item, i) => {
            const Icon = ICON_MAP[item.icon] || IconPackage;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group rounded-2xl bg-white/5 p-6 border border-white/10 transition-colors hover:bg-[#c9a24d]/10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-[#c9a24d] mb-4 transition-colors group-hover:bg-[#c9a24d] group-hover:text-[#2d6933]">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#e8d5a3]/80 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
