import React from "react";
import { render } from "@testing-library/react";
import Coin from "./Coin";

test("Coin component renders with the correct side and image", () => {
  const { container } = render(<Coin side="heads" />);
  const coinElement = container.querySelector(".Coin");
  const coinImage = container.querySelector("img");

  expect(coinElement).toBeInTheDocument();
  expect(coinElement).toHaveClass("heads");
  expect(coinImage).toBeInTheDocument();
  expect(coinImage.src).toContain("heads.png"); // Assuming you have the image file heads.png
});
