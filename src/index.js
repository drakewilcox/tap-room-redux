import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import reducer from './reducers/keg-control-reducer';
import { Provider } from 'react-redux';
import InitialState from './components/KegList';

const store = createStore(
  // InitialState,
  reducer
  );

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


