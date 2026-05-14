"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { IconClock, IconArrowRight, IconX } from "@tabler/icons-react";
import { getAdminBlogs, type AdminBlog } from "@/lib/admin-storage";

interface BlogItem {
  id: string | number;
  title: string;
  excerpt: string;
  image: string;
  readTime: string;
  date: string;
  content: string;
}

const BLOGS: BlogItem[] = [
  {
    id: 1,
    title: "5 Simple Skincare Tips for Glowing Skin",
    excerpt:
      "Discover easy daily habits that can help your skin look brighter and healthier. From drinking water to using the right serum.",
    image: "/About us section-homepage.jpeg",
    readTime: "3 min read",
    date: "May 10, 2026",
    content: `
Taking care of your skin does not have to be hard. Here are five simple tips that can help you get that glow you want.

1. Drink Enough Water
Water helps your skin stay fresh and soft. Try to drink at least 8 glasses every day.

2. Clean Your Face Before Bed
Always remove makeup and dirt before sleeping. This helps your skin breathe at night.

3. Use a Good Serum
A quality serum like Rapid Glow Serum or Miranda Glow Advance Serum can help brighten your skin over time.

4. Protect Your Skin from the Sun
The sun can damage your skin. Use products that help protect your face when you go outside.

5. Be Consistent
Good skin takes time. Use your products every day and be patient. Results will come.

Dr Lolo Cosmetics has many products that can help you build a simple but effective skincare routine.
    `,
  },
  {
    id: 2,
    title: "How to Build Your Perfect Glow Routine",
    excerpt:
      "Learn how to combine Dr Lolo products for the best results. A step-by-step guide to morning and evening skincare.",
    image: "/Get you glow section.jpeg",
    readTime: "3 min read",
    date: "May 5, 2026",
    content: `
A good glow routine is simple when you use the right products. Here is how to build yours with Dr Lolo Cosmetics.

Morning Routine:
- Wash your face with Rapid Glow Soap or a gentle cleanser
- Apply Rapid Glow Serum or Telesa Pink Glow Serum
- Use a face cream like Marina Glow Whitening Face Cream
- Apply sunscreen before going out

Evening Routine:
- Clean your face to remove dirt from the day
- Apply Miranda Glow Advance Serum
- Use Mirandy Glow Whitening Face Cream before bed
- For body care, apply Miranda Glow Lotion

Weekly Additions:
- Use Evert Glow Super Whiten 2-3 times a week
- Try a full beauty set for complete care

Remember, consistency is key. Stick to your routine and your skin will thank you.
    `,
  },
  {
    id: 3,
    title: "Why Natural Ingredients Matter in Skincare",
    excerpt:
      "Understanding what goes into your beauty products. Why Dr Lolo Cosmetics chooses quality ingredients for every collection.",
    image: "/WhatsApp Image 2026-05-13 at 18.39.31 (1).jpeg",
    readTime: "3 min read",
    date: "April 28, 2026",
    content: `
What you put on your skin matters. Natural ingredients can help your skin without causing harm.

Why Choose Natural?
Natural ingredients are gentle on the skin. They work with your body instead of against it. This means fewer side effects and better long-term results.

Dr Lolo Products Use Quality Ingredients:
- Rapid Glow Collection uses ingredients that help brighten the skin
- Marina Glow Gold uses premium formulas for luxury care
- Evert Glow focuses on even skin tone with safe ingredients
- Rana Slim uses natural fiber and enzymes for wellness

What to Avoid:
Avoid products with harsh chemicals that can damage your skin over time. Always read labels and ask questions.

At Dr Lolo Cosmetics, we believe in safe, effective beauty. Our shop in Kariakoo, Dar es Salaam is open for you to learn more about our products.
    `,
  },
];

export function BlogSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedBlog, setSelectedBlog] = useState<BlogItem | null>(null);
  const [adminBlogs, setAdminBlogs] = useState<AdminBlog[]>([]);

  useEffect(() => {
    setAdminBlogs(getAdminBlogs());
  }, []);

  const allBlogs = [
    ...adminBlogs.map((b) => ({
      id: b.id,
      title: b.title,
      excerpt: b.excerpt,
      image: b.image,
      readTime: b.readTime,
      date: b.date,
      content: b.content,
    })),
    ...BLOGS,
  ];

  return (
    <>
      <section ref={ref} className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block text-sm font-semibold uppercase tracking-wider text-[#c9a24d] mb-3">
              From Our Blog
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1f4a24] mb-4">
              Skincare Tips & Guides
            </h2>
            <p className="text-[#5a7a5e] max-w-2xl mx-auto">
              Simple advice to help you get the most from your Dr Lolo Cosmetics products.
            </p>
          </motion.div>

          {/* Blog Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {allBlogs.map((blog, i) => (
              <motion.article
                key={blog.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group cursor-pointer rounded-2xl bg-[#f7f3ea] overflow-hidden border border-[#c9a24d]/10 hover:border-[#c9a24d]/30 transition-all hover:shadow-lg flex flex-col"
                onClick={() => setSelectedBlog(blog)}
              >
                <div className="relative h-56 overflow-hidden bg-white">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-[#5a7a5e]">
                      <IconClock size={14} />
                      {blog.readTime}
                    </span>
                    <span className="text-xs text-[#5a7a5e]">{blog.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-[#1f4a24] mb-2 group-hover:text-[#2d6933] transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-[#5a7a5e] mb-4 flex-1">
                    {blog.excerpt}
                  </p>
                  <span className="inline-flex items-center text-sm font-semibold text-[#2d6933] group-hover:text-[#c9a24d] transition-colors">
                    Read More
                    <IconArrowRight size={16} className="ml-1" />
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Modal */}
      <AnimatePresence>
        {selectedBlog && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedBlog(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Image */}
              <div className="relative h-64 sm:h-80">
                <Image
                  src={selectedBlog.image}
                  alt={selectedBlog.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <button
                  onClick={() => setSelectedBlog(null)}
                  className="absolute top-4 right-4 rounded-full bg-white/90 p-2 text-[#1f4a24] hover:bg-white transition-colors"
                >
                  <IconX size={20} />
                </button>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-[#1f4a24]">
                      <IconClock size={14} />
                      {selectedBlog.readTime}
                    </span>
                    <span className="text-xs text-white/90">{selectedBlog.date}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {selectedBlog.title}
                  </h3>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 sm:p-8">
                <div className="prose prose-sm max-w-none text-[#5a7a5e] whitespace-pre-line leading-relaxed">
                  {selectedBlog.content.trim()}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
