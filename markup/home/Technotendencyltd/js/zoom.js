"use strict";

var $ = require('jquery');
var jQuery = require('jquery');


module.exports = function(selector) {

	$('.blog__zoom').on('click', function() {
		var img  = $(this)
			.closest('.blog_imgBoxpad')
			.find('.blog_img');

		$('.zoom__img').attr('src', img.attr('src'));
		$('.zoom').addClass('active');
	});

	$('.zoom').on('click', function(){
		$('.zoom').removeClass('active');
	});
} 
module.exports = function(selector) {

	$('.map_zoom_contacts').on('click', function() {
		var img  = $(this)
			.closest('.blog_imgBoxpad')
			.find('.blog_img');

		$('.zoom__img').attr('src', img.attr('src'));
		$('.zoom').addClass('active');
	});

	$('.zoom').on('click', function(){
		$('.zoom').removeClass('active');
	});
} 

module.exports = function(selector) {

	$('.blog_imgBoxpad').on('click', function() {
		var img  = $(this)
			.closest('.blog_imgBoxpad')
			.find('.blog_img');

		$('.zoom__img').attr('src', img.attr('src'));
		$('.zoom').addClass('active');
	});

	$('.zoom').on('click', function(){
		$('.zoom').removeClass('active');
	});
} 


// button change icon

// nav on click

														/*click nav*/
/*$(document).ready(function(){

var checker = true;

	if (checker){
	$(".nav_item ").click(function() {
		checker = false;
		$(".nav_item ").find(".dropdownMenuActive").removeClass('dropdownMenuActive');
		$(this).find(".dropdownMenu").toggleClass('dropdownMenuActive');

		$(".nav_item ").mouseleave(function(){
			$(".nav_item ").find(".dropdownMenuActive").removeClass('dropdownMenuActive');

		});

	});

	}

});*/

								/*hover*/

$(document).ready(function(){
		
		$(".nav_item ").mouseenter(function() {

			$(this).find(".dropdownMenu").css('display', 'block');
			$(this).find(".dropdownMenu").hide().delay(400).fadeIn(600);

			$(".nav_item ").mouseleave(function(){
				$(this).find(".dropdownMenu").fadeOut(400);
				$(this).find(".dropdownMenu").css('display', 'none');
			});
		});
});


$(document).ready(function() {

	$(".menu_circle").click(function(){

		$(".mobile_menu").css("display", "block");

		$(".mobile_menu").mouseleave(function(){
			$(".mobile_menu").fadeOut(200);
			$(".mobile_menu").css('display', 'none');
		});

	});


});
$(document).ready(function() {
	$('.readMore_button').click(function() {
		$('.readMore_text').toggleClass('hight');
		$('.readMore_text').toggleClass('hidden');
	})
});


window.checkParams = function() {
    var email = $('#input1').val();
    var password = $('#input2').val();
     
    if(email.length != 0 && password.length != 0) {
        $('#submit').removeAttr('disabled');
    } else {
        $('#submit').attr('disabled', 'disabled');
    }
};
window.checkParams_second = function() {
    var fio = $('#input3').val();
    var phone = $('#input4').val();
    var email = $('#input5').val();
     
    if(fio.length != 0 && phone.length != 0 && email.length != 0) {
        $('#submit1').removeAttr('disabled');
    } else {
        $('#submit1').attr('disabled', 'disabled');
    }
};


// gallery

$(document).ready(function() {
	$('.photo_small',this).click(function() {
		$('.photo_big').attr('src', 'images/sidebar.jpg');
	})
})

// purchase close
$(document).ready(function() {
	$('.post_close').click(function() {
		$('.post_content', this).css('display', 'none');
	})
})