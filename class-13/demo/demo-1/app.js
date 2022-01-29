'use strict';
console.log('app js is connected');


//Global variables
let orderForm = document.getElementById('orderForm');
let orders = document.getElementById('orders');
// console.log('is this what we expect?',{orderForm, orders});
Coffee.drinks = [];

//Constructor function
function Coffee(name, size, milk, drinkType){
  this.name = name; 
  this.size = size;
  this.milk = milk; 
  this.drinkType = drinkType;
  // console.log(this);
  Coffee.drinks.push(this);
  //add order to local storage
  updateStorage();
}

function updateStorage(){
  // console.log('updating local storage.');
  const arrayString = JSON.stringify(Coffee.drinks);
  // console.log(typeof arrayString);
  localStorage.setItem('coffee', arrayString);
}

function getCoffeeOrders(){
  // console.log('starting app to get coffee orders.');
  const data = localStorage.getItem('coffee');
  const coffeeData = JSON.parse(data);
  for(let i = 0; i < coffeeData.length; i++){ 
    new Coffee(coffeeData[i].name, coffeeData[i].size, coffeeData[i].milk, coffeeData[i].drinkType);
  }
console.log('drinks ', Coffee.drinks);
// console.log('POJO', coffeeData);
  renderOrders();
}


//functions 
function renderOrders(){
  orders.textContent = '';
  //loop through of coffee orders
  for(let i = 0; i < Coffee.drinks.length; i++){
    // console.log(Coffee.drinks[i].name);
    const drinkLi = document.createElement('li');
    const infoP = document.createElement('p');
    infoP.textContent = `${Coffee.drinks[i].name} ordered a ${Coffee.drinks[i].size }oz 
                          ${Coffee.drinks[i].drinkType} with ${Coffee.drinks[i].milk} milk`;
        //  console.log(infoP);
  }
}

//add event listerner
function handleSubmit(event){
  event.preventDefault();
  // console.log(event.target);
  const drink = event.target;
  const name = drink.name.value;
  const size = drink.size.value;
  const drinkType = drink.drinkType.value;
  const milk = drink.milk.value;
  new Coffee(name, size, milk, drinkType);
  renderOrders();
}


orderForm.addEventListener('submit', handleSubmit);
//start app.
getCoffeeOrders();