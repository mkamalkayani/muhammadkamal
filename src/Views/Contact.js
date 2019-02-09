import React from 'react';
import { withStyles, Paper, Grid, Typography } from '@material-ui/core';
import Icon from '@mdi/react';
import { mdiAccount } from '@mdi/js';

const styles = theme => ({
  root: {
    height: '100vh',
  },
  paper: {
    padding: '20px',
  },
});

const contact = ({ classes }) => {
  return (
    <div className={classes.root} id="contact">
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography align="center" variant="h5" gutterBottom>
              Contact
            </Typography>
            <Typography variant="subtitle1" align="center">
              I am available for work. Would be happy to have a conversation.
              <Typography>Email: mkamalkayani@gmail.com </Typography>
              <Typography>XING:</Typography>
              <Typography>LinkedIn:</Typography>
              Github:
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      <Icon path={mdiAccount} size={1} horizontal vertical rotate={90} color="red" spin />
    </div>
  );
};

export default withStyles(styles)(contact);
