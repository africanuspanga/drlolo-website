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
  IconClock,
} from "@tabler/icons-react";
import {
  getAdminBlogs,
  saveAdminBlog,
  deleteAdminBlog,
  fileToBase64,
  type AdminBlog,
} from "@/lib/admin-storage";

export function BlogManager() {
  const [blogs, setBlogs] = useState<AdminBlog[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<AdminBlog | null>(null);
  const [search, setSearch] = useState("");
  const [form, setForm] = useState({
    title: "",
    excerpt: "",
    content: "",
    image: "",
    readTime: "3 min read",
    date: new Date().toISOString().split("T")[0],
  });
  const [previewImage, setPreviewImage] = useState("");

  useEffect(() => {
    setBlogs(getAdminBlogs());
  }, []);

  const openAdd = () => {
    setEditing(null);
    setForm({
      title: "",
      excerpt: "",
      content: "",
      image: "",
      readTime: "3 min read",
      date: new Date().toISOString().split("T")[0],
    });
    setPreviewImage("");
    setModalOpen(true);
  };

  const openEdit = (blog: AdminBlog) => {
    setEditing(blog);
    setForm({
      title: blog.title,
      excerpt: blog.excerpt,
      content: blog.content,
      image: blog.image,
      readTime: blog.readTime,
      date: blog.date,
    });
    setPreviewImage(blog.image);
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
    const blog: AdminBlog = {
      id: editing?.id || Date.now().toString(),
      ...form,
      createdAt: editing?.createdAt || new Date().toISOString(),
    };
    saveAdminBlog(blog);
    setBlogs(getAdminBlogs());
    setModalOpen(false);
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this blog?")) {
      deleteAdminBlog(id);
      setBlogs(getAdminBlogs());
    }
  };

  const filtered = blogs.filter((b) =>
    b.title.toLowerCase().includes(search.toLowerCase())
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
            placeholder="Search blogs..."
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
          Add Blog
        </button>
      </div>

      {/* Table */}
      <div className="rounded-2xl bg-white border border-[#c9a24d]/10 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#f7f3ea] text-left">
                <th className="px-4 py-3 font-semibold text-[#1f4a24]">Image</th>
                <th className="px-4 py-3 font-semibold text-[#1f4a24]">Title</th>
                <th className="px-4 py-3 font-semibold text-[#1f4a24] hidden sm:table-cell">
                  Date
                </th>
                <th className="px-4 py-3 font-semibold text-[#1f4a24] hidden md:table-cell">
                  Read Time
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
                    No blogs yet. Click "Add Blog" to create one.
                  </td>
                </tr>
              ) : (
                filtered.map((blog) => (
                  <tr
                    key={blog.id}
                    className="border-t border-gray-100 hover:bg-[#f7f3ea]/50 transition-colors"
                  >
                    <td className="px-4 py-3">
                      <div className="relative h-12 w-12 rounded-lg overflow-hidden bg-gray-100">
                        {blog.image ? (
                          <Image
                            src={blog.image}
                            alt={blog.title}
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
                      {blog.title}
                    </td>
                    <td className="px-4 py-3 text-[#5a7a5e] hidden sm:table-cell">
                      {blog.date}
                    </td>
                    <td className="px-4 py-3 text-[#5a7a5e] hidden md:table-cell">
                      <span className="inline-flex items-center gap-1">
                        <IconClock size={14} />
                        {blog.readTime}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <div className="inline-flex gap-2">
                        <button
                          onClick={() => openEdit(blog)}
                          className="p-2 rounded-lg bg-[#eef6ef] text-[#2d6933] hover:bg-[#2d6933] hover:text-white transition-colors"
                        >
                          <IconPencil size={16} />
                        </button>
                        <button
                          onClick={() => handleDelete(blog.id)}
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
                  {editing ? "Edit Blog" : "Add Blog"}
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
                    Blog Image
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

                {/* Title */}
                <div>
                  <label className="block text-sm font-medium text-[#1f4a24] mb-1.5">
                    Title
                  </label>
                  <input
                    type="text"
                    value={form.title}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, title: e.target.value }))
                    }
                    placeholder="Blog title..."
                    required
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-[#1f4a24] outline-none focus:border-[#2d6933] focus:ring-2 focus:ring-[#2d6933]/20"
                  />
                </div>

                {/* Date & Read Time */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#1f4a24] mb-1.5">
                      Date
                    </label>
                    <input
                      type="date"
                      value={form.date}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, date: e.target.value }))
                      }
                      required
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-[#1f4a24] outline-none focus:border-[#2d6933] focus:ring-2 focus:ring-[#2d6933]/20"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1f4a24] mb-1.5">
                      Read Time
                    </label>
                    <input
                      type="text"
                      value={form.readTime}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, readTime: e.target.value }))
                      }
                      placeholder="3 min read"
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-[#1f4a24] outline-none focus:border-[#2d6933] focus:ring-2 focus:ring-[#2d6933]/20"
                    />
                  </div>
                </div>

                {/* Excerpt */}
                <div>
                  <label className="block text-sm font-medium text-[#1f4a24] mb-1.5">
                    Excerpt
                  </label>
                  <textarea
                    value={form.excerpt}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, excerpt: e.target.value }))
                    }
                    placeholder="Short summary for the card..."
                    rows={2}
                    required
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-[#1f4a24] outline-none focus:border-[#2d6933] focus:ring-2 focus:ring-[#2d6933]/20 resize-none"
                  />
                </div>

                {/* Content */}
                <div>
                  <label className="block text-sm font-medium text-[#1f4a24] mb-1.5">
                    Full Content
                  </label>
                  <textarea
                    value={form.content}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, content: e.target.value }))
                    }
                    placeholder="Write the full blog content here..."
                    rows={6}
                    required
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-[#1f4a24] outline-none focus:border-[#2d6933] focus:ring-2 focus:ring-[#2d6933]/20 resize-none"
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
                    {editing ? "Save Changes" : "Add Blog"}
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
