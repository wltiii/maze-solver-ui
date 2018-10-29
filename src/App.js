import React, { Component } from 'react';
import Home from './components/Home';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

class App extends Component {
  render() {
    return (
        <React.Fragment>
            <CssBaseline>
                <MuiThemeProvider theme={theme}>
                    <Home/>
                </MuiThemeProvider>
            </CssBaseline>
        </React.Fragment>
    )
  }
}

export default App;
