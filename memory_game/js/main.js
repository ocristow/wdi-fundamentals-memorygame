// console.log("Up and running!");

//creates array of possible cards
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

var cardsInPlay = []; //creates empty array to push chosen cards into

var checkForMatch = function () {

	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
}

var flipCard = function (cardId) {
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].suit);
	console.log(cards[cardId].cardImage);


	// console.log("User flipped " + cards[2]);
	// cardsInPlay.push(cards[2]);
}

flipCard(0);
flipCard(2);

checkForMatch();




var createBoard = function () {

	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img'); 

		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('data-id', cards[i]);
		cardElement.addEventListener("click", flipCard() )
	}
}





createBoard();





// flipCard(cards[1]);
// flipCard(cards[3]);
// flipCard(cards[2]);
// flipCard(cards[3]);

// var cardOne = cards[0]; // first card chosen (queen)
// cardsInPlay.push(cardOne); //pushes card one into our empty array
// console.log("User flipped " + cardOne); //msg to console about what kind of card they have flipped

// var cardTwo = cards[2]; //second card chosen (king)
// cardsInPlay.push(cardTwo); //pushes card two into our empty array
// console.log("User flipped " + cardTwo); //msg to console about what kind of card they have flipped








//if (condition) {
 //take this path when it's true!

//} else {
	//take the other path when the condition is false!
//}