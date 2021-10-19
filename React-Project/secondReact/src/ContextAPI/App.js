import React from 'react';
import Component1 from './Component1';
import { NameProvider } from './Context';

function App() {
  return (
    <NameProvider>
      <>
        <div>
          <Component1 />
        </div>
      </>
    </NameProvider>
  );
}

export default App;
