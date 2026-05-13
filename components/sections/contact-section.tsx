"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  IconPhone,
  IconMapPin,
  IconMail,
  IconBrandWhatsapp,
} from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  WHATSAPP_LINK,
  WHATSAPP_NUMBER,
  PHONE,
  EMAIL,
  ADDRESS,
} from "@/lib/constants";

export function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const [form, setForm] = useState({
    name: "",
    phone: "",
    product: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello Dr Lolo Cosmetics, my name is ${form.name}. My phone number is ${form.phone || "not provided"}. I am interested in ${form.product || "your products"}. ${form.message}`;
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-[#f7f3ea]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <div>
              <h2 className="text-3xl font-bold text-[#1f4a24] mb-4">
                Get in Touch
              </h2>
              <p className="text-[#5a7a5e]">
                Visit our shop in Kariakoo or contact us directly on WhatsApp to
                ask about products, prices, and availability.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 rounded-xl bg-white p-4 border border-[#c9a24d]/10 hover:border-[#c9a24d]/30 transition-colors">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#2d6933] text-white">
                  <IconPhone size={20} />
                </div>
                <div>
                  <p className="text-sm font-medium text-[#1f4a24]">Phone</p>
                  <a
                    href={`tel:${PHONE.replace(/\s/g, "")}`}
                    className="text-sm text-[#5a7a5e] hover:text-[#2d6933]"
                  >
                    {PHONE}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl bg-white p-4 border border-[#c9a24d]/10 hover:border-[#c9a24d]/30 transition-colors">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#2d6933] text-white">
                  <IconMapPin size={20} />
                </div>
                <div>
                  <p className="text-sm font-medium text-[#1f4a24]">Location</p>
                  <p className="text-sm text-[#5a7a5e]">{ADDRESS}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl bg-white p-4 border border-[#c9a24d]/10 hover:border-[#c9a24d]/30 transition-colors">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#2d6933] text-white">
                  <IconMail size={20} />
                </div>
                <div>
                  <p className="text-sm font-medium text-[#1f4a24]">Email</p>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="text-sm text-[#5a7a5e] hover:text-[#2d6933]"
                  >
                    {EMAIL}
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp quick box */}
            <div className="rounded-xl bg-[#25D366]/10 p-4 border border-[#25D366]/20">
              <div className="flex items-center gap-3 mb-2">
                <IconBrandWhatsapp className="text-[#25D366]" size={24} />
                <span className="font-semibold text-[#1f4a24]">
                  Quick WhatsApp
                </span>
              </div>
              <p className="text-sm text-[#5a7a5e] mb-3">
                Message us directly for fast support and product inquiries.
              </p>
              <Link
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-semibold text-[#25D366] hover:underline"
              >
                Open WhatsApp
              </Link>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl bg-white p-8 border border-[#c9a24d]/10 shadow-sm"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={form.name}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, name: e.target.value }))
                    }
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    value={form.phone}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, phone: e.target.value }))
                    }
                    placeholder="Your phone"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <Label htmlFor="product">Product Interested In</Label>
                <Input
                  id="product"
                  value={form.product}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, product: e.target.value }))
                  }
                  placeholder="e.g. Rapid Glow Serum"
                />
              </div>

              <div className="space-y-2 mb-6">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  value={form.message}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, message: e.target.value }))
                  }
                  placeholder="Tell us what you need..."
                  rows={4}
                />
              </div>

              <Button
                type="submit"
                className="w-full rounded-full bg-[#2d6933] text-white hover:bg-[#1f4a24]"
              >
                Send Inquiry
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
