import React from "react";
import {List, ListItem, ListItemIcon, ListItemText, makeStyles, Paper, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";
import LinkIcon from '@material-ui/icons/Link';

const useStyles = makeStyles(theme => ({
  root: {
    padding: "1rem"
  },
  listItemIcon: {
    minWidth: "30px"
  }
}));

const Navigation: React.FC = () => {

  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography variant="h5">
        Navigation
      </Typography>
      <List dense>
        {createLinkListItem("/", classes.listItemIcon)}
        {createLinkListItem("/environmentParams", classes.listItemIcon)}
        {createLinkListItem("/urlParamForReactClass/John", classes.listItemIcon)}
        {createLinkListItem("/urlParamForReactClass/Maria", classes.listItemIcon)}
        {createLinkListItem("/alignContentToCenter", classes.listItemIcon)}
        {createLinkListItem("/notexisting", classes.listItemIcon)}
      </List>
    </Paper>
  )
};

const createLinkListItem = (path: string, className: any): any => {

  return (
    <ListItem>
      <ListItemIcon className={className}>
        <LinkIcon/>
      </ListItemIcon>
      <ListItemText>
        <Link to={path}>{path}</Link>
      </ListItemText>
    </ListItem>
  );
};

export default Navigation;