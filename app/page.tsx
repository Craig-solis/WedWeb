"use client";
import "./globals.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Parisienne, MonteCarlo } from 'next/font/google';

const parisienne = Parisienne({ subsets: ['latin'], weight: '400' });
const monteCarlo = MonteCarlo({ subsets: ['latin'], weight: '400' });

export default function Home() {
  const [fadeIn, setFadeIn] = useState(false);
  useEffect(() => {
    setFadeIn(true);
  }, []);
  return (
    <section
      id="hero-section"
  className={`flex flex-col pt-28 items-center w-full min-h-screen text-[var(--foreground)] transition-opacity duration-1500 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}
    >
      <div id="hero-image-container" className="relative flex w-full max-w-[85%] sm:max-w-[85%] md:max-w-[50%] lg:max-w-[30%] h-80 sm:h-96 md:h-[30rem] mt-8 shadow-lg">
        <div className="hidden sm:block relative w-full h-120 sm:translate-x-[-70%] 2xl:translate-x-[-70%]">
          <Image
            src="/rose.png"
            alt="Rose"
              width={600}
              height={600}
            className="absolute top-1/2 translate-x-[-65%]"
            style={{ zIndex: 10 }}
            priority
          />
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
        <Image
          id="hero-image"
          src="/20250802_011945000_iOS.jpg"
          alt="Hero Image"
          fill
          style={{ objectFit: "cover", objectPosition: "center top" }}
          className="rounded-lg shadow-lg"
          sizes="(max-width: 620px) 100vw, 100vw"
          priority
        />
        <div className="hidden sm:block w-full h-120 sm:translate-x-[70%] 2xl:translate-x-[70%]">
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
        
      </div>
      <div className="relative w-[100%] max-w-[100%] h-18 sm:h-20 md:h-28 mt-2">
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
      <section className="w-full flex flex-col items-center">
        <div>
          <h1 className="text-[var(--accent)] italic underline text-3xl mt-0 sm:text-3xl sm:mb-12 md:text-4xl">We're getting married!</h1>
        </div>
        <div id="hero-text" className="w-full min-h-40 flex items-center justify-center mt-0">
          <h1 id="hero-title" className={`text-4xl sm:text-5xl md:text-6xl flex-wrap font-bold text-center ${monteCarlo.className}`}>Kyge Polling <br /> & <br /> Alyssa Solis</h1>
        </div>
      </section>
    </section>
  );
}
