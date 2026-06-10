import FaqHeartIcon from "./FaqHeartIcon";
import { ReactNode } from "react";

type FAQListProps = {
  title: string;
  response: string | ReactNode;
  delay: string;
};

export default function FAQList({ title, response, delay }: FAQListProps) {
  return (
    <li className="py-6 last:border-b-0 mx-auto w-full border-b border-[var(--foreground)]/10">
      <h2 className="text-lg md:text-xl font-semibold flex items-center gap-3">
        <FaqHeartIcon delay={delay} />
        {title}
      </h2>
      <p className="mt-2 text-base opacity-75 pl-9 leading-relaxed">{response}</p>
    </li>
  );
}
