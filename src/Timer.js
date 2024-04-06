import React, { useEffect, useState } from 'react';
import moment from 'moment';

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const endTime = moment().add(1, 'days').startOf('day').add(17, 'hours');
    
    const interval = setInterval(() => {
      const now = moment();
      const duration = moment.duration(endTime.diff(now));
      const hours = duration.hours();
      const minutes = duration.minutes();
      const seconds = duration.seconds();

      setTimeLeft(`${hours}:${minutes}:${seconds}`);
      
      if (duration.asSeconds() <= 0) {
        clearInterval(interval);
        setTimeLeft('00:00:00');
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Countdown Timer</h1>
      <div>{timeLeft}</div>
    </div>
  );
};

export default Timer;
