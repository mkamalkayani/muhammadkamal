import React from 'react';
import { withStyles, Paper, Grid, Typography, Link } from '@material-ui/core';
import Icon from '@mdi/react';
import { mdiXingBox, mdiLinkedinBox, mdiGithubBox } from '@mdi/js';

const styles = theme => ({
  root: {},
  paper: {
    padding: '20px',
  },
  contactHead: {
    marginTop: '30px',
  },
  email: {},
  icons: {
    textAlign: 'center',
    padding: '20px',
  },
});

const contact = ({ classes }) => {
  return (
    <div className={classes.root} id="contact">
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography className={classes.contactHead} align="center" variant="h5" gutterBottom>
              Contact
            </Typography>
            <Typography variant="subtitle1" align="center">
              I am available for work. Would be happy to have a conversation.
            </Typography>

            <Typography className={classes.email} align="center">
              <strong>Email:</strong> makamalkayani@gmail.com
            </Typography>

            <div className={classes.icons}>
              <Link
                href="https://www.xing.com/profile/Muhammad_Kamal7/cv"
                target="_blank"
                rel="noopener"
              >
                <Icon path={mdiXingBox} size={1.5} color="026466" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/muhammad-kamal/"
                target="_blank"
                rel="noopener"
              >
                <Icon path={mdiLinkedinBox} size={1.5} color="#0077B5" />
              </Link>
              <Link href="https://github.com/mkamalkayani" target="_blank" rel="noopener">
                <Icon path={mdiGithubBox} size={1.5} color="#333" />
              </Link>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(contact);
