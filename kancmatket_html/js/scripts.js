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
          slidesToScroll: 1,
           responsive: [
           {
      breakpoint: 1224,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
     }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

	});
  $(document).ready(function() {
    $('#additional_products').slick({
          infinite: true,
          slidesToShow: 6,
          slidesToScroll: 1,
           responsive: [
           {
      breakpoint: 1224,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
     }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
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
		$('#logos').slick({
          infinite: true,
          slidesToShow: 6,
          slidesToScroll: 1,
                     responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
     }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
	});
  $(document).ready(function() {
          $('.dropdown_btn').on('click',function(event) {
            event.preventDefault();
            $(this).find('.dropdown-menu').toggleClass('active');
                $(this).siblings().find('.dropdown-menu').removeClass('active')
          })
          // $('.dropdown_btn_third').on('click',function(e) {
          //   e.preventDefault();
          //   $(this).find('.dropdown-menu_third').toggleClass('active1');
          //       $(this).siblings().find('.dropdown-menu_third').removeClass('active1')
          // })
        })


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


/*login_popup*/


   $(document).ready(function () {
     $('.login_item').removeClass('recall_toggle')
 });

 $('.login').on('click', function () {
     $('.login_item').addClass('recall_toggle')
         $('.login_item').addClass('slideInDown');
 });

 $(document).mouseup(function (e) {
     var popup = $(".login_item");
     if (!$('.login_item').is(e.target) && !popup.is(e.target) && popup.has(e.target).length == 0) {
         popup.removeClass('recall_toggle');
     }
 });
/*readmore_btn*/
  
$(function(){
    $(".popular_goods .product_card").slice(0, 8).show();
    $(".readmore_btn").click(function(e){ 
        e.preventDefault();
        $(".product_card:hidden").slice(0, 8).show();
        if($(".product_card:hidden").length == 0){
            $('.readmore_btn').text('Показаны все товары');
        }
    });
});

// $(document).on('scroll',function(e){
//       var scrollTop = $(document).scrollTop();
//       if(scrollTop > $('nav').height()){
//         $('nav').addClass('navbar-scroll');
//       }
//       else {
//         $('nav').removeClass('navbar-scroll');
//       }
//     });

$(document).ready(function(){


  $(".thumbs a").click(function(){
  
    var largePath = $(this).attr("href");
    var largeAlt = $(this).attr("title");
    
    $("#largeImg").attr({ src: largePath, alt: largeAlt });

    
     return false;
  });
  
});
/*input number*/
  jQuery(function ($) {
  (function () {
    var interval;
    $(document).on('mousedown touchstart', '[data-decrease]', function () {
      var $element = $($(this).data('decrease'));
      var value = parseInt($element.val() || 0, 10);
      function  decrease() {
        if (($element.attr('min') === undefined || value > parseInt($element.attr('min'), 10)) && ($element.data('min') === undefined || value > parseInt($element.data('min'), 10))) {
          value -= 1;
          $element.val(value);
        }
      }
      decrease();
      interval = setTimeout(function () {
        interval = setInterval(function () {
          decrease();
        }, 50);
      }, 500);

      $(document).one('mouseup touchend', function () {
        clearTimeout(interval);
        clearInterval(interval);
      });
    });
  }());

  (function () {
    var interval;
    $(document).on('mousedown touchstart', '[data-increase]', function () {
      var $element = $($(this).data('increase'));
      var value = parseInt($element.val() || 0, 10);
      function  increase() {
        if (($element.attr('max') === undefined || value < parseInt($element.attr('max'), 10)) && ($element.data('max') === undefined || value < parseInt($element.data('max'), 10))) {
          value += 1;
          $element.val(value);
        }
      }
      increase();
      interval = setTimeout(function () {
        interval = setInterval(function () {
          increase();
        }, 50);
      }, 500);

      $(document).one('mouseup touchend', function () {
        clearTimeout(interval);
        clearInterval(interval);
      });
    });
  }());
});
/*backet*/

var taxRate = 0.05;
var shippingRate = 15.00; 
var fadeTime = 300;


/* Assign actions */
$('.product-quantity').change( function() {
  updateQuantity(this);
});

$('.product-removal button').click( function() {
  removeItem(this);
});


/* Recalculate cart */
function recalculateCart()
{
  var subtotal = 0;
  
  /* Sum up row totals */
  $('.product').each(function () {
    subtotal += parseFloat($(this).children('.product-line-price').text());
  });
  
  /* Calculate totals */
  var tax = subtotal * taxRate;
  var shipping = (subtotal > 0 ? shippingRate : 0);
  var total = subtotal + tax + shipping;
  
  /* Update totals display */
  $('.totals-value').fadeOut(fadeTime, function() {
    $('#cart-subtotal').html(subtotal.toFixed(2));
    $('#cart-tax').html(tax.toFixed(2));
    $('#cart-shipping').html(shipping.toFixed(2));
    $('#cart-total').html(total.toFixed(2));
    if(total == 0){
      $('.checkout').fadeOut(fadeTime);
    }else{
      $('.checkout').fadeIn(fadeTime);
    }
    $('.totals-value').fadeIn(fadeTime);
  });
}


/* Update quantity */
function updateQuantity(quantityInput)
{
  /* Calculate line price */
  var productRow = $(quantityInput).parent().parent();
  var price = parseFloat(productRow.children('.product-price').text());
  var quantity = $(quantityInput).val();
  var linePrice = price * quantity;
  
  /* Update line price display and recalc cart totals */
  productRow.children('.product-line-price').each(function () {
    $(this).fadeOut(fadeTime, function() {
      $(this).text(linePrice.toFixed(2));
      recalculateCart();
      $(this).fadeIn(fadeTime);
    });
  });  
}


/* Remove item from cart */
function removeItem(removeButton)
{
  /* Remove row from DOM and recalc cart total */
  var productRow = $(removeButton).parent().parent();
  productRow.slideUp(fadeTime, function() {
    productRow.remove();
    recalculateCart();
  });
}


jQuery(document).ready(function() {
    jQuery(".shopping_cart").click(function(e) {
     e.preventDefault();
        jQuery(".bucket").toggleClass("dispBlock");
    });
});

$(document).ready(function() {
  $('.bucket_close'). click(function() {
    $(this).parent('.bucket_item').css('display', 'none');
  });
});

$('.order_item_close').click(function() {
  $(this).parent().fadeOut();
})
/*fancybox*/
// $(document).ready(function() {
//   $(".slideshow__item").fancybox();
  
// })
})(jQuery);