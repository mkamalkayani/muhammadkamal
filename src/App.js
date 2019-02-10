import React, { Component } from 'react';
import DefaultLayout from './Containers/DefaultLayout';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import 'typeface-roboto';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { green, deepPurple } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#81c784' },
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <DefaultLayout />
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
