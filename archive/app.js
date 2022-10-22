const buttons = document.querySelectorAll('.number')
const operators = document.querySelectorAll('.operation');
let current = document.querySelector('#current-operations');
let previous = document.querySelector('#previous-operations');

//DECLARAÇÕES

//FUNÇÕES

function handleCalculateNumber(elem) {
  if (previous.innerText === '') {
    current.innerHTML = current.innerHTML + elem;
  } else {
    const operator = previous.innerText.slice(-1);
    const previousUpdate = previous.innerText.slice(0, -1);
    const result = previous.innerText + operator + current.innerText;
    console.log(result);
  }
}

function handleCalculateOperator(elem) {
  if (current.innerText != "") {
    previous.innerText = current.innerText + elem;
    current.innerText = '';
  }
}


//EVENTOS
buttons.forEach(function (button) {
  button.addEventListener('click', () => {
    handleCalculateNumber(button.innerText)
  });
});

operators.forEach(function (operator) {
  operator.addEventListener('click', () => {
    handleCalculateOperator(operator.innerText)
  });
});