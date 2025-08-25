const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const multiply = function (a, b) {
  return a * b;
};

const divide = function (a, b) {
  if (b === 0) return "Error";
  return a / b;
};


function operate(numberA, numberB, operator) {
  let a = Number(numberA);
  let b = Number(numberB);
  if (operator === "+") return add(a, b);
  if (operator === "-") return subtract(a, b);
  if (operator === "*") return multiply(a, b);
  if (operator === "/") return divide(a, b);
  return "Error";
}
const btn0 = document.querySelector("#btnNum0");
const btn1 = document.querySelector("#btnNum1");
const btn2 = document.querySelector("#btnNum2");
const btn3 = document.querySelector("#btnNum3");
const btn4 = document.querySelector("#btnNum4");
const btn5 = document.querySelector("#btnNum5");
const btn6 = document.querySelector("#btnNum6");
const btn7 = document.querySelector("#btnNum7");
const btn8 = document.querySelector("#btnNum8");
const btn9 = document.querySelector("#btnNum9");

const btnAdd = document.querySelector("#btnAdd");
const btnSub = document.querySelector("#btnSubtract");
const btnDiv = document.querySelector("#btnDiv");
const btnMul = document.querySelector("#btnMultiply");
const btnClear = document.querySelector("#btnClear");
const btnResult = document.querySelector("#btnResult");

const para = document.querySelector("#result");

let numA = "";
let numB = "";
let operator = "";
let waitingForNewNumber = false;

function updateDisplay() {
  para.textContent = numA + (operator ? " " + operator + " " : "") + numB;
}

function handleNumber(value) {
  if (waitingForNewNumber) {
    numA = "";
    numB = "";
    operator = "";
    waitingForNewNumber = false;
  }

  if (!operator) {
    numA += value;
  } else {
    numB += value;
  }
  updateDisplay();
}

function handleOperator(value) {
  if (numA && numB) {
    numA = operate(numA, numB, operator).toString();
    numB = "";
  }
  operator = value;
  updateDisplay();
}

function handleResult() {
  if (!numA || !numB) {
    return;
  }
  numA = operate(numA, numB, operator).toString();
  numB = "";
  operator = "";
  waitingForNewNumber = true;
  updateDisplay();
}

function handleClear() {
  numA = "";
  numB = "";
  operator = "";
  waitingForNewNumber = false;
  updateDisplay();
}

btn0.onclick = () => handleNumber(0);
btn1.onclick = () => handleNumber(1);
btn2.onclick = () => handleNumber(2);
btn3.onclick = () => handleNumber(3);
btn4.onclick = () => handleNumber(4);
btn5.onclick = () => handleNumber(5);
btn6.onclick = () => handleNumber(6);
btn7.onclick = () => handleNumber(7);
btn8.onclick = () => handleNumber(8);
btn9.onclick = () => handleNumber(9);

btnAdd.onclick = () => handleOperator("+");
btnSub.onclick = () => handleOperator("-");
btnDiv.onclick = () => handleOperator("/");
btnMul.onclick = () => handleOperator("*");

btnClear.onclick = handleClear;
btnResult.onclick = handleResult;
