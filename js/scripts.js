var inputPrep = function(inputString) {
  var processString = inputString.replace(/[.,?!'"\s]/g,"").toLowerCase();
  return processString;
};



$(document).ready(function(){


  $("#inputBox").submit(function(event){
    event.preventDefault();
    var userSentence = $("#sentenceInput").val();

    var result = inputPrep(userSentence);
    $("#codeResult").text(result);

  });

});
