import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Redux_Prac_2/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './Redux_Prac_2/reducers';

const store = createStore(allReducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
