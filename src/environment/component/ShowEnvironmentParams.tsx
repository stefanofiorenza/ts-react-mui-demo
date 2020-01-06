import React from "react";
import {makeStyles, Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography} from "@material-ui/core";
import {getEnvironmentParams} from "../service/EnvironmentService";

const useStyles = makeStyles(theme => ({
  root: {
    padding: "1rem"
  }
}));

const ShowEnvironmentParams: React.FC = () => {

  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography variant="h5">
        Environment parameters
      </Typography>
      <Table size="small" aria-label="environment params">
        <TableHead>
          <TableRow>
            <TableCell><b>Key</b></TableCell>
            <TableCell><b>Value</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {getEnvironmentParams().map(keyValue => (
            <TableRow key={keyValue.key}>
              <TableCell>{keyValue.key}</TableCell>
              <TableCell>{keyValue.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  )
};

export default ShowEnvironmentParams;