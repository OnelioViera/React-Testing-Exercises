import React from "react";
import { render } from "@testing-library/react";
import Carousel from "./Carousel";

test("Left arrow is missing on the first image and right arrow is missing on the last image", () => {
  const photos = [
    { src: "image1.jpg", caption: "Image 1" },
    { src: "image2.jpg", caption: "Image 2" },
  ];
  const { container } = render(<Carousel photos={photos} title="Test Carousel" />);

  // On the first image, left arrow should be missing
  const leftArrow = container.querySelector(".bi-arrow-left-circle");
  expect(leftArrow).not.toBeInTheDocument();

  // On the last image, right arrow should be present
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  expect(rightArrow).toBeInTheDocument();
});
