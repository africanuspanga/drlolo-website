"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { WHATSAPP_LINK } from "@/lib/constants";

export function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <motion.a
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Order on WhatsApp"
    >
      <span className="rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-[#25D366] shadow-lg">
        Order Now
      </span>
      <div className="relative">
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping" />
        <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-lg overflow-hidden">
          <Image
            src="/whatsapp.png"
            alt="WhatsApp"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </motion.a>
  );
}
