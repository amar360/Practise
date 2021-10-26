import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, isLoggedIn } from './actions';

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(decrement())}>-</button>
      Counter : {counter}
      <button onClick={() => dispatch(increment(5))}>+</button>
      {isLogged ? <h1>Data is PRIVATE</h1> : ''}
      <button onClick={() => dispatch(isLoggedIn())}>Log In To See TEXT</button>
    </div>
  );
}

export default App;
