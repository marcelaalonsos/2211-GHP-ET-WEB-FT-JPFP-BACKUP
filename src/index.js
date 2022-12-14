
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/Main';
import store from './store/index';

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
  <Provider store={store}>
    <Main />
  </Provider>
  </BrowserRouter>
);
