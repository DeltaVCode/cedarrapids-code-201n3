'use strict';
console.log('app one js connected');


//grab local storage and render to page

if(localStorage.pizzas){
  // console.log('local storage? ', localStorage.pizzas);
  const pizzaFromLS = JSON.parse(localStorage.pizzas);
  console.log(pizzaFromLS);
  for(let i = 0; i < pizzaFromLS.length; i++){
    new Pizza(pizzaFromLS[i].pizzaType);
    allPizzas[i].render();
  }
}

//add our event listener for our app.js
pizzaForm.addEventListener('submit', handlePizzaSubmit);





