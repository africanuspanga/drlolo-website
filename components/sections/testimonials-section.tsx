"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { IconStar, IconQuote } from "@tabler/icons-react";

const TESTIMONIALS = [
  {
    name: "Flora Msangi",
    product: "Rapid Glow Serum",
    text: "I started using Rapid Glow Serum two weeks ago and my skin is already looking brighter. My friends keep asking what I am using. I really love it.",
    rating: 5,
  },
  {
    name: "Lucy Johanes",
    product: "Telesa Pink Glow Collection",
    text: "The Pink Glow face cream is so smooth and smells nice. My face feels soft every morning. I will buy the full set next time.",
    rating: 5,
  },
  {
    name: "Salma Sharif",
    product: "Marina Glow Gold Shower Gel",
    text: "This shower gel makes my skin feel fresh and clean. The gold bottle also looks beautiful in my bathroom. Dr Lolo products are the best.",
    rating: 5,
  },
  {
    name: "Peninah Frank",
    product: "Miranda Glow Advance Serum",
    text: "I have tried many serums before but Miranda Glow Advance Serum is different. My dark spots are slowly fading and my skin looks healthy now.",
    rating: 5,
  },
  {
    name: "Lafita Ahmed",
    product: "Evert Glow Super Whiten",
    text: "Evert Glow Super Whiten is very good. My skin tone is now even and glowing. I use it together with the soap and the results are great.",
    rating: 5,
  },
  {
    name: "Bendaetta Msigwa",
    product: "Rana Slimming Powder",
    text: "I have been taking Rana Slim powder for one month and I can see the difference. My stomach is flatter and I feel more energetic.",
    rating: 5,
  },
  {
    name: "Khadija Mohammed",
    product: "Rapid Glow Soap",
    text: "I love the Rapid Glow Soap because it cleans my skin very well without making it dry. My body feels smooth and looks brighter too.",
    rating: 5,
  },
];

function TestimonialCard({ t }: { t: (typeof TESTIMONIALS)[0] }) {
  return (
    <div className="shrink-0 w-[300px] sm:w-[340px] rounded-2xl bg-white p-6 border border-[#c9a24d]/20 shadow-sm flex flex-col">
      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: t.rating }).map((_, r) => (
          <IconStar
            key={r}
            size={16}
            className="text-[#c9a24d] fill-[#c9a24d]"
          />
        ))}
      </div>
      <div className="mb-4">
        <IconQuote size={24} className="text-[#c9a24d]/40 rotate-180" />
      </div>
      <p className="text-[#5a7a5e] text-sm leading-relaxed mb-6 flex-1">
        {t.text}
      </p>
      <div className="pt-4 border-t border-gray-100">
        <p className="font-semibold text-[#1f4a24]">{t.name}</p>
        <p className="text-xs text-[#c9a24d] font-medium mt-0.5">
          {t.product}
        </p>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const duplicated = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-[#f7f3ea] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold uppercase tracking-wider text-[#c9a24d] mb-3">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1f4a24] mb-4">
            What Our Customers Say
          </h2>
          <p className="text-[#5a7a5e] max-w-2xl mx-auto">
            Real stories from real people who love Dr Lolo Cosmetics products.
          </p>
        </motion.div>
      </div>

      {/* Auto-scrolling carousel */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative"
      >
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#f7f3ea] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#f7f3ea] to-transparent z-10" />

        <div className="flex overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex shrink-0 items-stretch gap-6"
          >
            {duplicated.map((t, i) => (
              <TestimonialCard key={`${t.name}-${i}`} t={t} />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
