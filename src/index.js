import React from 'react';
import ReactDOM from 'react-dom';

import { ThemeProvider } from '@material-ui/core/styles';
import { createTheme}  from './theme/theme';
import CssBaseline from '@material-ui/core/CssBaseline';
import App from './components/App/App';

ReactDOM.render(
  <ThemeProvider theme={createTheme}>
    <CssBaseline>
      <App />
    </CssBaseline>
  </ThemeProvider>, 
  document.getElementById('root'));
