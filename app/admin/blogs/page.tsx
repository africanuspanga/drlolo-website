"use client";

import { motion } from "framer-motion";
import { BlogManager } from "@/components/admin/blog-manager";

export default function AdminBlogsPage() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6"
      >
        <h1 className="text-2xl sm:text-3xl font-bold text-[#1f4a24] mb-1">
          Blogs
        </h1>
        <p className="text-[#5a7a5e]">
          Create and manage blog posts for your customers.
        </p>
      </motion.div>

      <BlogManager />
    </div>
  );
}
