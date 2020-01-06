import React from "react";
import {Grid, Typography} from "@material-ui/core";

const AlignContentToCenter: React.FC = () => {

  return (
    <Grid
      container
      spacing={0}
      alignItems={"center"}
      justify={"center"}
    >
      <Grid item>
        <Typography variant="h5">
          Align content to center
        </Typography>
        <Typography component={"p"}>This content is aligned to center.</Typography>
      </Grid>
    </Grid>
  );
};

export default AlignContentToCenter;