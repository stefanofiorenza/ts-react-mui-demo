import React from "react";
import logo from "../../logo.svg";
import ShowEnvironmentParams from "./ShowEnvironmentParams";
import {Grid} from "@material-ui/core";

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
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </Grid>
    </Grid>
  );
};

export default StartPage;