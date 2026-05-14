"use client";

import { motion } from "framer-motion";
import { ProductManager } from "@/components/admin/product-manager";

export default function AdminProductsPage() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6"
      >
        <h1 className="text-2xl sm:text-3xl font-bold text-[#1f4a24] mb-1">
          Products
        </h1>
        <p className="text-[#5a7a5e]">
          Manage your product catalog. Add new items, edit descriptions, or remove old ones.
        </p>
      </motion.div>

      <ProductManager />
    </div>
  );
}
