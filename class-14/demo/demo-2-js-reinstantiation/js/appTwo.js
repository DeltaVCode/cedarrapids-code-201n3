'use strict';
console.log('app two js connected');


const pizzaButton = document.getElementById('pizzaButton');

const handlePizzaButtonClick = function(){
  const pizzasFromLS = JSON.parse(localStorage.pizzas);

  for(let i = 0; i < pizzasFromLS.length; i++){
    let newPizza = new Pizza(pizzasFromLS[i].pizzaType);
    newPizza.render();
  }
console.log('our pizzas after reinstanitation',allPizzas);
}


















//event listener 
pizzaButton.addEventListener('click', handlePizzaButtonClick);