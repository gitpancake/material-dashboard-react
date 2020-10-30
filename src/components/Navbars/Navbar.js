import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
// @material-ui/core components

import {
  AppBar,
  Hidden,
  IconButton,
  makeStyles,
  Toolbar,
} from "@material-ui/core";

// @material-ui/icons
import Menu from "@material-ui/icons/Menu";

// core components
import AdminNavbarLinks from "./AdminNavbarLinks.js";

import styles from "assets/jss/material-dashboard-react/components/headerStyle.js";

const useStyles = makeStyles(styles);

export default function Header(props) {
  const classes = useStyles();

  const { color } = props;

  const appBarClasses = classNames({
    [" " + classes[color]]: color,
  });

  return (
    <AppBar className={classes.appBar + appBarClasses}>
      <Toolbar className={classes.container}>
        <div className={classes.flex}></div>
        <Hidden smDown implementation="css">
          <AdminNavbarLinks />
        </Hidden>
        <Hidden mdUp implementation="css">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={props.handleDrawerToggle}
          >
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"]),
  handleDrawerToggle: PropTypes.func,
  routes: PropTypes.arrayOf(PropTypes.object),
};
