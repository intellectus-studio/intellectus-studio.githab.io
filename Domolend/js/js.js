jQuery(document).ready(function () {

    function nSlide() {
        var currentSlide = $('.active-slide');
        var nextSlide = currentSlide.next();

        /*var currentDot = $('.active-dot');
         var nextDot = currentDot.next();*/

        if (nextSlide.length === 0) {
            nextSlide = $('.slide').first();
            /*nextDot = $('.dot').first();*/
        }

        currentSlide.fadeOut(700).removeClass('active-slide');
        nextSlide.fadeIn(700).addClass('active-slide');

        /*currentDot.removeClass('active-dot');
         nextDot.addClass('active-dot')*/
    }

    $('#rArrow').click(function () {
        nSlide();
    });

    var timer = setInterval(nSlide, 5000);

    $('#lArrow').click(function () {
        var currentSlide = $('.active-slide');
        var prevSlide = currentSlide.prev();

        /*var currentDot = $('.active-dot');
         var prevDot = currentDot.prev();*/

        if (prevSlide.length == 0) {
            prevSlide = $('.slide').last();
            /*prevDot = $('.dot').last();*/
        }

        currentSlide.fadeOut(700).removeClass('active-slide');
        prevSlide.fadeIn(700).addClass('active-slide');

        /*currentDot.removeClass('active-dot');
         prevDot.addClass('active-dot');*/
    });

    /*товары-слайдер*/

    var width = 250;
    var count = 4;
    var carousel = $('.goods_sliders')[0];
    var list = $('.goods_float_left')[0];
    var listItems = carousel.querySelectorAll('.products');
    var positionLeft = 0;

    $('#goodsLeft')[0].onclick = function () {
        positionLeft = Math.min(positionLeft + width * count, 0);
        list.style.marginLeft = positionLeft + 'px';
    }

    $('#goodsRight')[0].onclick = function () {
        positionLeft = Math.max(positionLeft - width * count, -width * (listItems.length - count));
        list.style.marginLeft = positionLeft + 'px';
    }

    /*?????? ??????*/

    $('.fa-chevron-down').mouseover(function () {
        $('.phones').animate({
            opacity: 1
        }, 200);

        $('.fa-chevron-down').mouseleave(function () {
            $('.phones').animate({opacity: 0}, 200);
        });

    });


    /*слайдер бренды*/
    if ($('.bSlider')) {
        var width1 = 170.4;
        var count1 = 6;
        var carousel1 = $('.bSlider')[0];
        var list1 = $('.brendFloatLeft')[0];
        var listItems1 = carousel1.querySelectorAll('.logotype');
        var positionLeft1 = 0;

        $('#brendLeft')[0].onclick = function () {
            positionLeft1 = Math.min(positionLeft1 + width1 * count1, 0);
            list1.style.marginLeft = positionLeft1 + 'px';
        }

        $('#brendRight')[0].onclick = function () {
            positionLeft1 = Math.max(positionLeft1 - width1 * count1, -width1 * (listItems1.length - count1));
            list1.style.marginLeft = positionLeft1 + 'px';
        }
    }
    /*pop ???? ??? ????????? ?????? ? ??????*/

    $('#modal_form_recall, #modal_form_recall1').removeClass('recall_toggle');
    $('.callBack').on('click', function (event) {
        event.preventDefault();
        $('#modal_form_recall').toggleClass('recall_toggle')
        $('#modal_form_recall').addClass('slideInDown');
    });

    /*??? ???? ?? ??? ??????*/

    $('.call').on('click', function (e) {
        e.preventDefault();
        $('#overlay').fadeIn(400,
            function () {
                $('#modal_form_recall1')
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50%'}, 200);
            });

        $('#submit1, #overlay').click(function () {
            $('#modal_form_recall1')
                .animate({opacity: 0, top: '45%'}, 200,
                function () {
                    $(this).css('display', 'none');
                    $('#overlay').fadeOut(400);
                }
            );
        });
    });


    /*сортировка*/
    var sorted = $('.products');
    var target = $('.goods_float_left');

    $('.TopSales').click(function () {

        sorted.sort(function (a, b) {
            var a = $(a).attr('val');

            var b = $(b).attr('val');

            if (a > b) {
                return 1;
            }
            else {
                return 0
            }
        })

        sorted.detach().appendTo(target);

    });

    $('.Sales').click(function () {

        sorted.sort(function (a, b) {
            var a = $(a).attr('val');
            var b = $(b).attr('val');

            if (a > b) {
                return 0;
            }
            else {
                return 1
            }
        })

        sorted.detach().appendTo(target);
    });
    $('.New').click(function () {

        sorted.sort(function (a, b) {
            var a = $(a).attr('val');
            var b = $(b).attr('val');

            if (a % 2 == 0) {
                return 0;
            }
            else {
                return 1
            }
        })

        sorted.detach().appendTo(target);

    });

});

jQuery.fn.sortElements = (function () {

    var sort = [].sort;

    return function (comparator, getSortable) {

        getSortable = getSortable ||
            function () {
                return this;
            };

        var placements = this.map(function () {

            var sortElement = getSortable.call(this),
                parentNode = sortElement.parentNode,

            // Since the element itself will change position, we have
            // to have some way of storing its original position in
            // the DOM. The easiest way is to have a 'flag' node:
                nextSibling = parentNode.insertBefore(
                    document.createTextNode(''), sortElement.nextSibling);

            return function () {

                if (parentNode === this) {
                    throw new Error("You can't sort elements if any one is a descendant of another.");
                }

                // Insert before flag:
                parentNode.insertBefore(this, nextSibling);
                // Remove flag:
                parentNode.removeChild(nextSibling);

            };

        });

        return sort.call(this, comparator).each(function (i) {
            placements[i].call(getSortable.call(this));
        });

    };

})();

/*
 $(document).mouseup(function (e) {
 var popup = $("#modal_form_recall");
 if (!$('.callBack').is(e.target) && !popup.is(e.target) && popup.has(e.target).length == 0) {
 popup.removeClass('recall_toggle');
 }
 ;


 })*/
