document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice" + (Math.floor(Math.random() * 6) + 1) + ".png");
document.getElementsByClassName("img2")[0].setAttribute("src", "images/dice" + (Math.floor(Math.random() * 6) + 1) + ".png");

if (document.getElementsByClassName("img1")[0].getAttribute("src") > document.getElementsByClassName("img2")[0].getAttribute("src")) {
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
}
else if (document.getElementsByClassName("img1")[0].getAttribute("src") < document.getElementsByClassName("img2")[0].getAttribute("src")) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
}else { 
  document.querySelector("h1").innerHTML = "Draw!";
}