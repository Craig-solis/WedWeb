type FaqHeartIconProps = {
  delay?: string;
};

export default function FaqHeartIcon({ delay }: FaqHeartIconProps) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle
        cx="12"
        cy="12"
        r="11"
        stroke="currentColor"
        strokeWidth="2"
        fill="currentColor"
        opacity="0.15"
        className="faq-pulse-circle"
        style={delay ? { animationDelay: delay } : {}}
      />
      <path
        d="M12 17s-4-2.7-4-5.2C8 9.2 10.2 8 12 10c1.8-2 4-0.8 4 1.8C16 14.3 12 17 12 17z"
        fill="currentColor"
      />
    </svg>
  );
}
