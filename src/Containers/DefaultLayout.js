import React from 'react';
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
    </div>
  );
};

export default DefaultLayout;
