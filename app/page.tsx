"use client";
import "./globals.css";
import Image from "next/image";
import { Parisienne, MonteCarlo, Tinos} from 'next/font/google';
import dynamic from 'next/dynamic';
import Link from "next/link";

const CountdownClient = dynamic(() => import('./CountdownClient'), { ssr: false });
const parisienne = Parisienne({ subsets: ['latin'], weight: '400' });
const monteCarlo = MonteCarlo({ subsets: ['latin'], weight: '400' });
const tinos = Tinos({ subsets: ['latin'], weight: '400' });

export default function Home() {
  return (
    <section
      id="hero-section"
      className="flex flex-col pt-28 items-center w-full min-h-screen text-[var(--foreground)] transition-opacity duration-1500"
    >
      {/* Hero Images and Roses */}
      <div id="hero-image-container" className="relative flex w-full max-w-[85%] sm:max-w-[85%] md:max-w-[50%] lg:max-w-[60%] h-100 sm:h-96 md:h-[35rem] mt-8 shadow-lg">
        {/* Rose 1 */}
        <div>
          <Image
            src="/rose.png"
            alt="Rose 1"
            width={600}
            height={600}
            className="hidden md:block absolute top-1/2 rotate-[45deg] sm:translate-x-[-85%] sm:translate-y-[-50%] 2xl:translate-x-[-100%] 2xl:translate-y-[-50%]"
            style={{ zIndex: 10 }}
            priority
          />
        </div>
        {/* Left Frame */}
        <div className="hidden sm:block relative w-full h-140 sm:translate-x-[-60%] 2xl:translate-x-[-60%]">
          <Image
            id="left-side"
            src="/side_frame.png"
            alt="Left Frame"
            fill
            style={{ objectFit: "contain", objectPosition: "center" }}
            className="w-[100%] sm:w-150 h-[100px] sm:h-auto"
            sizes="(max-width: 620px) 100vw, 100vw"
            priority
          />
        </div>
        {/* Hero Image */}
        <Image
          id="hero-image"
          src="/20250802_011945000_iOS.jpg"
          alt="Hero Image"
          fill
          style={{ objectFit: "cover", objectPosition: "center 5%" }}
          className="rounded-lg shadow-lg"
          sizes="(max-width: 620px) 100vw"
          priority
        />
        {/* Right Frame */}
        <div className="hidden sm:block w-full h-140 sm:translate-x-[60%] 2xl:translate-x-[60%]">
          <Image
            id="right-side"
            src="/side_frame.png"
            alt="Right Frame"
            fill
            style={{ objectFit: "contain", objectPosition: "center" }}
            className="w-[100%] sm:w-150 h-[100px] sm:h-auto scale-x-[-1]"
            sizes="(max-width: 620px) 100vw, 100vw"
            priority
          />
        </div>
        {/* Rose 2 */}
        <div>
          <Image
            src="/rose.png"
            alt="Rose 2"
            width={600}
            height={600}
            className="hidden md:block absolute top-1/2 rotate-[135deg] scale-y-[-1] sm:translate-x-[-15%] sm:translate-y-[20%] 2xl:translate-x-[-10%] 2xl:translate-y-[20%]"
            style={{ zIndex: 10 }}
            priority
          />
        </div>
      </div>
      {/* Bottom Frame */}
      <div className="relative w-full max-w-full h-18 sm:h-20 md:h-28 mt-2">
        <Image
          id="bottom-frame"
          src="/b95c293c-13cd-4b79-9559-ea1a4507ee77.png"
          alt="Bottom Frame"
          fill
          style={{ objectFit: "contain", objectPosition: "center" }}
          className=""
          sizes="(max-width: 620px) 100vw, 100vw"
          priority
        />
      </div>
      {/* Main Content Section */}
      <section className="mt-2 w-full flex flex-col items-center">
        <div id="hero-text" className="w-full min-h-40 flex items-center justify-center mt-0">
          <h1 id="hero-title" className={`text-4xl sm:text-5xl md:text-6xl flex-wrap font-bold text-center ${monteCarlo.className}`}>Kyge Polling <br /> & <br /> Alyssa Solis</h1>
        </div>
        {/* Countdown Timer */}
        <div className={`mt-4 mb-20 md:mt-12 md:mb-20 border-t-2 border-b-2 w-[95%] md:w-[50%] align-center justify-center px-2 shadow-md rounded ${tinos.className}`}>
          <h2 className="text-3xl sm:text-3xl md:text-5xl mb-3 font-bold text-center">Countdown to the big day:</h2>
          <div className=" flex justify-center items-center mb-8">
              <CountdownClient date={new Date('2025-11-14T00:16:00')} />
          </div>
          <br />
          <p className="text-center text-xl mb-2"> <span className="font-bold">November 14th, 2025</span><br />The time is ticking! If you haven't already, make sure to <Link href="/rsvp" className="font-bold underline text-xl">RSVP!</Link></p>
        </div>
      </section>
    </section>
  );
}
