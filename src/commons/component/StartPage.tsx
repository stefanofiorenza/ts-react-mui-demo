import React from "react";
import {Grid} from "@material-ui/core";
import ShowEnvironmentParams from "../../environment/component/ShowEnvironmentParams";

const StartPage: React.FC = () => {

  return (
    <Grid
      container
      spacing={0}
      alignItems={"center"}
      justify={"center"}
    >
      <Grid item>
        <ShowEnvironmentParams/>
      </Grid>
    </Grid>
  );
};

export default StartPage;