import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SearchAppBar from './Header';
import { About, Contact, Projects } from './../Views/index';

const DefaultLayout = () => {
  return (
    <div>
      <SearchAppBar />
      <Switch>
        <div className="body">
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </div>
      </Switch>

      <div>footer</div>
    </div>
  );
};

export default DefaultLayout;
