/* Large section/structural components */

const body = document.querySelector('body');

const largeContainer = document.createElement('div');
body.appendChild(largeContainer);

const displayContainer = document.createElement('div');
largeContainer.appendChild(displayContainer);

const buttonContainer = document.createElement('div');
largeContainer.appendChild(buttonContainer);

const lineBreak = document.createElement('br');


/* Numerical buttons appended to the DOM */

const number7Button = document.createElement('button');
number7Button.textContent = '7';
number7Button.classList.add('numberButton')
buttonContainer.appendChild(number7Button);


const number8Button = document.createElement('button');
number8Button.textContent = '8';
number8Button.classList.add('numberButton')
buttonContainer.appendChild(number8Button);


const number9Button = document.createElement('button');
number9Button.textContent = '9';
number9Button.classList.add('numberButton')
buttonContainer.appendChild(number9Button);

buttonContainer.appendChild(lineBreak);

const number4Button = document.createElement('button');
number4Button.textContent = '4';
number4Button.classList.add('numberButton')
buttonContainer.appendChild(number4Button);


const number5Button = document.createElement('button');
number5Button.textContent = '5';
number5Button.classList.add('numberButton')
buttonContainer.appendChild(number5Button);


const number6Button = document.createElement('button');
number6Button.textContent = '6';
number6Button.classList.add('numberButton')
buttonContainer.appendChild(number6Button);

buttonContainer.appendChild(lineBreak);

const number1Button = document.createElement('button');
number1Button.textContent = '1';
number1Button.classList.add('numberButton')
buttonContainer.appendChild(number1Button);


const number2Button = document.createElement('button');
number2Button.textContent = '2';
number2Button.classList.add('numberButton')
buttonContainer.appendChild(number2Button);


const number3Button = document.createElement('button');
number3Button.textContent = '3';
number3Button.classList.add('numberButton')
buttonContainer.appendChild(number3Button);



/* Operations buttons appended to DOM */

const plusButton = document.createElement('button');
plusButton.textContent = '+';
plusButton.classList.add('operationButton')
buttonContainer.appendChild(plusButton);

const minusButton = document.createElement('button');
minusButton.textContent = '-';
minusButton.classList.add('operationButton')
buttonContainer.appendChild(minusButton);

const multiplyButton = document.createElement('button');
multiplyButton.textContent = 'x';
multiplyButton.classList.add('operationButton')
buttonContainer.appendChild(multiplyButton);

const divideButton = document.createElement('button');
divideButton.textContent = '÷';
divideButton.classList.add('operationButton')
buttonContainer.appendChild(divideButton);

const equalsButton = document.createElement('button');
equalsButton.textContent = '=';
equalsButton.classList.add('equalsButton')
buttonContainer.appendChild(equalsButton);
