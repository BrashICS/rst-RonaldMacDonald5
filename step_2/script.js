'use strict';

const image = new Image()

function getInput(){
  var userinput = document.getElementById('userInput').value;
}

const shoesData = [
[1170,"blackcats.webp"],
[2380,"kaws4.jpg"],
[80,"monarch.jpg"],
[300,"bigredboots.jpg"],
[37140, "airmag.webp"],
[150, "blackaf1.png"],
[1840,"travis.webp"],
[120, "mcq.webp"],
[240,"1906rnb.webp"],
[440,"bred11.jpg"],
[220, "foamrunners.jpg"],
[9980, "diorjordan.jpg"],
[230,"airmax97.png"],
[95,"nikerunner.png"],
[2100000,"solidgold.avif"],
[140, "ugg.jpeg"]
]

function updateShoeImage () {

  const shoeindex = document.getElementById('shoeSelect').value;
  console.log(shoeindex)
  const shoeImage = document.getElementById('shoeImage');
  shoeImage.src = shoesData[shoeindex][1]
}

function checkGuess () {
  const shoeIndex = document.getElementById('shoeSelect').value
  const userGuess = document.getElementById('guessInput').value
  const guessNumber = parseInt(userGuess);
  const actualPrice = shoesData [shoeIndex][0]

  if (guessNumber < actualPrice) {
    alert("Your guess is too low. Try a higher price");
  } else if (guessNumber > actualPrice) {
    alert("Your guess is too high. Try a lower price")
  } else {
    alert("Congratulations! You guessed the correct price");
  }
  }
