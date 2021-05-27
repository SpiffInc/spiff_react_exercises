import React from "react";
import Exercise from "../exercise/Exercise";

import ProgressBar from "./ProgressBar/ProgressBar";

import useRequest from "./hooks/useRequest";

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
  const { state, onStartRequest, onFinishRequest } = useRequest();

  return (
    <div className="solution-container">
      <ProgressBar progress={state.progress} />
      <button
        onClick={onStartRequest}
        className="progress-bar-button start-request-button"
      >
        {state.loading ? "Loading..." : "Start request"}
      </button>
      <button
        onClick={onFinishRequest}
        className="progress-bar-button finish-request-button"
      >
        Finish request
      </button>
    </div>
  );
};
