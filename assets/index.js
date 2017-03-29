var userInput = $(this).data('userInput');

var queryURL = "http://api.giphy.com//v1/gifs/search?q=" + userInput + "api_key=dc6zaTOxFJmzC";

$("#search-button").on("click", function () {

    $.ajax({
      url: queryURL,
      method: 'GET'
    }).done(function(response) {
      //console.log(response);
    });

      var imageUrl = response.data.image_original_url;
      var giphyImage = $("<img>");
      giphyImage.attr("src", imageUrl);
      giphyImage.attr("alt", "giphy image");
      $("#images").prepend(giphyImage);
    });

// default set of buttons to populate
var animals = ["dog", "cat", "bird"];


$(function() {
      arrayButtons(animals, 'newButton', '#newButton');

});

function arrayButtons(arrayToUse, classToAdd, areaToAddTo){
    $(areaToAddTo).empty();

    for (var i = 0; i < arrayToUse.length; i++){
        var a = $('<button>')
        a.addClass(classToAdd);
        a.attr('data-type', arrayToUse[i]);
        a.text(arrayToUse[i]);
        $(areaToAddTo).append(a);
    }

}

// controls to make it still or animate
$(".gif").on("click", function () {
       
      var state = $(this).attr("data-state");
  
      if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }
    });

//This is to add new buttons
$('#addbutton').on('click', function(){
    var newButton = $('input').eq(0).val();

    if (newButton.length > 2){
        animals.push(newButton);
    }

    arrayButtons(animals, 'newButton', '#newButton');

    return false;
});
