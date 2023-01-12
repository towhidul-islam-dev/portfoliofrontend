import React, { useEffect, useState } from "react";
import { FaClock } from "react-icons/fa";

import "../style/time.css";
import "../style/mackup.css";
const Time = () => {
  const [times, setTimes] = useState("");
  const [phase, setPhase] = useState(0);
  const currentTime = () => {
    const fullHours = new Date().getHours();
    const hour = new Date().getHours() % 12;
    const minute = new Date().getMinutes();
    const second = new Date().getSeconds();
    setTimes(`${hour} : ${minute} : ${second}`);
    setPhase(fullHours);
  };
  useEffect(() => {
    setTimeout(() => {
      currentTime();
    }, 1000);
  }, [times]);
  //   console.log(phase);
  return (
    <div className="bg-blue-200 time">
      <span className="clock">
        <FaClock />
        <p className="times">
          {times}
          <span className="phase"> {phase <= 12 ? " AM" : " PM"} </span>
        </p>
      </span>
    </div>
  );
};

export default Time;
