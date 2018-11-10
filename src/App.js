import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';

import theme from './theme';

import Home from './components/Home'
class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Home/>
      </MuiThemeProvider>
    );
  }
}

export default App;
