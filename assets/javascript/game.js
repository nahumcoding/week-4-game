$(document).ready(function() {
 
// Win-Loss Variables
var wins = 0;
var loses = 0;

//Player's Score Variable 
var userTotal = 0; // sum of all gem values
$("#playerScore").text(userTotal);

// Gem Value Variables
var greendam = Math.floor(Math.random() * 12) + 1;
var reddam = Math.floor(Math.random() * 12) + 1;
var bluedam = Math.floor(Math.random() * 12) + 1;
var helperdam = Math.floor(Math.random() * 12) + 1;

//Random Number gets generated
var matchnumber = 19 + Math.floor(Math.random()*101)+19;
$("#random-number").text(matchnumber);

function wins(){
//WIN actions: If user  clicks match the Randomly Generated Number 
    alert("Congratulations! YOU WIN!!"); // informs user of win
    wins += 1; // wins increase by 1.
    $("#wins").text("WINS: " + wins);
    gameReset();
}

function losses(){
     //LOSS actions: If user Gem clicks are more than Randomly Generated Number
        alert("You lose!"); // informs user of loss
        loses += 1; // losses increase by 1.
        console.log()
        $("#losses").text("LOSSES: " +  loses);
        gameReset();

        
    }


// dam generate a random number

//dam 1
$("#greendam").on("click", function(){
    userTotal += greendam;
    
    $("#playerScore").text(userTotal);

    // win-loss conditions
    if (userTotal == matchnumber){
        wins();
      }
   else if (userTotal > matchnumber){
        losses();
      } 
  });

//Gem 2
$("#reddam").on("click", function(){
    userTotal += reddam;
    $("#playerScore").text(userTotal);

    // win-loss conditions
    if (userTotal == matchnumber){
        wins();
          }

    if (userTotal > matchnumber){
        losses();
          } 
   
  });

//Gem 3
$("#bluedam").on("click", function(){
    userTotal += bluedam;
    $("#playerScore").text(userTotal);

    // win-loss conditions
    if (userTotal == matchnumber){
        wins();
      }
    if (userTotal > matchnumber){
        losses();
      } 
   
  });

//Gem 4
$("#helperdam").on("click", function(){
    userTotal += helperdam;
    $("#playerScore").text(userTotal);

    // win-loss conditions
    if (userTotal == matchnumber){
        wins();
      }
    if (userTotal > matchnumber){
        losses();
      }    
  });


//Game Reset 
function gameReset(){
    //New Random Number
    matchnumber = 19 + Math.floor(Math.random()*120);
    $("#random-number").text(matchnumber);

    //New Gem Totals
    greendam = Math.floor(Math.random() * 12) + 1;
    reddam = Math.floor(Math.random() * 12) + 1;
    bluedam = Math.floor(Math.random() * 12) + 1;
    helperdam = Math.floor(Math.random() * 12) + 1;

    //Player Score Cleared
    userTotal = 0;
    $("#playerScore").text(userTotal);
}

});