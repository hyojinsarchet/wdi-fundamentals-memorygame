// Create card arrays for the memory game.
var cards = ["queen", "queen", "king", "king"];

var cardsInPlay =[];

var cardOne = cards[0];

cardsInPlay.push(cardOne);

console.log("User flipped queen")

var cardTwo = cards[1];

cardsInPlay.push(cardTwo);

if(cardOne === cardTwo) {
  alert("You found a match");
} else {
  alert("Sorry, try again.");
}
