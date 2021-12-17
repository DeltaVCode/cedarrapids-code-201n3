'use strict';
console.log('app js file is connected');



// function functionName() {
//   //pasting in your questions
// }
// //this makes the function run by calling or invoking our function.
// functionName();

// //parameter are variable that allow us to give things to our functions, also should human readable

// function multiply(number1, number2){
//   // console.log('in the mult function', number1);
//   let answer = number1 * number2;
//   return answer;
// }

// let result1 = multiply(2,3);
// console.log('this is our result from multiply', result1);
// let result2 = multiply(50,3000);

// //can be access anywhere in our page. 
// let globalVar = 'universal';

// function scoper(parameter){
//   let localVar = 'I like my privacy';
//   console.log('inside the function we can see parameter = ', parameter);
//   console.log('we can see localVar ' + localVar);
//   console.log('global var call universal :' + globalVar);

// for(let i = 0; i < 3; i++){
//   console.log('the value of i : ', i );
// }
// // console.log('do we see i from the for loop? :', i);
// }

// scoper();

// console.log('do we still get access to unvi?' + globalVar);
// // console.log('do we get the variable from the function? ' + localVar);
// console.log('inside the function we can see parmeter: ?? ' + parameter);


//Continue with more functions. 

function circleOne(radius){
// console.log('inside the circle one function?');

let area = Math.PI * radius * radius;
// console.log(area);
let circumference = 2 * Math.PI * radius;
// console.log(circumference);
let results = [area, circumference];
// console.log('our math results: ',results);
// return our values
return results;

}
//this is a function call with and argument value. 
let functionResults = circleOne(3);
console.log('our vari return array', functionResults);

///////////////////////////////////////////////
//function expression 
let circleTwo = function(rad){
  let area = Math.PI * rad * rad;
  let cir = Math.PI * 2 * rad;
  return [area, cir];
}
// circleTwo(5);
// console.log('funct results from 2nd function.', circleTwo(5));

//IIFE 
// (function(){
//   let userID = 1234;
//   if(userID){
//     console.log('user with ID: ' + userID + ' is logged in.');
//   } else {
//     console.log('user is not logged in.');
//   }
// })();
// we dont need to do this. 
// checkLogin();
// console.log(checkLogin);

function yesOrNoPrompt(promptInfo){
  let userInput = prompt(promptInfo);
  if(userInput === 'yess'){
    console.log('hurray');
  } else if(userInput === 'no'){
    console.log('nope not here.');
  } else if(userInput === 'maybe'){
    console.log('make up your mind');
  } else {
    console.log('ERROR: incorrect input.');
  }
}

// yesOrNoPrompt('whell yess or no');
// yesOrNoPrompt('how about yess or no');



// index           0        1         2            3          4      5       6
let states = ['ILLINOIS', 'IOWA', 'ARKANSAS', 'CALIFORNIA','TEXAS','OMAN','GERMANY'];
console.log('states length:', states.length);
//this a variable declaration that has not been assigned a value. 
// let attempts; 
//creating variable and we are assigning it a value of zero.
let attempts = 0;
let correctAnswer = 0;
while(attempts !== 7){
  let userAnswer = prompt('What states of the world, have I lived in?');
  let userAnswerTrimmedToUpper = userAnswer.toUpperCase().trim();
  console.log(userAnswerTrimmedToUpper);
  // The indexOf() method returns the position of the first occurrence of a specified value in a string.
  if(states.indexOf(userAnswerTrimmedToUpper) >= 0) {
    alert('Yes! ' + userAnswer + ' is one of my favorite states!');
    correctAnswer++;
  } else {
    alert('WRONG');
  }
  attempts++;
}
alert('All states that I lived in are: ' + states.join(', '));
alert('You answered ' + correctAnswer + ' out of 7 correctly');
alert('Thanks for Playin...');
let results = document.getElementById('results');
let finalResults = 'You guessed ' + attempts + ' and got ' + correctAnswer + ' correct answer.';
results.innerHTML = finalResults;
