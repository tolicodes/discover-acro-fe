import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';

import theme from './theme';

// import Home from './components/Home';
import Festival from './components/Event/Festival';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Festival/>
      </MuiThemeProvider>
    );
  }
}

export default App;
