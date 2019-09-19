

var food = ["pizza", "nachos", "flaming hot cheetos", "pierogi", "french fries", "salmon", "sushi", "stir fry", "pho", "cheese", "steak", "tacos"];
var gif = [];
var movingImage;

//  Render Buttons
function renderButtons() {
    // Clears buttons container
    $(".buttons-container").empty();
    // Loops through buttons
    for (var i = 0; i < food.length; i++) {
        var button = $("<button>");
        button.addClass("food-button");
        button.attr("data-name", food[i]);
        button.text(food[i]);
        $(".buttons-container").append(button);
    }
}
// Add New Button
function addButton() {
    $("#add-food").on("click", function (event) {
        event.preventDefault();
        var addedFood = $("#food-input").val().trim();
        food.push(addedFood);
        renderButtons();
    });
}

function renderGifs(arr) {
    $(".gifs-container").empty();
    for (var i = 0; i < arr.length; i++) {
        var stillImage = arr[i].images.original_still.url; 
        var rating =  arr[i].rating;
        var imgContainer = $("<div class='img-container img-" + i+ "'>");
        var gifImg = $("<img>");
        var ratingContainer = $("<h2>Rating: <span>" + rating  + "</span></h2>");
        imgContainer.append(gifImg);
        gifImg.attr("src", stillImage);
        imgContainer.append(ratingContainer)
        $(".gifs-container").append(imgContainer);
       
    }
}

$('.buttons-container').on('click', ".food-button", function () {
    var query = $(this).text();
    var apiURL = "https://api.giphy.com/v1/gifs/search?api_key=";
    var apiKey = "4KQWcmtyHSucocseM9aEsVOuOQiJGQqL"
    var apiCall = apiURL + apiKey;
    $.get( apiCall + "&q=" + query, function(data){
        renderGifs(data.data);
      });
    
});



$('.gifs-container').on('click', "img", function() {
    console.log(gif);
});


$(document).ready(function () {
    renderButtons();
    addButton();
});



