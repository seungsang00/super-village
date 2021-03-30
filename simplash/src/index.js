import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const body = document.querySelector('body');
body.style.padding = 0;
body.style.margin = 0;
body.style.width = '100vw';
body.style.height = '100vh';

const root = document.getElementById('root');
root.style.width = '100%';
root.style.height = '100%';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root
);
