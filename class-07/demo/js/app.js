'use strict';
console.log('app.js is connected.');

function Pet(petName, breed, imageName, interests, isGoodWithKids, isGoodWithDogs, isGoodWithCats){
  this.petName = petName;
  this.breed = breed;
  this.imageName = imageName;
  this.interests = interests;
  this.isGoodWithKids = isGoodWithKids;
  this.isGoodWithDogs = isGoodWithDogs;
  this.isGoodWithCats = isGoodWithCats;
}


Pet.prototype.setAge = function(){
  this.age = randomAge(3, 12) + ' Months old.';
};

function randomAge(minMonth, maxMonth){
  return Math.floor(Math.random() * (maxMonth - minMonth) + minMonth);
}
//this is to display a different interest on each refresh.
Pet.prototype.getInterests = function(){
  let randomArrayIndex = Math.floor((Math.random() * this.interests.length));
  console.log('do we get a random index number. ', this.interests[randomArrayIndex]);
  return this.interests[randomArrayIndex];
};


Pet.prototype.render = function(){
  //Grab the parent element
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
  //creat table for pets
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





let firstPet = new Pet('buddy', 'cricket', 'diabloBlanco', ['Sun light', 'Mouse toys', 'Red Dots'], true, false, true);
let secondPet = new Pet('buddy', 'cricket', 'diabloBlanco', ['Sun light', 'Mouse toys', 'Red Dots'], true, false, true);
let thirdPet = new Pet('buddy', 'cricket', 'diabloBlanco', ['Sun light', 'Mouse toys', 'Red Dots'], true, false, true);

firstPet.setAge();
firstPet.getInterests();
console.log(firstPet.age);

// let secondPet = new Pet('name', 'breed', 'diabloBlanco', ['Sun light', 'Mouse toys', 'Red Dots'], true, false, true);

let allPets = [firstPet, secondPet, thirdPet];

for(let i = 0; i < allPets.length; i++){
  // console.log('all pets at i',allPets[i]);
  allPets[i].render();
  let paraParent = document.getElementById('footer');
  let newParagraph = document.createElement('p');
  newParagraph.textContent = `A nice kitten to code with is ${allPets[i].petName} because they are good at ${allPets[i].interests} .` ;
  paraParent.appendChild(newParagraph);
}


//call our render function to see our objects and pets.






