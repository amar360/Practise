import React, { useReducer, useState } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return action.payload;
    case 'del':
      return 'Del';
    default:
      return 'nothing';
  }
}

function App() {
  const InputStyle = {
    color: 'red',
    backgroundColor: 'yellow',
    margin: '0px 10px',
    border: 'none',
    borderRadius: '20px',
    padding: '10px',
  };

  const [state, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState('');

  function changeName() {
    setName('');
  }

  function ChangeInput(e) {
    dispatch({ type: 'add', payload: e.target.value });
  }

  return (
    <>
      <form>
        <input type='text' style={InputStyle} onChange={(e) => ChangeInput(e)} />
      </form>
      {state}
    </>
  );
}

export default App;
