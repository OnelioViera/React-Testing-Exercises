import React, { useState } from "react";
import "./CoinFlipper.css";
import Coin from "./Coin";

function CoinFlipper() {
  const [flipping, setFlipping] = useState(false);
  const [side, setSide] = useState("heads");
  const [headsCount, setHeadsCount] = useState(0);
  const [tailsCount, setTailsCount] = useState(0);

  const flipCoin = () => {
    if (flipping) return; // Prevent multiple flips at the same time

    setFlipping(true);

    setTimeout(() => {
      const randomNum = Math.random();
      const newSide = randomNum < 0.5 ? "heads" : "tails";
      setSide(newSide);

      if (newSide === "heads") {
        setHeadsCount((prevCount) => prevCount + 1);
      } else {
        setTailsCount((prevCount) => prevCount + 1);
      }

      setFlipping(false);
    }, 1000); // Delay the result for 1 second (adjust as needed for your animation)
  };

  return (
    <div className="CoinFlipper">
      <h2>Let's flip a coin!</h2>
      <div className="CoinFlipper-coin">
        {flipping ? (
          <div className="CoinFlipper-flip">Flipping...</div>
        ) : (
          <Coin side={side} />
        )}
      </div>
      <button className="mb-4" onClick={flipCoin} disabled={flipping}>
        {flipping ? "Flipping..." : "Flip"}
      </button>
      <p>Heads count: {headsCount}</p>
      <p>Tails count: {tailsCount}</p>
    </div>
  );
}

export default CoinFlipper;
