"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  IconPlus,
  IconPencil,
  IconTrash,
  IconX,
  IconPhoto,
  IconSearch,
} from "@tabler/icons-react";
import {
  getAdminProducts,
  saveAdminProduct,
  deleteAdminProduct,
  fileToBase64,
  type AdminProduct,
} from "@/lib/admin-storage";

export function ProductManager() {
  const [products, setProducts] = useState<AdminProduct[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<AdminProduct | null>(null);
  const [search, setSearch] = useState("");
  const [form, setForm] = useState({
    name: "",
    collection: "",
    description: "",
    image: "",
    cta: "Order on WhatsApp",
  });
  const [previewImage, setPreviewImage] = useState("");

  useEffect(() => {
    setProducts(getAdminProducts());
  }, []);

  const openAdd = () => {
    setEditing(null);
    setForm({
      name: "",
      collection: "",
      description: "",
      image: "",
      cta: "Order on WhatsApp",
    });
    setPreviewImage("");
    setModalOpen(true);
  };

  const openEdit = (product: AdminProduct) => {
    setEditing(product);
    setForm({
      name: product.name,
      collection: product.collection,
      description: product.description,
      image: product.image,
      cta: product.cta,
    });
    setPreviewImage(product.image);
    setModalOpen(true);
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const base64 = await fileToBase64(file);
      setForm((f) => ({ ...f, image: base64 }));
      setPreviewImage(base64);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const product: AdminProduct = {
      id: editing?.id || Date.now().toString(),
      ...form,
      createdAt: editing?.createdAt || new Date().toISOString(),
    };
    saveAdminProduct(product);
    setProducts(getAdminProducts());
    setModalOpen(false);
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this product?")) {
      deleteAdminProduct(id);
      setProducts(getAdminProducts());
    }
  };

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <IconSearch
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-[#5a7a5e]"
          />
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-gray-200 bg-white pl-10 pr-4 py-2.5 text-sm text-[#1f4a24] outline-none focus:border-[#2d6933] focus:ring-2 focus:ring-[#2d6933]/20"
          />
        </div>
        <button
          onClick={openAdd}
          className="inline-flex items-center gap-2 rounded-xl bg-[#2d6933] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#1f4a24] transition-colors"
        >
          <IconPlus size={18} />
          Add Product
        </button>
      </div>

      {/* Table */}
      <div className="rounded-2xl bg-white border border-[#c9a24d]/10 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#f7f3ea] text-left">
                <th className="px-4 py-3 font-semibold text-[#1f4a24]">Image</th>
                <th className="px-4 py-3 font-semibold text-[#1f4a24]">Name</th>
                <th className="px-4 py-3 font-semibold text-[#1f4a24]">Collection</th>
                <th className="px-4 py-3 font-semibold text-[#1f4a24] hidden sm:table-cell">
                  Description
                </th>
                <th className="px-4 py-3 font-semibold text-[#1f4a24] text-right">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-4 py-12 text-center text-[#5a7a5e]">
                    No products yet. Click "Add Product" to create one.
                  </td>
                </tr>
              ) : (
                filtered.map((product) => (
                  <tr
                    key={product.id}
                    className="border-t border-gray-100 hover:bg-[#f7f3ea]/50 transition-colors"
                  >
                    <td className="px-4 py-3">
                      <div className="relative h-12 w-12 rounded-lg overflow-hidden bg-gray-100">
                        {product.image ? (
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center text-gray-300">
                            <IconPhoto size={20} />
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="px-4 py-3 font-medium text-[#1f4a24]">
                      {product.name}
                    </td>
                    <td className="px-4 py-3 text-[#5a7a5e]">
                      {product.collection}
                    </td>
                    <td className="px-4 py-3 text-[#5a7a5e] hidden sm:table-cell max-w-xs truncate">
                      {product.description}
                    </td>
                    <td className="px-4 py-3 text-right">
                      <div className="inline-flex gap-2">
                        <button
                          onClick={() => openEdit(product)}
                          className="p-2 rounded-lg bg-[#eef6ef] text-[#2d6933] hover:bg-[#2d6933] hover:text-white transition-colors"
                        >
                          <IconPencil size={16} />
                        </button>
                        <button
                          onClick={() => handleDelete(product.id)}
                          className="p-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-600 hover:text-white transition-colors"
                        >
                          <IconTrash size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setModalOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between z-10">
                <h3 className="text-lg font-bold text-[#1f4a24]">
                  {editing ? "Edit Product" : "Add Product"}
                </h3>
                <button
                  onClick={() => setModalOpen(false)}
                  className="p-2 rounded-lg hover:bg-gray-100 text-[#5a7a5e]"
                >
                  <IconX size={20} />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-5">
                {/* Image */}
                <div>
                  <label className="block text-sm font-medium text-[#1f4a24] mb-2">
                    Product Image
                  </label>
                  <div className="flex items-center gap-4">
                    <div className="relative h-20 w-20 rounded-xl overflow-hidden bg-gray-100 border border-gray-200">
                      {previewImage ? (
                        <Image
                          src={previewImage}
                          alt="Preview"
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center text-gray-300">
                          <IconPhoto size={24} />
                        </div>
                      )}
                    </div>
                    <label className="cursor-pointer inline-flex items-center gap-2 rounded-xl border-2 border-dashed border-[#c9a24d]/30 px-4 py-2.5 text-sm font-medium text-[#5a7a5e] hover:border-[#c9a24d] hover:text-[#1f4a24] transition-colors">
                      <IconPhoto size={18} />
                      Choose Image
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                      />
                    </label>
                  </div>
                </div>

                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-[#1f4a24] mb-1.5">
                    Product Name
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, name: e.target.value }))
                    }
                    placeholder="e.g. Rapid Glow Serum"
                    required
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-[#1f4a24] outline-none focus:border-[#2d6933] focus:ring-2 focus:ring-[#2d6933]/20"
                  />
                </div>

                {/* Collection */}
                <div>
                  <label className="block text-sm font-medium text-[#1f4a24] mb-1.5">
                    Collection
                  </label>
                  <input
                    type="text"
                    value={form.collection}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, collection: e.target.value }))
                    }
                    placeholder="e.g. Rapid Glow Collection"
                    required
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-[#1f4a24] outline-none focus:border-[#2d6933] focus:ring-2 focus:ring-[#2d6933]/20"
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-medium text-[#1f4a24] mb-1.5">
                    Description
                  </label>
                  <textarea
                    value={form.description}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, description: e.target.value }))
                    }
                    placeholder="Short product description..."
                    rows={3}
                    required
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-[#1f4a24] outline-none focus:border-[#2d6933] focus:ring-2 focus:ring-[#2d6933]/20 resize-none"
                  />
                </div>

                {/* CTA */}
                <div>
                  <label className="block text-sm font-medium text-[#1f4a24] mb-1.5">
                    Button Text
                  </label>
                  <input
                    type="text"
                    value={form.cta}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, cta: e.target.value }))
                    }
                    placeholder="Order on WhatsApp"
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-[#1f4a24] outline-none focus:border-[#2d6933] focus:ring-2 focus:ring-[#2d6933]/20"
                  />
                </div>

                <div className="pt-2 flex gap-3">
                  <button
                    type="button"
                    onClick={() => setModalOpen(false)}
                    className="flex-1 rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-semibold text-[#5a7a5e] hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 rounded-xl bg-[#2d6933] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#1f4a24] transition-colors"
                  >
                    {editing ? "Save Changes" : "Add Product"}
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
