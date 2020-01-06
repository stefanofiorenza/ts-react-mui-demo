import React from 'react';
import {Container, makeStyles, MuiThemeProvider} from "@material-ui/core";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {createMuiTheme} from '@material-ui/core/styles';
import {indigo, pink} from "@material-ui/core/colors";
import Dashboard from "./commons/component/Dashboard";
import AppHeader from "./commons/component/AppHeader";
import PageNotFound from "./commons/component/PageNotFound";

const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: pink,
  }
});

const useStyles = makeStyles(theme => ({
  contentContainer: {
    paddingTop: "4.5rem"
  }
}));

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <Router>
      <MuiThemeProvider theme={theme}>
        <AppHeader/>
        <Container component={"main"} maxWidth="xl" className={classes.contentContainer}>
          <Switch>
            <Route path={"/"} exact component={Dashboard}/>
            <Route component={PageNotFound}/>
          </Switch>
        </Container>
      </MuiThemeProvider>
    </Router>
  );
};

export default App;
