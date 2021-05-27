import React from "react";
import Exercise from "../exercise/Exercise";

import ProgressBar from "./ProgressBar/ProgressBar";

const ProgressBarExercise = () => {
  return (
    <div className="progress-bar-exercise">
      <Exercise
        solution={<Solution />}
        specsUrl="https://github.com/SpiffInc/spiff_react_exercises/issues/1"
        title="Progress Bar Exercise"
      />
    </div>
  );
};

export default ProgressBarExercise;

// ----------------------------------------------------------------------------------

export const Solution = () => {
  return (
    <div className="solution-container">
      <ProgressBar progress={100} />
      <button className="progress-bar-button start-request-button">
        Start request
      </button>
      <button className="progress-bar-button finish-request-button">
        Finish request
      </button>
    </div>
  );
};
