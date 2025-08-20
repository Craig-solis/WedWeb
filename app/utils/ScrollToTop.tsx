"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();
  useEffect(() => {
    // Try all possible scroll containers for compatibility
    window.scrollTo(0, 0);
    if (document.body) document.body.scrollTop = 0;
    if (document.documentElement) document.documentElement.scrollTop = 0;
  }, [pathname]);
  return null;
}
