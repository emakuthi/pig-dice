// ****************Business logic*****************
//helper class
var randomizer = function (){
  
  return Math.floor(Math.random() * 6) + 1;//picks a rondom unmber between 1 and 6.
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

Player.prototype.hold = function(){
  this.totalScore += this.currentRound.reduce(function getSum(total, amount){return total + amount;});
}


// ***************user interface logic******************


$(document).ready(
  function(){$("#p1").click(function(){
   
 
  $("#alert-2").text(" ")
  player1.roll();
  player1.currentRound === [];
  
  if (player1.die!==1){
    $("#player1 h3").text([player1.currentRound]);
    $("#p2").prop("disabled",true);
    $("#p2").css({"background": "grey", "box-shadow":"0 0 grey" });
    $("#p22").css({"background": "grey", "box-shadow":"0 0 grey", "transition": "0s" });
    $("#alert-2").text("") ;
  }
  else{
     player1.currentRound === [];
     $("#alert-1").text("oops! you have lost all your points") ;
     $("#player1 h3").text(" 0 ");
    //  $("#player1 h4").text("your total points are:"+" "+ player1.totalScore);
     $("#p1").prop("disabled",true);
     $("#p1").css({"background": "grey", "box-shadow":"0 0 grey" });
     $("#p12").css({"background": "grey", "box-shadow":"0 0 grey", "transition": "0s" });
     $("#p2").prop("disabled",false);
     $("#p2").css({"background": "#802915", "box-shadow":"0 3px #802915" });
     $("#p22").css({"background": "#802915", "box-shadow":"0 3px #802915", "transition": ".3s" });
  }
  
})

$("#p12").click(function(){
  // totalRoll1 += totalRoll1;
  player1.hold();
  player1.currentRound = [];
  $("#player1 h3").text("0");
  $("#player1 h4").text("your score for this round is"+" "+ player1.totalScore);
  $("#p12").prop("disabled",true);
  $("#p1").prop("disabled",true);
  $("#p22").prop("disabled",false);
  $("#p2").prop("disabled",false);
  $("#p2").css({"background": "#802915", "box-shadow":"0 3px #802915" });
  $("#p22").css({"background": "#802915", "box-shadow":"0 3px #802915", "transition": ".3s" });
  $("#p1").css({"background": "grey", "box-shadow":"0 0 grey" });
  $("#p12").css({"background": "grey", "box-shadow":"0 0 grey", "transition": "0s" });
})


$("#p2").click(function(){
 
  $("#alert-1").text(" ")
  player2.roll();
  $("#player2 h3").text(" ");
  if (player2.die!==1){
    $("#player2 h3").text(player2.currentRound);
    $("#p1").prop("disabled",true);
    $("#p1").css({"background": "grey", "box-shadow":"0 0 grey" });
    $("#p12").css({"background": "grey", "box-shadow":"0 0 grey", "transition": "0s" });
  }
  else{
    player2.currentRound === [];
     $("#alert-2").text("oops! you have lost all your points") ;
     $("#player2 h3").text("0");
     $("#p2").prop("disabled",true);
     $("#p2").css({"background": "grey", "box-shadow":"0 0 grey" });
     $("#p22").css({"background": "grey", "box-shadow":"0 0 grey", "transition": "0s" });
     $("#p1").prop("disabled",false);
     $("#p1").css({"background": "#802915", "box-shadow":"0 3px #802915" });
     $("#p12").css({"background": "#802915", "box-shadow":"0 3px #802915", "transition": ".3s" });

  }
  
})

$("#p22").click(function(){
  player2.hold();
  player2.currentRound = [];
  $("#player2 h3").text("0");
  $("#player2 h4").text("your score for this round is"+" "+ player2.totalScore);
  $("#p2").prop("disabled",true);
  $("#p22").prop("disabled",true);
  $("#p12").prop("disabled",false);
  $("#p1").prop("disabled",false);
  $("#p1").css({"background": "#802915", "box-shadow":"0 3px #802915" });
  $("#p12").css({"background": "#802915", "box-shadow":"0 3px #802915", "transition": ".3s" });
  $("#p2").css({"background": "grey", "box-shadow":"0 0 grey" });
  $("#p22").css({"background": "grey", "box-shadow":"0 0 grey", "transition": "0s" });
})

$("#restart").click(function(){
  player1.totalScore = 0;
  player2.totalScore = 0;
  
  $("#player1 h3").text("0");
  $("#player1 h4").text("0");
  $("#player2 h3").text("0");
  $("#player2 h4").text("0");
  $("#p1").prop("disabled",false);
  $("#p2").prop("disabled",false);
  $("#p12").prop("disabled",false);
  $("#p22").prop("disabled",false);
  $("#p1").css({"background": "#802915", "box-shadow":"0 3px #802915" });
  $("#p12").css({"background": "#802915", "box-shadow":"0 3px #802915", "transition": ".3s" });
  $("#p2").css({"background": "#802915", "box-shadow":"0 3px #802915" });
  $("#p22").css({"background": "#802915", "box-shadow":"0 3px #802915", "transition": ".3s" });

 
}) 
})
