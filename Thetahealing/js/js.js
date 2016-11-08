/**
 * Created by Nikita on 06.11.2016.
 */

$(document).ready(function () {
    if ($('.popImg').length > 0) {
        var width = 550;
        var count = 1;

        var num = 1;

        /*if ($(window).width() > 1024) {
         num = 4;
         } else if ($(window).width() == 1024) {
         num = 3;
         } else if ($(window).width() == 768) {
         num = 2;
         } else if ($(window).width() < 768) {
         num = 1;
         }*/

        var carousel = $('.popImgs')[0];
        var list = $('.popImgs')[0];
        var listItems = carousel.querySelectorAll('.popImgs img');
        var positionLeft = 0;

        $('#popLarrow')[0].onclick = function () {
            positionLeft = Math.min(positionLeft + width * count, 0);
            list.style.marginLeft = positionLeft + 'px';
        }

        $('#popRarrow')[0].onclick = function () {
            positionLeft = Math.max(positionLeft - width * count, -width * (listItems.length - num));
            list.style.marginLeft = positionLeft + 'px';
        }
    }

    /*gallery fancybox*/


    $('.gallery img').click(function () {
        if ($(window).width() <= 750) {
            return false;
        }
        var largePath1 = $(this).attr("src");
        var largeAlt1 = $(this).attr("alt");
        //$('.popImgs').css('marginLeft','0px');

        $("#MainImg").attr({src: largePath1, alt: largeAlt1});
        $('#overflow').fadeIn(400, function () {
            $('.popImg').css('display', 'block')
                .animate({opacity: 1, top: '50%'}, 300);
        })
    });

    ;

    $('#overflow, .close').click(function () {
        $('.popImg')
            .animate({opacity: 0, top: '45%'}, 200,
            function () {
                $('#popSlide').css('margin-left', 0);
                $('.popImg').css('display', 'none');
                $('#overflow').css('display', 'none').fadeOut(400);
            }
        );
    });


    /*fixed scroll*/

    var scrollH = $('.fixedMenu').height() + $('.topMenu').height();
    var h_hght = $('.topMenu').height();
    var h_mrg = 0;

    if ($(window).width() < 750) {
        scrollH = $('.fixedMenu').height();
        h_hght = 0;
    }

    setTimeout(function () {
        $('header').css('height', scrollH);
    }, 40);

    $(window).resize(function () {
        if ($(window).width() < 750) {
            scrollH = $('.fixedMenu').height();
            h_hght = 0;
        }
        $('header').css('height', scrollH);
        if ($(window).width() < 750) {
            var scrollH = $('.topMenu').height();
        } else {
            var scrollH = $('.fixedMenu').height() + $('.topMenu').height();
        }
    })

    var elem = $('.fixedMenu');
    var top = $(this).scrollTop();

    if (top > h_hght) {
        elem.css('top', 0);
    }
    $(window).scroll(function () {
        top = $(this).scrollTop();
        if (top + h_mrg < h_hght) {
            elem.css('top', (h_hght - top));
        } else {
            elem.css('top', h_mrg);
        }
    });

    /*change border-color*/
    $(' #phone,  #name, #email, #messeg, #theam, #surname').on('focus', function () {
        "use strict";
        $(this).css('border-color', '#cb80dc');
        $(this).on('blur', function () {
            $(this).css('border-color', '#bbbbbb');
        })
    });

    /*change input_borderColor*/

    if ($('#phone, #phone1')) {
        $('#phone, #phone1').blur(function () {
            if (!$.isNumeric($(this).val())) {
                $(this).val('');
            }
        })

    }

    if ($('#name, #surname')) {
        $('#name, #surname').blur(function () {
            if ($.isNumeric($(this).val())) {
                $(this).val('');
            }
        })
    }

    var h = 96;

    $(window).resize(function () {

            h = 96;

            if ($(window).width() < 500) {
                h = 228;
            }
        }
    )

    $('.nav').click(function () {
        if ($('.mainMenu').css('display') == 'none') {
            var h = 96;
            if ($(window).width() < 750) {
                h = 228;
            }


            $('.mainMenu').css('display', 'block').animate({
                height: h,
                top: '100%'
            });
        } else {
            $('.mainMenu').animate({
                top: '90%',
                height: '0'
            }, function () {
                $(this).css('display', 'none');
            })
        }
    })

    /*mainSlider*/

    function nSlide() {
        var currentSlide = $('.active-slide');
        var nextSlide = currentSlide.next();

        if (nextSlide.length === 0) {
            nextSlide = $('.slide').first();
        }

        currentSlide.fadeOut(700).removeClass('active-slide');
        nextSlide.fadeIn(700).addClass('active-slide');

    }

    var timer = setInterval(nSlide, 5000);
    if (screen.width <= 767) {
        clearInterval(timer);
    }

    $('#rigthArrow').click(function () {
        nSlide();
    });

    $('#leftArrow').click(function () {
        clearInterval(timer);
        var currentSlide = $('.active-slide');
        var prevSlide = currentSlide.prev();
        if (prevSlide.length == 0) {
            prevSlide = $('.slide').last();
        }

        currentSlide.fadeOut(700).removeClass('active-slide');
        prevSlide.fadeIn(700).addClass('active-slide');
        timer = setInterval(nSlide, 5000);
    });

})