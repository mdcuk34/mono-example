import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ThemeProvider } from 'styled-components';
import { theme as sharedTheme } from '@monoexample/shared';
import App from './App';
import * as serviceWorker from './serviceWorker';
import localTheme from './theme';

const Entry = () => (
  <ThemeProvider theme={sharedTheme}>
    <ThemeProvider theme={localTheme}>
      <App />
    </ThemeProvider>
  </ThemeProvider>
);

ReactDOM.render(<Entry />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
