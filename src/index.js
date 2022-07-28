import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './scss/index.scss';
import Application from './Application';
import Header from './components/Header';

createRoot(document.querySelector('.root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Application />
    </BrowserRouter>
  </React.StrictMode>
);
