"use client";

import { useEffect, useState } from "react";
import { isAuthenticated } from "@/lib/admin-auth";

export function AdminGuard({ children }: { children: React.ReactNode }) {
  const [checked, setChecked] = useState(false);
  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    const auth = isAuthenticated();
    setAuthed(auth);
    setChecked(true);
    if (!auth) {
      window.location.href = "/admin-login";
    }
  }, []);

  if (!checked) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f7f3ea]">
        <div className="w-8 h-8 border-2 border-[#2d6933] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!authed) {
    return null;
  }

  return <>{children}</>;
}
