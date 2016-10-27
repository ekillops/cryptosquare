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

//Create a two dimensional array, gridNumber x gridNumber.
var gridArray = function(gridNumber) {
  var gridBase = [];
  for(var i = 0; i < gridNumber; i +=1) {
    var gridColumn = [];
    for(var j = 0; j < gridNumber; j +=1) {
      gridColumn.push("-");
    };
    gridBase.push(gridColumn);
  };
  return gridBase;
};


$(document).ready(function(){


  $("#inputBox").submit(function(event){
    event.preventDefault();
    var userSentence = $("#sentenceInput").val();

    var result = inputPrep(userSentence);
    $("#codeResult").text(result);

  });

});
