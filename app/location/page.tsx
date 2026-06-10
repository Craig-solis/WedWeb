import { MonteCarlo, Tinos } from 'next/font/google';
import "../globals.css";
import Link from "next/link";

const monteCarlo = MonteCarlo({ subsets: ['latin'], weight: '400' });
const tinos = Tinos({ subsets: ['latin'], weight: '400' });

export default function Location() {
  return (
    <div className={`${tinos.className} flex flex-col w-full min-h-screen text-[var(--foreground)]`}>

      {/* Hero Banner */}
      <div className="w-full bg-[var(--foreground)] text-white py-20 flex flex-col items-center text-center px-4">
        <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-3">November 14, 2025</p>
        <h1 className={`text-5xl md:text-7xl text-white ${monteCarlo.className}`}>Our Venue</h1>
        <p className="text-sm text-white/50 mt-4 max-w-sm leading-relaxed">We can&apos;t wait to celebrate with you here</p>
      </div>

      {/* Venue Details Strip */}
      <div className="w-full bg-[var(--foreground)]/90 text-white">
        <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          <div className="flex flex-col items-center py-7 px-6 text-center">
            <p className="text-xs tracking-[0.25em] uppercase text-white/40 mb-1">Venue</p>
            <p className="text-lg font-semibold">Stone Hall</p>
          </div>
          <div className="flex flex-col items-center py-7 px-6 text-center">
            <p className="text-xs tracking-[0.25em] uppercase text-white/40 mb-1">Address</p>
            <p className="text-lg font-semibold">1205 Roland Ln</p>
            <p className="text-sm text-white/50">Kyle, TX 78640</p>
          </div>
          <div className="flex flex-col items-center py-7 px-6 text-center">
            <p className="text-xs tracking-[0.25em] uppercase text-white/40 mb-1">Ceremony</p>
            <p className="text-lg font-semibold">4:00 PM</p>
            <p className="text-sm text-white/50">Arrive by 3:30 PM</p>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="w-full px-4 py-12 flex flex-col items-center bg-[var(--background)]">
        <p className="text-xs tracking-[0.3em] uppercase opacity-40 mb-2">Find Us</p>
        <h2 className={`text-3xl md:text-4xl text-center mb-8 ${monteCarlo.className}`}>Getting Here</h2>
        <div className="w-full max-w-3xl rounded-2xl overflow-hidden shadow-md border border-[var(--foreground)]/10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.3367105749257!2d-97.89658964594389!3d29.969751901203377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865b57aad6180dfd%3A0xc1f160064c2a5d0f!2sStone%20Hall!5e0!3m2!1sen!2sus!4v1760495757385!5m2!1sen!2sus"
            width="100%"
            height="420"
            style={{ border: 0, display: 'block' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <a
          href="https://maps.google.com/?q=Stone+Hall+1205+Roland+Ln+Kyle+TX"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 px-8 py-3 rounded-full bg-[var(--foreground)] text-white text-sm font-semibold tracking-widest uppercase hover:opacity-75 transition-opacity"
        >
          Open in Google Maps
        </a>
      </div>

      {/* Accommodations */}
      <div className="w-full bg-[var(--foreground)] text-white py-16 flex flex-col items-center text-center px-4">
        <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-3">Staying Nearby?</p>
        <h2 className={`text-4xl md:text-5xl text-white mb-4 ${monteCarlo.className}`}>Accommodations</h2>
        <p className="text-sm text-white/50 mb-8 max-w-md leading-relaxed">
          We recommend checking Booking.com for hotels close to the venue. Several options are available within a short drive.
        </p>
        <a
          href="https://www.booking.com/searchresults.html?label=msn-sWUkd2XDAuQwqQAslByXCg-80058377938514%3Atikwd-80058552874443%3Aloc-190%3Aneo%3Amte%3Alp74219%3Adec%3Aqsfind+hotels+in+the+area&aid=2369666&ss=1205+Roland+Ln&efdco=1&lang=en-us&dest_id=ChIJH8xxpnxWW4YR43phQwEEdGc&dest_type=latlong&latitude=29.969316&longitude=-97.8886716&ac_position=0&ac_click_type=g&ac_langcode=xu&ac_suggestion_list_length=1&search_selected=true&search_pageview_id=ab300179467100c5&checkin=2025-11-14&checkout=2025-11-15&group_adults=2&no_rooms=1&group_children=0&order=distance_from_search&nflt=price%3DUSD-80-max-1%3Bmealplan%3D1%3Bht_id%3D204"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 bg-white text-[var(--foreground)] text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-white/90 transition-all"
        >
          View on Booking.com
        </a>
      </div>

    </div>
  );
}
