'use strict';
console.log('sky is blue');


// Problem Domain: the Cedar Rapids Kitten Rescue has tons of kittens who need good homes. One of the best ways to reach prospective adoptive homes is to have profiles for each kitten available on a website. There are hundreds of kittens, though, and only a few volunteers; it's too time-consuming to hand-code each kitten's profile on their website. They need a better way.

//Each Kitten's profile should have:
// Name
// Breed
// - gender   -- isFixed.
// - random age assigned
// a list of what they like.
// an image
// is good with kids
// is good with dogs
// is good with other animals


let petOne = {
  name: 'Fluffy',
  breed: 'tabby',
  imageName: 'diabloBlanco',
  interests: ['Sun light', 'Mouse toys', 'Red Dots'],
  isGoodWithKids: true,
  isGoodWithDogs: false,
  isGoodWithCats: true,
  setAge: function(){
    this.age = randomAge(3, 12) + ' Months old.';
  }
};

let petTwo = {
  name: 'Tiger',
  breed: 'Tiger',
  imageName: 'tommyBob',
  interests: ['Rainy Days', 'Running', 'Yarn'],
  isGoodWithKids: true,
  isGoodWithDogs: true,
  isGoodWithCats: true,
  setAge:   function() {
    this.age = randomAge(3, 12) + ' Months old.';
  }
};

function randomAge(minMonth, maxMonth){
  return Math.floor(Math.random() * (maxMonth - minMonth) + minMonth);
}


petOne.setAge();
petTwo.setAge();


petOne.isFixed = true;
petTwo.isFixed = false;

console.log(petOne);

//Create DOM elements and render it in html

//create a new element the parent element of the child element that we will create to render the pet article in the html
let parentElement = document.getElementById('kittenProfiles');
console.log(parentElement);

//create article
let article = document.createElement('article');
parentElement.appendChild(article);

//create h2
let h2 = document.createElement('h2');
h2.textContent = petOne.name;
article.appendChild(h2);

// create p
let petPara = document.createElement('p');
petPara.textContent = 'Cats are cool, and pet one is ' + petOne.age;
article.appendChild(petPara);




// create ul
let petUl = document.createElement('ul');
article.appendChild(petUl);

for(let i = 0; i < petOne.interests.length; i++){
  let petLi = document.createElement('li');
  // console.log(petLi);
  petLi.textContent = petOne.interests[i];
  petUl.appendChild(petLi);
}


//create img
let petOneImage = document.createElement('img');
{/* <img src="image/diabloBlanco.jpeg" */}
petOneImage.setAttribute('src', 'images/' + petOne.imageName + '.jpeg');
petOneImage.setAttribute('alt', 'Adopt our pet kittens');
article.appendChild(petOneImage);
