"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  IconBrandInstagram,
  IconBrandTiktok,
  IconBrandThreads,
} from "@tabler/icons-react";
import { SOCIAL_LINKS } from "@/lib/constants";

export function SocialSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const socials = [
    {
      name: "Instagram",
      handle: "@drlolo_product",
      icon: IconBrandInstagram,
      link: SOCIAL_LINKS.instagram,
      color: "bg-gradient-to-br from-purple-600 to-orange-500",
    },
    {
      name: "Threads",
      handle: "@drlolo_product",
      icon: IconBrandThreads,
      link: SOCIAL_LINKS.threads,
      color: "bg-black",
    },
    {
      name: "TikTok",
      handle: "@drlolo_product",
      icon: IconBrandTiktok,
      link: SOCIAL_LINKS.tiktok,
      color: "bg-black",
    },
  ];

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1f4a24] mb-4">
            Follow Dr Lolo Cosmetics Online
          </h2>
          <p className="text-[#5a7a5e] max-w-2xl mx-auto">
            Stay updated with new arrivals, product sets, promotions, and beauty
            content from Dr Lolo Cosmetics.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {socials.map((social, i) => (
            <motion.a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex flex-col items-center gap-4 rounded-2xl bg-[#f7f3ea] p-8 border border-[#c9a24d]/10 hover:border-[#c9a24d]/30 transition-all hover:shadow-lg"
            >
              <div
                className={`flex h-16 w-16 items-center justify-center rounded-full text-white ${social.color}`}
              >
                <social.icon size={32} />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-[#1f4a24]">
                  {social.name}
                </h3>
                <p className="text-sm text-[#c9a24d] font-medium">
                  {social.handle}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
