// Modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

// Components
import App from './App';

// Styles
import './index.css';

import * as serviceWorker from './serviceWorker';

import { store } from './engine/init/store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
