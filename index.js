

//left
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomdicee1 = "images/" + "dice" + randomNumber1 + ".png";
var left = document.querySelector(".img1");
var leftAttribute = left.setAttribute ("src", randomdicee1);

//right
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomdicee2 = "images/" + "dice" + randomNumber2 + ".png";
var right = document.querySelector(".img2");
var rightAttribute = right.setAttribute ("src", randomdicee2);

//winner
var heading = document.querySelector("h1");
if (randomNumber1 > randomNumber2){
   heading.innerHTML = "Player 1 Won";
}
else if (randomNumber1 < randomNumber2){
    heading.innerHTML = "Player 2 Won";
}
else {
    heading.innerHTML = "Draw!";
}