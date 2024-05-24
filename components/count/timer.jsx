"use client"
import React, { useState, useRef, useEffect } from "react";
import { Syncopate } from "next/font/google";

const time = Syncopate({
  subsets: ['latin'],
  weight: '400'
})

const Timer = () => {
  const Ref = useRef(null);
  const [timer, setTimer] = useState("00:00:00:00");

  const getTimeRemaining = (endTime) => {
    const total = endTime - new Date();
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const seconds = Math.floor((total / 1000) % 60);
    return {
      total,
      days,
      hours,
      minutes,
      seconds
    };
  };

  const startTimer = (endTime) => {
    const { total, days, hours, minutes, seconds } = getTimeRemaining(endTime);
    if (total >= 0) {
      setTimer(
        `${days > 9 ? days : "0" + days}:${hours > 9 ? hours : "0" + hours}:${minutes > 9 ? minutes : "0" + minutes}:${seconds > 9 ? seconds : "0" + seconds}`
      );
    }
  };

  const clearTimer = (endTime) => {
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(endTime);
    }, 1000);
    Ref.current = id;
  };

  const getDeadTime = () => {
    let deadline = new Date('2024-11-29');
    return deadline;
  };

  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);

  const onClickReset = () => {
    clearTimer(getDeadTime());
  };

  return (
    <div className="md:text-center m-auto md:mt-0 mt-4">
      {/* <h2 className="mt-6 text-3xl">{timer}</h2> */}
      <h2 data-scroll data-scroll-speed='0.3' className={`${time.className} text-sm md:text-3xl overflow-hidden`}><span>{timer[0]}</span><span>{timer[1]}</span><span>{timer[2]}</span> <span className="text-sm">days</span>, 
        <span> {timer[4]}</span><span>{timer[5]}</span> <span className="text-sm font-semibold">hours</span>, <span>{timer[7]}</span><span>{timer[8]}</span> <span className="text-sm">min</span>, <span>{timer[10]}</span><span>{timer[11]}</span> <span className="text-sm">sec</span>
      </h2>
      {/* <button onClick={onClickReset}>Reset</button> */}
    </div>
  );
};

export default Timer;
