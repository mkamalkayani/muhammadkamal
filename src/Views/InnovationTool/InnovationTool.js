import React, { Fragment } from 'react';
import { withStyles, Paper, Typography } from '@material-ui/core';
import { ParticipantsList } from './index';

const styles = theme => ({
  root: {
    padding: '20px 10px',
  },
  description: {
    maxWidth: '600px',
    textAlign: 'center',
    padding: '10px',
    margin: 'auto',
  },
  imgContainer: {
    padding: '10px',
  },
  img: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '75%',
    },
  },
});

const InnovationTool = ({ classes }) => {
  return (
    <Fragment>
      <Paper className={classes.root} id="InnovationTool">
        <Typography variant="h5" align="center">
          Innovation Tool
        </Typography>
        <Typography className={classes.description} color="indigo">
          I have developed the Frontend of the Innovation Tool using React.
        </Typography>
        <Typography className={classes.description} color="indigo">
          This app is used intrenally at XING and is not possible to view it in production outside
          of XING VPN. Therefore, the pictures of the App are being shown with due premission of the
          Product Owner.
        </Typography>
        <div className={classes.imgContainer}>
          <img src={ParticipantsList} alt="ParticipantsList" className={classes.img} />
        </div>
      </Paper>
    </Fragment>
  );
};

export default withStyles(styles)(InnovationTool);
