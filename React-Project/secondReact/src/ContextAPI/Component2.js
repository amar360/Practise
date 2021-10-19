import React, { useContext } from 'react';
import { NameContext } from './Context';

function Component2() {
  const [name, setName] = useContext(NameContext);

  function onClickSetName() {
    setName('Amar it worked');
  }

  return (
    <>
      Here
      <div>{name}</div>
      <button type='button' onClick={onClickSetName}>
        Click Me
      </button>
    </>
  );
}

export default Component2;
