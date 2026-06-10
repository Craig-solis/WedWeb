"use client";
import "./globals.css";
import { MonteCarlo, Tinos } from "next/font/google";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import InfiniteImageSlider from "./utils/InfiniteImageSlider";

const CountdownClient = dynamic(() => import("./CountdownClient"), {
  ssr: false,
});

const monteCarlo = MonteCarlo({ subsets: ["latin"], weight: "400" });
const tinos = Tinos({ subsets: ["latin"], weight: "400" });

const navCards = [
  { href: "/rsvp", label: "RSVP", icon: "✉", desc: "Let us know you're coming" },
  { href: "/registry", label: "Registry", icon: "🎁", desc: "View our wishlist" },
  { href: "/location", label: "Location", icon: "📍", desc: "Stone Hall, TX" },
  { href: "/faq", label: "FAQ", icon: "💬", desc: "Everything you need to know" },
];

export default function Home() {
  return (
    <div className="flex flex-col w-full text-[var(--foreground)]">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative w-full min-h-[calc(100vh-68px)] flex flex-col items-center justify-center overflow-hidden">
        {/* Background photo */}
        <Image
          src="/20250802_011945000_iOS.jpg"
          alt="Kyge and Alyssa"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/55" />

        {/* Text content */}
        <div className="relative z-10 flex flex-col items-center text-center px-6">
          <p className={`text-white/70 text-sm tracking-[0.3em] uppercase mb-6 ${tinos.className}`}>
            Together With Their Families
          </p>
          <h1 className={`text-white text-7xl sm:text-8xl md:text-9xl leading-none ${monteCarlo.className}`}>
            Kyge
          </h1>
          <p className={`text-white/60 text-2xl sm:text-3xl my-3 ${tinos.className}`}>&amp;</p>
          <h1 className={`text-white text-7xl sm:text-8xl md:text-9xl leading-none ${monteCarlo.className}`}>
            Alyssa
          </h1>
          <div className="mt-8 flex items-center gap-4">
            <div className="h-px w-12 bg-white/40" />
            <p className={`text-white/80 text-sm tracking-[0.25em] uppercase ${tinos.className}`}>
              November 14 · 2025
            </p>
            <div className="h-px w-12 bg-white/40" />
          </div>
          <div className="mt-10 flex gap-4 flex-wrap justify-center">
            <Link
              href="/rsvp"
              className={`px-8 py-3 bg-white text-[var(--foreground)] text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-white/90 transition-all ${tinos.className}`}
            >
              RSVP Now
            </Link>
            <Link
              href="/location"
              className={`px-8 py-3 border border-white/60 text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-white/10 transition-all ${tinos.className}`}
            >
              View Venue
            </Link>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
          <span className={`text-white/50 text-xs tracking-widest uppercase ${tinos.className}`}>Scroll</span>
          <div className="w-px h-10 bg-white/30 animate-pulse" />
        </div>
      </section>

      {/* ── EVENT DETAILS STRIP ─────────────────────────────── */}
      <section className={`w-full bg-[var(--foreground)] text-white ${tinos.className}`}>
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/15">
          <div className="flex flex-col items-center py-8 px-6 text-center">
            <p className="text-xs tracking-[0.25em] uppercase text-white/50 mb-2">Ceremony</p>
            <p className="text-xl font-semibold">4:00 PM</p>
            <p className="text-sm text-white/60 mt-1">Arrive by 3:30 PM</p>
          </div>
          <div className="flex flex-col items-center py-8 px-6 text-center">
            <p className="text-xs tracking-[0.25em] uppercase text-white/50 mb-2">Venue</p>
            <p className="text-xl font-semibold">Stone Hall</p>
            <p className="text-sm text-white/60 mt-1">1205 Roland Ln, TX</p>
          </div>
          <div className="flex flex-col items-center py-8 px-6 text-center">
            <p className="text-xs tracking-[0.25em] uppercase text-white/50 mb-2">Dress Code</p>
            <p className="text-xl font-semibold">Semi-Formal</p>
            <p className="text-sm text-white/60 mt-1">Cocktail attire</p>
          </div>
        </div>
      </section>

      {/* ── COUNTDOWN ───────────────────────────────────────── */}
      <section className="w-full py-20 flex flex-col items-center px-4 bg-[var(--background)]">
        <p className={`text-xs tracking-[0.3em] uppercase opacity-40 mb-2 ${tinos.className}`}>
          The Big Day
        </p>
        <h2 className={`text-4xl md:text-5xl mb-10 text-center ${monteCarlo.className}`}>
          Counting Down
        </h2>
        <div className={`w-full max-w-lg bg-white/60 backdrop-blur-sm rounded-2xl border border-[var(--foreground)]/10 shadow-sm px-8 py-10 ${tinos.className}`}>
          <div className="flex justify-center">
            <CountdownClient date={new Date("2025-11-14T16:00:00")} />
          </div>
          <p className="text-center text-sm mt-8 opacity-50">
            RSVP deadline: <span className="font-semibold">November 1, 2025</span>
          </p>
        </div>
      </section>

      {/* ── QUICK NAV CARDS ─────────────────────────────────── */}
      <section className="w-full py-16 px-4 bg-white/30">
        <div className="max-w-4xl mx-auto">
          <p className={`text-center text-xs tracking-[0.3em] uppercase opacity-40 mb-2 ${tinos.className}`}>Plan Your Visit</p>
          <h2 className={`text-4xl md:text-5xl text-center mb-10 ${monteCarlo.className}`}>Everything You Need</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {navCards.map(({ href, label, icon, desc }) => (
              <Link
                key={href}
                href={href}
                className={`flex flex-col items-center text-center p-6 rounded-2xl border border-[var(--foreground)]/10 bg-white/70 backdrop-blur-sm hover:shadow-md hover:bg-white transition-all group ${tinos.className}`}
              >
                <span className="text-3xl mb-3">{icon}</span>
                <span className="font-semibold text-base mb-1">{label}</span>
                <span className="text-xs opacity-50 leading-snug">{desc}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHOTO GALLERY ───────────────────────────────────── */}
      <section className="w-full py-16 flex flex-col items-center overflow-hidden">
        <p className={`text-xs tracking-[0.3em] uppercase opacity-40 mb-2 ${tinos.className}`}>Memories</p>
        <h2 className={`text-4xl md:text-5xl text-center mb-8 px-4 ${monteCarlo.className}`}>Our Gallery</h2>
        <InfiniteImageSlider />
      </section>

      {/* ── SCHEDULE PREVIEW ────────────────────────────────── */}
      <section className={`w-full py-20 px-4 bg-[var(--foreground)] text-white ${tinos.className}`}>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-2">Day-Of Timeline</p>
          <h2 className={`text-4xl md:text-5xl mb-12 ${monteCarlo.className}`}>The Schedule</h2>
          <div className="flex flex-col gap-0">
            {[
              { time: "3:30 PM", label: "Guests Arrive" },
              { time: "4:00 PM", label: "Ceremony Begins" },
              { time: "5:00 PM", label: "Cocktail Hour" },
              { time: "6:00 PM", label: "Reception" },
              { time: "10:30 PM", label: "Grand Exit" },
            ].map(({ time, label }, i) => (
              <div key={i} className="flex items-center gap-6 py-4 border-b border-white/10 last:border-0">
                <span className="text-sm text-white/40 w-20 text-right shrink-0">{time}</span>
                <div className="w-2 h-2 rounded-full bg-[var(--accent)] shrink-0" />
                <span className="text-base text-left">{label}</span>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap gap-4 justify-center">
            <Link
              href="/rsvp"
              className="px-8 py-3 bg-white text-[var(--foreground)] text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-white/90 transition-all"
            >
              RSVP
            </Link>
            <Link
              href="/faq"
              className="px-8 py-3 border border-white/40 text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-white/10 transition-all"
            >
              FAQ
            </Link>
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────── */}
      <footer className={`w-full py-10 bg-[var(--background)] flex flex-col items-center gap-2 text-center px-4 ${tinos.className}`}>
        <h3 className={`text-3xl text-[var(--foreground)] ${monteCarlo.className}`}>Kyge &amp; Alyssa</h3>
        <p className="text-xs tracking-widest uppercase opacity-40">November 14, 2025 · Stone Hall, TX</p>
        <p className="text-xs opacity-30 mt-2">Questions? Contact Alyssa at (512) 924-9131</p>
      </footer>

    </div>
  );
}
