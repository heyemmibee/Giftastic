//initiate feeling butt(ons)s
var emotions =["joy", "exhaustion", "terror", "angry", "thriller", "lmfao", "yas queen"];

//array, create & add butts function
function createButts()  {
    $("#currentButts").empty();
    for (var i = 0; i < emotions.length; i++)  {
        $("#currentButts").append('<button class="emotion-buttons btn btn-secondary">' + emotions[i] + '</button>');
        }
    }
    
    $("#addEmotion").on("click", function() {
        var newEmo = $("#createEmotion").val()
        $("#newButts").append("<button class='emotion-buttons btn btn-secondary' value="+newEmo+">"+newEmo+"</button>"
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