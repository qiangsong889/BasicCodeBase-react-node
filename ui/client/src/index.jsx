import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/mainPage/index';
import { Provider } from 'react-redux';
import store from './store/index';
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
