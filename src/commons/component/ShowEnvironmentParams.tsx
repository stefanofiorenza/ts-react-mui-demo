import React from "react";
import {Typography} from "@material-ui/core";

const ShowEnvironmentParams: React.FC = () => {
  return (
    <div>
      <Typography variant="h5" noWrap={true}>
        Parameters from environment files
      </Typography>
      <div><b>Stage: </b><i>{process.env.REACT_APP_STAGE}</i></div>
      <div><b>Some value: </b><i>{process.env.REACT_APP_SOME_VALUE}</i></div>
    </div>
  );
};

export default ShowEnvironmentParams;