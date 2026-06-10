import Image from 'next/image';
import { MonteCarlo, Tinos } from 'next/font/google';
import "../globals.css";
import RegistryTile from '../utils/RegistryTile';

const monteCarlo = MonteCarlo({ subsets: ['latin'], weight: '400' });
const tinos = Tinos({ subsets: ['latin'], weight: '400' });

export default function Registry() {
  return (
    <div className={`${tinos.className} flex flex-col w-full min-h-screen text-[var(--foreground)]`}>

      {/* Hero Banner */}
      <div className="w-full bg-[var(--foreground)] text-white py-20 flex flex-col items-center text-center px-4">
        <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-3">Gifts</p>
        <h1 className={`text-5xl md:text-7xl text-white ${monteCarlo.className}`}>Registry</h1>
        <p className="text-sm text-white/50 mt-4 max-w-sm leading-relaxed">Help us start our new chapter together</p>
      </div>

      {/* Amazon Registry */}
      <div className="w-full bg-[var(--background)] py-16 px-4 flex flex-col items-center">
        <p className="text-xs tracking-[0.3em] uppercase opacity-40 mb-2">Primary Registry</p>
        <h2 className={`text-3xl md:text-4xl text-center mb-8 ${monteCarlo.className}`}>Amazon Wishlist</h2>
        <div className="w-full max-w-sm bg-white/60 backdrop-blur-sm rounded-2xl border border-[var(--foreground)]/10 shadow-sm p-8 flex flex-col items-center text-center">
          <Image
            src="/Amazon_QR.png"
            alt="Amazon Registry QR Code"
            width={160}
            height={160}
            className="mb-5 rounded-xl"
          />
          <p className="text-sm opacity-60 mb-6 leading-relaxed">Scan the QR code or click below to view our full Amazon registry</p>
          <a
            href="https://www.amazon.com/wedding/registry/ZM3R01OFL2B1"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full px-8 py-3.5 bg-[var(--foreground)] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:opacity-80 transition-opacity"
          >
            View Full Registry
          </a>
        </div>
      </div>

      {/* Featured Items */}
      <div className="w-full bg-white/30 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase opacity-40 text-center mb-2">From Our List</p>
          <h2 className={`text-3xl md:text-4xl text-center mb-8 ${monteCarlo.className}`}>Featured Items</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <RegistryTile
              title="Stanley Wet/Dry Vacuum"
              price="$48.99"
              description="Perfect for cleaning up any mess"
              image="/registry_images/Stanley_vaccum.jpg"
            />
            <RegistryTile
              title="Portable Upholstery Cleaner"
              price="$78.75"
              description="Deep cleans carpets and upholstery"
              image="/registry_images/shampooer.jpg"
            />
            <RegistryTile
              title="Bissell Steam Mop"
              price="$92.69"
              description="For our deep cleaning needs"
              image="/registry_images/mop.jpg"
            />
          </div>
        </div>
      </div>

      {/* Other Ways to Give */}
      <div className="w-full bg-[var(--foreground)] text-white py-16 px-4 flex flex-col items-center">
        <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-2">Cash Gifts</p>
        <h2 className={`text-3xl md:text-4xl text-white text-center mb-10 ${monteCarlo.className}`}>Other Ways to Give</h2>
        <div className="flex flex-row flex-wrap justify-center gap-8">
          {[
            { src: "/Cashapp.png", alt: "Cash App QR", label: "$Alyssa16Solis", sublabel: "Cash App", href: "https://cash.app/$Alyssa16Solis?qr=1" },
            { src: "/Venmo.png", alt: "Venmo QR", label: "@KygePoling", sublabel: "Venmo", href: "https://account.venmo.com/u/KygePoling" },
            { src: "/Zelle.png", alt: "Zelle QR", label: "Zelle", sublabel: "Scan to pay", href: "https://enroll.zellepay.com/qr-codes?data=ewogICJhY3Rpb24iIDogInBheW1lbnQiLAogICJ0b2tlbiIgOiAiNTEyOTI0OTEzMSIsCiAgIm5hbWUiIDogIkFMWVNTQSIKfQ==" },
          ].map(({ src, alt, label, sublabel, href }) => (
            <a key={sublabel} href={href} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-center group">
              <div className="bg-white rounded-2xl p-3 mb-3 shadow-sm group-hover:shadow-md transition-shadow">
                <Image src={src} alt={alt} width={120} height={120} className="rounded-lg" />
              </div>
              <p className="font-semibold text-sm">{label}</p>
              <p className="text-xs text-white/50 mt-0.5 underline underline-offset-2 group-hover:text-white/80 transition-colors">{sublabel}</p>
            </a>
          ))}
        </div>
      </div>

    </div>
  );
}
