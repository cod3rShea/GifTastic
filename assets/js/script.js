

var food = ["pizza", "nachos", "flaming hot cheetos", "pierogi", "french fries", "salmon", "sushi", "stir fry", "pho", "cheese", "steak", "tacos"];

function renderButtons() {
    $(".buttons-container").empty();

    for (var i = 0; i < food.length; i++) {
        var button = $("<button>");
        button.addClass("food-button");
        button.attr("data-name", food[i]);
        button.text(food[i]);
        $(".buttons-container").append(button);
    }
}

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
        console.log(arr[i].images);
        // var button = $("<button>");
        // button.addClass("arr-button");
        // button.attr("data-name", food[i]);
        // button.text(food[i]);
        // $(".buttons-container").append(button);
    }
}


$('.buttons-container').on('click', ".food-button", function () {
    console.log( $(this).text() );
    var query = $(this).text();

    $.get("https://api.giphy.com/v1/gifs/search?api_key=4KQWcmtyHSucocseM9aEsVOuOQiJGQqL&q=" + query, function(data){
        // console.log("Data: ", data);
        renderGifs(data.data);
      });
})


$(document).ready(function () {
    renderButtons();
    addButton();
});