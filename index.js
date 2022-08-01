var randomNumber1 = Math.floor(Math.random() * 6)+1 ;
var randomNumber2 = Math.floor(Math.random() * 6)+1 ;

var randomImage1 ="images/dice" + randomNumber1 + ".png";
var randomImage2 ="images/dice" + randomNumber2 + ".png";

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent ="🏆Yeeaaa! Player 1 Won";
  document.querySelector(".dice1").classList.add("dice-color");
} else {
  if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").textContent ="Yeeaaa! Player 2 Won🏆";
    document.querySelector(".dice2").classList.add("dice-color");
  } else {
    document.querySelector("h1").textContent ="Draw🤐";
  }
}


document.querySelector(".img1").setAttribute("src", randomImage1);
document.querySelector(".img2").setAttribute("src", randomImage2);
