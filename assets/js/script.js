

var food = ["pizza", "nachos", "flaming hot cheetos", "pierogi", "french fries", "salmon", "sushi", "stir fry", "pho", "cheese", "steak", "tacos"];
var gif = [];
var moveImage;
var stillImage;


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
    console.log(arr);
    for (var i = 0; i < arr.length; i++) {
        var stillImage = arr[i].images.original_still.url;
        var moveImage = arr[i].images.original.url;
        var rating =  arr[i].rating;
        var imgContainer = $("<div class='img-container img-" + i+ "'>");
        var gifImg = $("<img>");
        var ratingContainer = $("<h2>Rating: <span>" + rating  + "</span></h2>");
        imgContainer.append(gifImg);
        gifImg.attr("src", stillImage);
        gifImg.attr("data-gif", moveImage);
        imgContainer.append(ratingContainer)
        $(".gifs-container").append(imgContainer);
   
    }
    
    $('.img-container img').on('click', function() {
        var test = $(this).attr("src");
        var testTwo = $(this).attr("data-gif");

        if ($(this).attr("src") != $(this).attr("data-gif")) {
            $(this).attr("src", testTwo);
            $(this).attr("data-gif", test);
        }
    });
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


$(document).ready(function () {
    renderButtons();
    addButton();
});



