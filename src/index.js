//index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';


import 'styles/styles.css';
import App from 'components/App';
import registerServiceWorker from './registerServiceWorker';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faInbox } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faInbox);

ReactDOM.render((
  <div className="container-fluid">
    <HashRouter>
      <App />
    </HashRouter>
  </div>
), document.getElementById('root'));
registerServiceWorker();
