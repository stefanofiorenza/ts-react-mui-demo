import React from "react";
import {RouteComponentProps} from "react-router-dom";
import {makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  param: {
    fontStyle: "italic",
    marginLeft: ".52rem"
  }
}));

// extend RouteComponentProps for url param "name" and styles
interface UrlParamForReactFunctionProps extends RouteComponentProps<{ name: string }> {
}

const UrlParamForReactFunction: React.FC<UrlParamForReactFunctionProps> = (props) => {

  const classes = useStyles();

  return (
    <div>
      <Typography variant="h5">
        URL param for React Class
      </Typography>
      <Typography component="p">
        URL-Parameter:
        <span className={classes.param}>{props.match.params.name}</span>
      </Typography>
    </div>
  );

};

export default UrlParamForReactFunction;