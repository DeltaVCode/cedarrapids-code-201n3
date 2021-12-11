'use strict';
console.log('this app.js file is connected.');


//global variables
let userPoints = 0;
console.log('user points is: ', userPoints);

alert('hello and welcome to the guessing game.');

let user;
while(!user) {
  user = prompt('What is your name, Please, provide it now!');
}

let userName = user.toLowerCase().trim();
console.log('user name lower case: ', userName);


// THE USER VARIABLE
// - string
// - null
// " " empty

//If the user is empty string or null, keep asking them for their name.

// while(user === ' ' || user === null){
// do something.
//  }


//SHORTER VERSION
// while(!user) {
//   user = prompt('what is your name, Please, provide it now!');
// }

//////////////////////////////////////////

//Control flow, in javascript

// if(condition){......}
// if(condition){....} else {.......}
// if(condition){.....} else if(second condition) {....} else {.....}
// if(condition){.....} else if(second condition) {....} else if (thirdCondition) {.....} else {.......}
// if(condition){.....} else if(x === x || y != z) {....} else if (thirdCondition) {.....} else if (fourth condition){....} else {.......}

// COMPARISON OPERATORS
/**
      <  - less than.
      >  - great than
      <  - less than or equal to
      >= - great then or equal to

      == - kinda equals
      != - kinda not equals

      strict check for exact data types to be the same
      === - strictly equals
      !== - strictly not equals
*/

if(user !== 'bob'){
  console.log('bob : ', user);
  alert('this is not the lower we were looking for.');
} else {
  console.log('there you are');
}


//user points
let answer = prompt('Is my favorite food popcorn? Please type yes or no.').toLowerCase();

if(answer === 'no' || answer === 'n'){
  alert('You are right, popcorn is not my favorite');
  userPoints = userPoints + 1;
  // userPoints += 1;
  // userPoints++;
  // console.log(userPoints);
} else {
  alert('popcorn is good but you get no points.');
  // console.log(userPoints);
}


// Loops Loops
console.log(0);
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);


// Use a loop to run code many times
console.log('While loops require a starting variable, in this case a variable set to 0');

let count = 0;
while(count <= 50){
  // console.log(count);
  count = count + 5;
}
console.log('While loops need an expression to change the starting variable, in this case we are increasing the value by 5 each time the loop runs');

//decrease or decrement our value
count = 50;
while(count >= 40) {
  // console.log('while loop count starts 50: ',count);
  count = count - 2;
}


/**  multi line comment.
          WHILE LOOPS  will run until a condition is true or truthy, or not true!!

          while(condition){

              something has to change
          }

          let i = 0;
          while(i < value){
            count our iterations or times through the loop
            i += 1;
            i++;
            i = i + 1
          }

          DO WHILE
          do {
            here code runs first and always then the condition is checked.
            }
             while(condition)

*/


let newUser;
do {
  newUser = prompt('A New User Name?');
  console.log('New User Name', newUser);
} while (!newUser);
console.log(newUser);



//create new global variable
let zenTime;
do {
  zenTime = prompt('Is today good?');
  zenTime = zenTime && zenTime.toUpperCase();
  console.log('zen time', zenTime);
  if (zenTime) { // or zenTime == null or zenTime === null
    zenTime = zenTime.toUpperCase();
  }
  console.log('Good?', zenTime);

} while(zenTime !== 'N' && zenTime !== 'Y');
console.log('zenTime', zenTime);


/*
      Evaluating Comparisons
      Type coercion, weak typing, truthy/falsy
      falsy values are :
      - 0
      - null
      - NaN
      - ''
      - undefined
      - false

      truthy values. === everything else.

      Logical Operators
      - (craig === 'instructor' || 'teacher')    => will not Work

      Combining conditions:
      - Not: !
      - And: &&
      - Or:  ||

      // - (craig === 'instructor' || craig === 'teacher' ||)

      Short-circuiting:
      - If we know the answer from the first expression, don't evaluate the second expression
        Logical operators work from left -> right, and stop as soon as they get a result. When they stop, they return whatever value stopped them, so we can write logical expressions that return a value other than true or false. This can be used to set default values.

        let name1 = 'Dan';
        let name2 = '';
        let userName1 = (name1 || 'unknown'); -> userName1 = 'Dan'
        let userName2 = (name2 || 'unknown'); -> userName2 = 'unknown'


      Any existing value is considered truthy, so we can use a conditional to check whether something exists:
*/

let a = null;
let obj = '';

if(a){
  console.log('a exist');
} else {
  console.log('nothing printed');
}
if (a && obj){
  console.log('they both exist!');
} else {
  console.log('nothing printed again');
}
