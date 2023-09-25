import React, { createContext, useContext } from "react";
import useLapLogger from "../hooks/useLapLogger";
import useStopwatch from "../hooks/useStopwatch";

const StopwatchContext = createContext();

export const StopwatchProvider = ({ children }) => {
  const stopwatch = useStopwatch();
  const lapLogger = useLapLogger();

  return (
    <StopwatchContext.Provider value={{ ...stopwatch, ...lapLogger }}>
      {children}
    </StopwatchContext.Provider>
  );
};

export const useStopwatchContext = () => {
  return useContext(StopwatchContext);
};
