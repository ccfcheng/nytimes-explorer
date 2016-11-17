import document from 'global/document';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import storageMiddleware from '../core/middleware';
// import CurationApp from './CurationApp';
import reducers from './core/reducers';
import Main from './main';

const store = createStore(
  reducers,
  applyMiddleware(thunk),
);

// render((
//   <Provider store={store}>
//     <CurationApp />
//   </Provider>
// ), document.getElementById('wyndow-curation-app'));

render((
  <Provider store={store}>
    <Main />
  </Provider>
), document.getElementById('nytimes-explorer-app'));
