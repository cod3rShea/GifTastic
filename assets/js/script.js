

var food = ["pizza", "nachos", "flaming hot cheetos", "pierogi", "french fries", "salmon", "sushi", "stir fry", "pho", "cheese", "steak", "tacos"];
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
        var gifImg = $("<img>");
        gifImg.attr("src", stillImage);

        $(".gifs-container").append(gifImg);
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
    
})


$(document).ready(function () {
    renderButtons();
    addButton();
});



