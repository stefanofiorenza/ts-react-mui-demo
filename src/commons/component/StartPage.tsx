import React from "react";
import logo from "../../logo.svg";
import ShowEnvironmentParams from "./ShowEnvironmentParams";
import {makeStyles} from "@material-ui/core";

const StartPage: React.FC = () => {

  return (
    <div>
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
    </div>
  );
};

export default StartPage;