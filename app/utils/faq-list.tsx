import FaqHeartIcon from "./FaqHeartIcon";
import { ReactNode } from "react";

type FAQListProps = {
  title: string;
  response: string | ReactNode;
  delay: string;
};

export default function FAQList({ title, response, delay }: FAQListProps) {
  return (
    <li className="p-8 last:border-b-0 mx-auto w-full border-b border-[var(--foreground)]">
      <h2 className="text-xl md:text-2xl font-semibold flex items-center gap-2">
        <FaqHeartIcon delay={delay} />
        {title}
      </h2>
      <p className="mt-2 text-lg">{response}</p>
    </li>
  );
}
