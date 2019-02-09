import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { About, Contact, Projects } from './../Views/index';

const DefaultLayout = () => {
  return (
    <div className="main">
      <Header />
      <About />
      <Projects />
      <Contact />
      {/* <div>
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </Switch>

        <Footer />
      </div> */}
    </div>
  );
};

export default DefaultLayout;
