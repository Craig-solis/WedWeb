"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import "../globals.css";
import { MonteCarlo, Tinos } from "next/font/google";

const monteCarlo = MonteCarlo({
  subsets: ["latin"],
  weight: "400",
});

const tinos = Tinos({
  subsets: ["latin"],
  weight: "400",
});

const links = [
  { href: "/", label: "Home" },
  { href: "/registry", label: "Registry" },
  { href: "/location", label: "Location" },
  { href: "/faq", label: "FAQ" },
  { href: "/rsvp", label: "RSVP", accent: true },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window === "undefined") return;
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[var(--background)]/85 border-b border-[var(--border)] transition-transform duration-300 ${
        showNav ? "translate-y-0" : "-translate-y-full"
      }`}
      style={{ willChange: "transform" }}
    >
      {open && (
        <div
          className="sm:hidden fixed inset-0 z-40"
          onClick={() => setOpen(false)}
          aria-label="Close menu overlay"
        />
      )}

      <div className="flex items-center justify-between px-6 py-3 max-w-6xl mx-auto">
        {/* Logo */}
        <Link
          href="/"
          className={`text-3xl text-[var(--foreground)] hover:text-[var(--accent)] transition-colors leading-none ${monteCarlo.className}`}
        >
          Kyge &amp; Alyssa
        </Link>

        {/* Desktop Nav */}
        <ul className={`hidden sm:flex items-center gap-7 ${tinos.className}`}>
          {links.map(({ href, label, accent }) => (
            <li key={href}>
              <Link
                href={href}
                className={`nav-underline text-base transition-colors hover:no-underline hover:text-[var(--accent)] ${
                  accent ? "font-semibold italic" : ""
                } text-[var(--foreground)]${pathname === href ? " active" : ""}`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className="sm:hidden z-50 flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span
            className={`block h-0.5 w-6 bg-[var(--foreground)] transition-all duration-300 ${
              open ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-[var(--foreground)] my-1 transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-[var(--foreground)] transition-all duration-300 ${
              open ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${tinos.className} sm:hidden w-full bg-[var(--background)]/95 backdrop-blur-md border-t border-[var(--border)] transition-all duration-300 overflow-hidden ${
          open ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center py-4 gap-1">
          {links.map(({ href, label, accent }) => (
            <li key={href}>
              <Link
                href={href}
                className={`block py-2 px-6 text-lg transition-colors hover:text-[var(--accent)] hover:no-underline ${
                  accent ? "font-semibold italic" : ""
                } text-[var(--foreground)]${pathname === href ? " active" : ""}`}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

