import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './React-Redux/App';

// Create Store

import { createStore } from 'redux';

// ACTIONS

const increment = () => {
  return {
    type: 'INCREMENT',
  };
};

const decrement = () => {
  return {
    type: 'DECREMENT',
  };
};

// REDUCER
// Can Have MUTIPLE REDUCERS
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};
// add to the store
let store = createStore(counter);

// DISPLAY ON the CONSOLE

store.subscribe(() => console.log(store.getState()));

// DISPATCH

store.dispatch(increment());
store.dispatch(decrement());

ReactDOM.render(<App />, document.getElementById('root'));
