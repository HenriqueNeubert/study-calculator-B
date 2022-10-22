const buttons = document.querySelectorAll('.number')
const operators = document.querySelectorAll('.operation');
let current = document.querySelector('#current-operations');

//DECLARAÇÕES

//FUNÇÕES

function handleCalculateNumber(elem)
{  
  current.innerHTML = current.innerHTML + elem;
}

function handleCalculateOperator(elem)
{  
  if(current.innerText){

  }
  current.innerHTML = current.innerHTML + ' ' + ' ' + elem;
}


//EVENTOS
buttons.forEach(function (button){
  button.addEventListener('click', () => {
    handleCalculateNumber(button.innerText)
  });
});

operators.forEach(function (operator){
  operator.addEventListener('click', () => {
    handleCalculateOperator(operator.innerText)
  });
});