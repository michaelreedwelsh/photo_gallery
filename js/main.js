


var $fade_in_header = "<p>Coded by Michael Welsh</p>";


$('#fadespot').append($fade_in_header);
$('#fadespot').hide();

window.onload = function (){

   $('#fadespot').delay(1000).show('slow')
   
   };

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


lightbox.option({
	'resizeDuration': 100
})

