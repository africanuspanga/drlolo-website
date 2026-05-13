"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { WHATSAPP_LINK } from "@/lib/constants";
import { STATS } from "@/lib/constants";

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#2d6933]"
    >
      {/* Background image with parallax */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/HERO-BG.png"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#2d6933]/70" />
      </motion.div>

      {/* Rotating rings */}
      <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 hidden lg:block z-10">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="h-[800px] w-[800px] rounded-full border border-[#c9a24d]/20" />
        </motion.div>
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="h-[600px] w-[600px] rounded-full border border-[#c9a24d]/30" />
        </motion.div>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="h-[400px] w-[400px] rounded-full border border-[#c9a24d]/20" />
        </motion.div>
        <div className="relative flex h-[200px] w-[200px] items-center justify-center">
          <Image
            src="/Dr Lolo Logo.png"
            alt="Dr Lolo Cosmetics"
            width={120}
            height={120}
            className="h-24 w-auto opacity-90"
          />
        </div>
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity: contentOpacity }}
        className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32"
      >
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-[#c9a24d] mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#c9a24d] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#c9a24d]" />
            </span>
            Premium Skincare & Cosmetics
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            Glow With{" "}
            <span className="text-[#c9a24d]">Confidence</span>
          </motion.h1>

          {/* Description - Desktop */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden sm:block text-lg text-white/80 mb-8 max-w-lg"
          >
            Discover Dr Lolo Cosmetics, a Tanzanian beauty brand offering
            carefully selected skincare and glow products for customers who want
            to look radiant, confident, and beautifully cared for.
          </motion.p>

          {/* Description - Mobile */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="sm:hidden text-base text-white/80 mb-8 max-w-lg"
          >
            Dr Lolo Cosmetics offers skincare and glow products for customers who want to look radiant, confident, and beautifully cared for.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-10"
          >
            <Link
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-[#c9a24d] px-6 py-3 text-sm font-semibold text-[#2d6933] transition-transform hover:scale-105"
            >
              Shop via WhatsApp
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center rounded-full border border-[#c9a24d] px-6 py-3 text-sm font-semibold text-[#c9a24d] transition-colors hover:bg-[#c9a24d]/10"
            >
              View Products
            </Link>
          </motion.div>

          {/* Supporting text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm text-white/60 mb-12"
          >
            Available in Kariakoo, Dar es Salaam — Mafia & Jangwani Street
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-8"
          >
            {STATS.map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-[#c9a24d]">
                  {stat.value}
                </div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <div className="h-10 w-6 rounded-full border-2 border-[#c9a24d]/50 flex items-start justify-center p-1">
            <div className="h-2 w-2 rounded-full bg-[#c9a24d]" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
