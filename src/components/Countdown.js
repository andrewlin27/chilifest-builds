import React, { useState, useEffect } from 'react';
import './css/Countdown.css'

const Countdown = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set the date we're counting down to
    const countDownDate = new Date("Apr 5, 2024 22:44:00").getTime();

    const updateCountdown = () => {
      // Get the current date and time
      const now = new Date().getTime();

      // Calculate the time remaining
      const distance = countDownDate - now;

      // Calculate days, hours, minutes, and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Update the countdown state
      setCountdown({
        days,
        hours,
        minutes,
        seconds,
      });

      // If the countdown is over, clear the interval
      if (distance < 0) {
        clearInterval(intervalId);
      }
    };

    // Update the countdown every 1000 milliseconds (1 second)
    const intervalId = setInterval(updateCountdown, 1000);

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(intervalId);

    // Run the initial update
    updateCountdown();
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div id="countdown">
      <h2>{countdown.days}d {countdown.hours}h {countdown.minutes}m {countdown.seconds}s</h2>
    </div>
  );
};

export default Countdown;
