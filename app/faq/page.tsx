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
            response="Please arrive no later than 30 minutes before the ceremony. You will not be allowed in once the ceremony starts, so please be on time."
            delay="0s"
          />
          <FAQList
            title="What should I wear?"
            response="We recommend wearing formal wedding attire for the ceremony, such as button-up shirts and dresses. We encourage you to dress comfortably and avoid white colors!"
            delay="0.15s"
          />
          <FAQList
            title="Is there a theme for the wedding?"
            response="Yes, the theme for the wedding is 'Country Rustic' with colors of burgundy and light pink."
            delay="0.3s"
          />
          <FAQList
            title="Will the wedding be indoors or outdoors?"
            response="The wedding will be held outdoors, weather permitting, and the reception will follow indoors."
            delay="0.45s"
          />
          <FAQList
            title="Can I bring a plus one?"
            response="Yes, you are welcome to bring a plus one. Please indicate this in your RSVP as we will use this to finalize seating and catering arrangements."
            delay="0.6s"
          />
          <FAQList
            title="Will there be food and drinks?"
            response="Yes, there will be a full meal served at the reception along with drinks."
            delay="0.75s"
          />
          <FAQList
            title="Will there be a gift registry?"
            response="Yes, we will have a gift registry available. More details will be provided closer to the wedding date."
            delay="0.90s"
          />
          <FAQList
            title="Is there a deadline for RSVPs?"
            response="Yes, please RSVP no later than October 24th, 2025 to ensure your party's spot."
            delay="1.05s"
          />
          <FAQList
            title="Will there be an open bar?"
            response="Yes, there will be an open bar with limited drink options available. If you rather have your own specific kind, please feel free to BYOB."
            delay="1.2s"
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
