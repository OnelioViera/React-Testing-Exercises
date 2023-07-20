import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";

test("Card component renders correctly with props", () => {
    const props = {
        caption: "Test Caption",
        src: "test-image.jpg",
        currNum: 1,
        totalNum: 3,
    };

    const { getByText, getByAltText } = render(<Card {...props} />);

    // Check if the caption is rendered correctly
    const captionElement = getByText(props.caption);
    expect(captionElement).toBeInTheDocument();

    // Check if the image is rendered correctly
    const imageElement = getByAltText(props.caption);
    expect(imageElement).toBeInTheDocument();

    // Check if the current and total numbers are displayed correctly
    const numbersElement = getByText(
        `Image ${props.currNum} of ${props.totalNum}.`
    );
    expect(numbersElement).toBeInTheDocument();
});
