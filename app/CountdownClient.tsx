"use client";
import Countdown from 'react-countdown';

const countdownRenderer = ({ days, hours, minutes, seconds, completed }: any) => {
  if (completed) {
    return <span className="font-bold">Event started!</span>;
  } else {
    return (
      <span className=" flex gap-6 font-bold text-xl md:text-3xl text-center">
        <span>Days: {String(days).padStart(2, '0')}</span>
        <span>Hours: {String(hours).padStart(2, '0')}</span>
        <span>Minutes: {String(minutes).padStart(2, '0')}</span>
        <span>Seconds: {String(seconds).padStart(2, '0')}</span>
      </span>
    );
  }
};

export default function CountdownClient({ date }: { date: Date }) {
  return <Countdown date={date} renderer={countdownRenderer} />;
}
