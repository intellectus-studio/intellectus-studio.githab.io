/**
 * Created by notebook on 22.09.2016.
 */

jQuery(document).ready(function () {
    var scrollH = $('.scroll').height();
    $('header').css('height', scrollH);
    $(window).resize(function () {
        $('header').css('height', scrollH);
    })


    /*PoP CallBack*/

    $('.call').on('click', function (e) {
        e.preventDefault();
        $('#overlay').fadeIn(400,
            function () {
                $('#modal_form_recall1')
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50%'}, 200);
            });

        $('.close, #overlay').click(function () {
            $('#modal_form_recall1')
                .animate({opacity: 0, top: '45%'}, 200,
                function () {
                    $(this).css('display', 'none');
                    $('#overlay').fadeOut(400);
                }
            );
        });
    });



    /*change input_borderColor*/

    $('#phone, #phone1, #name, #name1, #mail, #textarea').on('focus',function(){
        "use strict";
        $(this).css('border-color','#00baf7');
        $(this).on('blur', function(){
            $(this).css('border-color','#edf3f3');
        })
    });

/*auto-Slide*/
    function nSlide() {
        var currentSlide = $('.active-slider');
        var nextSlide = currentSlide.next();

        if (nextSlide.length === 0) {
            nextSlide = $('.slider').first();
        }

        currentSlide.fadeOut(700).removeClass('active-slider');
        nextSlide.fadeIn(700).addClass('active-slider');
    }

    var timer = setInterval(nSlide, 3000);
    if (screen.width <= 620) {
        clearInterval(timer);
    }

/*comentSlider*/
    var Users = $('.ourUsers').find('.user');

$('.ourUsers').click(function(e){
    "use strict";
    var target = event.target;

    var currentImg = $('.activeUser');
    var n = target.getAttribute('val');
    var nextImg = $('.user').eq(n);

    var currText = $('.activeText');
    var nextText = $('.text').eq(n);


    currText.removeClass('activeText');
    nextText.addClass('activeText');

    currentImg.removeClass('activeUser');
    nextImg.addClass('activeUser');

})




})