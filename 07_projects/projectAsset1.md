# Projects related to DOM

## Project link for practice
[Click Here](https://dom-project-chaiaurcode.stackblitz.io)
# Solution codes :
## Project 1

```javascript
const AllButtons = document.querySelectorAll('.button');
const body = document.querySelector('body');

AllButtons.forEach(function (button){
button.addEventListener('click', function(e){
if(e.target.id === 'grey'){
  body.style.backgroundColor = e.target.id;
}
if(e.target.id === 'white'){
  body.style.backgroundColor = e.target.id;
}
if(e.target.id === 'blue'){
  body.style.backgroundColor = e.target.id;
}
if(e.target.id === 'yellow'){
  body.style.backgroundColor = e.target.id;
}
if(e.target.id === 'purple'){
  body.style.backgroundColor = e.target.id;
}
})
});


```

## Project 2 
``` javascript
const form = document.querySelector('form')

form.addEventListener('submit', function(e){
e.preventDefault();
const height = parseInt(document.querySelector('#height').value);
const weight = parseInt(document.querySelector('#weight').value);
const result = document.querySelector('#results')
if(height < 0 || weight < 0 || isNaN(height) || isNaN(weight)){
  result.innerHTML = 'Please enter valid height and weight'
}
else{
  var bmi = ((weight * 10000)/(height*height)).toFixed(2);
  result.innerHTML = bmi
}
let inference;
if(bmi < 18.6){
  inference = `You are under-weight`
}
else if(bmi >= 18.6 && bmi <= 24.9){
  inference = `You have normal weight` 
}
else{
  inference = `You are over weight`
}
const parent_inference = document.querySelector('#weight-guide')
const newElement = document.createElement('p')
newElement.appendChild(document.createTextNode(inference));
parent_inference.appendChild(newElement);

});
```
## Project 3
```javascript
const clock = document.querySelector('#clock');

setInterval(function(){
  let date = new Date()
  clock.innerText = date.toLocaleTimeString()
}, 1000)
```
## Project 4 (My try) - Not a good solution

```javascript

const guessField = document.querySelector('#guessField');
const submit = document.querySelector('#subt');
const displayDiv = document.querySelector('.resultParas');
const guesses = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const randomNum = Math.floor(Math.random() * 100 + 1);
console.log(randomNum);
let isPlayyable = true;

submit.addEventListener('click', function (e) {
  e.preventDefault();
  const CurrGuess = parseInt(guessField.value);

  if (validateCurrGuess(CurrGuess) && (isPlayyable == true)) {
    checkCurrGuess(CurrGuess);
  } else {
    const warning = document.createElement('p');
    warning.setAttribute('id', 'warning')
    warning.appendChild(document.createTextNode('Enter a valid Number!'));
    const findd = document.querySelector('#warning');
    if(findd == null){
      displayDiv.appendChild(warning);
    }
  }
});

function validateCurrGuess(guess) {
  if (isNaN(guess) || guess < 1 || guess > 100) {
    return false;
  } else {
    return true;
  }
}

let PrevGuesses = [];
let remainingGuesses = 10;

function checkCurrGuess(guess) {
  if (guess === randomNum) {
    displayDiv.innerHTML = 'Your guess is correct, Congrats Genius!';
    isPlayyable = false
    StartOver();
  } else if (guess < randomNum) {
    lowOrHi.appendChild(document.createTextNode('Too Low!'));
    changeMetrics(guess);
  } else {
    lowOrHi.appendChild(document.createTextNode('Too High!'));
    changeMetrics(guess);
  }
}

function changeMetrics(guess) {
  if (remainingGuesses <= 0) {
    displayDiv.innerHTML = "You're out of moves";
    isPlayyable = false;
    StartOver();
  } else {
    remainingGuesses--;
    PrevGuesses.push(guess);
    guesses.innerHTML = PrevGuesses;
    remaining.innerHTML = remainingGuesses;
  }
}

function StartOver(){
  const StartOver = document.createElement('button');
  StartOver.appendChild(document.createTextNode('Play Again'));
  StartOver.setAttribute('id', 'pAgain')
  const wrapperDiv = document.querySelector('#wrapper')
  if(!document.querySelector('#pAgain')){
    wrapperDiv.appendChild(StartOver)
  }
  StartOver.addEventListener('click', function(e){
    isPlayyable = true;
  })
 
}




```

## Project 4 Solution

```javascript
let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 0;

let playGame = true;

if(playGame){
  submit.addEventListener('click', function(e){
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert('Please enter a valid Number');
  } else if(guess < 1){
    alert('Please enter number greater than 0');
  } else if(guess > 100){
    alert('Please enter number less than 101');
  } else{
    prevGuess.push(guess);
    if(numGuess == 10){
      UpdateValues(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else{
      UpdateValues(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess){
  if(guess == randomNumber){
    displayMessage('You guesses it right!');
    endGame();
  } else if(guess < randomNumber){
    displayMessage('Number is Too low');
  } else {
    displayMessage('Number is Too high');
  }
  
}

function UpdateValues(guess){
  userInput.value = '';
  guessSlot.innerHTML += `${guess} `;
  numGuess++;
  remaining.innerHTML = `${10 - numGuess}`;
}

function displayMessage(message){
  lowOrHi.innerHTML =  `<h2>${message}</h2>`;
}

function endGame(){
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame(){
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click', function(e){
    randomNumber =  parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 0;
    remaining.innerHTML = '10';
    guessSlot.innerHTML = '';
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    lowOrHi.innerHTML = '';
    playGame = true;
  })
}
```