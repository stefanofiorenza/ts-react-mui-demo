import React from "react";
import logo from "../../logo.svg";
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
        <img src={logo} className="App-logo-big" alt="logo"/>
        <ShowEnvironmentParams/>
      </Grid>
    </Grid>
  );
};

export default StartPage;