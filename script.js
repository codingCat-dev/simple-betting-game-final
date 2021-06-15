'use strict';

const gameMessage = document.querySelector('.message');
const creditAmmount = document.querySelector('.credit-ammount');
const diceContainer = document.querySelector('.dice-container');
const inputNumber = document.getElementById('number');
const buttonBet = document.querySelector('.input-button');
// create element
const diceImage = document.createElement('image');

//display message function
const displayMessage = message => {
  gameMessage.textContent = message;
  setTimeout(() => {
    gameMessage.textContent = '';
  }, 1200);
};
// Append element function
const appendElement = () => {
  diceContainer.appendChild(diceImage);
  setTimeout(() => {
    diceContainer.removeChild(diceImage);
  }, 1200);
};
// disable button function
const disableButton = () => {
  buttonBet.disabled = true;
  setTimeout(() => {
    buttonBet.disabled = false;
  }, 1200);
};

// credit ammount
let credit = 3000;
creditAmmount.innerHTML = credit;

const updateCreditWin = () => {
  credit = credit + 300;
  creditAmmount.innerHTML = credit;
};
const updateCreditLoss = () => {
  credit = credit - 100;
  creditAmmount.innerHTML = credit;
};

buttonBet.addEventListener('click', () => {
  let number = Math.floor(Math.random() * 6) + 1;
  diceImage.innerHTML = `<img class="dice" src="img//dice-${number}.png" alt="dice-number-${number}"></img>`;

  const inputValue = +inputNumber.value;
  if (!inputValue) {
    displayMessage('Please Enter Number');
    return (inputNumber.value = '');
  }
  if (inputValue > 6) {
    displayMessage('Maximum Input Number is 6');
    return (inputNumber.value = '');
  }
  if (inputValue < 1) {
    displayMessage('Minimum Input Number is 1');
    return (inputNumber.value = '');
  }
  if (inputValue === number) {
    displayMessage('Congratulations! You Won 300');
    appendElement();
    disableButton();
    updateCreditWin();
  }
  if (inputValue !== number) {
    displayMessage('Sorry! You lost 100, Try Again!');
    appendElement();
    disableButton();
    updateCreditLoss();
  }

  return (inputNumber.value = '');
});
