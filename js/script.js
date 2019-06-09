
var diceArray = [];
var whiteOnlyField = [];
var blackOnlyField = [];
var diceTotal;
var playingField = [];
var whiteDiceRoll;
var blackDiceRoll;
//If playerTurn = 0, it's white's turn - =1, is black's
var playerTurn;
var playerTurnColor;

var startingWhtTokens = [1,1,1,1,1,1];
var startingBlkTokens = [7,7,7,7,7,7];
var whtTokensInPlay = 0;
var blkTokensInPlay = 0;
var endingWhtTokens;
var endingBlkTokens;
var whtTkn1Loc; var whtTkn2Loc; var whtTkn3Loc;
var whtTkn4Loc; var whtTkn5Loc; var whtTkn6Loc;
var blkTkn1Loc; var blkTkn2Loc; var blkTkn3Loc;
var blkTkn4Loc; var blkTkn5Loc; var blkTkn6Loc;
var startingWhtTokensGrid ;
var startingBlkTokensGrid;
var tokenMove;
var functionTest;


document.addEventListener('DOMContentLoaded', function(e) {
   initGame();
});


startingWhtTokensGrid = document.getElementById('whitetokensstart');
startingBlkTokensGrid = document.getElementById('blacktokensstart');


// var addDiceTotalToMove = function () {
//  if (startingWhtTokens.length < 5) {
//    diceTotal };

startingWhtTokensGrid.addEventListener('click', function(e) {
   console.log("clickster") ;
});

startingBlkTokensGrid.addEventListener('click', function(e) {
   console.log("black clickster");
});

//Binary dice rolling x 4 function
var emptyTheDiceArray = function() {
   diceArray = []
};

var rollTheDice = function() {
   while (diceArray.length < 4) {
      var rand = Math.random();
      if (rand > 0.5) {
         diceArray.push(1); 
      } else {
         diceArray.push(0);
      };
// 'diceTotal' is the end product we want from this function
      diceTotal = diceArray.reduce((a, b) => a + b, 0);
   };
};

//DOM Elements for the dice roll
whiteDiceRoll = document.getElementById('whitedicebtn');
blackDiceRoll = document.getElementById('blackdicebtn');
functionTest = document.getElementById('functiontestbutton');
functionTest2 = document.getElementById('functiontestbutton2');


blackDiceRoll.addEventListener('click', function() {
   emptyTheDiceArray();
   rollTheDice();
   console.log(diceTotal);
   blackDiceRoll.disabled = true;
   whiteDiceRoll.disabled = true;
   playerTurn = 1;
   playerTurnColor = 'b';
   console.log(playerTurnColor);
});

whiteDiceRoll.addEventListener('click', function() {
   emptyTheDiceArray();
   rollTheDice();
   console.log(diceTotal);
   whiteDiceRoll.disabled = true;
   blackDiceRoll.disabled = true;
   playerTurn = 0;
   playerTurnColor = 'w';
   console.log(playerTurnColor);
   
});

//Function test
functionTest.addEventListener('click', function () {
   if (startingWhtTokensGrid.length = 6 && playerTurnColor === 'w'&& diceTotal !== 0) {
   whiteOnlyField.push(diceTotal + 'w');
   blackDiceRoll.disabled = false;
   console.log(whiteOnlyField);
   }
});

functionTest2.addEventListener('click', function () {
   if (startingBlkTokensGrid.length = 6 && playerTurnColor === 'b'&& diceTotal !== 0) {
   blackOnlyField.push(diceTotal + 'b');
   whiteDiceRoll.disabled = false;
   console.log(blackOnlyField);
   }
});

//End function test

var initialWhiteMove = function () {
   if (startingWhtTokensGrid.length = 6 && playerTurnColor === 'w'&& diceTotal !== 0) {
      whiteOnlyField.push(diceTotal + 'w');
      blackDiceRoll.disabled = false;
   }
};

var initialBlackMove = function () {
   if (startingBlkTokensGrid.length = 6 && playerTurnColor === 'b'&& diceTotal !== 0) {
      blackOnlyField.push(diceTotal + 'b');
      whiteDiceRoll.disabled = true;
   }
};





//The below function initializes/resets the game
var initGame = function () {
   playerTurn = 1;
   playerTurnColor = 'b';
   whiteDiceRoll.disabled = false;
   blackDiceRoll.disabled = true;
   startingBlkTokens = 6;
   startingWhtTokens = 6;
   endingBlkTokens = 0;
   endingWhtTokens = 0;
   playingField = [];
};

var whitePlayerMove = function () {
   if (startingWhtTokens.length = 6) {
      startingWhtTokens.pop
   }
};
      



//DOM elements



/*create number of tokens in the starting field based on
'startingTokens' variables */

//startingWhtTokensGrid = document.getElementById("whitetokensstart");

// if (startingWhtTokens = 6) {
//    document.querySelector()
// }


// var removeClassFromToken = function() {
//    if ( var element = document.getElementById("whttkn1");
//    element.classList.remove("whitecircle");
// }

//The below variable is just for the "for loop" dice rolling
//var diceArray = [dice1, dice2, dice3, dice4];
//DOM references


//Event listeners




// function diceTotal() {
//    diceArray.reduce((a, b) => a + b, 0);
//rollTheDice();
// }
