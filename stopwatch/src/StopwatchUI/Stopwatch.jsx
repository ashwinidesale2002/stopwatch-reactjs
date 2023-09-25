import React from "react";
import "./Stopwatch.css";
import useLapLogger from "../hooks/useLapLogger";
import useStopwatch from "../hooks/useStopwatch";
import { AiFillDelete } from "react-icons/ai";

const Stopwatch = () => {
  const { isRunning, timeElapsed, start, pause, stop, reset, formatTime } =
    useStopwatch();

  const { lapLogs, addLap, deleteLap } = useLapLogger();

  return (
    <>
      <div className="container grid">
        <h3>Stopwatch</h3>
        <div className="outercircle">
          <div className="stripes">
            <div className="innercircle">
              <div className="innercircle2">
                <div className="timer">
                  <h3>{formatTime(timeElapsed)}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="controlbuttons">
          <button className="btn1" onClick={isRunning ? pause : start}>
            {isRunning ? "pause" : "start"}
          </button>

          <button className="btn2" onClick={stop}>
            Stop
          </button>
          <button className="btn3" onClick={reset}>
            Reset
          </button>
          <button className="btn4" onClick={() => addLap(timeElapsed)}>
            Lap
          </button>
        </div>
        <div className="laplog">
          <ul>
            {lapLogs.map((lapTime, index) => (
              <li key={index}>
                <div className="laplog2">
                  {formatTime(lapTime)}
                  <AiFillDelete id="icon" onClick={() => deleteLap(index)}>
                    Delete
                  </AiFillDelete>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Stopwatch;
