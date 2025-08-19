import Image from 'next/image';
import { Parisienne, MonteCarlo, Tinos} from 'next/font/google';
import "../globals.css";

const tinos = Tinos({
  subsets: ['latin'],
  weight: '400', // Tinos only has 400
});

export default function RSVP() {
        // Rain: random petals
            const petalCount = 40;
            const petals = Array.from({ length: petalCount }).map((_, i) => {
                // Randomize horizontal position, size, opacity, delay, and rotation
                const left = Math.random() * 100; // vw
                const size = 18 + Math.random() * 22; // px, 18-40
                const opacity = 0.4 + Math.random() * 0.6;
                const delay = Math.random() * 5.5; // seconds
                const rotate = Math.random() * 360;
                // SVG path for a rose petal (heart/teardrop shape)
                // This path is a stylized petal, you can further tweak for realism
                const path = "M20,40 Q10,10 30,10 Q50,10 40,40 Q30,60 20,40 Z";
                return (
                    <svg
                        key={`petal-${i}`}
                        width={size}
                        height={size * 1.2}
                        className="absolute animate-petal-fall pointer-events-none"
                        style={{
                            left: `${left}vw`,
                            top: `-${size * 1.2}px`,
                            animationDelay: `${delay}s`,
                            opacity,
                            fill: 'var(--foreground)',
                            zIndex: 0,
                            transform: `rotate(${rotate}deg)`
                        }}
                        viewBox="0 0 60 70"
                    >
                        <path d={path} />
                    </svg>
                );
            });
        return (
            <section className={`flex flex-col items-center justify-center ${tinos.className} w-full min-h-full mt-31 text-[var(--foreground)] transition-opacity duration-1500 relative overflow-hidden`}>
                {/* Petal Matrix Rain (background) */}
                <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
                    {petals}
                </div>
                <div className="bg-[var(--background)] w-[70%] md:w-[30%] h-full flex flex-col items-center justify-center relative z-10 mt-4">
                    <h1 className="text-4xl text-center text-[var(--foreground)] font-bold z-10">RSVP</h1>
                    <p className="text-xl text-center mb-6 z-10">Celebrate our special day and join us! <br /> RSVP today so we can get you in our books.</p>
                    <img src="/wedding-invitation.png" alt="RSVP" className="w-80 h-auto mb-6 z-10" />
                    <p className="text-xl z-10">Please click <a href="https://forms.gle/cqf92izohpvTdjLX6" target="_blank" rel="noopener noreferrer" className="text-[var(--accent)]">here</a> to RSVP.</p>
                </div>
                {/* Roses */}
                <div className="z-10">
                    <Image
                        src="/rose.png"
                        alt="Rose 2"
                        width={600}
                        height={600}
                        className="hidden md:block absolute top-1/2 rotate-[120deg] scale-y-[-1] sm:translate-x-[40%] sm:translate-y-[-60%] 2xl:translate-x-[80%] 2xl:translate-y-[-70%]"
                        style={{ zIndex: 10 }}
                        priority
                    />
                </div>
                <div className="z-10">
                    <Image
                        src="/rose.png"
                        alt="Rose 1"
                        width={600}
                        height={600}
                        className="hidden md:block absolute top-1/2 rotate-[60deg] sm:translate-x-[-145%] sm:translate-y-[-60%] 2xl:translate-x-[-180%] 2xl:translate-y-[-70%]"
                        style={{ zIndex: 10 }}
                        priority
                    />
                </div>
            </section>
        );
}