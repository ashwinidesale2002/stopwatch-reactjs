// logic here Stopwatch time

import { useState, useEffect } from "react";

const useStopwatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [startTime, setStartTime] = useState();

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTimeElapsed((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
      clearInterval(interval);
      if (timeElapsed > 0) {
        setStartTime(null); // Pause sets the start time to null
      }
    }

    return () => clearInterval(interval);
  }, [isRunning, timeElapsed]);

  const start = () => {
    setIsRunning(true);
  };
  const pause = () => {
    setIsRunning(false);
  };
  const stop = () => setIsRunning(false);
  const reset = () => {
    setIsRunning(false);
    setTimeElapsed(0);
  };

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secondsLeft = seconds % 60;

    const formattedHours = hours.toString().padStart(2, "0");
    const formattedMinutes = minutes.toString().padStart(2, "0");
    const formattedSeconds = secondsLeft.toString().padStart(2, "0");

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  };

  return { isRunning, timeElapsed, start, pause, stop, reset, formatTime };
};

export default useStopwatch;
