import { MonteCarlo, Tinos } from 'next/font/google';
import Image from 'next/image';
import "../globals.css";
import Link from "next/link";

const monteCarlo = MonteCarlo({ subsets: ['latin'], weight: '400' });
const tinos = Tinos({ subsets: ['latin'], weight: '400' });

export default function RSVP() {
  return (
    <div className={`${tinos.className} flex flex-col w-full min-h-screen text-[var(--foreground)]`}>

      {/* Hero Banner */}
      <div className="w-full bg-[var(--foreground)] text-white py-20 flex flex-col items-center text-center px-4">
        <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-3">Join Us</p>
        <h1 className={`text-5xl md:text-7xl text-white ${monteCarlo.className}`}>RSVP</h1>
        <p className="text-sm text-white/50 mt-4 max-w-sm leading-relaxed">Let us know you&apos;re coming — we can&apos;t wait to celebrate with you</p>
      </div>

      {/* Deadline Strip */}
      <div className="w-full bg-[var(--accent)]/20 border-b border-[var(--accent)]/30 py-4 flex items-center justify-center gap-3 px-4">
        <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
        <p className={`text-sm text-center text-[var(--foreground)] ${tinos.className}`}>
          RSVP deadline: <span className="font-semibold">November 1, 2025</span>
        </p>
        <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
      </div>

      {/* Main Card */}
      <div className="flex-1 flex flex-col items-center justify-center py-16 px-4 bg-[var(--background)]">
        <div className="w-full max-w-sm bg-white/60 backdrop-blur-sm rounded-2xl border border-[var(--foreground)]/10 shadow-md flex flex-col items-center text-center p-8 md:p-10">
          <Image
            src="/wedding-invitation.png"
            alt="Wedding Invitation"
            width={220}
            height={220}
            className="w-44 h-auto mb-7 rounded-xl shadow-sm"
          />
          <h2 className={`text-3xl mb-3 ${monteCarlo.className}`}>Kyge &amp; Alyssa</h2>
          <p className="text-sm opacity-60 mb-8 leading-relaxed">
            Celebrate our special day with us! Please fill out the RSVP form so we can reserve your spot.
          </p>
          <a
            href="https://forms.gle/cqf92izohpvTdjLX6"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full px-8 py-3.5 bg-[var(--foreground)] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:opacity-80 transition-opacity"
          >
            Complete Your RSVP
          </a>
          <p className="text-xs opacity-40 mt-5">Takes about 1 minute</p>
        </div>

        {/* Quick Details */}
        <div className="w-full max-w-sm mt-6 grid grid-cols-2 gap-4">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-[var(--foreground)]/10 shadow-sm p-5 text-center">
            <p className="text-xs tracking-widest uppercase opacity-40 mb-1">Date</p>
            <p className="font-semibold text-sm">Nov 14, 2025</p>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-[var(--foreground)]/10 shadow-sm p-5 text-center">
            <p className="text-xs tracking-widest uppercase opacity-40 mb-1">Venue</p>
            <p className="font-semibold text-sm">Stone Hall, TX</p>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-[var(--foreground)]/10 shadow-sm p-5 text-center">
            <p className="text-xs tracking-widest uppercase opacity-40 mb-1">Ceremony</p>
            <p className="font-semibold text-sm">4:00 PM</p>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-[var(--foreground)]/10 shadow-sm p-5 text-center">
            <p className="text-xs tracking-widest uppercase opacity-40 mb-1">Attire</p>
            <p className="font-semibold text-sm">Semi-Formal</p>
          </div>
        </div>

        <p className="text-xs opacity-40 mt-8 text-center">
          Questions? Contact Alyssa at (512) 924-9131
        </p>
      </div>

      {/* Bottom Links */}
      <div className="w-full bg-[var(--foreground)] text-white py-10 flex flex-wrap gap-5 items-center justify-center px-4">
        <Link href="/location" className="text-sm tracking-widest uppercase text-white/60 hover:text-white transition-colors">
          View Venue
        </Link>
        <div className="w-px h-4 bg-white/20" />
        <Link href="/faq" className="text-sm tracking-widest uppercase text-white/60 hover:text-white transition-colors">
          FAQ
        </Link>
        <div className="w-px h-4 bg-white/20" />
        <Link href="/registry" className="text-sm tracking-widest uppercase text-white/60 hover:text-white transition-colors">
          Registry
        </Link>
      </div>

    </div>
  );
}
