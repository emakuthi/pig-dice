// ****************BUSINESS LOGIC*****************
//HELPER CLASSES
var randomizer = function (){
  
  return Math.floor(Math.random() * 6) + 1;//picks a rondom unmber between 1 and 6.
}


var diceImage = function (){

  if(player1.die ===1 || player2.die === 1){$("#dice-pic").atrr("src", "images/inverted-dice-1.png");}
  else if(player1.die ===2 || player2.die === 2){$("#dice-pic").atrr("src", "images/inverted-dice-2.png");}
  else if(player1.die ===3 || player2.die === 3){$("#dice-pic").atrr("src", "images/inverted-dice-3.png");}
  else if(player1.die ===4 || player2.die === 4){$("#dice-pic").atrr("src", "images/inverted-dice-4.png");}
  else if(player1.die ===5 || player2.die === 5){ $("#dice-pic").atrr("src", "images/inverted-dice-5.png");}
  else if(player1.die ===6 || player2.die === 6){ $("#dice-pic").atrr("src", "images/inverted-dice-6.png");}
  else{$("#dice-pic").atrr("src", "images/pig.png");}
}
function homePage() {
  location.replace("index.html")
}
//constructor for the player

function Player() {
  this.totalScore = 0;
  this.die = 0;
  this.currentRound = [];
}

//initialize the players;

var player1 = new Player();// initializes player 1
var player2 = new Player();//initializes player 2

//on click
Player.prototype.roll = function(){
  this.die = randomizer();
  this.currentRound.push(this.die);
  
}
//to hold the score and display the total score

Player.prototype.hold = function(){
  this.totalScore += this.currentRound.reduce(function getSum(total, amount){return total + amount;});
}


// ***************USER INTERFACE LOGIC******************


$(document).ready(
  function(){$("#p1").click(function(){
   
  $("#alert-2").text(" ")
  player1.roll();
  player1.currentRound === [];
  $("#player1 h3").text("0");
  //logic for terminating player1 if the dice show 1 during click event
  if (player1.die!==1){
    $("#player1 h3").text([player1.currentRound]);$("#p2").hide();$("#p22").hide();
    $("#alert-2").text("") ;
  }
  else{
     player1.currentRound === [];
     $("#alert-1").text("oops! you have lost all your points") ;
     $("#player1 h3").text("0");
    $("#p1").hide();$("#p12").hide();$("#p2").show();$("#p22").show();
  }
  
})

$("#p12").click(function(){
  player1.hold();
  $("#player1 h3").text("0");
  player1.currentRound = [];
  // logic for showing the winner if player2 hits the total score of over 100 points
  if(player1.totalScore>=100){
    $("#alert-winner1").text(" YOU'RE THE WINNER!!!");
    $("#player1 h3").text("0");
    $("#player1 h4").text("TOTAL SCORE:"+" "+ player1.totalScore);
    $("#p1").hide();$("#p12").hide();$("#p2").hide();$("#p22").hide();
  }else{
  player1.currentRound = [];
  $("#player1 h3").text("0");
  $("#player1 h4").text("TOTAL SCORE:"+" "+ player1.totalScore);
  $("#p1").hide();$("#p12").hide();$("#p2").show();$("#p22").show();}
})


$("#p2").click(function(){
 
  $("#alert-1").text(" ")
  player2.roll();
  $("#player2 h3").text(" ");
  //logic for terminating player2 if the dice show 1 during click event
  if (player2.die!==1){
    $("#player2 h3").text(player2.currentRound);$("#p1").hide();$("#p12").hide();
  }
  else{

    player2.currentRound === [];
     $("#alert-2").text("oops! you have lost all your points") ;
     $("#player2 h3").text("0");$("#p2").hide();$("#p22").hide();$("#p1").show(); $("#p12").show();
      // diceImage();
  } 
})

$("#p22").click(function(){
  player2.hold();
  // logic for showing the winner if player2 hits the total score of over 100 points
  if(player2.totalScore>=100){
    $("#alert-winner2").text(" YOU'RE THE WINNER!!!");
    $("#player2 h3").text("0");
    $("#player2 h4").text("TOTAL SCORE:"+" "+ player2.totalScore);
    $("#p2").hide();$("#p22").hide();$("#p1").hide();$("#p12").hide();
  }else{
  player2.currentRound = [];
  $("#player2 h3").text("0");
  $("#player2 h4").text("TOTAL SCORE:"+" "+ player2.totalScore);
  $("#p2").hide();$("#p22").hide();$("#p1").show();$("#p12").show();}
})
//Resets all the fields one restart button is clicked
$("#restart").click(function(){
  player1.totalScore = 0;
  player2.totalScore = 0;
  
  $("#player1 h3").text("0");$("#player1 h4").text("0");$("#player2 h3").text("0");$("#player2 h4").text("0");
  $("#p2").show();$("#p22").show();$("#p1").show();$("#p12").show();$("#alert-winner1").text(" ");$("#alert-winner2").text("");
  $("#alert-2").text("") ;$("#alert-1").text(" ") ;
}) 
})
