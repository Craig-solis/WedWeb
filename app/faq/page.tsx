import { MonteCarlo, Tinos } from "next/font/google";
import "../globals.css";
import Link from "next/link";

const monteCarlo = MonteCarlo({ subsets: ["latin"], weight: "400" });
const tinos = Tinos({ subsets: ["latin"], weight: "400" });

const faqs = [
  { q: "What time should I arrive?", a: "Please arrive no later than 3:30 PM — 30 minutes before the ceremony begins. Arriving on time helps us keep things running smoothly." },
  { q: "When is everything happening?", a: "The ceremony starts at 4:00 PM. Cocktail hour follows around 5:00 PM, with the reception beginning at 6:00 PM. The event concludes at 10:30 PM." },
  { q: "What is the wedding theme?", a: "Elegant with a touch of burgundy and light pink. Think romantic and refined." },
  { q: "Will the wedding be indoors or outdoors?", a: "The ceremony will be held outdoors (weather permitting) and the reception will follow indoors." },
  { q: "Is there a gift registry?", a: "Yes! Please visit the Registry page to view our Amazon wishlist and other gifting options." },
  { q: "What is the RSVP deadline?", a: "Please RSVP no later than November 1st, 2025 to ensure your spot." },
  { q: "Can I take photos?", a: "We love photos! However, please keep phones away during the ceremony — we have a photographer capturing every moment. After the ceremony, snap and post away!" },
  { q: "What should I wear?", a: "Semi-formal / cocktail attire. Dresses, suits, and dressy separates are all great. Please avoid wearing white or burgundy." },
  { q: "Still have questions?", a: "Reach out to Alyssa directly at (512) 924-9131 and she'll be happy to help." },
];

export default function FAQPage() {
  return (
    <div className={`${tinos.className} flex flex-col w-full min-h-screen text-[var(--foreground)]`}>

      {/* Hero Banner */}
      <div className="w-full bg-[var(--foreground)] text-white py-20 flex flex-col items-center text-center px-4">
        <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-3">Have Questions?</p>
        <h1 className={`text-5xl md:text-7xl text-white ${monteCarlo.className}`}>FAQ</h1>
        <p className="text-sm text-white/50 mt-4 max-w-sm leading-relaxed">Everything you need to know before the big day</p>
      </div>

      {/* FAQ Cards */}
      <div className="w-full max-w-2xl mx-auto px-4 py-16 flex flex-col gap-4">
        {faqs.map(({ q, a }, i) => (
          <div key={i} className="bg-white/60 backdrop-blur-sm rounded-2xl border border-[var(--foreground)]/10 shadow-sm px-7 py-6">
            <h2 className="text-base md:text-lg font-semibold mb-2">{q}</h2>
            <p className="text-sm opacity-65 leading-relaxed">{a}</p>
          </div>
        ))}
      </div>

      {/* CTA Footer */}
      <div className="w-full bg-[var(--foreground)] text-white py-16 flex flex-col items-center text-center px-4">
        <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-3">Ready to join us?</p>
        <h2 className={`text-4xl md:text-5xl text-white mb-8 ${monteCarlo.className}`}>We hope to see you there</h2>
        <Link
          href="/rsvp"
          className="px-8 py-3 bg-white text-[var(--foreground)] text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-white/90 transition-all"
        >
          RSVP Now
        </Link>
      </div>

    </div>
  );
}
