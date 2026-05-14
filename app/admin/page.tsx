"use client";

import { motion } from "framer-motion";
import { StatsCards } from "@/components/admin/stats-cards";
import {
  IconPackage,
  IconArticle,
  IconArrowRight,
} from "@tabler/icons-react";
import Link from "next/link";

export default function AdminDashboardPage() {
  const quickLinks = [
    {
      title: "Manage Products",
      description: "Add, edit, or remove products from your store.",
      href: "/admin/products",
      icon: IconPackage,
      color: "bg-[#eef6ef]",
      text: "text-[#2d6933]",
    },
    {
      title: "Manage Blogs",
      description: "Create and edit blog posts for your customers.",
      href: "/admin/blogs",
      icon: IconArticle,
      color: "bg-[#fdf8ed]",
      text: "text-[#c9a24d]",
    },
  ];

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl sm:text-3xl font-bold text-[#1f4a24] mb-2">
          Dashboard
        </h1>
        <p className="text-[#5a7a5e] mb-8">
          Welcome back to your Dr Lolo Cosmetics admin panel.
        </p>
      </motion.div>

      <StatsCards />

      {/* Quick Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h2 className="text-lg font-bold text-[#1f4a24] mb-4">
          Quick Actions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {quickLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-start gap-4 rounded-2xl bg-white p-6 border border-[#c9a24d]/10 hover:border-[#c9a24d]/30 hover:shadow-lg transition-all"
              >
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${link.color} ${link.text}`}
                >
                  <Icon size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-[#1f4a24] group-hover:text-[#2d6933] transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-sm text-[#5a7a5e] mt-1">
                    {link.description}
                  </p>
                </div>
                <IconArrowRight
                  size={20}
                  className="text-[#c9a24d] opacity-0 group-hover:opacity-100 transition-opacity mt-1"
                />
              </Link>
            );
          })}
        </div>
      </motion.div>

      {/* Tips */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-8 rounded-2xl bg-[#eef6ef] p-6 border border-[#2d6933]/10"
      >
        <h3 className="font-semibold text-[#1f4a24] mb-2">
          Tips for Managing Your Store
        </h3>
        <ul className="space-y-2 text-sm text-[#5a7a5e]">
          <li className="flex items-start gap-2">
            <span className="text-[#c9a24d] mt-0.5">✦</span>
            Add clear product descriptions so customers know what to expect.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#c9a24d] mt-0.5">✦</span>
            Upload high-quality images for the best presentation.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#c9a24d] mt-0.5">✦</span>
            Write blog posts regularly to keep customers engaged.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#c9a24d] mt-0.5">✦</span>
            All changes are saved locally and will show on the main website.
          </li>
        </ul>
      </motion.div>
    </div>
  );
}
