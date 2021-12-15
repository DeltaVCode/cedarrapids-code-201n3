'use strict';
console.log('app js file is connected');



function functionName() {
  //pasting in your questions
}
//this makes the function run by calling or invoking our function.
functionName();

//parameter are variable that allow us to give things to our functions, also should human readable

function multiply(number1, number2){
  // console.log('in the mult function', number1);
  let answer = number1 * number2;
  return answer;
}

let result1 = multiply(2,3);
console.log('this is our result from multiply', result1);
let result2 = multiply(50,3000);

//can be access anywhere in our page. 
let globalVar = 'universal';

function scoper(parameter){
  let localVar = 'I like my privacy';
  console.log('inside the function we can see parameter = ', parameter);
  console.log('we can see localVar ' + localVar);
  console.log('global var call universal :' + globalVar);

for(let i = 0; i < 3; i++){
  console.log('the value of i : ', i );
}
// console.log('do we see i from the for loop? :', i);
}

scoper();

console.log('do we still get access to unvi?' + globalVar);
// console.log('do we get the variable from the function? ' + localVar);
console.log('inside the function we can see parmeter: ?? ' + parameter);
