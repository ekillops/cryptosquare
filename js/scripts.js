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

// Fills targetGrid left to right one letter at a time from inputString.
var gridDistributor = function(inputString, targetGrid, gridSize) {
  var passCountX = 0;
  var passCountY = 0;
  var gridCount = gridSize - 1;

  for (var i = 0; i < inputString.length; i += 1) {
    targetGrid[passCountX][passCountY] = inputString[i];

    if (passCountX < gridCount) {
      passCountX +=1;
    } else if (passCountX === gridCount) {
      passCountX = 0;
      passCountY +=1;
    }
  };
};

$(document).ready(function(){


  $("#inputBox").submit(function(event){
    event.preventDefault();
    var userSentence = $("#sentenceInput").val();
    var cleanSentence = inputPrep(userSentence);
    var gridSize = nearSquare(cleanSentence);
    var cryptGrid = gridArray(gridSize);

    var result = "placeHolder";
    $("#codeResult").text(result);

  });

});
