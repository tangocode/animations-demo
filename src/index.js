import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import './assets/style.css';
import App from './App';
import configureStore from './state/store';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
);

registerServiceWorker();
