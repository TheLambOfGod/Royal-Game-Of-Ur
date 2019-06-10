
var diceArray = [];
var whiteMainField = [];
var blackMainField = [];
var whitePossibleMoves = [];
var diceTotal;
var playingField = [];
var whiteDiceRoll;
var blackDiceRoll;
//If playerTurn = 0, it's white's turn - =1, is black's
var playerTurn;
var playerTurnColor;

var startingWhtTokens;
var startingBlkTokens;
var whtTokensInPlay = 0;
var blkTokensInPlay = 0;
var endingWhtTokens;
var endingBlkTokens;
var whtTkn1Loc; var whtTkn2Loc; var whtTkn3Loc;
var whtTkn4Loc; var whtTkn5Loc; var whtTkn6Loc;
var blkTkn1Loc; var blkTkn2Loc; var blkTkn3Loc;
var blkTkn4Loc; var blkTkn5Loc; var blkTkn6Loc;
var startingWhtTokensGrid;
var startingBlkTokensGrid;
var tokenMove;
var functionTest;
var whiteDiceDiv;
const intersection = [];
var whitePossibleMovesTemp;

document.addEventListener('DOMContentLoaded', function(e) {
   initGame();
});

startingWhtTokensGrid = document.getElementById('whitetokensstart');
startingBlkTokensGrid = document.getElementById('blacktokensstart');
var moveNumberWhite = document.getElementById('whitemovebox');
var blackMoveNumber = document.getElementById('blackmovebox');

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


var possibleMoves = function () {
   if (whiteMainField.length === 0) {
      whitePossibleMoves.push(diceTotal);
      console.log("White Possible Moves " + whitePossibleMoves);

   } else if (whiteMainField.length !==0 && startingWhtTokens === 0) {
      intersection = whiteMainField.filter(element => whitePossibleMoves.includes(element));
      console.log(intersection);
   }
   

   //whitePossibleMoves.push(diceTotal);
   //console.log("White Possible Moves " + whitePossibleMoves);
   
}   
      // for ( i = 0; i < whiteMainField.length; i++) {
      //    whitePossibleMoves.push(whiteMainField[i] += diceTotal);
      //    whitePossibleMoves.push(diceTotal);
      //    whitePossibleMoves.shift();
      //    console.log("White Possible Moves " + whitePossibleMoves);


//DOM Elements for the dice roll
whiteDiceRoll = document.getElementById('whitedicebtn');
blackDiceRoll = document.getElementById('blackdicebtn');
functionTest = document.getElementById('functiontestbutton');
functionTest2 = document.getElementById('functiontestbutton2');


blackDiceRoll.addEventListener('click', function() {
   emptyTheDiceArray();
   rollTheDice();
   //console.log(diceTotal);
   blackDiceRoll.disabled = true;
   whiteDiceRoll.disabled = true;
   playerTurn = 1;
   playerTurnColor = 'b';
   //console.log(playerTurnColor);
   document.getElementById('blackdicediv').innerHTML = diceTotal;
});

whiteDiceRoll.addEventListener('click', function() {
   emptyTheDiceArray();
   rollTheDice();
   possibleMoves();
   //console.log("Dice Total " + diceTotal);
   whiteDiceRoll.disabled = true;
   blackDiceRoll.disabled = true;
   playerTurn = 0;
   playerTurnColor = 'w'; 
   console.log("Player Turn Color = " + playerTurnColor);
   document.getElementById('whitedicediv').innerHTML = diceTotal;
});

// var playerSwitch = function () {
//    if (playerTurnColor === 'w') {
//       playerTurn = 
//    }
// }


//The below test mimics the player moving a token from the token grid to the main field

functionTest.addEventListener('click', function() {
   if (playerTurnColor === 'w' && diceTotal !== 0 && whiteMainField.length === 0
   && whitePossibleMoves.includes(parseInt(moveNumberWhite.value))) {
      console.log("if TRUE");

      whiteMainField.push(parseInt(moveNumberWhite.value));
      console.log("White Main Field ", whiteMainField);
      

       whitePossibleMovesFilterArray = whitePossibleMoves.filter(function(value) {
          return value !== parseInt(moveNumberWhite.value);
       });
       whitePossibleMoves = whitePossibleMovesFilterArray;
       blackDiceRoll.disabled = false;
       diceTotal = 0;
       document.getElementById('whitedicediv').innerHTML = "";
       console.log("Filtered Array ", whitePossibleMovesFilterArray);
       console.log("white possible moves after filtering ", whitePossibleMoves);

   }  else if (playerTurnColor === 'w' && diceTotal !== 0 && whiteMainField.length > 0
      && whitePossibleMoves.includes(parseInt(moveNumberWhite.value))) {
         console.log("This is TRUE");

         for (let i = 0; i < whiteMainField.length; i++) {
            whitePossibleMovesTemp.push(whiteMainField[i] += diceTotal);
         }
         console.log("White Possible Moves Temp ", whitePossibleMovesTemp);
         
      } else if (diceTotal === 0) {
      playerTurnColor === 'b';
      blackDiceRoll.disabled = false;
      diceTotal = 0;
      document.getElementById('whitedicediv').innerHTML = "";
      alert("White LOSES TURN!");
   } 


});





// functionTest.addEventListener('click', function () {
//    if (playerTurnColor === 'w' && diceTotal !== 0 && whiteMainField.length === 0 
//    && whitePossibleMoves.includes(parseInt(moveNumberWhite.value))
//    ) {
//       console.log("if TRUE");
//    //the below is allowing the else if portion of the function to execute
//    //whiteMainField.push(diceTotal);
//    blackDiceRoll.disabled = false;
//    diceTotal = 0;
//    document.getElementById('whitedicediv').innerHTML = "";
//    console.log("White Main Field " + whiteMainField);
//    console.log("White Move Choice " + moveNumberWhite.value);
   
//    } else if (playerTurnColor === 'w' && diceTotal !== 0 
//    && whitePossibleMoves.includes(parseInt(moveNumberWhite.value))
//    ) {
//       console.log("if FALSE");
//       blackDiceRoll.disabled = false;
//       diceTotal = 0;
//       document.getElementById('whitedicediv').innerHTML = "";
//       console.log("White Main Field " + whiteMainField);
//       console.log("White Move Choice " + moveNumberWhite.value);
//    }
// });

functionTest2.addEventListener('click', function () {
   if (startingBlkTokensGrid.length = 6 && playerTurnColor === 'b'&& diceTotal !== 0) {
   blackMainField.push(diceTotal);
   whiteDiceRoll.disabled = false;
   //console.log("Black Main Field " + blackMainField);
   document.getElementById('blackdicediv').innerHTML ="";
   }
});
//End function test

// var initialWhiteMove = function () {
//    if (startingWhtTokensGrid.length = 6 && playerTurnColor === 'w'&& diceTotal !== 0) {
//       whiteMainField.push(diceTotal);
//       blackDiceRoll.disabled = false;
//    }
// };

// var initialBlackMove = function () {
//    if (startingBlkTokensGrid.length = 6 && playerTurnColor === 'b'&& diceTotal !== 0) {
//       blackMainField.push(diceTotal);
//       whiteDiceRoll.disabled = true;
//    }
// };





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
