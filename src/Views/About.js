import React, { Fragment } from 'react';
import { Typography, withStyles } from '@material-ui/core';

const styles = theme => ({
  intro: {
    maxWidth: '500px',
    margin: 'auto',
  },
});

const About = ({ classes }) => {
  return (
    <Fragment>
      <img src="" />
      <Typography align="center" variant="headline" gutterBottom>
        Muhammad Kamal
      </Typography>
      <Typography className={classes.intro} align="center" variant="subheading">
        Welcome to my portfolio page. I am a self taught web developer. I like to create dynamic,
        user-friendly, and responsive websites and web apps.
      </Typography>
    </Fragment>
  );
};

export default withStyles(styles)(About);
