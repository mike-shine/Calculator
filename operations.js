function add(num1, num2) {
  name: 'add';
  return +(num1 + num2).toFixed(3);
}

function subtract(num1, num2) {
  name: 'subtract';
  return +(num1 - num2).toFixed(3);
}

function multiply(num1, num2) {
  name: 'multiply';
  return +(num1 * num2).toFixed(3);
}

function divide(num1, num2) {
  name: 'divide';
  return +(num1 / num2).toFixed(3);
}


export {add, subtract, multiply, divide}