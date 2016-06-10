/**
 * Created by SEO on 07.06.2016.
 */

jQuery(document).ready(function(){

                                                        /*построение ассоциации*/

    var dot_number = 0;
    var dot_arrow = [];
    jQuery(".dot").each(function() {
        dot_arrow[dot_number] = $(this).attr('id', 'arrow_'+dot_number);
        dot_number++;
    });

    var carusel_number = 0;
    var carusel_arrow = [];
    jQuery(".top_slider_with_dot_list").each(function() {
        carusel_arrow[carusel_number] = $(this).attr('id', 'arrow_'+carusel_number);
        carusel_number++;
    });

    var house_number = 0;
    var house_arrow = [];
    jQuery(".paint_house").each(function() {
        house_arrow[house_number] = $(this).attr('id', 'arrow_'+house_number);
        house_number++;
    });

    var box_number = 0;
    var box_arrow = [];
    jQuery(".color_box").each(function() {
        box_arrow[box_number] = $(this).attr('id', 'arrow_'+box_number);
        box_number++;
    });



                                                    /*переключение верхнего слайдера*/


    jQuery(".dot").on("click", function(){
        jQuery(".dot").removeClass('active_dot');
        jQuery(this).toggleClass('active_dot');
        $('.display').fadeOut().removeClass('display');
        $('.top_slider_with_dot_list').hide().removeClass('display animated fadeInDown');
        var blatest = $(this).attr("id");
        $(".top_slider_with_dot").find('#'+blatest).fadeIn().addClass('display animated fadeInDown');
    });

                                                            /*Переключение товаров*/


    var list = jQuery('.item_slider').find('.item_slider_list');                /*список слайдов*/
    var items = jQuery(".item_slider_list").find('.carusel_item');              /*один слайд*/
    var slides = jQuery('.item_slider_list').children('.carusel_item');         /*количество слайдов*/
    var slide_width = items.outerWidth() + 30;                                      /*длина одного слайда*/
    var carusel_width = slide_width + 30;

    items.each(function() {
        carusel_width += jQuery(this).outerWidth();
    });

    jQuery('.item_slider_list').css('width', carusel_width+'px');

    var pixelsOffset = slide_width;
    var currentLeftValue = 0;
    var elementsCount = jQuery('.item_slider_list').find('.carusel_item').length;
    var minimumOffset = - ((elementsCount - 3) * pixelsOffset);
    var maximumOffset = 0;

    jQuery(".arrow_left").click(function() {
        if (currentLeftValue != maximumOffset) {
            currentLeftValue += slide_width;
            jQuery('.item_slider_list').animate({ left : currentLeftValue + "px"}, 300);
        }
    });

    jQuery(".arrow_right").click(function() {
        if (currentLeftValue != minimumOffset) {
            currentLeftValue -= slide_width;
            jQuery('.item_slider_list').animate({ left : currentLeftValue + "px"}, 300);
        }
    });

                                                                            /*Открытие read-more*/

    /*var div_arrow = jQuery('.object_block').children('.object_text');
     var div_number = jQuery(div_arrow).length;
     var i = 0;
     var divheight = [];
     jQuery('.object_text').each(function(){
     divheight[i] = jQuery(this).height();
     i++;
     });*/

    var cheker = jQuery('div').is('.house_container');

    if (cheker == true) {
        /*var lineheight = jQuery(".house_container").css('line-height').replace("px","");*/
        var five_lines = jQuery('.realised_object_image').height() * 2;
        jQuery(".house_container").css('height', five_lines);


        jQuery(".object_read_more").click(function () {
            jQuery(this).prev(".house_container").css('height', 'auto');
            jQuery(this).css('display', 'none');
            jQuery(this).next(".object_read_less").css('display', 'block');
        });

        jQuery(".object_read_less").click(function () {
            jQuery(this).prev(".object_read_more").prev(".house_container").css('height', five_lines);
            jQuery(this).prev(".object_read_more").css('display', 'block');
            jQuery(this).css('display', 'none');

        });

    }

                                                                /*выбор цвета домиков*/

    jQuery(".color_box").on("click", function(){
        jQuery(".color_box").removeClass('active_box');
        jQuery(this).toggleClass('active_box');
        $('.display_house').fadeOut().removeClass('display_house');
        $('.paint_house').hide().removeClass('display_house animated fadeIn');
        var blatest = $(this).attr("id");
        $(".paint_house_wrapper").find('#'+blatest).fadeIn().addClass('display_house animated fadeIn');
    });

                                                                /*переключение меню*/

   

});




//anchor 
jQuery(document).ready(function() {
 jQuery(".nav_first").click(function() {
    jQuery('html, body').animate({
        scrollTop: $(".item_slider").offset().top
    }, 2000);
});
 jQuery(".nav_second").click(function() {
    jQuery('html, body').animate({
        scrollTop: $(".garden").offset().top
    }, 2000);
});
 jQuery(".nav_third").click(function() {
    jQuery('html, body').animate({
        scrollTop: $(".item_slider").offset().top
    }, 2000);
});
  jQuery(".nav_fourth").click(function() {
    jQuery('html, body').animate({
        scrollTop: $(".house_color_block").offset().top
    }, 2000);
});
  jQuery(".nav_fifth").click(function() {
    jQuery('html, body').animate({
        scrollTop: $("footer").offset().top
    }, 2000);
});
})

//fixed on scroll
$(document).ready(function() {
    jQuery(window).scroll(function(){
  var sticky = jQuery('.menu'),
      scroll = jQuery(window).scrollTop();

  if (scroll >= 100) sticky.addClass('fixed');
  else sticky.removeClass('fixed');
});
})
/*lift*/
jQuery(document).ready(function () {

    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > 100) {
            jQuery('.lift_up').fadeIn();
        } else {
            jQuery('.lift_up').fadeOut();
        }
    });

    jQuery('.lift_up').click(function () {
        jQuery("html, body").animate({
            scrollTop: 0
        }, 1200);
        return false;
    });

});
