
var diceArray = [];
var mainFieldWhite = [];
var mainFieldBlack = [];
var whitePossibleMoves = [];
var blackPossibleMoves = [];
var diceTotal;
var whiteDiceRoll;
var blackDiceRoll;
var playerTurnColor;
var startingWhiteTokens;
var startingBlackTokens;
var whiteTokensInPlay = 0;
var blackTokensInPlay = 0;
var endingWhiteTokens = [];
var endingBlackTokens = [];
var startingWhiteTokensGrid;
var startingBlackTokensGrid;
var functionTestWhite;
var functionTestBlack;
var whiteDiceDiv;
var blackDiceDiv;
var whitePossibleMovesTemp = [];
var blackPossibleMovesTemp = [];
var notPossibleWhite;
var notPossibleBlack;
var whitePossibleMovesFilterArray;
var blackPossibleMovesFilterArray;
var removeChosen;
var mainFieldWhiteFilterArray;
var mainFieldBlackFilterArray;
var winningFieldWhite = [];
var winningFieldBlack = [];
var nums;
var nums2;
var nums3;
var nums4;
var whiteGridToken;
var whiteOnBlackCollision = [];
var blackOnWhiteCollision = [];
var collisionTempWhite;
var collisionTempBlack;


//The below function initializes/resets the game when called on
var initGame = function () {
   playerTurnColor = 'b';
   whiteDiceRoll.disabled = false;
   blackDiceRoll.disabled = true;
   startingBlackTokens = 6;
   startingWhiteTokens = 6;
   endingBlackTokens = [];
   endingWhiteTokens = [];
};

//Game initialization upon page load...
document.addEventListener('DOMContentLoaded', function(e) {
   initGame();
});

//DOM elements
startingWhiteTokensGrid = document.getElementById('whitetokensstart');
startingBlackTokensGrid = document.getElementById('blacktokensstart');
startingWhiteTokensImage = document.getElementById('whitetokenstartgrid');
startingBlackTokensImage = document.getElementById('blacktokenstartgrid');
var moveNumberWhite = document.getElementById('whitemovebox');
var moveNumberBlack = document.getElementById('blackmovebox');
startingWhiteTokensGrid.addEventListener('click', function(e) {
   console.log("clickster") ;
});
startingBlackTokensGrid.addEventListener('click', function(e) {
   console.log("black clickster");
});

//Clearing the dice...
var emptyTheDiceArray = function() {
   diceArray = []
};

//Binary dice rolling x 4 function
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
functionTestWhite = document.getElementById('functiontestbutton');
functionTestBlack = document.getElementById('functiontestbutton2');














//The below will grab the dice total and add it to the array of possible moves if...
var possibleMovesFuncWhite = function () {
   //If main field has no moves on the board, the only possible move is 
   //adding the dice total to the possible moves array 
   if (mainFieldWhite.length === 0 && diceTotal > 0) {
      whitePossibleMoves = [];   
      whitePossibleMoves.push(diceTotal);
      console.log("White Possible Moves - mField 0 ", whitePossibleMoves);

      //If there are moves on the board and tokens still in the starting grid,
      //and the dice total is not 0, we need to add the dice total to 
      //the possible moves array and add the dice total to the current main field
      //moves while removing duplicates from the temp array
   } else if (mainFieldWhite.length > 0 && mainFieldWhite.length < 6 && diceTotal > 0 
      && startingWhiteTokens > 0) {
      whitePossibleMovesTemp.push(diceTotal);
      for (let i = 0; i < mainFieldWhite.length; i++) {
            whitePossibleMovesTemp.push(mainFieldWhite[i] + diceTotal);
            console.log("White Possible Moves Temp ", whitePossibleMovesTemp);

            //The below removes impossible white-on-white moves from the possible moves array
            notPossibleWhite = whitePossibleMovesTemp.filter(value => mainFieldWhite.includes(value));
            console.log("Not possible moves white ", notPossibleWhite);

            whitePossibleMoves = whitePossibleMovesTemp.filter(function(value) {
            return !notPossibleWhite.includes(value);
            });
   
         console.log("White Possible Moves ", whitePossibleMoves);

         // endingWhiteTokens = mainFieldWhite.filter(function(tokens) {
         //    return tokens > 14;
         // });
         console.log("Ending White Tokens ", endingWhiteTokens);
         console.log("White Main Field after pushing ending white tokens ", mainFieldWhite);
            ("Starting White Tokens D ", startingWhiteTokens);

         //if there are no impossible moves in the white possible temp array, push all temp values to the possible moves grid
            if (notPossibleWhite.length = 0) {
               for (let i = 0; i < whitePossibleMovesTemp.length; i++) {
                  whitePossibleMoves = whitePossibleMovesTemp;
               }
            }

         };
         console.log("This is mainfieldblack test A ", mainFieldBlack);
       
         whiteOnBlackCollision =  whitePossibleMoves.filter(value => mainFieldBlack.includes(value)).filter(value => {
            return value > 4 && value < 13
         });
         console.log("White on Black collision " + whiteOnBlackCollision);
        
      
    } else if (mainFieldWhite.length > 0 && diceTotal > 0 && startingWhiteTokens === 0) {
      for (let i = 0; i < mainFieldWhite.length; i++) {
         whitePossibleMovesTemp.push(mainFieldWhite[i] + diceTotal);
         console.log("White Possible Moves Temp ", whitePossibleMovesTemp);
         notPossibleWhite = whitePossibleMovesTemp.filter(value => mainFieldWhite.includes(value));
         console.log("Not possible moves white ", notPossibleWhite);

         whitePossibleMoves = whitePossibleMovesTemp.filter(function(value) {
         return !notPossibleWhite.includes(value)
         });
         console.log("White Possible Moves ", whitePossibleMoves);

         // endingWhiteTokens = mainFieldWhite.filter(function(tokens) {
         //    return tokens > 14;
         // });
         console.log("Ending White Tokens ", endingWhiteTokens);
         console.log("White Main Field after pushing ending white tokens ", mainFieldWhite);
         console.log("Starting White Tokens D ", startingWhiteTokens);
      };
      
      
         whiteOnBlackCollision =  whitePossibleMoves.filter(value => mainFieldBlack.includes(value)).filter(value => {
            return value > 4 && value < 13
         });
        console.log("White on Black collision " + whiteOnBlackCollision);
     
   
   };
};
var possibleMovesFuncBlack = function () {
   //If main field has no moves on the board, the only possible move is 
   //adding the dice total to the possible moves array 
   if (mainFieldBlack.length === 0 && diceTotal > 0) {
      blackPossibleMoves = [];   
      blackPossibleMoves.push(diceTotal);
      console.log("black Possible Moves - mField 0 ", blackPossibleMoves);

      //If there are moves on the board and tokens still in the starting grid,
      //and the dice total is not 0, we need to add the dice total to 
      //the possible moves array and add the dice total to the current main field
      //moves while removing duplicates from the temp array
   } else if (mainFieldBlack.length > 0 && mainFieldBlack.length < 6 && diceTotal > 0 
      && startingBlackTokens > 0) {
      blackPossibleMovesTemp.push(diceTotal);
      for (let i = 0; i < mainFieldBlack.length; i++) {
            blackPossibleMovesTemp.push(mainFieldBlack[i] + diceTotal);
            console.log("black Possible Moves Temp ", blackPossibleMovesTemp);
            notPossibleBlack = blackPossibleMovesTemp.filter(value => mainFieldBlack.includes(value));
            console.log("Not possible moves black ", notPossibleBlack);

            blackPossibleMoves = blackPossibleMovesTemp.filter(function(value) {
            return !notPossibleBlack.includes(value)
         });
   
         console.log("black Possible Moves ", blackPossibleMoves);

         // endingBlackTokens = mainFieldBlack.filter(function(tokens) {
         //    return tokens > 14;
         // });
         console.log("Ending black Tokens ", endingBlackTokens);
         console.log("black Main Field after pushing ending black tokens ", mainFieldBlack);
         console.log("Starting black Tokens D ", startingBlackTokens);

         //if there are no impossible moves in the temp array, push all temp values to the possible moves grid
            if (notPossibleBlack.length = 0) {
               for (let i = 0; i < blackPossibleMovesTemp.length; i++) {
                  blackPossibleMoves = blackPossibleMovesTemp;
               }
            };
         }
   
         blackOnWhiteCollision = mainFieldWhite.filter(value => blackPossibleMoves.includes(value)).filter(value => {
            return value > 4 && value < 13
         });
         console.log("Black on White collision " + blackOnWhiteCollision);
      
      
      
    } else if (mainFieldBlack.length > 0 && diceTotal > 0 && startingBlackTokens === 0) {
      for (let i = 0; i < mainFieldBlack.length; i++) {
         blackPossibleMovesTemp.push(mainFieldBlack[i] + diceTotal);
         console.log("black Possible Moves Temp ", blackPossibleMovesTemp);
         notPossibleBlack = blackPossibleMovesTemp.filter(value => mainFieldBlack.includes(value));
         console.log("Not possible moves black ", notPossibleBlack);

         blackPossibleMoves = blackPossibleMovesTemp.filter(function(value) {
         return !notPossibleBlack.includes(value)
         });
         console.log("black Possible Moves ", blackPossibleMoves);

         // endingBlackTokens = mainFieldBlack.filter(function(tokens) {
         //    return tokens > 14;
         // });
         console.log("Ending black Tokens ", endingBlackTokens);
         console.log("black Main Field after pushing ending black tokens ", mainFieldBlack);
         console.log("Starting black Tokens D ", startingBlackTokens);

         
      };
      blackOnWhiteCollision = mainFieldWhite.filter(value => blackPossibleMoves.includes(value)).filter(value => {
         return value > 4 && value < 13
      });
      console.log("Black on White collision " + blackOnWhiteCollision);
     
   }
};


   //The below is a bitch. It is breaking the program.
//    } else if (mainFieldwhite.length !==0 && startingWhiteTokens === 0) {
//       console.log("Possible moves ELSE IF");
//    }
// }; 















//Logic for white dice roll
whiteDiceRoll.addEventListener('click', function() {
   emptyTheDiceArray();
   rollTheDice();
   console.log("Dice roll (white): ", diceTotal);
   possibleMovesFuncWhite();
   playerTurnColor = 'w'; 

   if(mainFieldWhite.length === 0 && diceTotal > 0 && startingWhiteTokens > 0) {
    document.getElementById("whttkn1").style.backgroundColor = "aqua";
   
   } else if (startingWhiteTokens > 0 &&  diceTotal > 0) {
      console.log("WP moves ", whitePossibleMoves);
      console.log("dice ",diceTotal);
      console.log("payer col", playerTurnColor);
      // for (let i = 0; i < whitePossibleMoves.length; i++) {
      //    document.getElementsByClassName(playerTurnColor + [i - diceTotal] + "img").style.backgroundColor = "aqua";
      // }
   }
   whiteDiceRoll.disabled = true;
   blackDiceRoll.disabled = true;
   document.getElementById('whitedicediv').innerHTML = diceTotal;
});

//Logic for black dice roll
blackDiceRoll.addEventListener('click', function() {
   emptyTheDiceArray();
   rollTheDice();
   console.log("Dice roll (black): ", diceTotal);
   possibleMovesFuncBlack();
   playerTurnColor = 'b';

   if(mainFieldBlack.length === 0 && diceTotal > 0 && startingBlackTokens > 0) {
      document.getElementById("blktkn1").style.backgroundColor = "aqua";
     
     };
   blackDiceRoll.disabled = true;
   whiteDiceRoll.disabled = true;
   document.getElementById('blackdicediv').innerHTML = diceTotal;
});













//The below test mimics the player moving a token from the token grid to the main field

functionTestWhite.addEventListener('click', function() {
   //This will clear the main field of images
      if (whitePossibleMoves.includes(parseInt(moveNumberWhite.value))) {
      //clears the token start highlight
      document.getElementById("whttkn1").style.backgroundColor = "";
      imgs = document.querySelectorAll('main .w');
      imgs.forEach(img => img.src = "")
      };
   //Move token from grid to board - If player rolls greater than 0 and no pieces are on the board...
   if (playerTurnColor === 'w' && diceTotal !== 0 && mainFieldWhite.length === 0
   && whitePossibleMoves.includes(parseInt(moveNumberWhite.value))) {

      mainFieldWhite.push(parseInt(moveNumberWhite.value));
      
      //The below removes the move the player chose from the array of possible moves
       whitePossibleMovesFilterArray = whitePossibleMoves.filter(function(value) {
          return value !== parseInt(moveNumberWhite.value);
       });
       whitePossibleMoves = whitePossibleMovesFilterArray;
       if (mainFieldWhite.length > 0) { 
          startingWhiteTokens = (6 - mainFieldWhite.length - endingWhiteTokens.length);
         }
       console.log("Starting White Tokens Grid A ", startingWhiteTokens);
       blackDiceRoll.disabled = false;
       diceTotal = null;
       var whiteTokens = document.getElementById('whitetokenstartgrid');
       whiteTokens.src = "img/White" + startingWhiteTokens + ".png";
       if (endingWhiteTokens.length > 0) {
          var whiteTokensEnd = document.getElementById('whitetokenscomplete');
          whiteTokensEnd.src = "img/White" + endingWhiteTokens.length + ".png";
       };

       var whiteGridToken = "";
       for (let i = 0; i < mainFieldWhite.length; i++) {
         whiteGridToken = document.querySelector("." + "w" + mainFieldWhite[i] + "img")
         whiteGridToken.src = "img/White.png";      
      };

      var blackGridToken = "";
      for (let i = 0; i < mainFieldBlack.length; i++) {
        var blackGridToken = document.querySelector("." + "b" + mainFieldBlack[i] + "img");
        blackGridToken.src = "img/Black.png";
        console.log("black grid token ", blackGridToken);      
     };
      
       document.getElementById('whitedicediv').innerHTML = "";
       console.log("Filtered Array ", whitePossibleMovesFilterArray);
       console.log("White Possible Moves", whitePossibleMoves);
       console.log("White Main Field ", mainFieldWhite);

   
       //If player rolls greater than 0 and pieces are on the board....
   }  else if (playerTurnColor === 'w' && diceTotal !== 0 && mainFieldWhite.length > 0
      && whitePossibleMoves.includes(parseInt(moveNumberWhite.value))) {

         //removeChosen removes the moved token from its original position in the mainField array
         removeChosen = moveNumberWhite.value - diceTotal;
         console.log("Remove Chosen ", removeChosen);

         //the below places the token that was removed in the step above and places it on the chosen place in the main field
         mainFieldWhite.push(parseInt(moveNumberWhite.value));
         console.log("Main white field after adding chosen ", mainFieldWhite);

         //mainFieldFilterArray is a short-term variable that removes the initial token position before it was moved
         mainFieldWhiteFilterArray = mainFieldWhite.filter(function(value) {
           return value !== removeChosen;
         });
         mainFieldWhite = mainFieldWhiteFilterArray;
         console.log("Main Field returned minus removeChosen ", mainFieldWhiteFilterArray);

         //if the token lands on a square occupied by the opponent...
         //removes the token of the starting grid
         if (mainFieldWhite.length > 0) { 
            startingWhiteTokens = (6 - mainFieldWhite.length - endingWhiteTokens.length);
         };
         
         nums = mainFieldWhite.filter(function(value) {
            return value > 14;
         });
         if (nums > 0) {
            endingWhiteTokens.push(nums);
         };
         console.log("Numbers greater than 14 ", nums);
         nums2 = mainFieldWhite.filter(function(val) {
            return !nums.includes(val);
         });
         console.log("main field white without numbers greater than 14 ", nums2);
         
         mainFieldWhite = nums2;
         console.log("Mainfield White after removing greater than 14 ", nums2);
         console.log("Ending White Tokens ", endingWhiteTokens);
         console.log("Starting White Tokens B ", startingWhiteTokens);
         
         whitePossibleMovesTemp = [];
         blackDiceRoll.disabled = false;
         diceTotal = null;
         document.getElementById('whitedicediv').innerHTML = "";
         if (endingWhiteTokens.length > 0) {
            var whiteTokensEnd = document.getElementById('whitetokenscomplete');
            whiteTokensEnd.src = "img/White" + endingWhiteTokens.length + ".png";
         };
         console.log("White Main Field ", mainFieldWhite);
         
         //If token lands on the opponents piece...
         if (whiteOnBlackCollision.includes(parseInt(moveNumberWhite.value))) {
            collisionTempWhite = mainFieldBlack.filter(function(value) {
               return value !== parseInt(moveNumberWhite.value);
            });
            attackImageChange(); 
            console.log("CollisionTempWhite ", collisionTempWhite)
            mainFieldBlack = collisionTempWhite;
            startingBlackTokens = 6 - mainFieldBlack.length - endingBlackTokens;
            console.log("Black main field after filtering out whites attack move", mainFieldBlack);
            console.log("Main field White after removing attacked piece ", mainFieldWhite);
         };
         
         var whiteTokens = document.getElementById('whitetokenstartgrid');
         whiteTokens.src = "img/White" + startingWhiteTokens + ".png";

         var blackTokens = document.getElementById('blacktokenstartgrid');
         blackTokens.src = "img/Black" + startingBlackTokens + ".png";
         console.log("Blacktokenstartgrid line 470 ", blackTokens);

         var whiteGridToken = "";
         for (let i = 0; i < mainFieldWhite.length; i++) {
            whiteGridToken = document.querySelector("." + "w" + mainFieldWhite[i] + "img")
            whiteGridToken.src = "img/White.png";      
         };
         
         var blackGridToken = "";
         for (let i = 0; i < mainFieldBlack.length; i++) {
            var blackGridToken = document.querySelector("." + "b" + mainFieldBlack[i] + "img");
            blackGridToken.src = "img/Black.png";    
         };

         
         // If player rolls 0...   
      } else if (diceTotal === 0 && playerTurnColor === 'w') {
         console.log("Zero");
         
         playerTurnColor === 'b';
      console.log("Starting White Tokens Grid C ", startingWhiteTokens);
      blackDiceRoll.disabled = false;
      diceTotal = null;
      document.getElementById('whitedicediv').innerHTML = "";
      var whiteTokens = document.getElementById('whitetokenstartgrid');
      whiteTokens.src = "img/White" + startingWhiteTokens + ".png"; 
      if (endingWhiteTokens.length > 0) {
         var whiteTokensEnd = document.getElementById('whitetokenscomplete');
         whiteTokensEnd.src = "img/White" + endingWhiteTokens.length + ".png";
      };

      var whiteGridToken = "";
      for (let i = 0; i < mainFieldWhite.length; i++) {
         whiteGridToken = document.querySelector("." + "w" + mainFieldWhite[i] + "img");
         whiteGridToken.src = "img/White.png";      
      };

      for (let i = 0; i < mainFieldBlack.length; i++) {
         var blackGridToken = document.querySelector("." + "b" + mainFieldBlack[i] + "img");
         blackGridToken.src = "img/Black.png";
         console.log("black grid token ", blackGridToken);      
      };
      alert("White LOSES TURN!");
   } 





});
functionTestBlack.addEventListener('click', function() {
      if (blackPossibleMoves.includes(parseInt(moveNumberBlack.value))) {
      document.getElementById("blktkn1").style.backgroundColor = "";
      imgs = document.querySelectorAll('main .b');
      imgs.forEach(img => img.src = "")
      };

   //Move token from grid to board - If player rolls greater than 0 and no pieces are on the board...
   if (playerTurnColor === 'b' && diceTotal !== 0 && mainFieldBlack.length === 0
   && blackPossibleMoves.includes(parseInt(moveNumberBlack.value))) {

      mainFieldBlack.push(parseInt(moveNumberBlack.value));
      
      //The below removes the move the player chose from the array of possible moves
       blackPossibleMovesFilterArray = blackPossibleMoves.filter(function(value) {
          return value !== parseInt(moveNumberBlack.value);
       });
       blackPossibleMoves = blackPossibleMovesFilterArray;
       if (mainFieldBlack.length > 0) { 
          startingBlackTokens = (6 - mainFieldBlack.length - endingBlackTokens.length);
         }
       console.log("Starting Black Tokens Grid A ", startingBlackTokens);
       whiteDiceRoll.disabled = false;
       diceTotal = null;
       var blackTokens = document.getElementById('blacktokenstartgrid');
       blackTokens.src = "img/Black" + startingBlackTokens + ".png";
       console.log("Script line 545 black tokens src ", blackTokens);
       if (endingBlackTokens.length > 0) {
          var blackTokensEnd = document.getElementById('blacktokenscomplete');
          blackTokensEnd.src = "img/Black" + endingBlackTokens.length + ".png";
          console.log("ending black tokens at line 550 ", blackTokensEnd);  
         };
         
         var blackGridToken = "";
         for (let i = 0; i < mainFieldBlack.length; i++) {
            var blackGridToken = document.querySelector("." + "b" + mainFieldBlack[i] + "img");
            blackGridToken.src = "img/Black.png";
            console.log("black grid token ", blackGridToken);      
         };
         
         var whiteGridToken = "";
         for (let i = 0; i < mainFieldWhite.length; i++) {
            whiteGridToken = document.querySelector("." + "w" + mainFieldWhite[i] + "img")
            whiteGridToken.src = "img/White.png";      
         };
         
         document.getElementById('blackdicediv').innerHTML = "";
         console.log("Filtered Array ", blackPossibleMovesFilterArray);
         console.log("Black Possible Moves", blackPossibleMoves);
         console.log("Black Main Field ", mainFieldBlack);

   
       //If player rolls greater than 0 and pieces are on the board....
   }  else if (playerTurnColor === 'b' && diceTotal !== 0 && mainFieldBlack.length > 0
      && blackPossibleMoves.includes(parseInt(moveNumberBlack.value))) {
         removeChosen = moveNumberBlack.value - diceTotal;
         console.log("Remove Chosen ", removeChosen);
         mainFieldBlack.push(parseInt(moveNumberBlack.value));
         console.log("Main black field after adding chosen ", mainFieldBlack);
         mainFieldBlackFilterArray = mainFieldBlack.filter(function(value) {
           return value !== removeChosen;
         });
         mainFieldBlack = mainFieldBlackFilterArray;
         console.log("Main Field returned minus removeChosen ", mainFieldBlackFilterArray);
         
         if (mainFieldBlack.length > 0) { 
            startingBlackTokens = (6 - mainFieldBlack.length - endingBlackTokens.length);
         };
         
         nums3 = mainFieldBlack.filter(function(value) {
            return value > 14;
         });
         if (nums3 > 0) {
            endingBlackTokens.push(nums);
         };
         console.log("Numbers greater than 14 ", nums3);
         nums4 = mainFieldBlack.filter(function(val) {
            return !nums3.includes(val);
         });
         console.log("main field black without numbers greater than 14 ", nums4);
         
         mainFieldBlack = nums4;
         console.log("Mainfield Black after removing greater than 14 ", nums4);
         console.log("Ending Black Tokens ", endingBlackTokens);
         
         
         console.log("Starting Black Tokens B ", startingBlackTokens); 
         blackPossibleMovesTemp = [];
         whiteDiceRoll.disabled = false;
         diceTotal = null;
         document.getElementById('blackdicediv').innerHTML = "";
         if (endingBlackTokens.length > 0) {
            var blackTokensEnd = document.getElementById('blacktokenscomplete');
            blackTokensEnd.src = "img/Black" + endingBlackTokens.length + ".png";
         };
         console.log("Black Main Field ", mainFieldBlack);
         
         //If token lands on opponents piece...
         if (blackOnWhiteCollision.includes(parseInt(moveNumberBlack.value))) {
            console.log("Move Number Box value ", moveNumberBlack.value);
            collisionTempBlack = mainFieldWhite.filter(function(value) {
               return value !== parseInt(moveNumberBlack.value);
            });
            
            tempImg = document.getElementsByClassName(playerTurnColor + moveNumberBlack + "img");
            console.log("Temp Image ", tempImg);
            tempImg.src = "";
            tempImg.src = "img/Black.png";
            
            mainFieldWhite = collisionTempBlack;
            startingWhiteTokens += 1;
            console.log("Main field White after removing attacked piece ", mainFieldWhite);
         }

         var whiteTokens = document.getElementById('whitetokenstartgrid');
         whiteTokens.src = "img/White" + startingWhiteTokens + ".png";

         var blackTokens = document.getElementById('blacktokenstartgrid');
         blackTokens.src = "img/Black" + startingBlackTokens + ".png"; 
         console.log("starting black tokens at line637 ", startingBlackTokens);
         
         for (let i = 0; i < mainFieldBlack.length; i++) {
            var blackGridToken = document.querySelector("." + "b" + mainFieldBlack[i] + "img");
            blackGridToken.src = "img/Black.png";    
         };

         var whiteGridToken = "";
         for (let i = 0; i < mainFieldWhite.length; i++) {
            whiteGridToken = document.querySelector("." + "w" + mainFieldWhite[i] + "img")
            whiteGridToken.src = "img/White.png";      
         };
         // If player rolls 0...   
      } else if (diceTotal === 0 && playerTurnColor === 'b') {
         console.log("Zero");

      playerTurnColor === 'w';
      console.log("Starting Black Tokens Grid C ", startingBlackTokens);
      whiteDiceRoll.disabled = false;
      diceTotal = null;
      document.getElementById('blackdicediv').innerHTML = "";

      var blackTokens = document.getElementById('blacktokenstartgrid');
      blackTokens.src = "img/Black" + startingBlackTokens + ".png";
      console.log("starting black tokens at line 661", blackTokens);
      if (endingBlackTokens.length > 0) {
         var blackTokensEnd = document.getElementById('blacktokenscomplete');
         blackTokensEnd.src = "img/Black" + endingBlackTokens.length + ".png";
       };
       for (let i = 0; i < mainFieldBlack.length; i++) {
         var blackGridToken = document.querySelector("." + "b" + mainFieldBlack[i] + "img");
         blackGridToken.src = "img/Black.png";      
      };

      var whiteGridToken = "";
         for (let i = 0; i < mainFieldWhite.length; i++) {
            whiteGridToken = document.querySelector("." + "w" + mainFieldWhite[i] + "img")
            whiteGridToken.src = "img/White.png";      
         };
      alert("Black LOSES TURN!");
   } 
});




















function attackImageChange() {
   tempImg = document.getElementsByClassName(playerTurnColor + moveNumberWhite + "img");
   console.log("Temp Image ", tempImg);
   tempImg.src = "";
   tempImg.src = "img/White.png";
};

// // var initialWhiteMove = function () {
// //    if (startingWhiteTokensGrid.length = 6 && playerTurnColor === 'w'&& diceTotal !== 0) {
// //       mainFieldWhite.push(diceTotal);
// //       blackDiceRoll.disabled = false;
// //    }
// // };

// // var initialBlackMove = function () {
// //    if (startingBlackTokensGrid.length = 6 && playerTurnColor === 'b'&& diceTotal !== 0) {
//       mainFieldBlack.push(diceTotal);
//       whiteDiceRoll.disabled = true;
//    }
// };

/*create number of tokens in the starting field based on
'startingTokens' variables */

//startingWhiteTokensGrid = document.getElementById("whitetokensstart");

// if (startingWhiteTokens = 6) {
//    document.querySelector()
// }


// var removeClassFromToken = function() {
//    if ( var element = document.getElementById("whttkn1");
//    element.classList.remove("whitecircle");
// }

//The below variable is just for the "for loop" dice rolling
//var diceArray = [dice1, dice2, dice3, dice4];
//DOM references


// function diceTotal() {
//    diceArray.reduce((a, b) => a + b, 0);
//rollTheDice();
// }
