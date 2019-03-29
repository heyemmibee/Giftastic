//initiate feeling butt(ons)s
var emotions =["joy", "exhaustion", "terror", "angry", "thriller", "lmfao", "yas queen"];

//create & add butts function
function createButts()  {
    $("#currentButts").empty();
    for (var i = 0; i < emotions.length; i++)  {
        $("#currentButts").append('<button class="emotion-buttons btn btn-secondary">' + emotions[i] + '</button>');
        }
    }
    
    $("#addEmotion").on("click", function() {
        var newEmo = $("#createEmotion").val()
        $("#newButts").append(
            "<button class='newButts btn btn-secondary' value="+newEmo+">"+newEmo+"</button>"
        )
    })
    
//on click event for emotion buttons    
    $(document).on('click', '.emotion-buttons', function(event)    {
        event.preventDefault();
        $("#emoGifs").empty();
        var emotion = this.innerText;
        var APIKey = "9fjApbFAC67DMdK3yQT5EJhyifN3dMV7";
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + emotion + "&api_key=" + APIKey + "&limit=10&rating=g";
    
        $.ajax({
            url: queryURL,
            method: "GET"
        })
        
        .then(function(response)  {
            var results = response.data;
            for (var i = 0; i < results.length; i++) {

                var image = $("<img>");
                var imageDisplay = results[i].images.fixed_height.url;
                image.attr("src", imageDisplay);
                console.log(imageDisplay);
                $("#emoGifs").append(image);
                var rating = results[i].rating;
                var parag = $("<p>").text("Rating: " + rating);
        
            $("#emoGifs").append(parag);
            }
        });
        $("#emoGifs").empty();
    });
    createButts();


// function renderButts() {
//     $("#newButts").empty();
//     for (var i = 0; i < emotions.length; i++) {
//         var a = $("<button>");
//         a.addClass("emotion-btn btn btn-secondary");
//         a.attr("data-name", emotions[i]);
//         a.text(emotions[i]);
//         console.log(emotions + a);
//         $("#newButts").append(a);
//     }
// }

// function displayGIF() {
//     var emotion = $(this).attr("data-name");
//     var APIKey = "9fjApbFAC67DMdK3yQT5EJhyifN3dMV7";
//     var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + emotion + "&api_key=" + APIKey + "&limit=10&rating=g";

//     $.ajax({
//     url: queryURL,
//     method: "GET"
//     })
    
//     //put in object
//      .then(function(response) {
//          var results = response.data;
//          console.log(results);
//          for (var i = 0; i<results.length; i++) {
//              var imageDiv = $("<div>");
//              var rating = $("<p>").text("Rating: " + results[i].rating);
//              var emoImage = $("<img>");
//                 emoImage.addClass("gif");
//                 emoImage.attr("src", results[i].images.fixed_height_still.url);
//                 console.log(emoImage);
//              imageDiv.append(emoImage);
//              imageDiv.append(rating);
//              $("#gifDiv1").append(emoImage);
//          }}
     

 
//  //function for looping array of butts
 

//  $("#searchButt").on("click", function(event) {
//     event.preventDefault();
//     var emotion = $("#searchForm").val().trim();
//     emotions.push(emotion);
//     renderButts();
//  });
// renderButts();

//  })
