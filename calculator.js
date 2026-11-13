// const buttonGrid = document.querySelector(".buttonGrid");
// initial = 4;
// drawButtons(initial);

// function drawButtons(number) {
//   const fragment = document.createDocumentFragment();
//   let flexBasis = 100 / number;

//   for (let i = 0; i < number * number; i++) {
//     const div = document.createElement("div");
//     div.style.flex = `0 0 ${flexBasis}%`;
//     div.style.height = `${flexBasis}%`;
//     // div.classList.add("grid-cell");
//     fragment.append(div);
//   }
//   buttonGrid.append(fragment);
// }

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

let num1;
let num2;
let operator;

function operate(operator, num1, num2) {
  if (operator === "+") return add(num1, num2);
  else if (operator === "-") return subtract(num1, num2);
  else if (operator === "*") return multiply(num1, num2);
  else if (operator === "/") return divide(num1, num2);

  return operator(num1, num2);
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
};
