
var $overlay = $('<div id="overlay"></div>');
var $image = $('<img id="overlay_img">');
var $fade_in_header = "<p>Coded and Scripted by Michael Welsh</p>";
var $caption = $("<p></p>");


// CREATING THE OVERLAY 
$overlay.append($image);
$overlay.append($caption);
$("body").append($overlay);


//Overlay exists but is hidden
//Time to show the overlay!!!!
$(".gallery a img").click(function (event) {
   event.preventDefault();
   // Capturing info on click 
   var img_location = $(this).attr("src");
   var content = $(this).attr("alt");
   // This could be cool 
   $(this).toggle("puff");

   // Showing overlay
   $overlay.delay(500).show(0);
   // Assigning captured info to the overlay 
   $image.attr('src', img_location);
   $caption.text(content);
});

$overlay.click(function () {
   $overlay.hide();
})

// Fade in header
//Hide the header text
$('#fadespot').append($fade_in_header);
$('#fadespot').hide();

$('header h1').mouseover( function (){
   $('#fadespot').show('slow');
   $('#fadespot').mouseout( function (){
       $('#fadespot').hide('slow');
   });
});


//on mouse over reveal the header text and have it slide in

// Mouseover event making the images become slightly larger
$('.gallery a img').mouseover(function () {
   $(this).animate({width: "62%"});
   $(this).mouseout(function (){
      $(this).animate({width: "60%"});
   });
   
});

// I want my social media icons to have a slight bounce when they are moused 
$(".social").mouseover(function () {
   $(this).toggle("explode");
});










