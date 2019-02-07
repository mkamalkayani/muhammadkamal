import React from 'react';
import { Paper, withStyles } from '@material-ui/core';

const styles = theme =>
  console.log(theme) || {
    footer: {
      // position: 'fixed',
      // bottom: 0,
      // width: '100%',
      height: '40px',
    },
  };

function Footer({ classes }) {
  return (
    <Paper className={classes.footer} color="secondary">
      <div>footer</div>
    </Paper>
  );
}

export default withStyles(styles)(Footer);
