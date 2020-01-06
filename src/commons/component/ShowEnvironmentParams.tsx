import React from "react";
import {Typography} from "@material-ui/core";

const ShowEnvironmentParams: React.FC = () => {
  return (
    <div>
      <Typography variant="h5" noWrap={true}>
        Parameters from environment files
      </Typography>
      <div>Stage: {process.env.REACT_APP_STAGE}</div>
      <div>Some value: {process.env.REACT_APP_SOME_VALUE}</div>
    </div>
  );
};

export default ShowEnvironmentParams;