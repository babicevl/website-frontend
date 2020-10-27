// JavaScript Document

var button = document.querySelector("button");
var hart = document.querySelector("div");
let btn = document.querySelector('button');
let classObj = {
  original: 'large',
  // small: 'medium',
  // medium: 'large',
  large: 'original'
}

// function

function likeButton () {
	hart.classList.toggle ("original");
}

console.log(button);

// eventlistener

addEventListener('click', likeButton);
	console.log("button is aangeklikt");



btn.addEventListener('click',()=>{
  btn.classList = classObj[btn.classList[0]];
});

 