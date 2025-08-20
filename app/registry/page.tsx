import Image from 'next/image';

export default function Registry() {
  return (
    <section className="flex flex-col items-center justify-center w-full h-full mt-32 text-[var(--foreground)] transition-opacity duration-1500 relative overflow-hidden">
        <div className="z-10">
            <Image
                src="/rose.png"
                alt="Rose 2"
                width={600}
                height={600}
                className="hidden sm:block absolute top-1/2 rotate-[120deg] scale-y-[-1] sm:translate-x-[40%] sm:translate-y-[-60%] 2xl:translate-x-[80%] 2xl:translate-y-[-70%]"
                style={{ zIndex: 10 }}
                priority
            />
        </div>
        <h1 className="mt-4 text-4xl font-bold">Registry Page</h1>
        <p className="text-xl mt-8">THERE WILL BE A REGISTRY FOR GIFTS. STAY TUNED FOR MORE DETAILS!</p>
    </section>
  );
}