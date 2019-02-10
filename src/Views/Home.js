import React, { Fragment } from 'react';
import { About, Contact, Projects } from './../Views/index';

const Home = ({ classes }) => {
  return (
    <Fragment>
      <About />
      <Projects />
      <Contact />
    </Fragment>
  );
};

export default Home;
