import Image from 'next/image';
import { Tinos } from 'next/font/google';
import "../globals.css";

const tinos = Tinos({
    subsets: ['latin'],
    weight: '400', // Tinos only has 400
});

export default function Registry() {
  return (
    <section className={`flex flex-col ${tinos.className} items-center w-full h-screen text-[var(--foreground)] transition-opacity duration-1500 relative overflow-hidden`}>
        {/* Roses */}
        <div className="z-10">
            <Image
                src="/rose.png"
                alt="Rose 2"
                width={600}
                height={600}
                className="hidden md:block absolute top-1/2 rotate-[120deg] scale-y-[-1] md:translate-x-[10%] md:translate-y-[-90%] lg:translate-x-[40%] lg:translate-y-[-55%] 2xl:translate-x-[80%] 2xl:translate-y-[-90%]"
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
                className="hidden md:block absolute top-1/2 rotate-[-60deg] scale-y-[-1] md:translate-x-[-100%] md:translate-y-[-60%] lg:translate-x-[-140%] lg:translate-y-[-60%] 2xl:translate-x-[-180%] 2xl:translate-y-[-60%]"
                style={{ zIndex: 10 }}
                priority
            />
        </div>
        <h1 className="mt-4 text-center text-4xl font-bold">Registry</h1>
        <div className="w-full flex max-w-[400px] lg:max-w-[800px] mx-auto mt-4 p-4 border border-[2px] border-[var(--border)] rounded-lg backdrop-blur-xs z-10">
            <div className="flex flex-1 flex-wrap items-center justify-center gap-8">
                <h2 className="text-center text-2xl font-bold">Cash always helps and is greatly appreciated!</h2>
                <div className="flex flex-row flex-wrap justify-center gap-8">
                    <div>
                        <Image 
                            src="/Cashapp.png"
                            alt="Cash App QR Code"
                            width={150}
                            height={150}
                            className="mx-auto mb-4"
                        />
                        <h2 className="text-center text-xl lg:text-2xl font-bold">$Alyssa16Solis<br /><a href="https://cash.app/$Alyssa16Solis?qr=1" className="hover:text-[var(--accent)] underline">Cash App</a></h2>
                    </div>
                    <div>
                        <Image 
                            src="/Venmo.png"
                            alt="Venmo QR Code"
                            width={150}
                            height={150}
                            className="mx-auto mb-4"
                        />
                        <h2 className="text-center text-xl lg:text-2xl font-bold">@KygePoling<br /><a href="https://account.venmo.com/u/KygePoling" className="hover:text-[var(--accent)] underline">Venmo</a></h2>
                    </div>
                    <div>
                        <Image 
                            src="/Zelle.png"
                            alt="Zelle QR Code"
                            width={150}
                            height={150}
                            className="mx-auto mb-4"
                        />
                        <h2 className="text-center text-xl lg:text-2xl font-bold"><a href="https://enroll.zellepay.com/qr-codes?data=ewogICJhY3Rpb24iIDogInBheW1lbnQiLAogICJ0b2tlbiIgOiAiNTEyOTI0OTEzMSIsCiAgIm5hbWUiIDogIkFMWVNTQSIKfQ==" className="hover:text-[var(--accent)] underline">Zelle</a></h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}