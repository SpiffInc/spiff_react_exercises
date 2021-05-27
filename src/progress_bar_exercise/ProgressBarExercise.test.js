import React from "react";
import { screen, render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Solution } from "./ProgressBarExercise";

afterEach(cleanup);

describe("ProgressBarExercise component", () => {
  test("should render ProgressBarExercise component correctly", async () => {
    await render(<Solution />);

    await expect(screen.getByText(/start request/i)).toBeInTheDocument();
    await expect(screen.getByText(/finish request/i)).toBeInTheDocument();
  });

  test("should start the request when clicking the Start request button", async () => {
    await render(<Solution />);

    fireEvent.click(screen.getByText(/start request/i));

    await expect(screen.getByText(/loading.../i)).toBeInTheDocument();
    await expect(screen.getByText(/finish request/i)).toBeInTheDocument();
  });

  test("should finish the request when clicking the Finish request button and 'fade away' progress bar", async () => {
    await render(<Solution />);

    fireEvent.click(screen.getByText(/finish request/i));

    await expect(screen.getByText(/start request/i)).toBeInTheDocument();
    await expect(screen.getByText(/finish request/i)).toBeInTheDocument();
  });
});
