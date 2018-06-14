import React, { Component } from "react";
import PropTypes from "prop-types";

import {
  List,
  Avatar,
  Divider,
  ListItem,
  withStyles,
  ListItemText,
  Paper,
  Grid
} from "@material-ui/core";

import ImageIcon from "@material-ui/icons/Image";
import WorkIcon from "@material-ui/icons/Work";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";

// import {
//   ImageIcon,
//   // BeachAccessIcon
// } from "@material-ui/icons";


const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 416,
    backgroundColor: theme.palette.background.paper
  }
});

// export default class ReminderComponent extends Component {
function ReminderComponent(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <List>
        <ListItem>
          <Avatar>
            <ImageIcon />
          </Avatar>
          <ListItemText primary="Photos" secondary="Jan 9, 2014" />
        </ListItem>
        <li>
          <Divider inset />
        </li>
        <ListItem>
          <Avatar>
            <WorkIcon />
          </Avatar>
          <ListItemText primary="Work" secondary="Jan 7, 2014" />
        </ListItem>
        <Divider inset component="li" />
        <ListItem>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
          <ListItemText primary="Vacation" secondary="July 20, 2014" />
        </ListItem>
      </List>
    </div>
  );
}

ReminderComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ReminderComponent);
