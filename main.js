// Create 4 card objects in an array for the memory game.
var cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  }
];


// Clicked cards come to this array
var cardsInPlay =[];


// Function to show alert either they are match or not
var checkForMatch = function() {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        alert("You found a match!");
    } else {
        alert("Sorry, try again.");
    }
};


// Function to flip cards
var flipCard = function() {
    var cardId = this.getAttribute('data-id');
    // console.log("User flipped " + cards[cardId].rank);
    // console.log(cards[cardId].cardImage);
    // console.log(cards[cardId].suit);
    cardsInPlay.push(cards[cardId].rank);
    this.setAttribute('src', cards[cardId].cardImage);

    // When 2 cards are flipped call 'checkForMatch' function
    if(cardsInPlay.length === 2) {
        checkForMatch();
    }
};


// Created main game board using DOM manipulation
var createBoard = function() {
    for(var i = 0; i < cards.length; i++) {
        var cardElement = document.createElement('img');
        cardElement.setAttribute('src', 'images/back.png');
        cardElement.setAttribute('data-id', i);
        cardElement.addEventListener('click', flipCard);
        document.getElementById('game-board').appendChild(cardElement);
    }
};

// Invoke the createBoard function
createBoard();


// When the reset button is clicked the the game is reset to play again
document.getElementById("reset").onclick = function() {
    document.getElementById("game-board").innerHTML = "";
    createBoard();
    cardsInPlay = [];
};
    
