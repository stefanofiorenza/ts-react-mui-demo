import React from "react";
import {RouteComponentProps} from "react-router-dom";
import {createStyles, Typography, withStyles, WithStyles} from "@material-ui/core";

const styles = () => {
  return createStyles({
    param: {
      fontStyle: "italic",
      marginLeft: ".52rem"
    }
  });
};

// extend RouteComponentProps for url param "name" and styles
interface UrlParamForReactClassProps extends RouteComponentProps<{ name: string }>, WithStyles<typeof styles> {
}

class UrlParamForReactClass extends React.Component<UrlParamForReactClassProps, {}> {
  render() {
    return (
      <div>
        <Typography variant="h5">
          URL param for React Class
        </Typography>
        <Typography component="p">
          URL-Parameter:
          <span className={this.props.classes.param}>{this.props.match.params.name}</span>
        </Typography>
      </div>
    );
  }
}

// wrap component class with styles
export default withStyles(styles)(UrlParamForReactClass);