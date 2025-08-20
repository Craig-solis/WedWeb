import Image from 'next/image';
import { Parisienne, MonteCarlo, Tinos} from 'next/font/google';
import "../globals.css";

const tinos = Tinos({
    subsets: ['latin'],
    weight: '400', // Tinos only has 400
});

export default function Location() {
    return (
        <div>
            <section id=" flex location-section" className={`flex flex-col items-center w-full h-auto ${tinos.className}`}>
                <div>
                    <Image
                        src="/rose.png"
                        alt="Rose 2"
                        width={600}
                        height={600}
                        className="hidden md:block absolute top-1/2 rotate-[90deg] scale-y-[-1] md:translate-x-[30%] md:translate-y-[-110%] lg:translate-x-[40%] lg:translate-y-[-70%] 2xl:translate-x-[80%] 2xl:translate-y-[-80%]"
                        style={{ zIndex: 10 }}
                        priority
                    />
                </div>
                <div>
                    <Image
                        src="/rose.png"
                        alt="Rose 2"
                        width={600}
                        height={600}
                        className="hidden md:block absolute top-1/2 rotate-[-55deg] scale-y-[-1] md:translate-x-[-105%] md:translate-y-[-10%] lg:translate-x-[-145%] lg:translate-y-[30%] 2xl:translate-x-[-180%] 2xl:translate-y-[0%]"
                        style={{ zIndex: -10 }}
                        priority
                    />
                </div>
                <div>
                    <h2 className="text-4xl sm:text-4xl md:text-5xl font-bold mt-6 text-[var(--foreground)]">Our Wedding Venue</h2>
                </div>
                
                <p className="mt-4 mb-8 text-center text-xl">We can't wait to celebrate with you! <br />Check out the details below.</p>
                <p>

                </p>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6912.80341042621!2d-97.89235578491827!3d29.96788342883464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865b568a0325bd11%3A0xb071775dfa93a453!2sTexas%20Old%20Town!5e0!3m2!1sen!2sus!4v1755388758032!5m2!1sen!2sus"
                    width="90%"
                    height="450"
                    className="border-0 rounded-lg shadow-lg w-[90%] sm:w-[65%]"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </section>
            <section className={`${tinos.className} w-full text-center mt-8 mb-20`}>
                <div className="bg-[var(--background)] w-[95%] md:w-[60%] border-2 border-[var(--foreground)] rounded-lg mx-auto shadow-lg pb-4">
                    <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold mt-6 text-center text-[var(--foreground)]">Nearby Accommodations</h2>
                    <p className="mt-4 text-center text-lg">Interested in staying nearby? <br />Here is a link to Booking.com we recommend for accommodations:</p>
                    <a
                        href="https://www.booking.com/searchresults.html?label=msn-sWUkd2XDAuQwqQAslByXCg-80058377938514%3Atikwd-80058552874443%3Aloc-190%3Aneo%3Amte%3Alp74219%3Adec%3Aqsfind+hotels+in+the+area&aid=2369666&ss=1205+Roland+Ln&efdco=1&lang=en-us&dest_id=ChIJH8xxpnxWW4YR43phQwEEdGc&dest_type=latlong&latitude=29.969316&longitude=-97.8886716&ac_position=0&ac_click_type=g&ac_langcode=xu&ac_suggestion_list_length=1&search_selected=true&search_pageview_id=ab300179467100c5&checkin=2025-11-14&checkout=2025-11-15&group_adults=2&no_rooms=1&group_children=0&order=distance_from_search&nflt=price%3DUSD-80-max-1%3Bmealplan%3D1%3Bht_id%3D204"
                        className="inline-block transition-transform
                        text-[var(--accent)] text-2xl hover:text-[var(--foreground)] hover:scale-110"
                    >
                        Booking.com
                    </a>
                </div>
            </section>
        </div>
    )
}