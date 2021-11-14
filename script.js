const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;

function isop(a) {
  return a == "+" || a == "-" || a == "*" || a == "/";
}
function operate(a, b, op) {
  switch (op) {
    case "+":
      return add(a, b);
      break;
    case "-":
      return sub(a, b);
      break;
    case "*":
      return mul(a, b);
      break;
    case "/":
      return div(a, b);
      break;
  }
}
function evaluate() {
  let res = document.querySelector(".result");
  let str = res.textContent;
  let operand = str.split(/[^0-9.]/);
  let op = str.split(/[0-9]/);
  let a, b;
  for (let i = 0; i < op.length; i++) {
    if (isop(op[i])) {
      a = parseFloat(operand.shift());
      b = parseFloat(operand.shift());
      operand.unshift(operate(a, b, op[i]));
    }
  }
  res.textContent = parseFloat(operand[0]).toFixed(2);
}

function input(e) {
  let exp = document.querySelector(".result");
  if (
    e.target.className == "clear" ||
    e.target.className == "delete" ||
    e.target.className == "eq"
  )
    return;
  exp.textContent += e.target.className;
}
let eq = document.querySelector(".eq").addEventListener("click", evaluate);
let del = document.querySelector(".delete").addEventListener("click", () => {
  let exp = document.querySelector(".result");
  exp.textContent = exp.textContent.substr(0, exp.textContent.length - 1);
});
let btns = document.querySelectorAll(".buttons");
btns.forEach((btn) => {
  btn.addEventListener("click", input);
});
let cl = document.querySelector(".clear").addEventListener("click", () => {
  document.querySelector(".result").textContent = "";
});

window.addEventListener("keydown", function (e) {
  let exp = document.querySelector(".result");
  if (isop(e.key)) exp.textContent += e.key;
  else if (Number.isInteger(parseInt(e.key))) exp.textContent += e.key;
  if (e.key == "=" || e.key == "Enter") evaluate();
  if (e.key == "Backspace")
    exp.textContent = exp.textContent.substr(0, exp.textContent.length - 1);
});
