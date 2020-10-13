import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Editor } from './features/editor/Editor';
import { configureStore } from './app/store';

ReactDOM.render(
  <Provider store={configureStore()}>
    <Editor />
  </Provider>, 
  document.getElementById('root')
);
