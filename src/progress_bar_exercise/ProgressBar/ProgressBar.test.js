import React from "react";
import { screen, render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Solution } from "../ProgressBarExercise";

afterEach(cleanup);

describe("ProgressBar", () => {
  test("should render ProgressBar component correctly", async () => {
    await render(<Solution />);

    await expect(
      screen.getByTestId("progress-bar-container")
    ).toBeInTheDocument();
    await expect(
      screen.getByTestId("progress-bar-inner-container")
    ).toBeInTheDocument();
  });
});
