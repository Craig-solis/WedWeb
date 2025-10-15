import Image from 'next/image';
import { Tinos, Parisienne } from 'next/font/google';
import "../globals.css";
import RegistryTile from '../utils/RegistryTile';

const tinos = Tinos({
    subsets: ['latin'],
    weight: '400', // Tinos only has 400
});

const parisienne = Parisienne({
    subsets: ['latin'],
    weight: '400', // Parisienne only has 400
});

export default function Registry() {
  return (
    <section className={`flex flex-col ${tinos.className} items-center w-full min-h-screen text-[var(--foreground)] transition-opacity duration-1500 relative overflow-hidden`}>
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
        <h1 className={`mt-4 ${tinos.className} text-center text-4xl font-bold`}>Wedding Gifts</h1>
        <div className="w-full flex max-w-[400px] lg:max-w-[900px] mx-auto mt-4 p-4 border border-[2px] border-[var(--border)] rounded-lg backdrop-blur-sm z-10">
            <div className="flex flex-1 flex-wrap flex-col items-center justify-center gap-4">
                <div className={`shadow-2xl ${tinos.className} bg-[var(--background)] border border-[var(--border)] p-4 rounded-lg w-full`}>
                    <Image 
                        src="/Amazon_QR.png"
                        alt="Amazon QR Code"
                        width={200}
                        height={200}
                        className="mx-auto mb-4 w-[150px] lg:w-[200px]"
                    />
                    <h2 className="text-center text-2xl lg:text-3xl font-bold">Amazon Registry<br /><a href="https://www.amazon.com/wedding/registry/ZM3R01OFL2B1" className="hover:text-[var(--accent)] text-lg lg:text-xl underline">View Full Registry</a></h2>
                </div>
                
                {/* Featured Registry Items */}
                <div className="w-full mt-8">
                    <h2 className="text-center text-2xl font-bold mb-6">Featured Items</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto w-[300px] lg:w-full">
                        <RegistryTile 
                            title="Stanley Wet/Dry Vacuum"
                            price="$48.99"
                            description="Perfect for cleaning up any mess"
                            image="/registry_images/Stanley_vaccum.jpg"
                        />
                        
                        <RegistryTile 
                            title="Portable Upholstery Deep Cleaner"
                            price="$78.75"
                            description="Deep cleans carpets and upholstery"
                            image="/registry_images/shampooer.jpg"
                        />
                        
                        <RegistryTile 
                            title="Bissell Power Fresh Steam Mop"
                            price="$92.69"
                            description="For our deep cleaning needs"
                            image="/registry_images/mop.jpg"
                        />
                    </div>
                </div>

                <h2 className="text-center text-2xl font-bold mt-8">Other Ways to Give!</h2>
                <div className="flex flex-row flex-wrap justify-center gap-12">
                    <div>
                        <Image 
                            src="/Cashapp.png"
                            alt="Cash App QR Code"
                            width={150}
                            height={150}
                            className="mx-auto mb-4"
                        />
                        <h2 className="text-center text-xl lg:text-2xl font-bold">$Alyssa16Solis<br /><a href="https://cash.app/$Alyssa16Solis?qr=1" className="hover:text-[var(--accent)] text-lg lg:text-xl underline">Cash App</a></h2>
                    </div>
                    <div>
                        <Image 
                            src="/Venmo.png"
                            alt="Venmo QR Code"
                            width={150}
                            height={150}
                            className="mx-auto mb-4"
                        />
                        <h2 className="text-center text-xl lg:text-2xl font-bold">@KygePoling<br /><a href="https://account.venmo.com/u/KygePoling" className="hover:text-[var(--accent)] text-lg lg:text-xl underline">Venmo</a></h2>
                    </div>
                    <div>
                        <Image 
                            src="/Zelle.png"
                            alt="Zelle QR Code"
                            width={150}
                            height={150}
                            className="mx-auto mb-4"
                        />
                        <h2 className="text-center text-xl lg:text-2xl font-bold"><a href="https://enroll.zellepay.com/qr-codes?data=ewogICJhY3Rpb24iIDogInBheW1lbnQiLAogICJ0b2tlbiIgOiAiNTEyOTI0OTEzMSIsCiAgIm5hbWUiIDogIkFMWVNTQSIKfQ==" className="hover:text-[var(--accent)] text-lg lg:text-xl underline">Zelle</a></h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}