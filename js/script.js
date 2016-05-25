
var $overlay = $('<div id="overlay"></div>');
var $image = $('<img id="overlay_img">');
var $fade_in_header = "<p>Coded by Michael Welsh</p>";
var $caption = $("<p></p>");
var $right = $("<div id='right'>Next</div>");
var $left = $("<div id='left'>Previous</div>");
var $prev = $("gallery a img").prev();


// CREATING THE OVERLAY 
$overlay.append($image);
$overlay.append($caption);
$("body").append($overlay);
$overlay.append($left);
$overlay.append($right);




//Overlay exists but is hidden
//Time to show the overlay!!!!
$(".gallery a img").click(function () {
   event.preventDefault();
   // Capturing info on click 
   var img_location = $(this).attr("src");
   var content = $(this).attr("alt");
   // This could be cool 

   // Showing overlay
   $overlay.delay(250).show(0);
   // Assigning captured info to the overlay 
   $image.attr('src', img_location);
   $caption.text(content);
});

$overlay.click(function () {
   $overlay.hide();
})
//Now the Buttons need to do something.....

$left.click(function () {

$overlay.append($prev);
$overlay.show();

});



// Fade in header
//Hide the header text
$('#fadespot').append($fade_in_header);
$('#fadespot').hide();

window.onload = function (){

   $('#fadespot').delay(1000).show('slow')
   
   };




//on mouse over reveal the header text and have it slide in


// I want my social media icons to have a slight bounce when they are moused 











