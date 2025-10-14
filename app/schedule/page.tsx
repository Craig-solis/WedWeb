import Image from 'next/image';

export default function Schedule() {
  return (
    <section className="flex flex-col items-center w-full min-h-screen text-[var(--foreground)] transition-opacity duration-1500 relative overflow-hidden">
      {/* Roses */}
      <div className="z-10">
          <Image
              src="/rose.png"
              alt="Rose 2"
              width={600}
              height={600}
              className="hidden md:block absolute top-1/2 rotate-[120deg] scale-y-[-1] md:translate-x-[10%] md:translate-y-[-100%] lg:translate-x-[40%] lg:translate-y-[-60%] 2xl:translate-x-[80%] 2xl:translate-y-[-90%]"
              style={{ zIndex: 10 }}
              priority
          />
      </div>
      <div className="z-10">
          <Image
              src="/rose.png"
              alt="Rose 2"
              width={600}
              height={600}
              className="hidden md:block absolute top-1/2 rotate-[-60deg] scale-y-[-1] md:translate-x-[-100%] md:translate-y-[-80%] lg:translate-x-[-140%] lg:translate-y-[-60%] 2xl:translate-x-[-180%] 2xl:translate-y-[-60%]"
              style={{ zIndex: 10 }}
              priority
          />
      </div>
      <h1 className="mt-4 text-4xl font-bold">Schedule Page</h1>
        <p className="text-2xl mt-8 text-center">Ceremony starts at 4pm. At 5pm the bride and groom will take their pitures. Around 6pm will be the reception. 7pm will be cake. </p>
    </section>
  );
}
