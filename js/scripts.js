var totalRoll1 = 0;
var totalRoll2 = 0;

var randomizer = function (){
  
  return Math.floor(Math.random() * 6) + 1;
}

var randomizer2 = function (){
  return Math.floor(Math.random() * 6) + 1;
}

function player (name, score){
  this.playerName = name;
  this.scores = new Array();

}

var player1 = new Player()
var player2 = new player()

scores = [];
for (var i=1, t=6; i<t; i++) {
  arr.push(randomizer());
}

var totalScore = 0;



$(document).ready(
  function(){$("#p1").click(function(){
   
  var roll1 = randomizer();
  totalRoll1 += roll1;
  $("#alert-2").text(" ")
  
  if (roll1!==1){
    $("#player1 h3").text(roll1);
    $("#p2").prop("disabled",true);
    $("#p2").css({"background": "grey", "box-shadow":"0 0 grey" });
    $("#p22").css({"background": "grey", "box-shadow":"0 0 grey", "transition": "0s" });
    $("#alert-2").text("") ;
  }
  else{
     totalRoll1 ===0;
     $("#alert-1").text("oops! you have lost all your points") ;
     $("#player1 h3").text("0");
     $("#player1 h4").text("your total points are:"+" "+ totalRoll1);
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
  
  $("#player1 h3").text("0");
  $("#player1 h4").text("your score for this round is"+" "+ totalRoll1);
  
})



$("#p2").click(function(){
  var roll2 = randomizer2();
  totalRoll2+= roll2;
  $("#alert-1").text(" ")
  if (roll2!==1){
    $("#player2 h3").text(roll2);
    $("#p1").prop("disabled",true);
    $("#p1").css({"background": "grey", "box-shadow":"0 0 grey" });
    $("#p12").css({"background": "grey", "box-shadow":"0 0 grey", "transition": "0s" });
  }
  else{
     totalRoll2 ===0;
     $("#alert-2").text("oops! you have lost all your points") ;
     $("#player2 h3").text("0");
     $("#player2 h4").text("your total points are:"+" "+ totalRoll2);
     $("#p2").prop("disabled",true);
     $("#p2").css({"background": "grey", "box-shadow":"0 0 grey" });
     $("#p22").css({"background": "grey", "box-shadow":"0 0 grey", "transition": "0s" });
     $("#p1").prop("disabled",false);
     $("#p1").css({"background": "#802915", "box-shadow":"0 3px #802915" });
     $("#p12").css({"background": "#802915", "box-shadow":"0 3px #802915", "transition": ".3s" });

  }
  
})

$("#p22").click(function(){
  // totalRoll2 += totalRoll2;
  $("#player2 h3").text("0");
  $("#player2 h4").text("your score for this round is"+" "+ totalRoll2);
  
})

$("#restart").click(function(){
  totalRoll1 = 0;
  totalRoll2 = 0;
  
  $("#player1 h3").text("0");
  $("#player1 h4").text("0");
  $("#player2 h3").text("0");
  $("#player2 h4").text("0");
  totalRoll1 == 0;
  totalRoll2 == 0;
  
})
if(totalRoll1 === 100 || totalRoll2===100){
  alert("game over!!!");
}

})