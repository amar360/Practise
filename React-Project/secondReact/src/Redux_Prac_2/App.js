import React from 'react';
import { Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, isLoggedIn } from './actions';

const App = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => {
    console.log(state);
    return state.counter;
  });
  const isLogged = useSelector((state) => state.isLoggedIn);

  const inc = () => {
    dispatch(increment(1000));
  };

  const dec = () => {
    dispatch(decrement(100));
  };

  return (
    <>
      <button type='button' onClick={dec}>
        -
      </button>
      Counter : {counter}
      <button type='button' onClick={inc}>
        +
      </button>
      {isLogged ? <h1>I am Logged In</h1> : <h1>LOGOUT</h1>}
      <Button onClick={() => dispatch(isLoggedIn())}>{isLogged ? 'Log OUT' : 'LOG IN'}</Button>
    </>
  );
};

export default App;
