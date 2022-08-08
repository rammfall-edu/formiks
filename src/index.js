import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './scss/index.scss';
import Application from './Application';
import { Provider } from 'react-redux';
import store from './store';

createRoot(document.querySelector('.root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Application />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
