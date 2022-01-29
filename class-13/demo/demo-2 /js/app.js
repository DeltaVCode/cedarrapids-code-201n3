'use strict';
console.log('app js connected.');
//  what about an array of tree objects! that would have file path for picture, and the tree info
// TODO don't repeat the correct picture
// TODO randomize tree image placement

// TODO a way to track a score - score should increment by 1 when they get something right
// TODO a way to track how many attempts they've used - increment attempt in the event handler when any image is clicked
// TODO some way to play again without having to refresh
// TODO a way to stop the event listener from doing its thing when the num of attempts reaches a maximum number
// TODO when they reach the max, show a chart with the score and numAttempts

// Persistence of data
// When we persist data, we need to be able to do four things with it:
// create the data - setItem in localStorage
// retrieve it
// update it - setItem in localStorage
// delete it


//set up  app variables
const pizzaNames = ['Brick-Oven-Pizza', 'Calzone-Pizza', 'Chicago-Pizza', 'Oven-Ginder-Pizza', 'Detroit-Pizza', 'Deluxe-Pizza-Thin-Crust', 'New-York-Pizza', 'Shotgun-Dans-MeatLover'];

let correctPizza = '';
let wrongPizza = '';

let attempts = 0;
let maxAttempts = 10;

const pizzaNameElement = document.getElementById('pizzaName');
const pizzaImagesParent = document.getElementById('pizzaImages');
const responseElement = document.getElementById('response');
const scoreElement = document.getElementById('score');
const attemptsElement = document.getElementById('attempts');
console.log({pizzaNameElement,pizzaImagesParent,responseElement,scoreElement,attemptsElement});



function setUp(){
//1.
   correctPizza =  generateRandomPizza();
//2.
    wrongPizza = generateRandomPizza();
//3.
   updatePizzaName(correctPizza);

   //clear images
   if(attempts){
      pizzaImagesParent.removeChild(pizzaImagesParent.lastChild);   
      pizzaImagesParent.removeChild(pizzaImagesParent.lastChild);   

   }

//4.
  renderPizzaImage(correctPizza);
//5.
  renderPizzaImage(wrongPizza);
//6.
  updateScoreElement();
//7.
  updateAttempts();
}

setUp();

//One Done. Two Done.
function generateRandomPizza(){
  const index =  Math.floor(Math.random() * pizzaNames.length); 
  return pizzaNames[index];   
}
//Three Done.
function updatePizzaName(pizzaName){
  pizzaNameElement.textContent =  pizzaName;
}
//Four and Five Done
function renderPizzaImage(pizzaName){
  const img = document.createElement('img');
  img.setAttribute('src', 'images/' + pizzaName + '.jpg');
  img.setAttribute('id', pizzaName);
  pizzaImagesParent.append(img);
}
//from the event listener render out response
function renderResponse(response) {
  responseElement.textContent = response;
}



pizzaImagesParent.addEventListener('click', function(event){
  if(attempts === maxAttempts){
    return;
  }
     const answer = event.target.getAttribute('id');
     console.log(answer);
     if(answer === correctPizza){
       incrementScore();
       renderResponse('woohoo! you got it right.');
     } else {
       renderResponse('wrong no good.');
     }
     attempts++;
     setUp();
});

function incrementScore(){
  //A.
  let score = getScore();
  // update score
  score++;
  //here is where local storage starts
  //B.
  createOrUpdateScore(score);
  //C.
  updateScoreElement();
}



function getScore(){
  let score = localStorage.getItem('score');
  console.log(score);
  if(score !== null){
    score = JSON.parse(score)
    // score = parseInt(score);
  }
  console.log('in get score', typeof score);
  // return score number to track the score total
  return score;
}


function createOrUpdateScore(value){
   value = value.toString();
   JSON.stringify()
   localStorage.setItem('score', value);
   const score = localStorage.getItem('score');
   return score;
}


//C Done.
function updateScoreElement(){
  scoreElement.textContent = getScore() || 0;
}


function updateAttempts(){
  attemptsElement.textContent = maxAttempts - attempts;
}