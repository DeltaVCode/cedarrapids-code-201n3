'use strict';
//first thing to do
console.log('This file is connected.');


//prompt our user for input data
let userName;
console.log(userName);

while (!userName) {
  userName = prompt('Enter your name!');
}


//Greet the user
alert('Hello ' + userName);

//convert the input to lowerCase
let lowerCaseName = userName.toLowerCase();
console.log(lowerCaseName);



//Validate the input using conditional logic using strict equals.
if(lowerCaseName === 'craig' || lowerCaseName === 'bob') {
  alert('Welcom back to my page, ' + userName);
} else {
  alert('Welcome new user to my page.');
}




 



/////////////////////////////////////////////////////
// logical operator example
// var myBooleenValueTrue = true;
// var anotherBooleenValueFalse = false;
// var thirdBooleenValueTrue = true;
//else if
let myBooleenValueTrue = true;
let anotherBooleenValueFalse = false;
let thirdBooleenValueTrue = false;
//next else if
// var myBooleenValueTrue = false;
// var anotherBooleenValueFalse = false;
// var thirdBooleenValueTrue = true;
//else
// var myBooleenValueTrue = false;
// var anotherBooleenValueFalse = false;
// var thirdBooleenValueTrue = false;

if (myBooleenValueTrue && thirdBooleenValueTrue){
  alert('The && will run if both are true');
  console.log('both values were true');
} else if(myBooleenValueTrue || anotherBooleenValueFalse){
  alert('The || will run if both are true');
  console.log('one of values was true');
} else if(thirdBooleenValueTrue){
  alert('the 3rd value was tru so this will run');
  console.log('thirdBooleenValueTrue was true');
} else {
  console.log('There were no true values');
}

//////////////////////////////////////////////////////////////////////////////
//create an empty array
var emptyArray = [];
//Create an array full of "quiz answers" by putting the answers into the array
console.log(emptyArray);


//                 0   1   2   3   4
var quizAnswer = ['b','c','d','a','c'];
console.log(quizAnswer);



//nested array
var nestedArray = [['yes', 'y'], ['no', 'n'],['maybe', 'maybeNot']];
console.log(nestedArray);



//multiline
var nestedArrayMultiLine  = [
  ['yes', 'y'],
  ['no', 'n'],
  ['maybe', 'maybeNot']
];
console.log(nestedArrayMultiLine);

/////////////////////////////////////////////////////////////////////////////////////////


// we don't always have to commit to a specific data type
let mixedDataTypes = ['Harry', 'Potter', 10, true, 'magic'];
console.log('Mixed Data Types',mixedDataTypes);


let myArray = ['a', 'b', 'c'];
myArray[0] = 'z'; // myArray is now equal to ['z' 'b', 'c']
console.log('My Array at position 0',myArray[0]);
//We can easily check if a specific index in the array is equal to specific value

let myArrayOne = ['a', 'b', 'c'];
if(myArrayOne[1] === 'b')
{
  // do something here
  console.log('This is where we add the message', myArrayOne[1]);
}
//If we wanted to "add" an item to the end of the array, we can do so by the .push() method.

let myArrayTwo = [1,2,3,4,5];
myArrayTwo.push(6);
console.log('My Array Two', myArrayTwo);
// myArray now is equal to [1,2,3,4,5,6]
//To remove an item from the end of an array, is a .pop().

let myArrayThree = [1,2,3,4,5];
myArrayThree.pop();
console.log('My Array Three',myArrayThree);
// myArray is now equal to [1,2,3,4]





alert('Welcome to 4 Part spaceship repair.');
var spaceHandle = prompt('What\'s your space name');
var spaceShipPart = prompt('What spaceship part do you need?, 1 through 4');

// convert the variable of color to lower case and evaluate it
switch (spaceShipPart) {
case '1':
  console.log('This is Part One.');
  break;
case '2':
  confirm(spaceHandle + 'you need Part Two?');
  alert(spaceHandle + 'You will recieve your part in two to three light years.');
  console.log('your favorite color was blue!');
  break;
case '3':
  alert('This is Part Three.');
  console.log('your favorite color was blue!');
  break;
case '4':
  alert('This is Part Four.');
  console.log('your favorite color was blue!');
  break;

default:
  alert('i don\'t know if your ship will ever fly again?,  ¯\\_(ツ)_//¯');
}


alert('Bye for now ' + spaceHandle);


//Lab2 tech requirements

//  short biography
//  education history,
//  overview of your job experience,
//  goals that you may have.
//  Prompt the user a total of exactly five yes or no questions.


// The user input for the answer must accept either y/n or yes/no responses 
// toUpperCase() or .toLowerCase() 
// let the user know if they answered the question correctly by alerting them with a response.
// console.log() messages within your app then alerts


// personalized welcome message so that I feel like I am interacting with the site owner.
// Ask the user their name through a prompt()

// Display that name back to the user at the start and the final message to the user.

// Your JS file must contain a 'use strict' declaration at the top, 
// and your javascript file must be linked in your html file as an external script file.
// Make sure that all code is cleanly written use formatter
// Follow the Add, Commit, Push process. 

// Push yourself in your CSS work.
//  Experiment, try some layout feature or technique that you have not tried before
//   (maybe a sticky header
//      or sticky footer, 
//      icon fonts such as FontAwesome