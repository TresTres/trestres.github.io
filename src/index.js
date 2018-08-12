//index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';


import 'styles/styles.css';
import App from 'components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <HashRouter>
    <App />
  </HashRouter>
), document.getElementById('root'));
registerServiceWorker();
