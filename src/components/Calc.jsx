import React, { useState } from 'react';
import './calc.css';

function Calc() {
  const [display, setDisplay] = useState('0');
  const [currentValue, setCurrentValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const inputDigit = (digit) => {
    if (waitingForOperand) {
      setDisplay(String(digit));
      setWaitingForOperand(false);
    } else {
      setDisplay(display === '0' ? String(digit) : display + digit);
    }
  };

  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay('0.');
      setWaitingForOperand(false);
    } else if (display.indexOf('.') === -1) {
      setDisplay(display + '.');
    }
  };

  const clearDisplay = () => {
    setDisplay('0');
    setCurrentValue(null);
    setOperator(null);
    setWaitingForOperand(false);
  };

  const performOperation = (nextOperator) => {
    const inputValue = parseFloat(display);

    if (currentValue === null) {
      setCurrentValue(inputValue);
    } else if (operator) {
      const result = calculate(currentValue, inputValue, operator);
      setDisplay(String(result));
      setCurrentValue(result);
    }

    setWaitingForOperand(true);
    setOperator(nextOperator);
  };

  const calculate = (a, b, op) => {
    switch (op) {
      case '+': return a + b;
      case '-': return a - b;
      case '*': return a * b;
      case '/': return b !== 0 ? a / b : 'Error';
      default: return b;
    }
  };

  const handleEquals = () => {
    if (operator && currentValue !== null) {
      const inputValue = parseFloat(display);
      const result = calculate(currentValue, inputValue, operator);
      setDisplay(String(result));
      setCurrentValue(null);
      setOperator(null);
      setWaitingForOperand(true);
    }
  };

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="keypad">
        {[7, 8, 9, 4, 5, 6, 1, 2, 3, 0].map((digit) => (
          <button key={digit} onClick={() => inputDigit(digit)}>{digit}</button>
        ))}
        <button onClick={inputDecimal}>.</button>
        <button onClick={() => performOperation('+')}>+</button>
        <button onClick={() => performOperation('-')}>-</button>
        <button onClick={() => performOperation('*')}>×</button>
        <button onClick={() => performOperation('/')}>÷</button>
        <button onClick={handleEquals}>=</button>
        <button onClick={clearDisplay}>C</button>
      </div>
    </div>
  );
}

export default Calc;
