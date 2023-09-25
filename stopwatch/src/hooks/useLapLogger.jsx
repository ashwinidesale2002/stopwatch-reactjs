import { useState } from "react";

const useLapLogger = () => {
  const [lapLogs, setLapLogs] = useState([]);

  const addLap = (timeElapsed) => {
    setLapLogs([...lapLogs, timeElapsed]);
  };

  const deleteLap = (index) => {
    const updatedLapLogs = [...lapLogs];
    updatedLapLogs.splice(index, 1);
    setLapLogs(updatedLapLogs);
  };

  return { lapLogs, addLap, deleteLap };
};

export default useLapLogger;
