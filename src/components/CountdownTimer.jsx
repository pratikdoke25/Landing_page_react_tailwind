// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

// eslint-disable-next-line react/prop-types
const CountdownTimer = ({ targetDate }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const getTimeLeft = () => {
    const difference = new Date(targetDate).getTime() - currentTime.getTime();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const timeLeft = getTimeLeft();

  return (
    <div className="text-center bg-violet-700 w-full flex items-center justify-center">
      <div className="text-center border-t border-b-2 border-white">
        <div className="flex flex-col justify-center items-center py-8 text-white mt-2">
          <h1 className="text-3xl font-bold mb-4">Time is running out.</h1>
          <h1 className="text-3xl font-bold mb-4">Grab Your Spot fast <span className='line-clamp-2'></span></h1>
          <div className="flex justify-center text-3xl font-bold text-indigo-600">
            <span className='mx-2 text-white'>{timeLeft.hours}:</span>
            <span className='mx-2 text-white'>{timeLeft.minutes}:</span>
            <span className='mx-2 text-white'>{timeLeft.seconds}</span>
          </div>
          <div className="flex justify-center mt-4">
            <div className="text-lg  text-gray-200 mx-2">
              Hours
            </div>
            <div className="text-lg text-gray-200 mx-2">
              Minutes
            </div>
            <div className="text-lg text-gray-200 mx-2">
              Seconds
            </div>
          </div>
          <a
            href="#"
            className="bg-yellow-300 text-white px-4 py-2 rounded mt-4 flex justify-center my-4"
          >
            Register Now at ₹ 499 <span className="text-gray-500 line-through mx-2"> ₹1999</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
