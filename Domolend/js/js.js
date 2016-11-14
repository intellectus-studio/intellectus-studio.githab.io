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
    if ($(window).width() <= 425) {
        clearInterval(timer);
    }
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


    $('.corpBurger').click(function () {
        if ($('.menu2').css('display') == 'none') {
            $('.menu2').slideDown(500);
        } else {
            $('.menu2').slideUp(500);
        }
    })

    console.log('work');
    $('.burger').click(function () {
        if ($('.menu').css('display') == 'none') {
            $('.menu').slideDown(500);
        } else {
            $('.menu').slideUp(500);
        }
    })


    /*товары-слайдер*/
    if ($('.goods_sliders').length > 0) {
        var width = 250;
        var count = 1;

        var num;

        if ($(window).width() > 1024) {
            num = 4;
        } else if ($(window).width() == 1024) {
            num = 3;
        } else if ($(window).width() == 768) {
            num = 2;
        } else if ($(window).width() < 768) {
            num = 1;
        }

        var carousel = $('.goods_sliders')[0];
        var list = $('.goods_float_left')[0];
        var listItems = carousel.querySelectorAll('.products');
        var positionLeft = 0;

        $('#goodsLeft')[0].onclick = function () {
            positionLeft = Math.min(positionLeft + width * count, 0);
            list.style.marginLeft = positionLeft + 'px';
        }

        $('#goodsRight')[0].onclick = function () {
            positionLeft = Math.max(positionLeft - width * count, -width * (listItems.length - num));
            list.style.marginLeft = positionLeft + 'px';
        }
    }
    /*1slider*/

    if ($('.goods_sliders1').length > 0) {
        var width2 = 250;
        var count2 = 1;
        var num2;
        if ($(window).width() > 1024) {
            num2 = 4;
        } else if ($(window).width() == 1024) {
            num2 = 3;
        } else if ($(window).width() == 768) {
            num2 = 2;
        } else if ($(window).width() < 768) {
            num2 = 1;
        }

        var carousel2 = $('.goods_sliders1')[0];
        var list2 = $('.goods_float_left1')[0];
        var listItems2 = carousel2.querySelectorAll('.products');
        var positionLeft2 = 0;

        $('#goodsLeft1')[0].onclick = function () {
            positionLeft2 = Math.min(positionLeft2 + width2 * count2, 0);
            list2.style.marginLeft = positionLeft2 + 'px';
        }

        $('#goodsRight1')[0].onclick = function () {
            positionLeft2 = Math.max(positionLeft2 - width2 * count2, -width2 * (listItems2.length - num2));
            list2.style.marginLeft = positionLeft2 + 'px';
        }
    }

    if ($('.goods_sliders2').length > 0) {
        var width3 = 250;
        var count3 = 1;
        var num3;

        if ($(window).width() > 1024) {
            num3 = 4;
        } else if ($(window).width() == 1024) {
            num3 = 3;
        } else if ($(window).width() == 768) {
            num3 = 2;
        } else if ($(window).width() < 768) {
            num3 = 1;
        }

        var carousel3 = $('.goods_sliders2')[0];
        var list3 = $('.goods_float_left2')[0];
        var listItems3 = carousel3.querySelectorAll('.products');
        var positionLeft3 = 0;

        $('#goodsLeft2')[0].onclick = function () {
            positionLeft3 = Math.min(positionLeft3 + width3 * count3, 0);
            list3.style.marginLeft = positionLeft3 + 'px';
        }

        $('#goodsRight2')[0].onclick = function () {
            positionLeft3 = Math.max(positionLeft3 - width3 * count3, -width3 * (listItems3.length - num3));
            list3.style.marginLeft = positionLeft3 + 'px';
        }
    }

    /*слайдер бренды*/
    if ($('.bSlider').length) {
        var width1 = 170.4;
        var count1 = 1;

        var num1;

        if ($(window).width() > 1024) {
            num1 = 6;
        } else if ($(window).width() == 1024) {
            num1 = 5;
        } else if ($(window).width() == 768) {
            num1 = 4;
        } else if ($(window).width() < 768) {
            num1 = 1;
        }

        var carousel1 = $('.bSlider')[0];
        var list1 = $('.brendFloatLeft')[0];
        var listItems1 = carousel1.querySelectorAll('.logotype');
        var positionLeft1 = 0;

        $('#brendLeft')[0].onclick = function () {
            positionLeft1 = Math.min(positionLeft1 + width1 * count1, 0);
            list1.style.marginLeft = positionLeft1 + 'px';
        }

        $('#brendRight')[0].onclick = function () {
            positionLeft1 = Math.max(positionLeft1 - width1 * count1, -width1 * (listItems1.length - num1));
            list1.style.marginLeft = positionLeft1 + 'px';
        }
    }


    /*pop ???? ??? ????????? ?????? ? ??????*/
    $('#modal_form_recall, #modal_form_recall1').removeClass('recall_toggle');
    console.log('work modalForm');

    $('.callBack').click(function (event) {
        event.preventDefault();
        $('#modal_form_recall').toggleClass('recall_toggle');
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


    $('.tab').click(function () {
        var active = $('.activePageType');
        active.removeClass('activePageType');
        $('div.products').removeClass('products').addClass('productsProduct');
        $(this).addClass('activePageType');

    })

    $('.list').click(function () {
        var active = $('.activePageType');
        active.removeClass('activePageType');
        $('div.productsProduct').removeClass('productsProduct').addClass('products');
        $(this).addClass('activePageType');

    })


    //house close
    $('.close i').click(function () {
        $('.close i').parent().parent().animate({opacity: 0}, 500, function () {
            $(this).remove()
        });
    })

    // go to top button

    if ($(document).scrollTop() > 1000) {
        $('.lift').css({'opacity': '1', 'cursore': 'pointer'});
    }

    $(window).scroll(function () {
        if ($(document).scrollTop() > 1000) {
            $('.lift').css({'opacity': '1', 'cursor': 'pointer', 'visibility': 'visible'});
        }

        else {
            $('.lift').css({'opacity': '0', 'cursor': 'default', 'visibility': 'hidden'});
        }
    });

    $('.lift').on('click', function () {
        if ($(document).scrollTop() < 1000) {
            return;
        }

        $('html,body').animate({
            scrollTop: 0
        }, 500);
    });

    /*popUp logIn*/
    $('.clPopUp').click(function () {
        var active = $('.active-clientsPopUp');
        var ac = $('.active-clientPopUp');
        var num = $(this).index();

        if ($(this).hasClass('active-clientsPopUp')) return;

        active.removeClass('active-clientsPopUp');
        ac.hide(300).removeClass('active-clientPopUp');

        var next = $('.clientPopUp').eq(num);

        $(this).addClass('active-clientsPopUp');
        next.show(300).addClass('active-clientPopUp');
    });

    $('.forget').click(function () {
        $('.hide').hide();
        $('.show').show();
    })


    $('.login a').click(function () {
        $('#overlay').fadeIn(400, function () {
            $('.popPrivatRoom').css('display', 'block')
                .animate({opacity: 1, top: '50%'}, 300);
        })
    })


    $('#overlay').click(function () {
        $('.popPrivatRoom')
            .animate({opacity: 0, top: '45%'}, 200,
            function () {
                $('.popPrivatRoom').css('display', 'none');
                $('#overlay').css('display', 'none').fadeOut(400);
            }
        );
    });

    $('.tellWhen').click(function () {
        $('#overlay').fadeIn(400, function () {
            $('.when').css('display', 'block')
                .animate({opacity: 1, top: '50%'}, 300);
        })
    })


    $('#overlay').click(function () {
        $('.when')
            .animate({opacity: 0, top: '45%'}, 200,
            function () {
                $('.when').css('display', 'none');
                $('#overlay').css('display', 'none').fadeOut(400);
            }
        );
    });


    $('.buy').click(function (event) {
        event.preventDefault();
        $('#overlay').fadeIn(400,
            function () {
                $('#modal_form')
                    .css('display', 'block')
                    .animate({opacity: 1, top: '30%'}, 200);
            });
    });

    $('#modal_close, #overlay').click(function () {
        $('#modal_form')
            .animate({opacity: 0, top: '45%'}, 200,
            function () {
                $(this).css('display', 'none');
                $('#overlay').fadeOut(400);
            }
        );
    });


    /*Bucket Img*/

    $(".ImgSlider img").click(function () {

        $(this)

        var largePath = $(this).attr("src");
        var largeAlt = $(this).attr("alt");

        $("#big_img").attr({src: largePath, alt: largeAlt});

    });

    /*delete goods*/

    if ($('.removeTov')) {
        $('.removeTov').click(function () {
            $(this).closest('.goodsTov').animate({opacity: 0}, 500, function () {
                $(this).remove()
            });


        });
    }

    if ($('.remove')) {
        $('.remove').click(function () {
            $(this).closest('tr').animate({opacity: 0}, 500, function () {
                $(this).remove()
            });
        });
    }

    var typeOfPayment = 0; //0 - paper money/ 1 - web money

    $('.payment').click(function () {
        var active = $('.active-payment');
        if ($(this).hasClass('active-payment')) return;
        num = $(this).index();

        switch (num) {
            case 1:
                typeOfPayment = 1;
                break;
            case 2:
                typeOfPayment = 0;
                break
        }


        console.log(typeOfPayment);
        active.removeClass('active-payment');
        $(this).addClass('active-payment');
    });

    $('.cl').click(function () {
        var active = $('.active-clients');
        var ac = $('.active-client');
        var num = $(this).index();

        if ($(this).hasClass('active-clients')) return;

        active.removeClass('active-clients');
        ac.removeClass('active-client');

        var next = $('.client').eq(num);

        $(this).addClass('active-clients');
        next.addClass('active-client');
    });

    $('.pDescriptionButt').click(function () {
        var active = $('.active-pDescriptionButt');
        var ac = $('.active-pDescriptionContent');
        var num = $(this).index();

        if ($(this).hasClass('active-pDescriptionButt')) return;

        active.removeClass('active-pDescriptionButt');
        ac.slideUp(300).removeClass('active-pDescriptionContent');

        var next = $('.pDescriptionContent ').eq(num);

        $(this).addClass('active-pDescriptionButt');
        next.slideDown(300).addClass('active-pDescriptionContent');
    });

    $('.delivery').click(function () {
        var active = $('.active-delivery');
        var ac = $('.active-deliveryType');
        var num = $(this).index();
        if ($(this).hasClass('active-delivery')) return;

        switch (num) {
            case 1:
                num = 2;
                break;
            case 2:
                num = 1;
                break;
            case 3:
                num = 0;
                break;
        }

        active.removeClass('active-delivery');
        ac.removeClass('active-deliveryType');

        var next = $('.deliveryType').eq(num);

        console.log(num);
        console.log(next.index());

        $(this).addClass('active-delivery');
        next.addClass('active-deliveryType');
    })

    $('.moveWithOutRegistration').click(function (e) {
        e.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top - 207;
        $('body,html').animate({scrollTop: top}, 1500);

    })

    if ($('.showNews').length > 0) {
        $('.showNews').click(function () {
            $('.newses').slideDown(500);
        })
    }


    /*Img Box*/
    $('#big_img').click(function (e) {
        var largePath1 = $(this).attr("src");
        var largeAlt1 = $(this).attr("alt");

        $("#largeImgPop").attr({src: largePath1, alt: largeAlt1});
        $('#overlay').fadeIn(400, function () {
            $('.pop_up1').css('display', 'block')
                .animate({opacity: 1, top: '50%'}, 300);
        })
    })


    $('#overlay').click(function () {
        $('.pop_up1')
            .animate({opacity: 0, top: '45%'}, 200,
            function () {
                $('#popSlide').css('margin-left', 0);
                $('.pop_up1').css('display', 'none');
                $('#overlay').css('display', 'none').fadeOut(400);
            }
        );
    });


    if ($('.pop_up1_position').length > 0) {
        var width = 400;


        var count = 1;
        var carousel = $('.pop_up1_position')[0];
        var list = $('#popSlide')[0];
        var listItems = list.querySelectorAll('.fade');
        var positionLeft = 0;

        $('.prevPopArrow')[0].onclick = function () {
            var wid = $(window).width();
            if (wid <= 425) {
                width = 300;
            }
            positionLeft = Math.min(positionLeft + width * count, 0);
            list.style.marginLeft = positionLeft + 'px';
        }

        $('.nextPopArrow')[0].onclick = function () {
            var wid = $(window).width();
            if (wid <= 425) {
                width = 300;
            }
            positionLeft = Math.max(positionLeft - width * count, -width * (listItems.length - count));
            list.style.marginLeft = positionLeft + 'px';
        }
    }


    /*fixed scroll*/

    /*var borderBottom = document.querySelector('.borderBottom');
     borderBottom = borderBottom.offsetHeight + parseInt(getComputedStyle(borderBottom).marginBottom);

     var topHeight = 297;
     if ($(window).width() == 768) {
     topHeight = 367;
     }

     $(window).resize(function () {
     if ($(window).width() == 768) {
     topHeight = 367;
     }
     else if ($(window).width() >= 1024) {
     topHeight = 297;
     }
     })

     $('.menuTop').css('height', topHeight);


     var h_hght = borderBottom;
     var h_mrg = 0;

     var elem = $('.fixedMenu');
     var elem2 = $('.menu');
     var top = $(this).scrollTop();

     if (top > h_hght) {
     elem.css('top', h_mrg);
     elem2.animate({marginTop: '0px'}, 1000);
     }
     $(window).scroll(function () {
     top = $(this).scrollTop();

     if (top + h_mrg < h_hght) {
     elem.css('top', (h_hght - top));
     elem2.css('marginTop', 20);
     } else {
     elem.css('top', h_mrg);
     elem2.css('marginTop', 0);
     }
     });*/


    /*callback*/

    $('.callback, .callBack1').click(function () {
        var callbackForm = $('.callbackForm');

        if (callbackForm.css('display') == 'none') {
            if ($(window).width() >= 1024) {
                callbackForm.css('top', $(this).position().top + $(this).height() + 15);
                callbackForm.css('left', $(this).position().left - $(this).width() / 2);
            } else if ($(window).width() == 768) {
                callbackForm.css('top', $(this).position().top + $(this).height() + 15);
                callbackForm.css('left', $(this).position().left);
            }
            callbackForm.slideDown(300);
        } else {
            callbackForm.slideUp(300);
        }
    })

    console.log('workEnd');
    $(document).mouseup(function (e) {
        var container;

        if ($(window).width() <= 425) {
            container = $(".callbackForm, .menu, .menu2");
        } else if ($(window).width() >= 768) {
            container = $(".callbackForm");
        }
        if (container.has(e.target).length === 0) {
            container.slideUp(300);
        }
    });
    var cur;

    if ($(window).width() > 425) {
        
    } else {
        $('.menuA>li').click(function () {
            var a = $(this).find('.subMenu');
            var b = $(this).find('i.fa-plus');
            if (a.css('display') == 'none') {
                if (cur = 1) {
                    $('.subMenu').slideUp();
                    var x = document.querySelectorAll('i.fa-plus');
                    for (var i = 0; i < x.length; i++) {
                        x[i].classList.remove('rotate45');
                    }
                }
                b.addClass('rotate45');
                a.slideDown();
                cur = 1;
            } else {
                b.removeClass('rotate45');
                a.slideUp();
            }
        });
    }

    /*mobile filter*/
    $('.bx-filter-parameters-box-title').click(function () {
        if ($(this).next().css('display') == 'none') {
            $(this).next().slideDown(300);
            $(this).find('.fa-chevron-down').css('transform', 'rotate(-90deg)');
        } else {
            $(this).next().slideUp(300);
            $(this).find('.fa-chevron-down').css('transform', 'rotate(0deg)');
        }

        /* var filter = document.querySelector('.mobFilter i');
         var tFilter = document.querySelectorAll('.bx-filter-block');

         setTimeout(function(){

         for (var x = 0; x < tFilter.length; x++) {
         if (tFilter[x].style.display == 'block') {
         document.querySelector('.mobFilter i').style.transform = 'rotate(-90deg)';
         return;
         } else {
         document.querySelector('.mobFilter i').style.transform = 'rotate(0deg)';
         }
         }
         },310);*/
    })
});

