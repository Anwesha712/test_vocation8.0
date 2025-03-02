import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState({
    day:0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const endDate = new Date('2025-04-12').getTime(); // Change the end date as needed

      const timeDifference = endDate - now;

      const day= Math.floor((timeDifference/(1000 * 60 * 60 * 24)))
      const hours = Math.floor((timeDifference % (24 * 1000 * 60 * 60))/(1000 * 60 * 60));
      const minutes = Math.floor(((timeDifference % (24 * 1000 * 60 * 60))%(1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((((timeDifference % (24 * 1000 * 60 * 60))%(1000 * 60 * 60)) % (1000 * 60)) / 1000);

      setTimeLeft({
        day: formatTime(day),
        hours: formatTime(hours),
        minutes: formatTime(minutes),
        seconds: formatTime(seconds),
      });

      if (timeDifference < 0) {
        clearInterval(timer);
        setTimeLeft({day: '00' , hours: '00', minutes: '00', seconds: '00' });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time.toString();
  };

  return (
    <div>
      <div>{timeLeft.day} : {timeLeft.hours} : {timeLeft.minutes} : {timeLeft.seconds} </div>
      {/*<div>Minutes: {timeLeft.minutes}</div>
      <div>Seconds: {timeLeft.seconds}</div>*/}
    </div>
  );
};

export default Timer;
