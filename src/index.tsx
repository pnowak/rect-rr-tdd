import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { App } from './app/App';
import { configureStoreWithLocalStorage } from './app/store';

ReactDOM.render(
  <Provider store={configureStoreWithLocalStorage()}>
    <App />
  </Provider>, 
  document.getElementById('root')
);
