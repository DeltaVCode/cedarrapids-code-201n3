'use strict';
console.log('app js connected');

let allPizzas = [];
let pizzaForm = document.getElementById('pizzaForm');
let pizzaList = document.getElementById('pizzaList');
// console.log({allPizzas, pizzaForm, pizzaList});

function Pizza(pizzaType){
  this.pizzaType = pizzaType;

  this.render = function(){
    const listItem = document.createElement('li');
    listItem.textContent = this.pizzaType;
    pizzaList.appendChild(listItem);
  },
  allPizzas.push(this);
}


function handlePizzaSubmit(event){
  event.preventDefault();

  let newPizza = new Pizza(event.target.pizzaInput.value);
  pizzaForm.reset();
  newPizza.render();

  //one way 
  // const arrayString = JSON.stringify(allPizzas);
  // console.log(arrayString);
  // localStorage.setItem('pizzas', arrayString);
  //way two 
  // localStorage.setItem('pizzas', JSON.stringify(allPizzas));

  //last 
  localStorage.pizzas = JSON.stringify(allPizzas);
  console.log(localStorage.pizzas);


}


