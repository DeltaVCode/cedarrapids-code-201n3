'use strict';
console.log('app.js connected');
//declare our globals at the top.
const globalVariable1 = 'hello';
const globalVariable2 = [0,1,2];
const myForm = document.getElementById('my-form');
//create an instance of PersonConstructor and save it to a varable
const bud = new PersonConstructor('Bud', 'Squirrel', 'Macintosh');

function PersonConstructor(first, nickName, last){
this.firstName = first;
this.nickName = nickName;
this.last = last;
}

console.log('what data type do we get', bud);
PersonConstructor.prototype.sayHello = function(){
  console.log('hello my name is ' + this.firstName);
}
function firstFunction(parameter){
  console.log(parameter);
}
function secondFunction(myArray){
  for(let i = 0; i < myArray.length; i++){
    console.log(myArray[i]);
  }
}
function formHandler(event){
  console.log(event.target);
}
myForm.addEventListener('submit', formHandler);

firstFunction(globalVariable1);
//our function calls
bud.sayHello();
//this needs an argument
secondFunction(globalVariable2);



document.getElementById('firstName').addEventListener('input',function(){
console.log(event);
});