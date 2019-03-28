// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */
$( document ).ready(function() {
   $(".text-center").show();
});
$("#search-button").click(function(){
    var searchTerm = $("#search-term").val();
var theUrl="https://api.giphy.com/v1/gifs/search?q="+searchTerm+"&rating=pg&api_key=dc6zaTOxFJmzC";
    $.ajax({
    url: theUrl,
    method: "GET",
    success: function(response) {
        $(".giffy").append("<img src='"+response.data[0].images.fixed_width.url+"'/>");
      $(".text-center").hide();
    },
    });
});

$("#random-button").click(function(){
    var searchTerm = $("#search-term").val();
    var num= Math.floor(Math.random() * 30);
var theUrl="https://api.giphy.com/v1/gifs/search?q="+searchTerm+"&rating=pg&api_key=dc6zaTOxFJmzC";
    $.ajax({
    url: theUrl,
    method: "GET",
    success: function(response) {
        $(".giffy").append("<img src='"+response.data[num].images.fixed_width.url+"'/>");
       $(".text-center").hide();
    },
    });
});