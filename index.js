function clearDisplay () {
  document.getElementById('display').value = "";
}

function appendToDisplay(val) {
  document.getElementById('display').value += val;
  return val;
}

function calculate() {
  const answer = document.getElementById('display');
  const expression = answer.value;
  answer.value=eval(expression);
  return expression;
  
}