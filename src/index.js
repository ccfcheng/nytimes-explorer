import document from 'global/document';
import React from 'react';
import { render } from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import storageMiddleware from '../core/middleware';
// import CurationApp from './CurationApp';
// import reducers from '../core';
import Main from './main';

// const store = createStore(
//   reducers,
//   applyMiddleware(thunk, storageMiddleware)
// );

// render((
//   <Provider store={store}>
//     <CurationApp />
//   </Provider>
// ), document.getElementById('wyndow-curation-app'));

render((<Main />), document.getElementById('nytimes-explorer-app'));
