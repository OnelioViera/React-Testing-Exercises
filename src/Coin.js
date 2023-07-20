import React from "react";
import "./Coin.css";
import headsImage from "./head.jpg"; // Import heads image
import tailsImage from "./us-quarter-back.jpg"; // Import tails image

function Coin({ side }) {
  const imageSrc = side === "heads" ? headsImage : tailsImage;

  return (
    <div className={`Coin ${side}`}>
      <img className="my-4" src={imageSrc} alt={side} />
    </div>
  );
}

export default Coin;

