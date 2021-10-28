import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './React-Redux/App';
import { createStore } from 'redux';
import allReducers from './React-Redux/reducers';
import { Provider } from 'react-redux';

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

/* import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Redux_2/App'

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
 */