import React, { useState } from 'react';
import './App.css'; // Import your CSS file here

function Calculator() {
  const [input, setInput] = useState('');

  // Function to handle button clicks
  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setInput(eval(input).toString()); // Set input to the result
      } catch (error) {
        setInput('Error');
      }
    } else if (value === 'C') {
      setInput('');
    } else if (value === '<'){
      setInput(input.slice(0, -1))
    } 
    else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <div id="display" > {input} </div>
      </div>
      <div className="button-row">
        <button onClick={() => handleButtonClick('C')}>C</button>
        <button onClick={() => handleButtonClick('<')}> ⌫ </button>
        <button onClick={() => handleButtonClick('00')}>00</button>
        <button onClick={() => handleButtonClick('+')}>＋</button>
      </div>
      <div className="button-row">
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick('-')}>‒</button>
      </div>
      <div className="button-row">
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('*')}>×</button>
      </div>
      <div className="button-row">
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('/')}>÷</button>
      </div>
      <div className="button-row-last">
        <div className='button-row-1' id="btn-2">
          <button className='btn-1' onClick={() => handleButtonClick('0')}>0</button>
          <button className='btn-1' onClick={() => handleButtonClick('.')}>.</button>
        </div>
        <div className='button-row-1' id="btn-1">
          <button className='btn-1' onClick={() => handleButtonClick('=')}>＝</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
