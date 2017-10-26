$(document).ready(function() {
console.log("you opened the site")


var wordArray = ["Dog", "cat", "bird", "hamster"]

function renderButtons() {

        $("#buttons-view").empty();

        for (var i = 0; i < wordArray.length; i++) {
          var a = $("<button>");
          a.addClass("wordArray btn btn-secondary btn-lg btn btn-info");
          a.attr("data-name", wordArray[i]);
          a.text(wordArray[i]);
          $("#buttons-view").append(a);
        }
      }


renderButtons()
console.log(wordArray)

$("#add-wordArray").on("click", function(event) {
        event.preventDefault();
        var word = $("#word-input").val().trim();
        wordArray.push(word);

        renderButtons();
});


$(document).on("click", 'button', function(event) {
      // event.preventDefault(event);


	var word = $(this).attr("data-name");
	console.log(this)
	console.log(word);

	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
	        word + "&api_key=dc6zaTOxFJmzC&limit=20";

	$.ajax({
	  url: queryURL,
	  method: "GET"
	}).done(function(response) {
	  console.log(queryURL);

	  console.log(response);
	  var results = response.data;

	  for (var i = 0; i < 20; i++) {
	    var wordDiv = $("<div>");
	    wordDiv.addClass('col-sm-3');
	    var p = $("<p>").text("Rating: " + results[i].rating);
	    var wordImage = $("<img>");
	    wordImage.attr("src", results[i].images.fixed_height.url);
	    wordDiv.append(p);
	    wordDiv.append(wordImage);
	    $("#gifs-appear-here").prepend(wordDiv);
	  };
	});
});



$(document).on("click", ".word", wordArray);

    renderButtons();

// this is the docuemnt.ready end brackets
});