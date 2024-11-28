"use client"; // Ensures client-side rendering

import { useState, useEffect, useCallback } from "react";

const Countdown = ({ targetDate }: { targetDate: string }) => {
  const [timeLeft, setTimeLeft] = useState({});

  const calculateTimeLeft = useCallback(() => {
    const now = new Date();
    const target = new Date(targetDate!);
    const difference = target.getTime() - now.getTime();

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return {}; // Time's up
  }, [targetDate]);

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Clean up on unmount
  }, [targetDate, calculateTimeLeft]);

  if (Object.keys(timeLeft).length === 0) {
    return <div className="text-2xl font-bold">Time&apos;s up!</div>;
  }

  return (
    <div className="flex space-x-4 text-center relative z-10">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="flex items-end">
          <div className="countdown font-bold text-3xl">
            <span style={{ "--value": value } as React.CSSProperties}>
              {value as number}
            </span>
          </div>
          <div className="text-md font-medium capitalize">{unit}</div>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
