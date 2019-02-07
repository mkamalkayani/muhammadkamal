import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles, Button } from '@material-ui/core';
import { NavLink, Link } from 'react-router-dom';

const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
});

function Header(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Button component={NavLink} to="/about">
            About
          </Button>
          <Button component={NavLink} to="/projects">
            Projects
          </Button>
          <Button component={NavLink} to="/contact">
            Contact
          </Button>
          <div className={classes.grow} />
          <Typography className={classes.title} variant="h6" color="inherit" noWrap>
            Portfilio
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
