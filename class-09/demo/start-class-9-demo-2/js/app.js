'use strict';
console.log('app.js is connected.');


//globals
let formElement = document.getElementById('new-pets');
let newPet;

//construction 
function Pet(petName, breed, imageName, interests, isGoodWithKids, isGoodWithDogs, isGoodWithCats){
  this.petName = petName;
  this.breed = breed;
  this.imageName = imageName;
  this.interests = interests;
  this.isGoodWithKids = isGoodWithKids;
  this.isGoodWithDogs = isGoodWithDogs;
  this.isGoodWithCats = isGoodWithCats;
}



//create the behaviors for our objects to inherit. so they can do stuff. 
Pet.prototype.setAge = function(){
  this.age = randomAge(3, 12) + ' Months old.';
};
function randomAge(minMonth, maxMonth){
  return Math.floor(Math.random() * (maxMonth - minMonth) + minMonth);
}
Pet.prototype.getInterests = function(){
  let randomArrayIndex = Math.floor((Math.random() * this.interests.length));
  console.log('do we get a random index number. ', this.interests[randomArrayIndex]);
  return this.interests[randomArrayIndex];
};

// our objects have access to render themselves because of the prototype.
Pet.prototype.render = function(){
  let parentElement = document.getElementById('kittenProfiles');
  console.log(parentElement);
  // create article
  let article = document.createElement('article');
  parentElement.appendChild(article);
  //create h2
  let h2 = document.createElement('h2');
  h2.textContent = this.name;
  article.appendChild(h2);
  // create p
  let petPara = document.createElement('p');
  petPara.textContent = 'Cats are cool, and pet one is ' + this.age;
  article.appendChild(petPara);
  // create ul
  let petUl = document.createElement('ul');
  article.appendChild(petUl);
  for(let i = 0; i < this.interests.length; i++){
    let petLi = document.createElement('li');
    // console.log(petLi);
    petLi.textContent = this.interests[i];
    petUl.appendChild(petLi);
  }
  //create img
  let petOneImage = document.createElement('img');
  /* <img src="image/diabloBlanco.jpeg" */
  petOneImage.setAttribute('src', 'images/' + this.imageName + '.jpeg');
  petOneImage.setAttribute('alt', 'Adopt our pet kittens');
  article.appendChild(petOneImage);
  
  
  //create table for pets
  let petTable = document.getElementById('adoptPets-table');
  let petRow = document.createElement('tr');
  let nameCell = document.createElement('td');
  nameCell.textContent = this.petName;
  petRow.appendChild(nameCell);
  let breedCell = document.createElement('td');
  breedCell.textContent = this.breed;
  petRow.appendChild(breedCell);
  let ageCell = document.createElement('td');
  ageCell.textContent = this.age;
  petRow.appendChild(ageCell);
  let interestsCell = document.createElement('td');
  interestsCell.textContent = this.interests;
  petRow.appendChild(interestsCell);
  petTable.appendChild(petRow);

};





let firstPet = new Pet('Buddy', 'Lion', 'diabloBlanco', ['Sun light', 'Cat Knip', 'Red Dots'], true, false, true);
let secondPet = new Pet('Jumper', 'Tiger', 'jumper', ['Sun light', 'String DataTypes', 'Boxes'], true, false, true);
let thirdPet = new Pet('TommyBob', 'Panther', 'tommyBob', ['Sun light', 'Mouse Toys', 'Mice'], true, false, true);

firstPet.setAge();
firstPet.getInterests();
secondPet.setAge();
secondPet.getInterests();
thirdPet.setAge();
thirdPet.getInterests();

let allPets = [firstPet, secondPet, thirdPet];

for(let i = 0; i < allPets.length; i++){
  allPets[i].render();
  // let paraParent = document.getElementById('footer');
  // let newParagraph = document.createElement('p');
  // newParagraph.textContent = `A nice kitten to code with is ${allPets[i].petName} because they are good at ${allPets[i].interests} .`;
  // paraParent.appendChild(newParagraph);
}


function handleFormSubmitted(event){
  event.preventDefault();
  //one  // nav dom asking .value
  let nameInput = document.getElementById('name');
  let nameValue = nameInput.value;
 
  //two //name attribut
  let breedValue = event.target.breed.value;
  
  //three  //nav dom // asking for the value in a different way. 
  let imageInput = document.getElementById('imageName');
  let imageValue = imageInput['value'];
  // let imageInput = document.getElementById('imageName');
  // let imageValue = imageInput.value;


  let interestsInput = document.getElementById('interests');
  let interestsValue = interestsInput.value;
//true or false booleen
  let isGoodWithKids = event.target.isGoodWithKids.checked;
  let isGoodWithDogs = event.target.isGoodWithDogs.checked;
  let isGoodWithCats = event.target.isGoodWithCats.checked;

newPet = new Pet(nameValue, breedValue, imageValue, interestsValue, isGoodWithKids, isGoodWithDogs, isGoodWithCats);

newPet.setAge();
newPet.getInterests();
newPet.render();

let form = document.getElementById('new-pets');
form.reset();

}

// console.log('form?????',formElement);
formElement.addEventListener('submit', handleFormSubmitted);
