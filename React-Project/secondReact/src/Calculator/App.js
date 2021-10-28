import React, { useState } from 'react';
import './index.css';

function App() {
  const [calc, setCalc] = useState('');
  const [results, setResults] = useState('');

  const operators = ['/', '+', '-', '*', '.'];

  function digits() {
    const digits = [];

    for (let i = 1; i < 10; i++) {
      digits.push(
        <button onClick={() => updateCal(i.toString())} key={i}>
          {i}
        </button>
      );
    }
    return digits;
  }

  function updateCal(value) {
    if (
      (operators.includes(value) && calc === '') ||
      (operators.includes(value) && operators.includes(calc.slice(-1)))
    ) {
      return;
    }

    setCalc(calc + value);

    if (!operators.includes(value)) {
      setResults(eval(calc + value).toString());
    }
  }

  function calculate() {
    setCalc(calc);
  }

  function deleteLast() {
    if (calc === '') {
      return;
    }
    const value = calc.slice(0, -1);
    console.log('VALUE', value);
    setCalc(value);
  }

  return (
    <div className='app'>
      <div className='calcu'>
        <div className='display'>
          {results ? <span>({results})</span> : ''}
          {calc || '0'}
        </div>
        <div className='operators'>
          <button onClick={() => updateCal('/')}>/</button>
          <button onClick={() => updateCal('*')}>*</button>
          <button onClick={() => updateCal('+')}>+</button>
          <button onClick={() => updateCal('-')}>-</button>
          <button onClick={deleteLast}>DEL</button>
        </div>
        <div className='digits'>
          {digits()}
          <button onClick={() => updateCal('0')}>0</button>
          <button onClick={() => updateCal('.')}>.</button>

          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
