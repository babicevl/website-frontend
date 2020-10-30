// JavaScript Document

var button = document.querySelector('original');
var hart = document.querySelector('hartje');
let btn = document.querySelector('button');
let classObj = {
  original: 'large',
  large: 'original'
}

// function

function likeButton () {
	hart.classList.toggle ('original');
}

console.log(button);

// eventlistener

addEventListener('click', likeButton);
	console.log("button is aangeklikt");



btn.addEventListener('click',()=>{
  btn.classList = classObj[btn.classList[0]];
});

 