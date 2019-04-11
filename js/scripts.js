
var totalRoll1 = 0;
var totalRoll2 = 0;

var randomizer = function (){
  return Math.floor(Math.random() * 6) + 1;
}


$("#p1").click(function(){
  
  var roll = randomizer();
  totalRoll1 += roll;
  
  $("#player1 h3").text(roll);
  $("#player1 h4").text(totalRoll1);
  
  $("#p1").prop("disabled", true);
  
  
})

$("#p12").click(function(){
  totalRoll1 += totalRoll1;
  
  $("#player1 h3").text("HOLD");
  $("#player1 h4").text(totalRoll1);
  
})



$("#p2").click(function(){
  
  var roll = randomizer();
  totalRoll2+= roll;
  
  $("#player2 h3").text(roll);
  $("#player2 h4").text(totalRoll2);
  
})

$("#p22").click(function(){
  totalRoll2 += totalRoll2;
  
  $("#player2 h3").text("HOLD");
  $("#player2 h4").text(totalRoll2);
  
})

$("#restart").click(function(){
  totalRoll1 = 0;
  totalRoll2 = 0;
  
  $("#player1 h3").text("");
  $("#player1 h4").text("");
  $("#player2 h3").text("");
  $("#player2 h4").text("");
  
})

