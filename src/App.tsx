import React from 'react';
import {Container, Grid, makeStyles, MuiThemeProvider} from "@material-ui/core";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {createMuiTheme} from '@material-ui/core/styles';
import {indigo, pink} from "@material-ui/core/colors";
import Dashboard from "./commons/component/Dashboard";
import AppHeader from "./commons/component/AppHeader";
import PageNotFound from "./commons/component/PageNotFound";
import AlignContentToCenter from "./layout/component/AlignContentToCenter";
import Navigation from "./commons/component/Navigation";
import UrlParamForReactClass from "./urlparams/component/UrlParamForReactClass";

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
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <Navigation/>
            </Grid>
            <Grid item xs={9}>
              <Switch>
                <Route path={"/"} exact component={Dashboard}/>
                <Route path={"/alignContentToCenter"} exact component={AlignContentToCenter}/>
                <Route path={"/urlParam/:name"} exact component={UrlParamForReactClass}/>
                <Route component={PageNotFound}/>
              </Switch>
            </Grid>
          </Grid>
        </Container>
      </MuiThemeProvider>
    </Router>
  );
};

export default App;
