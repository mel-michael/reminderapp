import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReminderComponent  from './components/ReminderComponent';
import ReminderListComponent  from './components/ReminderListComponent';

// import Button from "@material-ui/core/Button";
// import PropTypes from "prop-types";
// import { withStyles, Paper, Grid } from "@material-ui/core/styles";

// const styles = theme => ({
//   root: {
//     flexGrow: 1
//   },
//   paper: {
//     padding: theme.spacing.unit * 2,
//     textAlign: "center",
//     color: theme.palette.text.secondary
//   }
// });


class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Remind Me</h1>
        </header>

        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}

        <div className="container">
          <div className="reminder-list">
            <ReminderComponent />
          </div>

          <div className="reminder-board">
            <ReminderListComponent />
          </div>
        </div>

      </div>
    );
  }
}

// withStyles(styles)(CenteredGrid);


export default App;



// function CenteredGrid(props) {
//   const { classes } = props;

//   return (
//     <div className={classes.root}>
//       <Grid container spacing={24}>
//         <Grid item xs={12}>
//           <Paper className={classes.paper}>xs=12</Paper>
//         </Grid>
//         <Grid item xs={6}>
//           <Paper className={classes.paper}>xs=6</Paper>
//         </Grid>
//         <Grid item xs={6}>
//           <Paper className={classes.paper}>xs=6</Paper>
//         </Grid>
//         <Grid item xs={3}>
//           <Paper className={classes.paper}>xs=3</Paper>
//         </Grid>
//         <Grid item xs={3}>
//           <Paper className={classes.paper}>xs=3</Paper>
//         </Grid>
//         <Grid item xs={3}>
//           <Paper className={classes.paper}>xs=3</Paper>
//         </Grid>
//         <Grid item xs={3}>
//           <Paper className={classes.paper}>xs=3</Paper>
//         </Grid>
//       </Grid>
//     </div>
//   );
// }

// CenteredGrid.propTypes = {
//   classes: PropTypes.object.isRequired
// };
