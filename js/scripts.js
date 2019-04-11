var totalRoll1 = 0;
var totalRoll2 = 0;

var randomizer = function (){
  return Math.floor(Math.random() * 6) + 1;
}


$(document).ready(


  function(){$("#p1").click(function(){
  
  var roll = randomizer();
  totalRoll1 += roll;
  
  if (roll!==1){
    $("#player1 h3").text(roll);
    $("#player1 h4").text(totalRoll1);
  }
  else{
     totalRoll1 ===0;
     alert("oops! you have lost all your points") 
     $("#player1 h3").text("0");
     $("#player1 h4").text("0"); 
  }
  
})

$("#p12").click(function(){
  totalRoll1 += totalRoll1;
  
  $("#player1 h3").text("HOLD");
  $("#player1 h4").text("your score for this round is"+" "+ totalRoll1);
  
})



$("#p2").click(function(){
  var roll = randomizer();
  totalRoll2+= roll;
  if (roll!==1){
    $("#player2 h3").text(roll);
    $("#player2 h4").text(totalRoll2);
  }
  else{
     totalRoll2 ===0;
     alert("oops! you have lost all your points") 
     $("#player2 h3").text("0");
     $("#player2 h4").text("0"); 
  }
  
})

$("#p22").click(function(){
  totalRoll2 += totalRoll2;
  
  $("#player2 h3").text("HOLD");
  $("#player2 h4").text(totalRoll2);
  
})

$("#restart").click(function(){
  totalRoll1 = 0;
  totalRoll2 = 0;
  
  $("#player1 h3").text("0");
  $("#player1 h4").text("0");
  $("#player2 h3").text("0");
  $("#player2 h4").text("0");
  
})
if(totalRoll1 === 100 || totalRoll2===100){
  alert("game over!!!");
}

})