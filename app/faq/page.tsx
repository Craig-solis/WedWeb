import FaqHeartIcon from "../utils/FaqHeartIcon";
import {
  Parisienne,
  MonteCarlo as MonteCarloFont,
  Tinos,
} from "next/font/google";
import "../globals.css";
import FAQList from "../utils/faq-list";

const monteCarlo = MonteCarloFont({ weight: "400", subsets: ["latin"] });
const tinos = Tinos({ subsets: ["latin"], weight: "400" });

export default function FAQPage() {
  return (
    <section
      className={`${tinos.className} flex flex-col items-center w-full min-h-screen text-[var(--foreground)] transition-opacity duration-1500 relative overflow-hidden`}
    >
      <h1 className="text-4xl font-bold mt-8">FAQ's</h1>
      <div className="w-[95%] md:w-[60%] mx-auto">
        <ul className="h-auto">
          <FAQList
            title="What time should I arrive?"
            response="Please arrive no later than 30 minutes before the ceremony. Please be on time so there aren't any disruptions during the ceremony."
            delay="0s"
          />
          <FAQList
            title="When is everything happening?"
            response="The ceremony starts at 4pm. Following the ceremony, around 6pm is the reception. At 10:30pm the event will conclude."
            delay="0.15s"
          />
          <FAQList
            title="What is the theme for the wedding?"
            response="The theme for the wedding is an elegant touch of burgundy and light pink."
            delay="0.3s"
          />
          <FAQList
            title="Will the wedding be indoors or outdoors?"
            response="The wedding will be held outdoors, weather permitting, and the reception will follow indoors."
            delay="0.45s"
          />
          <FAQList
            title="Will there be a gift registry?"
            response="Yes, we will have a gift registry available. More details will be provided closer to the wedding date."
            delay="0.90s"
          />
          <FAQList
            title="Is there a deadline for RSVPs?"
            response="Yes, please RSVP no later than November 1st, 2025 to ensure your party's spot."
            delay="1.05s"
          />
          <FAQList
            title="Can I take pictures of the wedding?"
            response="We love photos! We do ask that you refrain from taking photos during the ceremony, we’d like that time to be unplugged as we have a photographer capturing the moment for us. For the rest of the wedding, we encourage guests to post pictures. We are working on a platform to share photos after the event!"
            delay="1.35s"
          />
        </ul>
      </div>
    </section>
  );
}
