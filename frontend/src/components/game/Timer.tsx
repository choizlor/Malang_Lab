'use client';
import { useState, useEffect } from 'react';

type Props = {
  onFinish: React.Dispatch<React.SetStateAction<boolean>>;
  time: number;
  setTimeattack: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Timer({ onFinish, time, setTimeattack }: Props) {
  const MINUTES_IN_MS: number = time * 1000;
  const INTERVAL: number = 1000;
  const [timeLeft, setTimeLeft] = useState<number>(MINUTES_IN_MS);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => prevTime - INTERVAL);
    }, INTERVAL);

    if (timeLeft === 5000) {
      setTimeattack(true);
    }

    if (timeLeft <= 0) {
      clearInterval(timer);
      onFinish(true);
    }

    return () => {
      clearInterval(timer);
    };
  }, [timeLeft]);

  const minutes = String(Math.floor((timeLeft / (1000 * 60)) % 60)).padStart(
    2,
    '0',
  );
  const second = String(Math.floor((timeLeft / 1000) % 60)).padStart(2, '0');

  return (
    <div className="text-[3rem] sm:text-[4rem] lg:text-[5rem] font-bold text-white">
      {minutes} : {second}
    </div>
  );
}
