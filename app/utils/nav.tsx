"use client"
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import "../globals.css";
import { Parisienne } from 'next/font/google';

const parisienne = Parisienne({
  subsets: ['latin'],
  weight: '400', // Parisienne only has 400
});

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window === 'undefined') return;
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setShowNav(false); // scrolling down
      } else {
        setShowNav(true); // scrolling up
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 flex flex-col items-center text-[var(--foreground)] shadow-md bg-[var(--background)] transition-transform duration-300 ${showNav ? 'translate-y-0' : '-translate-y-full'}`}
      style={{ willChange: 'transform' }}
    >
      {/* Overlay for mobile menu */}
      {open && (
        <div
          className="sm:hidden fixed inset-0 bg-transparent z-40"
          onClick={() => setOpen(false)}
          aria-label="Close menu overlay"
        />
      )}
  <div className="flex items-center p-4 w-full flex-col relative">
        {/* Left: Logo */}
        <div className={`font-bold flex text-4xl sm:text-5xl mb-4 ${parisienne.className}`}>Kyge and Alyssa</div>
        {/* Right: Nav and Hamburger, take remaining space */}
        <div className="flex-1 flex items-center justify-center relative">
          {/* Hamburger Icon with animation */}
          <button
            className="sm:hidden ml-auto z-50 flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span
              className={`block h-0.5 w-7 bg-black transition-transform duration-300 ease-in-out ${open ? 'rotate-45 translate-y-2' : ''}`}
            />
            <span
              className={`block h-0.5 w-7 bg-black my-1 transition-all duration-300 ease-in-out ${open ? 'opacity-0' : ''}`}
            />
            <span
              className={`block h-0.5 w-7 bg-black transition-transform duration-300 ease-in-out ${open ? '-rotate-45 -translate-y-1' : ''}`}
            />
          </button>
          {/* Desktop Nav */}
          <ul className="hidden sm:flex space-x-6 items-center justify-center w-full">
            <li>
              <Link href="/" className="text-lg hover:no-underline text-[var(--foreground)] hover:text-[var(--accent)]">Home</Link>
            </li>
            <li>
              <Link href="/registry" className="text-lg hover:no-underline text-[var(--foreground)] hover:text-[var(--accent)]">Registry</Link>
            </li>
            <li>
              <Link href="/schedule" className="text-lg hover:no-underline text-[var(--foreground)] hover:text-[var(--accent)]">Schedule</Link>
            </li>
            <li>
              <Link href="/location" className="text-lg hover:no-underline text-[var(--foreground)] hover:text-[var(--accent)]">Location</Link>
            </li>
            <li>
              <Link href="/gallery" className="text-lg hover:no-underline text-[var(--foreground)] hover:text-[var(--accent)]">Gallery</Link>
            </li>
            <li>
              <Link href="/rsvp" className="text-lg font-bold italic hover:no-underline text-[var(--foreground)] hover:text-[var(--accent)]">RSVP</Link>
            </li>
          </ul>
        </div>
      </div>
      {/* Mobile Menu: Slide down from hamburger button */}
      <div
  className={`sm:hidden absolute left-0 right-0 mx-auto w-full bg-white shadow-lg z-40 transform transition-transform transition-opacity duration-500 ease-in-out origin-top overflow-hidden ${open ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}`}
        style={{ top: '60px', willChange: 'transform', height: 'auto' }}
        onClick={e => e.stopPropagation()}
      >
  <ul className="flex flex-col justify-center items-center mt-12 px-6 pb-4">
          <li>
            <Link href="/" className="block py-2 text-lg text-[var(--foreground)] hover:scale-110 hover:text-[var(--accent)] hover:no-underline" onClick={() => setOpen(false)}>Home</Link>
          </li>
          <li>
            <Link href="/registry" className="block py-2 text-lg text-[var(--foreground)] hover:scale-110 hover:text-[var(--accent)] hover:no-underline" onClick={() => setOpen(false)}>
              Registry
            </Link>
          </li>
          <li>
            <Link href="/schedule" className="block py-2 text-lg text-[var(--foreground)] hover:scale-110 hover:text-[var(--accent)] hover:no-underline" onClick={() => setOpen(false)}>
              Schedule
            </Link>
          </li>
          <li>
            <Link href="/location" className="block py-2 text-lg text-[var(--foreground)] hover:scale-110 hover:text-[var(--accent)] hover:no-underline" onClick={() => setOpen(false)}>
              Location
            </Link>
          </li>
          <li>
            <Link href="/gallery" className="block py-2 text-lg text-[var(--foreground)] hover:scale-110 hover:text-[var(--accent)] hover:no-underline" onClick={() => setOpen(false)}>
              Gallery
            </Link>
          </li>
          <li>
            <Link href="/rsvp" className="block py-2 text-lg font-bold italic text-[var(--foreground)] hover:scale-110 hover:text-[var(--accent)] hover:no-underline" onClick={() => setOpen(false)}>
              RSVP
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );


}
