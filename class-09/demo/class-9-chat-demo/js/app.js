'use strict';
console.log('app js is connected');


//global variables
let chatForm = document.getElementById('chat-form');
let chatList = document.getElementById('chat-list');
let chatClear = document.getElementById('chat-clear');
let charSubmit = document.getElementById('chat-submit');
let allMessage = [];
console.log(chatForm);


//add constructor function to build objects
function Comment(userName, text){
  this.userName = userName;
  this.text = text;
}

//add a prototype method to build chat element for the render method.
Comment.prototype.render = function(){
  let listItem = document.createElement('li');
  listItem.innerHTML = '<img width="100px" height="100px" src="images/' + this.userName + '.png" /> <b>' + this.userName + ': </b><em>' +  this.text + '</em>';

  return listItem;

};



//render all  function expession
let renderAllMessages = function(){
chatList.innerHTML = '';
  for(let i =0; i < allMessage.length; i++){
    //call prototype to build our html and append the li to our page.
       chatList.appendChild(allMessage[i].render());
  }

}





//function declaration
//add function to render all the comments
function handleChatSubmit(event){
  event.preventDefault();
  event.stopPropagation();
  console.log(event);
  console.log(event.target.who.value);
  console.log(event.target.message.value);

  if(!event.target.who.value || !event.target.message.value){
    return alert('Looks like we\'ve got another mystery on our hands');
  }

  let whoCommented = event.target.who.value;
  let messagePost = event.target.message.value;

  if(whoCommented === 'ScoobyDoo'){
    messagePost = 'Scooby dooby doo!';
  }
  if(whoCommented === 'Shaggy'){
    messagePost = 'Zoinks!';
  }

  if(whoCommented === 'Velma'){
    messagePost = messagePost.toUpperCase();
  }
  if(whoCommented === 'Fred'){
    messagePost = messagePost.toUpperCase();
  }
  if(whoCommented === 'Daphne'){
    messagePost = messagePost.toUpperCase();
  }


  console.log(messagePost);


  let newComment = new Comment(whoCommented, messagePost);

  allMessage.push(newComment);
  renderAllMessages();
}//closes handle chat submit



//add handleFunction to capture form submit data. 
//add form submission validation




//add submit event eventlistener for our form
chatForm.addEventListener('submit', handleChatSubmit);



//add a click event to clear chat list. 
chatClear.addEventListener('click', function(){
  allMessage = [];
  chatList.innerHTML = '';
})