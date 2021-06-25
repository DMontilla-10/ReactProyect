import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Padre from "../components/Padre";
import Contador from '../components/Ejercicio/Contador/Contador';
import Login from "../pages/Login";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Routes = () => {
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              <Link to='/home'> Home </Link>
            </Typography>
            <Typography variant="h6" className={classes.title}>
              <Link to='/counter'> Contador </Link>
            </Typography>
            <Typography variant="h6" className={classes.title}>
              <Link to='/login'> Login </Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </div>

    <Switch>
        <Route path='/home'>
            <Padre />
        </Route>
        <Router path='/counter'>
            <Contador />
        </Router>
        <Router path='/login'>
            <Login />
        </Router>
    </Switch>

    </Router>
  );
};

export default Routes;
