import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  card: {
    maxWidth: 300,
    minWidth: 280,
    margin: 'auto',
    marginBottom: '25px',
    [theme.breakpoints.up('sm')]: {
      margin: '20px 20px',
    },
  },

  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
  },
});

function Project(props) {
  const { classes, project } = props;
  const { title, description, img, alt, projectLink, target } = project;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={alt}
          className={classes.media}
          height="200"
          image={img}
          title="title"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2" align="center">
            {title}
          </Typography>
          <Typography align="center">{description}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          style={{ margin: 'auto' }}
          size="small"
          href={projectLink}
          target={target}
          rel="noopener"
        >
          View Project
        </Button>
      </CardActions>
    </Card>
  );
}

Project.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Project);
