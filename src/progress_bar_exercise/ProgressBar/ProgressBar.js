import React from "react";

const ProgressBar = ({ progress }) => {
  return (
    <div className="progress-bar-container">
      <span
        className="progress-bar-inner-container"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ProgressBar;
