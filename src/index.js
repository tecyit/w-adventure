import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import App from './App/App';

const rootElement = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(rootElement, document.getElementById('root'));
