import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Solution } from "../ProgressBarExercise";

describe("ProgressBar", () => {
  test("should render Solution correctly", () => {
    render(<Solution />);
    expect(screen.getByText(/start request/i)).toBeInTheDocument();
    expect(screen.getByText(/finish request/i)).toBeInTheDocument();
  });
});
