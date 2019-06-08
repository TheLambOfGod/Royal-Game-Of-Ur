
var diceArray = [];
var diceTotal;
var startingWhtTokens = 6;
var startingBlkTokens = 6;
var whtTokensInPlay = 0;
var blkTokensInPlay = 0;
var endingWhtTokens = 0;
var endingBlkTokens = 0;
var whtTkn1Loc; var whtTkn2Loc; var whtTkn3Loc;
var whtTkn4Loc; var whtTkn5Loc; var whtTkn6Loc;
var blkTkn1Loc; var blkTkn2Loc; var blkTkn3Loc;
var blkTkn4Loc; var blkTkn5Loc; var blkTkn6Loc;


//The below variable is just for the "for loop" dice rolling
//var diceArray = [dice1, dice2, dice3, dice4];
//DOM references
var blackDiceBtn;
var whiteDiceBtn;

//Event listeners

blackDiceBtn = document.getElementById("blackdicebtn");
whiteDiceBtn = document.getElementById("whitedicebtn");


function diceTotal() {
   diceArray.reduce((a, b) => a + b, 0);
}

//Binary dice rolling x 4 function
var diceRolling = function () {
   while (diceArray.length < 4) {
      var rand = Math.random();
         if (rand > 0.5) {
           diceArray.push(1); 
         } else {
            diceArray.push(0);
         }
      };
   diceTotal = diceArray.reduce((a, b) => a + b, 0);
};

diceRolling();
console.log(diceArray);
console.log(diceTotal); 

