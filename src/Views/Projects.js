import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Project from './Project';
import {
  innovation_tool,
  wikipedia_viewer,
  motivational_quotes,
  local_weather,
} from '../assests/img/images';

const projects = [
  {
    id: 4,
    title: 'XING Innovation Hub',
    description: 'Innovation tool for Hackweek events',
    img: innovation_tool,
    alt: 'alt text',
    projectLink: 'https://mkamalkayani.github.io/wikipediaViewer/',
  },
  {
    id: 3,
    title: 'Wikipedia Viewer',
    description: 'some description',
    img: wikipedia_viewer,
    alt: 'alt text',
    projectLink: 'https://mkamalkayani.github.io/wikipediaViewer/',
  },
  {
    id: 2,
    title: 'Ramdom Quotes',
    description: 'some description',
    img: motivational_quotes,
    alt: 'alt text',
    projectLink: 'https://mkamalkayani.github.io/randomQuoteMachine/',
  },
  {
    id: 1,
    title: 'Local Weather',
    description: 'some description',
    img: local_weather,
    alt: 'alt text',
    projectLink: 'https://mkamalkayani.github.io/localweather/',
  },
];

const styles = theme => ({
  container: {
    background: 'lightgrey',
    padding: '20px',
    [theme.breakpoints.up('sm')]: {
      paddingTop: '40px',
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
