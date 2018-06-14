import React, { Component } from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
// import Button from "@material-ui/core/Icon";
import Icon from "@material-ui/core/Icon";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  iconSmall: {
    fontSize: 20
  }
});

function ReminderListComponent (props) {
  const { classes } = props;

  return (
    <div>
      <div className="quote">
        Success is no accident. It is hard work, perseverance, learning,
        studying, sacrifice and most of all, love of what you are doing or
        learning to do. <br/> – Pele
      </div>
      <Button variant="contained" className={classes.button}>
        Add Reminder
      </Button>
    </div>
  );

}


ReminderListComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ReminderListComponent);
