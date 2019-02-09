import React from 'react';
import { Typography, withStyles, Grid } from '@material-ui/core';
import img from '../assests/img/kamal_pic.jpg';

const styles = theme => ({
  about: {
    marginBottom: '30px',
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100vh - 56px)',
    },
  },
  intro: {
    maxWidth: '500px',
    margin: 'auto',
    padding: '10px 30px',
  },
  img: {
    margin: '100px 10px 30px 10px',
    maxHeight: '175px',
    maxWidth: '200px',
    borderRadius: '5px',
  },
});

const About = ({ classes }) => {
  return (
    <div className={classes.about} id="about">
      <Grid container justify="center" alignItems="center">
        <Grid item>
          <img src={img} alt="selfie" className={classes.img} />
        </Grid>
      </Grid>
      <Grid item>
        <Typography align="center" variant="h5" gutterBottom>
          Muhammad Kamal
        </Typography>
      </Grid>
      <Grid item>
        <Typography className={classes.intro} align="center" variant="subtitle1">
          I like to create responsive and user friendly web apps. Currently, I have experience with
          Frontend Developement only. However, I have planned to become a full Stack developer.
        </Typography>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(About);
