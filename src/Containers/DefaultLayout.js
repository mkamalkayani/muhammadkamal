import React from 'react';
import Header from './Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../Views/Home';
import InnovationTool from '../Views/InnovationTool/InnovationTool';

const DefaultLayout = () => {
  return (
    <div className="main">
      <Header />
      <Router basename="portfolio">
        <Switch>
          <Route exact path="/InnovationTool" component={InnovationTool} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
};

export default DefaultLayout;
