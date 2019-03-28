//api_key=dc6zaTOxFJmzC
//https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=cats"

var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=dogs&limit=10";

$.ajax({
    url: queryURL,
    method: "GET"
  })

 //put in object
 $(".gif").on("click", function() {

 .then(function(response) {
     var results = response.data;
     console.log(results);

     for (var i = 0; i<results.length; i++) {
         var image = $("<img>");
         var imaging = results[i].images.downsized.url;
         image.attr("src", imaging);
         console.log(imaging);
         $("#gifDiv1").append(image);
     }
 })

