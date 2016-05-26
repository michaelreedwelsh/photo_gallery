
var $overlay = $('<div id="overlay"></div>');
var $image = $('<img id="overlay_img">');
var $fade_in_header = "<p>Coded by Michael Welsh</p>";
var $caption = $("<p></p>");
var $right = $("<div id='right'>Next</div>");
var $left = $("<div id='left'>Back</div>");



// CREATING THE OVERLAY 
$overlay.append($image);
$overlay.append($caption);
$("body").append($overlay);
$overlay.append($left);
$overlay.append($right);




//Overlay exists but is hidden
//Time to show the overlay!!!!
$(".gallery img").click(function () {
   event.preventDefault();
   // Capturing info on click 
   var img_location = $(this).attr("src");
   var content = $(this).attr("alt");
   // This could be cool 
   
   // Showing overlay
   $overlay.delay(500).show(0);
   // Assigning captured info to the overlay 
   $image.attr('src', img_location);
   $caption.text(content);
});

$overlay.click(function () {
   $overlay.hide();
})

//Now the Buttons need to do something.....




// Fade in header
//Hide the header text
$('#fadespot').append($fade_in_header);
$('#fadespot').hide();

window.onload = function (){

   $('#fadespot').delay(1000).show('slow')
   
   };



// adding the filter 
//THIS FILTER IS DRIVING ME CRAZY>>....
$('.gallery img').each(function(){
$(this).prop('alt', $(this).prop('alt').toLowerCase());
});

$(".search-box").on("keyup", function () {
   var searchTerm = $(this).val().toLowerCase();
   $(".gallery img").each( function () {
      if ( $(this).prop('alt').indexOf(searchTerm) > -1 || searchTerm.length < 1) {
         $(this).show();
      
   } else {
      $(this).hide();
   };
});
})

//on mouse over reveal the header text and have it slide in


// I want my social media icons to have a slight bounce when they are moused 











