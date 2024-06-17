'use strict';

const image = new Image()

image.src = "kaws4.jpg"
document.getElementById("kaws4").appendChild(image);

let blackcats = 1170
let kaws4 = 2379
let monarch = 80
let brb = 300
let airmag = 37136
let blackaf1 = 150
let travis = 1839
let mcq = 120
let nbrb = 240
let bred = 439
let foamrunners = 221
let diorjordan = 9979
let airmax = 230
let nikerunner = 95
let solidgold = 2100000
let ugg = 135

function getInput(){
  var userinput = document.getElementById('userInput').value;
}

var myButton = document.getElementById('myButton');
myButton.addEventListener('click',getInput, false);



function show_image(src, width, height, alt) {
  var img = document.createElement("img");
  img.src = kaws4.jpg;
  img.width = 200;
  img.height = 200;
  img.alt = alt;
  document.body.appendChild(img);
}
  console.log(show_image(kaws4.jpg, 200, 200,alt))

const shoesData = [
  { price:1170, image: 'blackcats.webp'},
  { price:2379, image: 'kaws4.jpg'},
  {price:80, image: 'monarch.jpg'},
  {price:300, image:'bigredboots.jpg'},
  {price:37136, image:'airmag.webp'},
  {price:150,  image:'blackaf1'},
  {price:1839, image:'travis.webp'},
  {price:120,  image:'mc1.webp'},
  {price:240,  image:'1906rnb.webp'},
  {price:439,  image:'bred11.jpg'},
  {price:221, image:'foamrunners.jpg'},
  {price:9979,  image:'diorjordan.jpg'},
  {price:230, image:'airmax97.png'},
  {price:95,  image:'nikerunner.png'},
  {price:2100000, image:'solidgold.avif'},
  {price:135,  image:'ugg.jpeg'}
];

function updateShoeImage () {
  const shoeindex = document.getElementById('shoeSelect').value;
  const shoeImage = document.getElementById('shoeimage');
  shoeImage.src = shoesData[shoeIndex].image;

}

function chechGuess () {
  const shoeIndex = document.getElementById('shoeSelect').value
  const userGuess = document.getElementById('guessInput').value
  const guessNumber = parseInt(userGuess);
  const actualPrice = shoesData [shoeIndex].price;

  if (guessNumber < actualPrice) {
    alert("Your guess is too low. Try a higher price");
  } else if (guessNumber > actualPrice) {
    alert("Your guess is too high. Try a lower price")
  } else {
    alert("Congratulations! You guessed the correct price");
  }
  }

