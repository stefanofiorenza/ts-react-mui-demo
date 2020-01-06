import * as React from 'react';
import {AppBar, makeStyles, Toolbar, Typography} from '@material-ui/core';
import logo from "../../logo.svg";

const useStyles = makeStyles(theme => ({
  appLogo: {
    height: "50px",
    width: "67px",
    display: "block",
    marginRight: "16px"
  },
  stageMarker: {
    flexGrow: 1,
    textAlign: "right"
  }
}));

const AppHeader: React.FC = () => {

  const classes = useStyles();

  return (
    <AppBar position="fixed">
      <Toolbar>
        <img src={logo} className={classes.appLogo} alt={"logo"}/>
        <Typography variant="h4" noWrap={true}>
          React Material UI demo
        </Typography>
        <Typography className={classes.stageMarker}>
          {process.env.REACT_APP_STAGE}</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;