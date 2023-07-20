
import Card from "./Card";
import React, { useState } from "react";


function Carousel({ photos, title }) {
  const [currCardIdx, setCurrCardIdx] = useState(0);
  const total = photos.length;

  // Check if photos is undefined or an empty array
  if (!photos || total === 0) {
    return <div>No photos available.</div>;
  }

  function goForward() {
    // Ensure the next index remains within the array bounds
    setCurrCardIdx((prevIdx) => (prevIdx + 1) % total);
  }

  function goBackward() {
    // Ensure the previous index remains within the array bounds
    setCurrCardIdx((prevIdx) => (prevIdx - 1 + total) % total);
  }

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6">

        
    <div className="Carousel">
      <h1 className="m-4">{title}</h1>
      <div className="Carousel-main">
        {/* Hide left arrow when on the first image */}
        {currCardIdx !== 0 && (
          <i className="bi bi-arrow-left-circle" onClick={goBackward} />
        )}
        {/* Conditional rendering to check if currCard is available */}
        {currCardIdx < total && currCardIdx >= 0 && (
          <Card
            caption={photos[currCardIdx].caption}
            src={photos[currCardIdx].src}
            currNum={currCardIdx + 1}
            totalNum={total}
          />
        )}
        {/* Hide right arrow when on the last image */}
        {currCardIdx !== total - 1 && (
          <i className="bi bi-arrow-right-circle" onClick={goForward} />
        )}
      </div>
    </div>
    </div>
    </div>
      </div>
  );
}

export default Carousel;
