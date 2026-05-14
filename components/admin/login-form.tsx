"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { IconEye, IconEyeOff, IconLock, IconMail } from "@tabler/icons-react";
import { login } from "@/lib/admin-auth";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    setTimeout(() => {
      const session = login(email, password);
      if (session) {
        window.location.href = "/admin";
      } else {
        setError("Invalid email or password");
        setLoading(false);
      }
    }, 600);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f7f3ea] px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        {/* Logo / Brand */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#2d6933] mb-4">
            <IconLock size={32} className="text-[#c9a24d]" />
          </div>
          <h1 className="text-2xl font-bold text-[#1f4a24]">Admin Login</h1>
          <p className="text-sm text-[#5a7a5e] mt-1">
            Dr Lolo Cosmetics Dashboard
          </p>
        </div>

        {/* Card */}
        <div className="rounded-2xl bg-white p-8 shadow-xl border border-[#c9a24d]/10">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-[#1f4a24] mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <IconMail
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-[#5a7a5e]"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@drlolocosmetics.com"
                  required
                  className="w-full rounded-xl border border-gray-200 bg-white pl-10 pr-4 py-3 text-sm text-[#1f4a24] outline-none focus:border-[#2d6933] focus:ring-2 focus:ring-[#2d6933]/20 transition-all"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-[#1f4a24] mb-1.5">
                Password
              </label>
              <div className="relative">
                <IconLock
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-[#5a7a5e]"
                />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  required
                  className="w-full rounded-xl border border-gray-200 bg-white pl-10 pr-10 py-3 text-sm text-[#1f4a24] outline-none focus:border-[#2d6933] focus:ring-2 focus:ring-[#2d6933]/20 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#5a7a5e] hover:text-[#1f4a24]"
                >
                  {showPassword ? <IconEyeOff size={18} /> : <IconEye size={18} />}
                </button>
              </div>
            </div>

            {/* Error */}
            {error && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-red-600 bg-red-50 rounded-lg px-3 py-2"
              >
                {error}
              </motion.p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-[#2d6933] px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-[#1f4a24] hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          <p className="text-xs text-center text-[#5a7a5e] mt-6">
            Default: admin@drlolocosmetics.com / Kariakoo@1961
          </p>
        </div>
      </motion.div>
    </div>
  );
}
