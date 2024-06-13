import "./App.scss";
import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import { imgLinks } from "./constants.js";

const App = () => {
  const date1 = new Date(import.meta.env.VITE_LEFT_DATE);
  const date2 = new Date();
  const timeDiff = Math.abs(date2 - date1);

  const diffMonths = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 30));
  const diffYears = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365));
  const diffDays = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const diffWeeks = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 7));

  const randomIndex = Math.floor(Math.random() * imgLinks.length);
  const [showConfetti, setShowConfetti] = useState(false);
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  useEffect(() => {
    const handleResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    if (diffDays % 100 == 0) setShowConfetti(true);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  console.log(randomIndex);

  return (
    <div className="app">
      {/* <p>{diffYears} YEARS</p> */}
      {/* <p>{diffMonths} MONTHS</p> */}
      {/* <p>{diffWeeks} WEEKS</p> */}
            <p>DISCIPLINE</p>
            <p>HARDWORK</p>
            <p>CONSISTENCY</p>
      {/*       <p>you've promised!</p> */}
      {/*       <p>{diffDays} DAYS</p> */}
      <p>TRY TO CALM.☁️</p>
      <p>{diffDays} DAYS</p>{" "}
      {showConfetti && (
     <Confetti width={dimensions.width} height={dimensions.height} />
      )}
    </div>
  );
};

export default App;
