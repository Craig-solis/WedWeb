import "./globals.css";
import Image from "next/image";
import { Parisienne } from 'next/font/google';

const parisienne = Parisienne({ subsets: ['latin'], weight: '400' });

export default function Home() {
  return (
    <section id="hero-section" className="flex flex-col pt-28 items-center w-full min-h-screen text-[var(--foreground)]">
  <div id="hero-image-container" className="relative flex w-full max-w-[85%] sm:max-w-[85%] md:max-w-[50%] h-80 sm:h-96 md:h-[30rem] mt-8 shadow-lg">
        <Image
          id="hero-image"
          src="/20250802_011945000_iOS.jpg"
          alt="Description"
          fill
          style={{ objectFit: "cover", objectPosition: "center top" }}
          className="rounded-lg shadow-lg"
          sizes="(max-width: 620px) 100vw, 100vw"
          priority
        />
      </div>
      <div className="flex w-full max-w-[100%] sm:max-w-[80%] md:max-w-[50%] items-center justify-center mt-4">
        <Image
          id="hero-image-2"
          src="/b95c293c-13cd-4b79-9559-ea1a4507ee77.png"
          alt="Description"
          width={300}
          height={100}
          style={{ objectFit: "contain", objectPosition: "center" }}
          className="w-[100%] sm:w-150 h-[100px] sm:h-auto"
          priority
        />
      </div>
      <section className="w-full flex flex-col items-center">
        <div>
          <h1 className="text-[var(--accent)] italic underline text-3xl mt-0 sm:text-3xl sm:mb-12 md:text-4xl">We're getting married!</h1>
        </div>
        <div id="hero-text" className="w-full min-h-40 flex items-center justify-center mt-0">
          <h1 id="hero-title" className={`text-4xl sm:text-5xl md:text-6xl flex-wrap font-bold text-center ${parisienne.className}`}>Kyge Polling <br /> & <br /> Alyssa Solis</h1>
        </div>
      </section>
    </section>
  );
}
