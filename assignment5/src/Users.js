import React, { useState } from 'react';
import "./App.css"
function Users() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleCalculation = (operation) => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    let calculationResult;

    if (isNaN(number1) || isNaN(number2)) {
      calculationResult = 'Please enter valid numbers.';
    } else {
      switch (operation) {
        case 'add':
          calculationResult = number1 + number2;
          break;
        case 'subtract':
          calculationResult = number1 - number2;
          break;
        case 'multiply':
          calculationResult = number1 * number2;
          break;
        case 'divide':
          if (number2 === 0) {
            calculationResult = 'Division by zero is not allowed.';
          } else {
            calculationResult = number1 / number2;
          }
          break;
        default:
          calculationResult = 'Invalid operation.';
      }
    }

    setResult(calculationResult);
  };

  return (
    <>
      <div className="container col-md-4 mx-auto">
        <div className="row">
          <div className="card">
          <div class="card-header">
            <h1>Calculator</h1>
            <label for="exampleInputEmail1">num 1</label>
            <input type="number" class="form-control" id="num1" value={num1} onChange={(e) => setNum1(e.target.value)} />
            {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
          
          
            <label for="exampleInputPassword1">Num 2</label>
            <input type="number" class="form-control" id="num2" value={num2} onChange={(e) => setNum2(e.target.value)} />
            </div>
          <div class="card-body">
          <button class="btn btn-primary" onClick={() => handleCalculation('add')} >Add</button>
          <button class="btn btn-primary" onClick={() => handleCalculation('subtract')}>Subtract</button>
          <button class="btn btn-primary" onClick={() => handleCalculation('multiply')}>Multiply</button>
          <button class="btn btn-primary" onClick={() => handleCalculation('divide')}>Divide</button>
          </div>

         

          <div className="card-footer">Result: {result}</div>
        </div>
        </div>
        </div>
      

    </>

  );
}

export default Users;
