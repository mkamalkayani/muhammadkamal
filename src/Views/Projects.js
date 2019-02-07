import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Project from './Project';
import Kamal_pic from '../assests/img/Kamal_pic.jpg';

const projects = [
  {
    id: 1,
    title: 'first project',
    description: 'some description',
    img: Kamal_pic,
    alt: 'alt text',
    projectLink: 'https://muhammadkamal.me/wikipediaViewer/',
  },
  {
    id: 2,
    title: 'second project',
    description: 'some description',
    img: Kamal_pic,
    alt: 'alt text',
    projectLink: 'https://muhammadkamal.me/wikipediaViewer/',
  },
  {
    id: 3,
    title: 'third project',
    description: 'some description',
    img: Kamal_pic,
    alt: 'alt text',
    projectLink: 'https://muhammadkamal.me/wikipediaViewer/',
  },
  {
    id: 4,
    title: 'fourth project',
    description: 'some description',
    img: Kamal_pic,
    alt: 'alt text',
    projectLink: 'https://muhammadkamal.me/wikipediaViewer/',
  },
];

const styles = theme => ({
  container: {
    background: 'lightgrey',
    padding: '20px',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      flexWrap: 'wrap',
    },
  },
});

function Projects({ classes }) {
  return (
    <div className={classes.container}>
      {projects.map(project => (
        <Project project={project} />
      ))}
    </div>
  );
}

export default withStyles(styles)(Projects);
