'use strict';
console.log('app js connected.');

const pizzaNames = ['Brick-Oven-Pizza', 'Calzone-Pizza', 'Chicago-Pizza', 'Oven-Ginder-Pizza', 'Detroit-Pizza', 'Deluxe-Pizza-Thin-Crust', 'New-York-Pizza', 'Shotgun-Dans-MeatLover'];
let correctPizza = '';
let wrongPizza = '';
let attempts = 0;
const maxAttempts = 10;
const pizzaNameElement = document.getElementById('pizzaName');
const pizzaImagesParent = document.getElementById('pizzaImages');
const responseElement = document.getElementById('response');
const scoreElement = document.getElementById('score');
const attemptsElement = document.getElementById('attempts');

function setup () {
  correctPizza = generateRandomPizza();
  wrongPizza = generateRandomPizza();
  updatePizzaName(correctPizza);
  if (attempts) {
    pizzaImagesParent.removeChild(pizzaImagesParent.lastChild);
    pizzaImagesParent.removeChild(pizzaImagesParent.lastChild);
  }
  renderPizzaImage(correctPizza);
  renderPizzaImage(wrongPizza);
  updateScoreElement();
  updateAttempts();
}

setup();
function generateRandomPizza () {
  const index = Math.floor(Math.random() * pizzaNames.length);
  return pizzaNames[index];
}
function updatePizzaName(pizzaName) {
  pizzaNameElement.textContent = pizzaName;
}
function renderPizzaImage(pizzaName) {
  const img = document.createElement('img');
  img.setAttribute('src', 'images/' + pizzaName + '.jpg');
  img.setAttribute('id', pizzaName);
  pizzaImagesParent.append(img);
}
function renderResponse(response) {
  responseElement.textContent = response;
}

pizzaImagesParent.addEventListener('click', function (event) {
  if (attempts === maxAttempts) {
    return;
  }
  const answer = event.target.getAttribute('id');
  if (answer === correctPizza) {
    incrementScore();
    renderResponse('woohoo! ZA,ZA,ZA,ZA,ZA!');
  } else {
    renderResponse('wrong! Za Alert.');
  }
  attempts++;
  setup();
});


function incrementScore () {
  let score = getScore();
  score++;
  createOrUpdateScore(score);
  updateScoreElement();
}
function getScore () {
  let score = localStorage.getItem('score');
  if (score !== null) {
    score = parseInt(score);
  }
  return score;
}

function createOrUpdateScore (value) {
  value = value.toString();
  localStorage.setItem('score', value);
  const score = localStorage.getItem('score');
  return score;
}

function updateScoreElement(){
  scoreElement.textContent = getScore() || 0;
}

function updateAttempts(){
  attemptsElement.textContent = maxAttempts - attempts;
}


// function deleteScore () {
//   localStorage.removeItem('score');
//   return null;
// }

// function clearAllData () {
//   localStorage.clear();
//   return null;
// }















