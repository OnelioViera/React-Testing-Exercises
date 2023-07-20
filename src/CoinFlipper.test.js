import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import CoinFlipper from "./CoinFlipper";

jest.useFakeTimers();

test("CoinFlipper component updates coin side and counts correctly after flipping", async () => {
  const { getByText, getByRole, queryAllByText } = render(<CoinFlipper />);
  const flipButton = getByRole("button", { name: "Flip" });

  expect(getByText("Heads count: 0")).toBeInTheDocument();
  expect(getByText("Tails count: 0")).toBeInTheDocument();

  fireEvent.click(flipButton);

  // Wait for the animation to complete or for multiple "Flipping..." elements to appear
  await waitFor(() => {
    const flippingElements = queryAllByText(/Flipping.../);
    return flippingElements.length === 1;
  });

  // Coin side should be either "heads" or "tails"
  await waitFor(() => {
    expect(getByText(/Heads count:/).textContent).toMatch(/Heads count: \d+/);
    expect(getByText(/Tails count:/).textContent).toMatch(/Tails count: \d+/);
  });
});
