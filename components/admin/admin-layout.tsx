"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  IconLayoutDashboard,
  IconPackage,
  IconArticle,
  IconMenu2,
  IconX,
  IconLogout,
  IconChevronRight,
} from "@tabler/icons-react";
import { logout } from "@/lib/admin-auth";

const NAV_ITEMS = [
  { label: "Dashboard", href: "/admin", icon: IconLayoutDashboard },
  { label: "Products", href: "/admin/products", icon: IconPackage },
  { label: "Blogs", href: "/admin/blogs", icon: IconArticle },
];

export function AdminLayout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const handleLogout = () => {
    logout();
    window.location.href = "/admin-login";
  };

  return (
    <div className="min-h-screen bg-[#f7f3ea] flex">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-64 flex-col bg-[#1a3d1f] text-white fixed inset-y-0 left-0 z-40">
        {/* Brand */}
        <div className="flex items-center gap-3 px-6 py-5 border-b border-white/10">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#c9a24d]">
            <span className="text-[#1a3d1f] font-bold text-lg">DL</span>
          </div>
          <div>
            <p className="font-semibold text-sm">Dr Lolo Admin</p>
            <p className="text-[10px] text-white/50">Dashboard</p>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-4 py-6 space-y-1">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                  isActive
                    ? "bg-[#c9a24d] text-[#1a3d1f]"
                    : "text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                <Icon size={20} />
                {item.label}
                {isActive && (
                  <IconChevronRight size={16} className="ml-auto" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="px-4 py-4 border-t border-white/10">
          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-white/70 hover:bg-red-500/20 hover:text-red-300 transition-all"
          >
            <IconLogout size={20} />
            Logout
          </button>
        </div>
      </aside>

      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-40 bg-[#1a3d1f] text-white px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#c9a24d]">
            <span className="text-[#1a3d1f] font-bold text-xs">DL</span>
          </div>
          <span className="font-semibold text-sm">Dr Lolo Admin</span>
        </div>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 rounded-lg hover:bg-white/10"
        >
          {mobileOpen ? <IconX size={22} /> : <IconMenu2 size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden fixed inset-0 z-30 bg-black/50"
            onClick={() => setMobileOpen(false)}
          >
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute top-0 left-0 bottom-0 w-64 bg-[#1a3d1f] text-white flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="h-14" /> {/* spacer for header */}
              <nav className="flex-1 px-4 py-4 space-y-1">
                {NAV_ITEMS.map((item) => {
                  const isActive = pathname === item.href;
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                        isActive
                          ? "bg-[#c9a24d] text-[#1a3d1f]"
                          : "text-white/70 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      <Icon size={20} />
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
              <div className="px-4 py-4 border-t border-white/10">
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    handleLogout();
                  }}
                  className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-white/70 hover:bg-red-500/20 hover:text-red-300 transition-all"
                >
                  <IconLogout size={20} />
                  Logout
                </button>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1 md:ml-64 pt-14 md:pt-0">
        <div className="p-4 sm:p-6 lg:p-8">{children}</div>
      </main>
    </div>
  );
}
