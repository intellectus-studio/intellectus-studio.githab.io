
/*slider*/
jQuery(document).ready(function ($) {

  $('#checkbox').change(function(){
    setInterval(function () {
        moveRight();
    }, 3000);
  });
  
	var slideCount = $('#slider ul li').length;
	var slideWidth = $('#slider ul li').width();
	var slideHeight = $('#slider ul li').height();
	var sliderUlWidth = slideCount * slideWidth;
	
	$('#slider').css({ width: slideWidth, height: slideHeight });
	
	$('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
	
    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 400, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 400, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });

});    
$(document).ready(function(){
  $('.bxslider').bxSlider({
  auto: true,
   minSlides: 1,
  maxSlides: 1,
  pager: false,
  controls: true
  });
});

/*modal_first*/
$(document).ready(function() { // вся мaгия пoсле зaгрузки стрaницы
    $('.callback_footer_btn').click( function(event){ // лoвим клик пo ссылки с id="go"
        event.preventDefault(); // выключaем стaндaртную рoль элементa
        $('#overlay').fadeIn(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
            function(){ // пoсле выпoлнения предъидущей aнимaции
                $('#modal_form') 
                    .css('display', 'block') // убирaем у мoдaльнoгo oкнa display: none;
                    .animate({top: '50%'}, 200); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
        });
    });
    /* Зaкрытие мoдaльнoгo oкнa, тут делaем тo же сaмoе нo в oбрaтнoм пoрядке */
    $('#modal_close, #overlay').click( function(){ // лoвим клик пo крестику или пoдлoжке
        $('#modal_form')
            .animate({top: '45%'}, 200,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
                function(){ // пoсле aнимaции
                    $(this).css('display', 'none'); // делaем ему display: none;
                    $('#overlay').fadeOut(400); // скрывaем пoдлoжку
                }
            );
    });
});
/*modal_second*/

$(document).ready(function() { // вся мaгия пoсле зaгрузки стрaницы
    $('.more_btn1').click( function(event){ // лoвим клик пo ссылки с id="go"
        event.preventDefault(); // выключaем стaндaртную рoль элементa
        $('#overlay1').fadeIn(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
            function(){ // пoсле выпoлнения предъидущей aнимaции
                $('#modal_form1') 
                    .css('display', 'block') // убирaем у мoдaльнoгo oкнa display: none;
                    .animate({ top: '50%'}, 200); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
        });
        $('body').css('overflow', 'hidden');
    });
    /* Зaкрытие мoдaльнoгo oкнa, тут делaем тo же сaмoе нo в oбрaтнoм пoрядке */
    $('#modal_close1, #overlay1').click( function(){ // лoвим клик пo крестику или пoдлoжке
        $('#modal_form1')
            .animate({top: '45%'}, 200,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
                function(){ // пoсле aнимaции
                    $(this).css('display', 'none'); // делaем ему display: none;
                    $('#overlay1').fadeOut(400); // скрывaем пoдлoжку
                }
            );
            $('body').css('overflow', 'visible');
    });
});
$(document).ready(function() { // вся мaгия пoсле зaгрузки стрaницы
    $('.more_btn2').click( function(event){ // лoвим клик пo ссылки с id="go"
        event.preventDefault(); // выключaем стaндaртную рoль элементa
        $('#overlay4').fadeIn(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
            function(){ // пoсле выпoлнения предъидущей aнимaции
                $('#modal_form4') 
                    .css('display', 'block') // убирaем у мoдaльнoгo oкнa display: none;
                    .animate({top: '50%'}, 200); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
        });
        $('body').css('overflow', 'hidden');
    });
    /* Зaкрытие мoдaльнoгo oкнa, тут делaем тo же сaмoе нo в oбрaтнoм пoрядке */
    $('#modal_close4, #overlay4').click( function(){ // лoвим клик пo крестику или пoдлoжке
        $('#modal_form4')
            .animate({top: '45%'}, 200,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
                function(){ // пoсле aнимaции
                    $(this).css('display', 'none'); // делaем ему display: none;
                    $('#overlay4').fadeOut(400); // скрывaем пoдлoжку
                }
            );
            $('body').css('overflow', 'visible');
    });
});
$(document).ready(function() { // вся мaгия пoсле зaгрузки стрaницы
    $('.more_btn3').click( function(event){ // лoвим клик пo ссылки с id="go"
        event.preventDefault(); // выключaем стaндaртную рoль элементa
        $('#overlay5').fadeIn(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
            function(){ // пoсле выпoлнения предъидущей aнимaции
                $('#modal_form5') 
                    .css('display', 'block') // убирaем у мoдaльнoгo oкнa display: none;
                    .animate({top: '50%'}, 200); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
        });
        $('body').css('overflow', 'hidden');
    });
    /* Зaкрытие мoдaльнoгo oкнa, тут делaем тo же сaмoе нo в oбрaтнoм пoрядке */
    $('#modal_close5, #overlay5').click( function(){ // лoвим клик пo крестику или пoдлoжке
        $('#modal_form5')
            .animate({top: '45%'}, 200,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
                function(){ // пoсле aнимaции
                    $(this).css('display', 'none'); // делaем ему display: none;
                    $('#overlay5').fadeOut(400); // скрывaем пoдлoжку
                }
            );
            $('body').css('overflow', 'visible');
    });
});



/*navigation*/
$(".first").click(function(event) {
    event.preventDefault();
    $('html,body').animate({
        scrollTop: $(".production").offset().top},
        'slow');
});
$(".second").click(function(event) {
    event.preventDefault()
    $('html,body').animate({
        scrollTop: $(".why_we").offset().top},
        'slow');
});
$(".third").click(function(event) {
    event.preventDefault()
    $('html,body').animate({
        scrollTop: $(".review").offset().top},
        'slow');
});
$(".fourth").click(function(event) {
    event.preventDefault()
    $('html,body').animate({
        scrollTop: $(".payment").offset().top},
        'slow');
});


lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
    })
/*carousel*/
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

    // $(document).ready(function() {
    //     $('.callback_btn').mouseover(function() {
    //         $('#modal_form2').css('display', 'block');
    //         $('#modal_form2').css('opacity', '1');
    //     })
    // });
    //    $(document).ready(function() {
    //     $('.callback_btn').mouseleave(function() {
    //         $('#modal_form2').css('display', 'none');
    //         $('#modal_form2').css('opacity', '0');
    //     })
        
    // })

/*lift*/
jQuery(document).ready(function () {

    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > 500) {
            jQuery('.scrollup').fadeIn();
        } else {
            jQuery('.scrollup').fadeOut();
        }
    });

    jQuery('.scrollup').click(function () {
        jQuery("html, body").animate({
            scrollTop: 0
        }, 1200);
        return false;
    });

});
/*img hover*/
$(document).ready(function() {
    $('.first_item').mouseover(function() {
        $('.first_item img').attr('src' ,'img/55.png');
    });
    $('.second_item').mouseover(function() {
        $('.second_item img').attr('src' ,'img/66.png');
    });
     $('.third_item').mouseover(function() {
        $('.third_item img').attr('src' ,'img/77.png');
    });
      $('.fourth_item').mouseover(function() {
        $('.fourth_item img').attr('src' ,'img/88.png');
    });
       $('.fifth_item').mouseover(function() {
        $('.fifth_item img').attr('src' ,'img/99.png');
    });
       $('.first_item').mouseleave(function() {
        $('.first_item img').attr('src' ,'img/5.png');
    });
    $('.second_item').mouseleave(function() {
        $('.second_item img').attr('src' ,'img/6.png');
    });
     $('.third_item').mouseleave(function() {
        $('.third_item img').attr('src' ,'img/7.png');
    });
       $('.fourth_item').mouseleave(function() {
        $('.fourth_item img').attr('src' ,'img/8.png');
    });
       $('.fifth_item').mouseleave(function() {
        $('.fifth_item img').attr('src' ,'img/9.png');
    });
});
$(document).ready(function() {
    $('.payment_item img').mouseenter(function() {
        $this = $(this);
        $($this).transition({
         perspective: '100px',
         rotateY: '360deg'
        });
    })
    $('.payment_item img').mouseleave(function() {
        $this = $(this);
        $($this).transition({
         perspective: '100px',
         rotateY: '360deg'
        });
    })
})
// $(document).ready(function() {
//     $('.callback_btn').click(function() {
//         $('#modal_form_recall').toggleClass('recall_toggle')
//          $('#modal_form_recall').addClass('slideInDown');
//     });
//     // $('.callback_btn').mouseleave(function() {
//     //     $('#modal_form_recall').css('display', 'none');
//     //      $('#modal_form_recall').css('opacity', '0');
//     //      $('#modal_form_recall').removeClass('slideInDown');
//     // })
// })

 $(document).ready(function () {
     $('#modal_form_recall').removeClass('recall_toggle')
 });

 $('.callback_btn').on('click', function () {
     $('#modal_form_recall').toggleClass('recall_toggle')
         $('#modal_form_recall').addClass('slideInDown');
 });

 $(document).mouseup(function (e) {
     var popup = $("#modal_form_recall");
     if (!$('.callback_btn').is(e.target) && !popup.is(e.target) && popup.has(e.target).length == 0) {
         popup.removeClass('recall_toggle');
     }
 });

