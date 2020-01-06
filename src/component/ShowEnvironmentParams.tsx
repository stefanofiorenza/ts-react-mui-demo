import React from "react";

const ShowEnvironmentParams: React.FC = () => {
  return (
    <div>
      <div>Stage: {process.env.REACT_APP_STAGE}</div>
      <div>Some value: {process.env.REACT_APP_SOME_VALUE}</div>
    </div>
  );
};

export default ShowEnvironmentParams;