import React from 'react';
import {Container, makeStyles, MuiThemeProvider} from "@material-ui/core";
import {createMuiTheme} from '@material-ui/core/styles';
import {indigo, pink} from "@material-ui/core/colors";
import Dashboard from "./commons/component/Dashboard";
import AppHeader from "./commons/component/AppHeader";

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
    <MuiThemeProvider theme={theme}>
      <AppHeader/>
      <Container component={"main"} maxWidth="xl" className={classes.contentContainer}>
        <Dashboard/>
      </Container>
    </MuiThemeProvider>
  );
};

export default App;
