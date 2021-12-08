'use strict';
console.log('app.js is connected.');

//prompt user for input
//let declaration 
let userName;
// console.log('this is the user name. ', userName);

while(!userName) {
  userName = prompt('What is your name?');
}

// console.log('after while loop', userName);
alert('Hello new friend ' + userName);
  let lowerCaseName = userName.toLowerCase();
  console.log(lowerCaseName);


//lets validate our user input
if(lowerCaseName === 'craig' || lowerCaseName === 'bob'){
  alert('Welcome back to my page. ' + userName);
} else {
  alert('Welcome new user to my page.');
}

// Comparison Operators: evaluating conditions.
// ==  is equal to
// !=  is not equal to
// > greater than
// < less than
// === strict equal to
// !== strict not equal to
// >= greater than or equal to
// <= Less than or equal to


// Logical Operators
// && logical And   ((2 < 5) && (3 >= 2))
// || Logical OR  ((2<5) || (2 < 1))
// ! Logical  Not   !(2 < 1)


// logical operator example
// let myBooleenValueTrue = true;
// let anotherBooleenValueFalse = false;
// let thirdBooleenValueTrue = true;
//else if
// let myBooleenValueTrue = true;
// let anotherBooleenValueFalse = false;
// let thirdBooleenValueTrue = false;
//next else if
// let myBooleenValueTrue = false;
// let anotherBooleenValueFalse = false;
// let thirdBooleenValueTrue = true;
//else
// let myBooleenValueTrue = false;
// let anotherBooleenValueFalse = false;
// let thirdBooleenValueTrue = false;

// if(condition is true){
//   then do this.
// } else {
//   must have not been true
// }
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


