import React from "react";
import {Box, makeStyles, Typography} from "@material-ui/core";
import ErrorIcon from '@material-ui/icons/Error';
import clsx from "clsx";
import {Constants} from "../Constants";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    padding: Constants.MessageComponent.PADDING,
    marginTop: Constants.MessageComponent.MARGIN_TOP,
    marginBottom: Constants.MessageComponent.MARGIN_BOTTOM,
    color: Constants.Colors.ERROR,
    backgroundColor: Constants.Colors.ERROR_BG,
    borderRadius: "3px",
    borderColor: Constants.Colors.ERROR_BORDER
  },
  message: {
    paddingLeft: Constants.MessageComponent.MESSAGE_PADDING_LEFT
  }
}));

interface ErrorMessageProps {
  message: string
}

const ErrorMessage: React.FC<ErrorMessageProps> = (props) => {

  const classes = useStyles();

  return (
    <Box component={"div"} className={classes.root}>
      <ErrorIcon/>
      <Typography component={"div"} className={clsx(classes.message, "error-message")}>{props.message}</Typography>
    </Box>
  );

};

export default ErrorMessage;