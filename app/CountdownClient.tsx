"use client";
import Countdown from 'react-countdown';

const countdownRenderer = ({ days, hours, minutes, seconds, completed }: any) => {
  if (completed) {
    return (
      <div className="text-center">
        <span className="text-2xl font-bold">The big day is here!</span>
      </div>
    );
  }

  const units = [
    { label: "Days", value: days },
    { label: "Hours", value: hours },
    { label: "Mins", value: minutes },
    { label: "Secs", value: seconds },
  ];

  return (
    <div className="flex gap-3 sm:gap-6">
      {units.map(({ label, value }) => (
        <div key={label} className="flex flex-col items-center min-w-[56px]">
          <span className="text-4xl sm:text-5xl font-bold tabular-nums leading-none">
            {String(value).padStart(2, '0')}
          </span>
          <span className="text-xs uppercase tracking-widest mt-2 opacity-50">{label}</span>
        </div>
      ))}
    </div>
  );
};

export default function CountdownClient({ date }: { date: Date }) {
  return <Countdown date={date} renderer={countdownRenderer} />;
}
