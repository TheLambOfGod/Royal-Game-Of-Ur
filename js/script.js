
var diceArray = [];
var mainFieldWhite = [];
var blackMainField = [];
var whitePossibleMoves = [];
var diceTotal;
var playingField = [];
var whiteDiceRoll;
var blackDiceRoll;
var playerTurnColor;

var startingWhtTokens;
var startingBlkTokens;
var whtTokensInPlay = 0;
var blkTokensInPlay = 0;
var endingWhtTokens;
var endingBlkTokens;
var startingWhtTokensGrid;
var startingBlkTokensGrid;
var tokenMove;
var functionTest;
var whiteDiceDiv;
const intersection = [];
var whitePossibleMovesTemp = [];
var notPossibleWhite;
var whitePossibleMovesFilterArray;

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

  
      // for ( i = 0; i < mainFieldWhite.length; i++) {
      //    whitePossibleMoves.push(mainFieldWhite[i] += diceTotal);
      //    whitePossibleMoves.push(diceTotal);
      //    whitePossibleMoves.shift();
      //    console.log("White Possible Moves " + whitePossibleMoves);


//DOM Elements for the dice roll
whiteDiceRoll = document.getElementById('whitedicebtn');
blackDiceRoll = document.getElementById('blackdicebtn');
functionTest = document.getElementById('functiontestbutton');
functionTest2 = document.getElementById('functiontestbutton2');




//The below will grab the dice total and add it to the array of possible moves if...
var possibleMoves = function () {
   //If main field has no moves on the board, the only possible move is 
   //adding the dice total to the possible moves array 
   if (mainFieldWhite.length === 0 && diceTotal > 0) {   
      whitePossibleMoves.push(diceTotal);
      console.log("White Possible Moves - mField 0 ", whitePossibleMoves);

      //If there are moves on the board and tokens still in the starting grid,
      //and the dice total is not 0, we need to add the dice total to 
      //the possible moves array and add the dice total to the current main field
      //moves while removing duplicates from the temp array
   } else if (mainFieldWhite.length > 0 && mainFieldWhite.length < 6 && diceTotal > 0) {
      whitePossibleMovesTemp.push(diceTotal);
      for (let i = 0; i < mainFieldWhite.length; i++) {
         whitePossibleMovesTemp.push(mainFieldWhite[i] + diceTotal);
         console.log("White Possible Moves Temp ", whitePossibleMovesTemp);
         notPossibleWhite = whitePossibleMovesTemp.filter(value => mainFieldWhite.includes(value));
         console.log("Not possible moves white ", notPossibleWhite);

         whitePossibleMoves = whitePossibleMovesTemp.filter(function(value) {
            return !notPossibleWhite.includes(value)
         });
         console.log("White Possible Moves ", whitePossibleMoves);

         //if there are no impossible moves in the temp array, push all temp values to the possible moves grid
            if (notPossibleWhite.length = 0) {
               for (let i = 0; i < whitePossibleMovesTemp.length; i++) {
                  whitePossibleMoves = whitePossibleMovesTemp;
               }
            }
      }
      
      }
}
   //The below is a bitch. It is breaking the program.
//    } else if (mainFieldWhite.length !==0 && startingWhtTokens === 0) {
//       console.log("Possible moves ELSE IF");
//    }
// }; 

//Logic for black dice roll
blackDiceRoll.addEventListener('click', function() {
   emptyTheDiceArray();
   rollTheDice();
   blackDiceRoll.disabled = true;
   whiteDiceRoll.disabled = true;
   playerTurnColor = 'b';
   document.getElementById('blackdicediv').innerHTML = diceTotal;
});

//Logic for white dice roll
whiteDiceRoll.addEventListener('click', function() {
   emptyTheDiceArray();
   rollTheDice();
   console.log("Dice roll: ", diceTotal);
   possibleMoves();
   whiteDiceRoll.disabled = true;
   blackDiceRoll.disabled = true;
   playerTurnColor = 'w'; 
   console.log("Player Turn Color = " + playerTurnColor);
   console.log("White Main Field ", mainFieldWhite);
   document.getElementById('whitedicediv').innerHTML = diceTotal;
});


//The below test mimics the player moving a token from the token grid to the main field

functionTest.addEventListener('click', function() {

   //Move token from grid to board - If player rolls greater than 0 and no pieces are on the board...
   if (playerTurnColor === 'w' && diceTotal !== 0 && mainFieldWhite.length === 0
   && whitePossibleMoves.includes(parseInt(moveNumberWhite.value))) {

      mainFieldWhite.push(parseInt(moveNumberWhite.value));
      
      //The below removes the move the player chose from the array of possible moves
       whitePossibleMovesFilterArray = whitePossibleMoves.filter(function(value) {
          return value !== parseInt(moveNumberWhite.value);
       });
       whitePossibleMoves = whitePossibleMovesFilterArray;
       blackDiceRoll.disabled = false;
       diceTotal = 0;
       document.getElementById('whitedicediv').innerHTML = "";
       console.log("Filtered Array ", whitePossibleMovesFilterArray);
       console.log("White Possible Moves", whitePossibleMoves);
       console.log("White Main Field ", mainFieldWhite);

   
       //If player rolls greater than 0 and pieces are on the board....
   }  else if (playerTurnColor === 'w' && diceTotal !== 0 && mainFieldWhite.length > 0
      && whitePossibleMoves.includes(parseInt(moveNumberWhite.value))) {
         console.log("This is TRUE");

         mainFieldWhite.push(parseInt(moveNumberWhite.value));
         console.log("White Main Field ", mainFieldWhite);
         
         //The below loop iterates over the main field, adding the dice total to each
         //and pushing the value to a temporary possible moves array
      // /   for (let i = 0; i < mainFieldWhite.length; i++) {
      //       whitePossibleMovesTemp.push(mainFieldWhite[i] += diceTotal);
      //    }
      //    console.log("White Possible Moves Temp ", whitePossibleMovesTemp);

      // If player rolls 0...   
      } else if (diceTotal === 0) {
         console.log("Zero");

      playerTurnColor === 'b';
      blackDiceRoll.disabled = false;
      diceTotal = 0;
      document.getElementById('whitedicediv').innerHTML = "";
      alert("White LOSES TURN!");
   } 


});





// functionTest.addEventListener('click', function () {
//    if (playerTurnColor === 'w' && diceTotal !== 0 && mainFieldWhite.length === 0 
//    && whitePossibleMoves.includes(parseInt(moveNumberWhite.value))
//    ) {
//       console.log("if TRUE");
//    //the below is allowing the else if portion of the function to execute
//    //mainFieldWhite.push(diceTotal);
//    blackDiceRoll.disabled = false;
//    diceTotal = 0;
//    document.getElementById('whitedicediv').innerHTML = "";
//    console.log("White Main Field " + mainFieldWhite);
//    console.log("White Move Choice " + moveNumberWhite.value);
   
//    } else if (playerTurnColor === 'w' && diceTotal !== 0 
//    && whitePossibleMoves.includes(parseInt(moveNumberWhite.value))
//    ) {
//       console.log("if FALSE");
//       blackDiceRoll.disabled = false;
//       diceTotal = 0;
//       document.getElementById('whitedicediv').innerHTML = "";
//       console.log("White Main Field " + mainFieldWhite);
//       console.log("White Move Choice " + moveNumberWhite.value);
//    }
// });

functionTest2.addEventListener('click', function () {
   if (startingBlkTokensGrid.length = 6 && playerTurnColor === 'b'&& diceTotal !== 0) {
   blackMainField.push(diceTotal);
   whiteDiceRoll.disabled = false;
   //console.log("Black Main Field " + blackMainField);
   document.getElementById('blackdicediv').innerHTML ="";
   
   } else if (diceTotal === 0) {
      playerTurnColor === 'w';
      whiteDiceRoll.disabled = false;
      diceTotal = 0;
      document.getElementById('blackdicediv').innerHTML = "";
      alert("Black LOSES TURN!");
   } 
});
//End function test

// var initialWhiteMove = function () {
//    if (startingWhtTokensGrid.length = 6 && playerTurnColor === 'w'&& diceTotal !== 0) {
//       mainFieldWhite.push(diceTotal);
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
