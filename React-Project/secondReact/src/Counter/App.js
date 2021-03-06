import React, { useState } from 'react';

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <p>{counter}</p>
      <button type='button' onClick={() => setCounter(counter + 1)}>
        Increment
      </button>
      <button type='button' onClick={() => setCounter(counter - 1)}>
        Decrement
      </button>
    </div>
  );
};

export default App;
