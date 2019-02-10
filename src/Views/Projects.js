import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
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
    description: 'A Single Page Application using React and Rails API',
    img: innovation_tool,
    alt: 'alt text',
    projectLink: '/InnovationTool',
    target: '_self',
  },
  {
    id: 3,
    title: 'Wikipedia Viewer',
    description: 'Search articles on Wikipedia or read a random article.',
    img: wikipedia_viewer,
    alt: 'alt text',
    projectLink: 'https://mkamalkayani.github.io/wikipediaViewer/',
    target: '_blank',
  },
  {
    id: 2,
    title: 'Ramdom Quotes',
    description: 'Are you feeling down? Visit this page and get a dose of motivation.',
    img: motivational_quotes,
    alt: 'alt text',
    projectLink: 'https://mkamalkayani.github.io/randomQuoteMachine/',
    target: '_blank',
  },
  {
    id: 1,
    title: 'Local Weather',
    description:
      'This app uses the openweathermap api to show the weather conditions at the specified location.',
    img: local_weather,
    alt: 'alt text',
    projectLink: 'https://muhammadkamal.me/localWeather/',
    target: '_blank',
  },
];

const styles = theme => ({
  container: {
    background: [theme.palette.primary.main],
    padding: '30px 20px 20px 20px',
    [theme.breakpoints.up('sm')]: {
      paddingTop: '80px',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
  },
});

function Projects({ classes }) {
  return (
    <Paper className={classes.container} id="projects">
      {projects.map(project => (
        <Project project={project} />
      ))}
    </Paper>
  );
}

export default withStyles(styles)(Projects);
