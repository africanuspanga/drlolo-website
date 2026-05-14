"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  IconPackage,
  IconArticle,
  IconShoppingCart,
  IconMessageCircle,
} from "@tabler/icons-react";
import { getAdminProducts, getAdminBlogs } from "@/lib/admin-storage";

export function StatsCards() {
  const [stats, setStats] = useState({
    products: 0,
    blogs: 0,
    orders: 0,
    messages: 0,
  });

  useEffect(() => {
    setStats({
      products: getAdminProducts().length,
      blogs: getAdminBlogs().length,
      orders: 0,
      messages: 0,
    });
  }, []);

  const cards = [
    {
      label: "Admin Products",
      value: stats.products,
      icon: IconPackage,
      color: "bg-[#2d6933]",
      text: "text-[#2d6933]",
      bg: "bg-[#eef6ef]",
    },
    {
      label: "Admin Blogs",
      value: stats.blogs,
      icon: IconArticle,
      color: "bg-[#c9a24d]",
      text: "text-[#c9a24d]",
      bg: "bg-[#fdf8ed]",
    },
    {
      label: "Total Orders",
      value: stats.orders,
      icon: IconShoppingCart,
      color: "bg-[#1f4a24]",
      text: "text-[#1f4a24]",
      bg: "bg-[#eef6ef]",
    },
    {
      label: "WhatsApp Inquiries",
      value: stats.messages,
      icon: IconMessageCircle,
      color: "bg-[#25D366]",
      text: "text-[#25D366]",
      bg: "bg-[#f0fdf4]",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {cards.map((card, i) => {
        const Icon = card.icon;
        return (
          <motion.div
            key={card.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className={`rounded-2xl ${card.bg} p-5 border border-[#c9a24d]/10`}
          >
            <div className="flex items-center justify-between mb-3">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-xl ${card.color} text-white`}
              >
                <Icon size={20} />
              </div>
              <span className={`text-2xl font-bold ${card.text}`}>
                {card.value}
              </span>
            </div>
            <p className="text-sm font-medium text-[#5a7a5e]">{card.label}</p>
          </motion.div>
        );
      })}
    </div>
  );
}
