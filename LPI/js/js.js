// Must be calling jQuery in Head

jQuery(document).ready(function () {
    var count = 0;
    if (document.querySelector('#download')) {
        document.querySelector('#download').setAttribute('disabled', 'disabled');

        document.querySelector('.agreementCheckbox').onclick = function () {

            if (count == 0) {
                count = 1;
                document.querySelector('#check').checked = 'true';
                document.querySelector('.checkbox i').style.display = 'inline';
                document.querySelector('#download').removeAttribute('disabled');

            } else if (count == 1) {
                count = 0;
                document.querySelector('#check').checked = 'false'
                document.querySelector('.checkbox i').style.display = 'none';
                document.querySelector('#download').setAttribute('disabled', 'disabled');
            }
        }
    }

    $('.quest div, .questNext div').click(function () {
        var input = $(this).find('input:radio');
        var i = $(this).find('i');
        var inpName = input.attr('name');
        var N = document.getElementsByName(inpName);

        console.log(input.attr('name'));
        console.log(N);

        var inpC = input.is(':checked');
        if (inpC) {
            input.prop('checked', false);
            i.css('display', 'none');
        } else {
            for (var x = 0; x < N.length; x++) {
                N[x].parentElement.querySelector('i').style.display = 'none';
            }
            input.prop('checked', true);
            i.css('display', 'block');
        }
    })
    /*slider*/

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

    /* $('#rArrow').click(function () {
     nSlide();
     });*/

    var timer = setInterval(nSlide, 5000);
    if ($(window).width() <= 425) {
        clearInterval(timer);
    }
    /*$('#lArrow').click(function () {
     var currentSlide = $('.active-slide');
     var prevSlide = currentSlide.prev();

     /!*var currentDot = $('.active-dot');
     var prevDot = currentDot.prev();*!/

     if (prevSlide.length == 0) {
     prevSlide = $('.slide').last();
     /!*prevDot = $('.dot').last();*!/
     }

     currentSlide.fadeOut(700).removeClass('active-slide');
     prevSlide.fadeIn(700).addClass('active-slide');

     /!*currentDot.removeClass('active-dot');
     prevDot.addClass('active-dot');*!/
     });
     */


    /*callback*/

    $('.call, .call1').click(function () {
        var callbackForm = $('.callback');
           
        if (callbackForm.css('display') == 'none') {
            if ($(window).width() >= 1024) {
                callbackForm.css('top', $(this).position().top + $(this).height() + 15);
                callbackForm.css('left', $(this).position().left - $(this).width() / 2);
            } else if ($(window).width() == 768) {
                callbackForm.css('top', $(this).position().top + $(this).height());
                callbackForm.css('left', '380px');
            } else if ($(window).width() <= 425) {
                callbackForm.css('top', '90px');
                callbackForm.css('left', $(this).position().left + $(this).width() * 3.5 - callbackForm.width());
            } else if (568 >= $(window).width() <= 750) {
                callbackForm.css('top', '90px');
                callbackForm.css('left', '50%');
            }
            callbackForm.slideDown(300);
        }        
        else {
            callbackForm.slideUp(300);
        }
    })
    
    $('.close').click(function(){
    var callbackForm = $('.callback');
     callbackForm.slideUp(300);
    })

    $(document).mouseup(function (e) {
        var container = $('.callback');

        if ($(window).width() <= 768) {
            container = $(".callback, .menuTop ul");
        }


        if (container.has(e.target).length === 0) {
            container.slideUp(300);
        }
    });

    /*$('.call, .call1').on('click', function (e) {
     e.preventDefault();
     function s() {
     $('.callback')
     .css('display', 'block')
     .animate({opacity: 1, top: '40px'}, 200);
     };
     s();

     $('.close, #overflow').click(function () {
     $('.callback')
     .animate({opacity: 0, top: '30px'}, 200,
     function () {
     $(this).css('display', 'none');

     }
     );
     });
     });

     $(document).mouseup(function (e) {
     var popup = $(".callback");
     if (!$('.call1').is(e.target) && !$('.call').is(e.target) && !popup.is(e.target) && popup.has(e.target).length == 0) {
     popup.animate({opacity: 0, top: '30px'}, 200,
     function () {
     $(this).css('display', 'none');

     }
     );
     }
     });*/


    /*fixed scroll*/

    var scrollH = $('.menuTop').height() + $('.topP').height();
    var h_hght = $('.topP').height();
    var h_mrg = 0;

    if ($(window).width() < 750) {
        scrollH = $('.menuTop').height();
        h_hght = 0;
    }

    setTimeout(function () {
        $('.header').css('height', scrollH);
    }, 40);

    $(window).resize(function () {
        if ($(window).width() < 750) {
            scrollH = $('.menuTop').height();
            h_hght = 0;
        }
        $('.header').css('height', scrollH);
        if ($(window).width() < 750) {
            var scrollH = $('.topP').height();
        } else {
            var scrollH = $('.menuTop').height() + $('.topP').height();
        }
    })

    var elem = $('.menuTopFixed');
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


    $('.nav').click(function () {
        if ($('.menuTop ul').css('display') == 'none') {
            $('.menuTop ul').slideDown(500);
        } else {
            $('.menuTop ul').slideUp(500);
        }
    })


    /*change border-color*/
    $(' #phone1,  #name1, #email, #message, #theamMess, #nameComp, #sait').on('focus', function () {
        "use strict";
        $(this).css('border-color', '#00baf7');
        $(this).on('blur', function () {
            $(this).css('border-color', '#959595');
        })
    });

    /*newsToggle*/


    $('.toggle-button').click(function () {

        var parent = $(this).parent();
        var div = parent.find("div");
        var p = parent.find("p").height();

        if (div.height() == 72) {
            div.animate({
                'height': p
            }, 500);
            parent.find($('.toggle-button')).text('ЗГОРНУТИ');
        } else {
            div.animate({
                'height': '72px'
            }, 500);
            parent.find($('.toggle-button')).text('ЧИТАТИ ДАЛІ');
        }
    })


    /*agreement*/

    $('.download').on('click', function (e) {
        e.preventDefault();
        $('#overflow').fadeIn(400,
            function () {
                $('#agreement')
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50%'}, 200);
            });

        $('#overflow').click(function () {
            $('#agreement')
                .animate({opacity: 0, top: '45%'}, 200,
                function () {
                    $(this).css('display', 'none');
                    $('#overflow').fadeOut(400);
                }
            );
        });
    });

    /*change input_borderColor*/

    if ($('#phone, #phone1')) {
        $('#phone, #phone1').blur(function () {
            if (!$.isNumeric($(this).val())) {
                $(this).val('');
            }
        })

    }

    if ($('#name, #name1')) {
        $('#name, #name1').blur(function () {
            if ($.isNumeric($(this).val())) {
                $(this).val('');
            }
        })
    }

// Add this in an external JS file. I called mine 'ie.placeholder.min.js'.
    $(function () {
        $("input, textarea").placeholder()
    });
    (function (e, t, n) {
        function r(e) {
            var t = {};
            var r = /^jQuery\d+$/;
            n.each(e.attributes, function (e, n) {
                if (n.specified && !r.test(n.name)) {
                    t[n.name] = n.value
                }
            });
            return t
        }

        function i(e, t) {
            var r = this;
            var i = n(r);
            if (r.value == i.attr("placeholder") && i.hasClass("placeholder")) {
                if (i.data("placeholder-password")) {
                    i = i.hide().next().show().attr("id", i.removeAttr("id").data("placeholder-id"));
                    if (e === true) {
                        return i[0].value = t
                    }
                    i.focus()
                } else {
                    r.value = "";
                    i.removeClass("placeholder");
                    r == o() && r.select()
                }
            }
        }

        function s() {
            var e;
            var t = this;
            var s = n(t);
            var o = this.id;
            if (t.value == "") {
                if (t.type == "password") {
                    if (!s.data("placeholder-textinput")) {
                        try {
                            e = s.clone().attr({type: "text"})
                        } catch (u) {
                            e = n("<input>").attr(n.extend(r(this), {type: "text"}))
                        }
                        e.removeAttr("name").data({
                            "placeholder-password": s,
                            "placeholder-id": o
                        }).bind("focus.placeholder", i);
                        s.data({"placeholder-textinput": e, "placeholder-id": o}).before(e)
                    }
                    s = s.removeAttr("id").hide().prev().attr("id", o).show()
                }
                s.addClass("placeholder");
                s[0].value = s.attr("placeholder")
            } else {
                s.removeClass("placeholder")
            }
        }

        function o() {
            try {
                return t.activeElement
            } catch (e) {
            }
        }

        var u = Object.prototype.toString.call(e.operamini) == "[object OperaMini]";
        var a = "placeholder" in t.createElement("input") && !u;
        var f = "placeholder" in t.createElement("textarea") && !u;
        var l = n.fn;
        var c = n.valHooks;
        var h = n.propHooks;
        var p;
        var d;
        if (a && f) {
            d = l.placeholder = function () {
                return this
            };
            d.input = d.textarea = true
        } else {
            d = l.placeholder = function () {
                var e = this;
                e.filter((a ? "textarea" : ":input") + "[placeholder]").not(".placeholder").bind({
                    "focus.placeholder": i,
                    "blur.placeholder": s
                }).data("placeholder-enabled", true).trigger("blur.placeholder");
                return e
            };
            d.input = a;
            d.textarea = f;
            p = {
                get: function (e) {
                    var t = n(e);
                    var r = t.data("placeholder-password");
                    if (r) {
                        return r[0].value
                    }
                    return t.data("placeholder-enabled") && t.hasClass("placeholder") ? "" : e.value
                }, set: function (e, t) {
                    var r = n(e);
                    var u = r.data("placeholder-password");
                    if (u) {
                        return u[0].value = t
                    }
                    if (!r.data("placeholder-enabled")) {
                        return e.value = t
                    }
                    if (t == "") {
                        e.value = t;
                        if (e != o()) {
                            s.call(e)
                        }
                    } else if (r.hasClass("placeholder")) {
                        i.call(e, true, t) || (e.value = t)
                    } else {
                        e.value = t
                    }
                    return r
                }
            };
            if (!a) {
                c.input = p;
                h.value = p
            }
            if (!f) {
                c.textarea = p;
                h.value = p
            }
            n(function () {
                n(t).delegate("form", "submit.placeholder", function () {
                    var e = n(".placeholder", this).each(i);
                    setTimeout(function () {
                        e.each(s)
                    }, 10)
                })
            });
            n(e).bind("beforeunload.placeholder", function () {
                n(".placeholder").each(function () {
                    this.value = ""
                })
            })
        }
    })(this, document, jQuery)
})
