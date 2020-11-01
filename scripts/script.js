// JavaScript Document

var button = document.querySelector('.original');
var kloppen = document.querySelector('.hartje');
let btn = document.querySelector('button');
let classObj = {
  original: 'large',
  large: 'original'
}

// function

function likeButton () {
	document.body.classList.toggle ('kloppen');
}

console.log(button);

// eventlistener

button.addEventListener('click', likeButton);
	console.log("button is aangeklikt");



btn.addEventListener('click',()=>{
  btn.classList = classObj[btn.classList[0]];
});

 