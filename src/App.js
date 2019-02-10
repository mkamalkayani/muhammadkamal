import React, { Component } from 'react';
import DefaultLayout from './Containers/DefaultLayout';
import './App.css';
import 'typeface-roboto';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#81c784' },
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <DefaultLayout />
      </MuiThemeProvider>
    );
  }
}

export default App;
