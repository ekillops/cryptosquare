//Strips punctuation, white space and makes text lowercase.
var inputPrep = function(inputString) {
  var processString = inputString.replace(/[.,?!'"\s]/g,"").toLowerCase();
  return processString;
};

//Calculate length of string and determins nearest square root rounding up to get grid size.
var nearSquare = function(stringSize) {
  var gridSize = Math.ceil(Math.sqrt(stringSize.length));
  return gridSize;
};


$(document).ready(function(){


  $("#inputBox").submit(function(event){
    event.preventDefault();
    var userSentence = $("#sentenceInput").val();

    var result = inputPrep(userSentence);
    $("#codeResult").text(result);

  });

});
