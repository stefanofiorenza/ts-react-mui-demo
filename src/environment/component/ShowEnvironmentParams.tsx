import React from "react";
import {Table, TableBody, TableCell, TableHead, TableRow, Typography} from "@material-ui/core";
import {getEnvironmentParams} from "../service/EnvironmentService";

const ShowEnvironmentParams: React.FC = () => {

  return (
    <div>
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
    </div>
  )
};

export default ShowEnvironmentParams;