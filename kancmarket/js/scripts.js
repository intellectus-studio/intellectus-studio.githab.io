// on document ready
(function($){
	"use strict";

	$(document).ready(function() {
 
  $("#owl-example").owlCarousel({
		navigation : true, 
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem: true,
	pagination: false,
    	rewindSpeed: 500,
    	autoPlay: 10000
	});
 
});

	$(document).ready(function() {
		$('#popular').slick({
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 1
});

	});
	$(document).ready(function() {
		jQuery("#banner_carousel").owlCarousel({
            navigation : true, 
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem: true,
	pagination: false,
    	rewindSpeed: 500,
    	autoPlay: 10000
                   
        });	

	})
	$(document).ready(function() {
		jQuery("#logos").owlCarousel({
            autoPlay: 10000,
            stopOnHover: true,
            navigation: true,
            paginationSpeed: 1000,
            goToFirstSpeed: 3500,
            singleItem: false,
            autoHeight: false,
            transitionStyle: "fade"
                   
        });	
        $(document).ready(function() {
        	$('.dropdown_btn').click(function(event) {
        		event.preventDefault();
        		$(this).find('.dropdown-menu').toggleClass('active');
                $(this).siblings().find('.dropdown-menu').removeClass('active')
        	})
        })

	});
	 $(document).ready(function () {
     $('#modal_form_recall').removeClass('recall_toggle')
 });

 $('.callback_btn').on('click', function (event) {
 	event.preventDefault();
     $('#modal_form_recall').toggleClass('recall_toggle')
         $('#modal_form_recall').addClass('slideInDown');
 });

 $(document).mouseup(function (e) {
     var popup = $("#modal_form_recall");
     if (!$('.callback_btn').is(e.target) && !popup.is(e.target) && popup.has(e.target).length == 0) {
         popup.removeClass('recall_toggle');
     }
 });
 $(document).mouseup(function (e) {
     var popup = $(".dropdown-menu");
     if (!$('.dropdown_btn').is(e.target) && !popup.is(e.target) && popup.has(e.target).length == 0) {
         popup.removeClass('active');
     }
 });
 
// $(document).ready(function() {
//   $('#owl-example').find('.owl-controls').addClass('container');
//   $('#banner_carousel').find('.owl-controls').addClass('container');

// })

})(jQuery);