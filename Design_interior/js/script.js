jQuery(document).ready(function(){

    // languages

    jQuery('.languages li:first-child').on('click', function(){
       jQuery('.languages li:last-child').fadeToggle(0);
        return false;
    });

    // zoom

    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true
    });

    //catalog_tab
    
    jQuery('aside ul li').on('click', function(){
        jQuery('aside ul li').removeClass('current-tab');
        jQuery(this).addClass('current-tab');
    });
    
    // customScroll

    var textScroll = jQuery('.main>.container ');
    var scrollImgWrapper = jQuery('.img_wrapper');
    var darkBlock = jQuery('.dark_block');
    var blockLeft = jQuery('.boots_helper_left');
    // var mobMenu = jQuery('.mobile_menu');

    // mobMenu.mCustomScrollbar();

    darkBlock.imagesLoaded(function(){
        // scrollImgWrapper.addClass('loaded');
        jQuery('.carousel').addClass('loaded');
        darkBlock.addClass('loaded');
        scrollImgWrapper.mCustomScrollbar({
            theme: 'dark'
        });
        blockLeft.mCustomScrollbar({
            theme: 'dark'
        });
        textScroll.mCustomScrollbar({
            theme: 'dark'
        });
    });

    //mobile_menu

    var mobileMenu = jQuery('.mobile_menu');
    var mobileMenuSpan = jQuery('.mobile_menu menu ul li span');
    var mobileMenuli = jQuery('.mobile_menu menu ul li');
    var mobileButton = jQuery('.burger i');
    var mobileA = jQuery('.mobile_menu menu ul li a');

    mobileButton.on('click', function(){
        mobileMenu.toggleClass('open_mobile');

        jQuery(document).mouseup(function(e){

            if (!mobileA.is(e.target) && !mobileMenu.is(e.target) && !mobileMenuSpan.is(e.target) && !mobileMenuli.is(e.target) && !(mobileButton.is(e.target) && mobileMenu.has(e.target).length == 0)){
                mobileMenu.removeClass('open_mobile');
            }
        });
    });

    jQuery(mobileMenuSpan).on('click', function(){
        if (mobileMenuSpan.has('.sub-menu')) {
            jQuery(this).next().slideToggle(150);
            jQuery(this).parent().toggleClass('background_paint');
            jQuery(this).toggleClass('open_span');
        }
    });

    // slider

    var left = jQuery('.arrow-left');
    var right = jQuery('.arrow-right');
    var slideArray = jQuery('.slide_item');
    var slideLength = slideArray.length;
    var i = 0;

    jQuery(slideArray[i]).fadeIn();

    right.on('click', function(){
        i++;

        if (i == slideLength) {
            i = 0;
            jQuery(slideArray).fadeOut(400);
            jQuery(slideArray[i]).fadeIn(400);
        }
        else {
            jQuery(slideArray).fadeOut(400);
            jQuery(slideArray[i]).fadeIn(400);
        }
    });

    left.on('click', function(){
        i--;

        if (i < 0) {
            i = slideLength-1;
            jQuery(slideArray).fadeOut(400);
            jQuery(slideArray[i]).fadeIn(400);
        }
        else {
            jQuery(slideArray).fadeOut(400);
            jQuery(slideArray[i]).fadeIn(400);
        }

    });

    // mobile_filter

    var closeButton = jQuery('.boots_helper_left aside .close');
    var mobileFilter = jQuery('.boots_helper_left aside');
    var mobileFilterToggle = jQuery('.mobile_open_button');

    mobileFilterToggle.on('click', function(){
        mobileFilter.fadeToggle(100);
        // mobileFilterToggle.toggleClass('reverse_arrow');
    });

    closeButton.on('click', function(){
        mobileFilter.fadeOut(100);
        // mobileFilterToggle.removeClass('reverse_arrow');
    });

    // hover service

    function hover() {
        if (jQuery(window).width() >= 990) {

            jQuery('.interaction .icon_container').hover(function() {
                jQuery(this).next().next().fadeIn(150);
            }, function(){
                jQuery(this).next().next().fadeOut(150);
            });
        }
    }

    hover();

    jQuery(window).resize(function(){
        hover();
    });

    // adaptive one page slide

    jQuery(window).resize(function(){

        if (jQuery(window).width()<768) {
            jQuery('.portfolio_photo .col-md-4 a').on('click', function(){
                return false;
            });
        }
        else {
            jQuery('.portfolio_photo .col-md-4 a').on('click', function(){
                return true;
            });
        }
    });

    if (jQuery(window).width()<768) {
        jQuery('.portfolio_photo .col-md-4 a').on('click', function(){
            return false;
        });
    }
    else {
        jQuery('.portfolio_photo .col-md-4 a').on('click', function(){
            return true;
        });
    }

    // adaptive height

        // variables

    var adaptiveTarget = jQuery('.img_wrapper');
    var block = jQuery('.dark_block ');
    var breadcrumbs = jQuery('.breadcrumbs ');

        // variables_height

    var windowWidth = jQuery(window).width();
    var blockHeight;
    var h2Height;
    var blockLeftHeight;
    var breadcrumbsHeight;

        // variables_math

    var asideMath;
    var mathHeight;

    function adaptiveHeightBorder() {

        windowWidth = jQuery(window).width();
        windowHeight = jQuery(window).height();
        console.log(windowHeight);
        console.log(windowWidth);
        blockHeight = block.height();
        blockLeftHeight = blockLeft.height();
        breadcrumbsHeight = breadcrumbs.height();

        if (jQuery('div').is('.boots_helper_right') && windowWidth > 768) {
            h2Height = jQuery('.boots_helper_right h2').outerHeight();
            mathHeight = blockHeight - (h2Height);
            asideMath = blockHeight;
            console.log('1');
        }

        else if (windowWidth <= 768 && jQuery('div').is('.boots_helper_right')) {
            h2Height = jQuery('.boots_helper_right h2').outerHeight();
            mathHeight = blockHeight - (h2Height + breadcrumbsHeight);
            asideMath = 60;
            console.log('2');
        }

        // else if (jQuery('div').is('.boots_helper_right')) {
        //     h2Height = 0;
        //     mathHeight = blockHeight - (h2Height + breadcrumbsHeight);
        //     asideMath = blockHeight;
        // }

        else if (!jQuery('div').is('.boots_helper_right') && windowWidth <= 480 && windowHeight < 768) {
            mathHeight = blockHeight - breadcrumbsHeight;
            console.log('3');
        }

        else if (!jQuery('div').is('.boots_helper_right') && windowWidth <= 768 && windowWidth >= 480 && windowHeight < 768) {
            mathHeight = blockHeight - breadcrumbsHeight+42;
            console.log('4');
        }

        else if (!jQuery('div').is('.boots_helper_right') && windowWidth <= 768 && windowHeight <= 1024) {
            mathHeight = blockHeight - breadcrumbsHeight;
            console.log('5');
        }

        else if (!jQuery('div').is('.boots_helper_right') && windowWidth <= 1024 && windowWidth > 768 && windowHeight < 768) {
            mathHeight = blockHeight - breadcrumbsHeight;
            console.log('6');
        }

        else {
            mathHeight = blockHeight - breadcrumbsHeight;
            console.log('7');
        }



        // paste style

        adaptiveTarget.css('height' , mathHeight+'px');
        blockLeft.css('height' , asideMath+'px');
    }

    adaptiveHeightBorder();

    jQuery(window).resize(function() {

        adaptiveHeightBorder();

    });

    window.addEventListener("orientationchange", function() {

        adaptiveHeightBorder();
        console.log('rotate');

    }, false);

    // init timer

    var run = setInterval('rotate()', 10000);

    jQuery('.carousel').hover(

        function() {
            clearInterval(run);
        },
        function() {
            run = setInterval('rotate()', 10000);

        }
    );

    // read_more

    var chekerText = jQuery('div').is('.seo');
    var text = jQuery('.seo .text');
    console.log(text);
    var more = jQuery(".more");
    var less = jQuery(".less");

    // more.on('click', function(){
    //     text.slideDown(150);
    //     less.fadeIn(150);
    //     more.fadeOut(50);
    // });
    //
    // less.on('click', function(){
    //     text.slideUp(150);
    //     less.fadeOut(50);
    //     more.fadeIn(150);
    // });



    if (chekerText == true) {

        var height_auto = [];
        var count = 0;

        text.each(function(){
            height_auto[count] = jQuery(this).outerHeight();
            count++;
        });
        var lineheight = text.css('line-height').replace("px", "");

        // if (jQuery(window).width()<768) {
        //     var five_lines = lineheight*11;
        // }
        // else {
        //     var five_lines = lineheight*8;
        // }

        var five_lines = lineheight*2+12;

        text.css('height', five_lines);

        more.click(function () {
            var t = jQuery(this).prev().index('.seo .text');
            jQuery(this).prev(text).animate({height: height_auto[t]+24}, 400);
            jQuery(this).css('display', 'none');
            jQuery(this).next(less).css('display', 'inline-block');
        });

        less.click(function () {
            jQuery(this).prev(more).prev(text).animate({height: five_lines}, 300);
            jQuery(this).prev(more).css('display', 'inline-block');
            jQuery(this).css('display', 'none');

        });
    }


});

function rotate() {
    jQuery('.arrow-right').click();
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsialF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG5cclxuICAgIC8vIGxhbmd1YWdlc1xyXG5cclxuICAgIGpRdWVyeSgnLmxhbmd1YWdlcyBsaTpmaXJzdC1jaGlsZCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICBqUXVlcnkoJy5sYW5ndWFnZXMgbGk6bGFzdC1jaGlsZCcpLmZhZGVUb2dnbGUoMCk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gem9vbVxyXG5cclxuICAgIGxpZ2h0Ym94Lm9wdGlvbih7XHJcbiAgICAgICAgJ3Jlc2l6ZUR1cmF0aW9uJzogMjAwLFxyXG4gICAgICAgICd3cmFwQXJvdW5kJzogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy9jYXRhbG9nX3RhYlxyXG4gICAgXHJcbiAgICBqUXVlcnkoJ2FzaWRlIHVsIGxpJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkoJ2FzaWRlIHVsIGxpJykucmVtb3ZlQ2xhc3MoJ2N1cnJlbnQtdGFiJyk7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLmFkZENsYXNzKCdjdXJyZW50LXRhYicpO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIC8vIGN1c3RvbVNjcm9sbFxyXG5cclxuICAgIHZhciB0ZXh0U2Nyb2xsID0galF1ZXJ5KCcubWFpbj4uY29udGFpbmVyICcpO1xyXG4gICAgdmFyIHNjcm9sbEltZ1dyYXBwZXIgPSBqUXVlcnkoJy5pbWdfd3JhcHBlcicpO1xyXG4gICAgdmFyIGRhcmtCbG9jayA9IGpRdWVyeSgnLmRhcmtfYmxvY2snKTtcclxuICAgIHZhciBibG9ja0xlZnQgPSBqUXVlcnkoJy5ib290c19oZWxwZXJfbGVmdCcpO1xyXG4gICAgLy8gdmFyIG1vYk1lbnUgPSBqUXVlcnkoJy5tb2JpbGVfbWVudScpO1xyXG5cclxuICAgIC8vIG1vYk1lbnUubUN1c3RvbVNjcm9sbGJhcigpO1xyXG5cclxuICAgIGRhcmtCbG9jay5pbWFnZXNMb2FkZWQoZnVuY3Rpb24oKXtcclxuICAgICAgICAvLyBzY3JvbGxJbWdXcmFwcGVyLmFkZENsYXNzKCdsb2FkZWQnKTtcclxuICAgICAgICBqUXVlcnkoJy5jYXJvdXNlbCcpLmFkZENsYXNzKCdsb2FkZWQnKTtcclxuICAgICAgICBkYXJrQmxvY2suYWRkQ2xhc3MoJ2xvYWRlZCcpO1xyXG4gICAgICAgIHNjcm9sbEltZ1dyYXBwZXIubUN1c3RvbVNjcm9sbGJhcih7XHJcbiAgICAgICAgICAgIHRoZW1lOiAnZGFyaydcclxuICAgICAgICB9KTtcclxuICAgICAgICBibG9ja0xlZnQubUN1c3RvbVNjcm9sbGJhcih7XHJcbiAgICAgICAgICAgIHRoZW1lOiAnZGFyaydcclxuICAgICAgICB9KTtcclxuICAgICAgICB0ZXh0U2Nyb2xsLm1DdXN0b21TY3JvbGxiYXIoe1xyXG4gICAgICAgICAgICB0aGVtZTogJ2RhcmsnXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL21vYmlsZV9tZW51XHJcblxyXG4gICAgdmFyIG1vYmlsZU1lbnUgPSBqUXVlcnkoJy5tb2JpbGVfbWVudScpO1xyXG4gICAgdmFyIG1vYmlsZU1lbnVTcGFuID0galF1ZXJ5KCcubW9iaWxlX21lbnUgbWVudSB1bCBsaSBzcGFuJyk7XHJcbiAgICB2YXIgbW9iaWxlTWVudWxpID0galF1ZXJ5KCcubW9iaWxlX21lbnUgbWVudSB1bCBsaScpO1xyXG4gICAgdmFyIG1vYmlsZUJ1dHRvbiA9IGpRdWVyeSgnLmJ1cmdlciBpJyk7XHJcbiAgICB2YXIgbW9iaWxlQSA9IGpRdWVyeSgnLm1vYmlsZV9tZW51IG1lbnUgdWwgbGkgYScpO1xyXG5cclxuICAgIG1vYmlsZUJ1dHRvbi5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIG1vYmlsZU1lbnUudG9nZ2xlQ2xhc3MoJ29wZW5fbW9iaWxlJyk7XHJcblxyXG4gICAgICAgIGpRdWVyeShkb2N1bWVudCkubW91c2V1cChmdW5jdGlvbihlKXtcclxuXHJcbiAgICAgICAgICAgIGlmICghbW9iaWxlQS5pcyhlLnRhcmdldCkgJiYgIW1vYmlsZU1lbnUuaXMoZS50YXJnZXQpICYmICFtb2JpbGVNZW51U3Bhbi5pcyhlLnRhcmdldCkgJiYgIW1vYmlsZU1lbnVsaS5pcyhlLnRhcmdldCkgJiYgIShtb2JpbGVCdXR0b24uaXMoZS50YXJnZXQpICYmIG1vYmlsZU1lbnUuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT0gMCkpe1xyXG4gICAgICAgICAgICAgICAgbW9iaWxlTWVudS5yZW1vdmVDbGFzcygnb3Blbl9tb2JpbGUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgalF1ZXJ5KG1vYmlsZU1lbnVTcGFuKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmIChtb2JpbGVNZW51U3Bhbi5oYXMoJy5zdWItbWVudScpKSB7XHJcbiAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5uZXh0KCkuc2xpZGVUb2dnbGUoMTUwKTtcclxuICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLnBhcmVudCgpLnRvZ2dsZUNsYXNzKCdiYWNrZ3JvdW5kX3BhaW50Jyk7XHJcbiAgICAgICAgICAgIGpRdWVyeSh0aGlzKS50b2dnbGVDbGFzcygnb3Blbl9zcGFuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gc2xpZGVyXHJcblxyXG4gICAgdmFyIGxlZnQgPSBqUXVlcnkoJy5hcnJvdy1sZWZ0Jyk7XHJcbiAgICB2YXIgcmlnaHQgPSBqUXVlcnkoJy5hcnJvdy1yaWdodCcpO1xyXG4gICAgdmFyIHNsaWRlQXJyYXkgPSBqUXVlcnkoJy5zbGlkZV9pdGVtJyk7XHJcbiAgICB2YXIgc2xpZGVMZW5ndGggPSBzbGlkZUFycmF5Lmxlbmd0aDtcclxuICAgIHZhciBpID0gMDtcclxuXHJcbiAgICBqUXVlcnkoc2xpZGVBcnJheVtpXSkuZmFkZUluKCk7XHJcblxyXG4gICAgcmlnaHQub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBpKys7XHJcblxyXG4gICAgICAgIGlmIChpID09IHNsaWRlTGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGkgPSAwO1xyXG4gICAgICAgICAgICBqUXVlcnkoc2xpZGVBcnJheSkuZmFkZU91dCg0MDApO1xyXG4gICAgICAgICAgICBqUXVlcnkoc2xpZGVBcnJheVtpXSkuZmFkZUluKDQwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBqUXVlcnkoc2xpZGVBcnJheSkuZmFkZU91dCg0MDApO1xyXG4gICAgICAgICAgICBqUXVlcnkoc2xpZGVBcnJheVtpXSkuZmFkZUluKDQwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgbGVmdC5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIGktLTtcclxuXHJcbiAgICAgICAgaWYgKGkgPCAwKSB7XHJcbiAgICAgICAgICAgIGkgPSBzbGlkZUxlbmd0aC0xO1xyXG4gICAgICAgICAgICBqUXVlcnkoc2xpZGVBcnJheSkuZmFkZU91dCg0MDApO1xyXG4gICAgICAgICAgICBqUXVlcnkoc2xpZGVBcnJheVtpXSkuZmFkZUluKDQwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBqUXVlcnkoc2xpZGVBcnJheSkuZmFkZU91dCg0MDApO1xyXG4gICAgICAgICAgICBqUXVlcnkoc2xpZGVBcnJheVtpXSkuZmFkZUluKDQwMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIG1vYmlsZV9maWx0ZXJcclxuXHJcbiAgICB2YXIgY2xvc2VCdXR0b24gPSBqUXVlcnkoJy5ib290c19oZWxwZXJfbGVmdCBhc2lkZSAuY2xvc2UnKTtcclxuICAgIHZhciBtb2JpbGVGaWx0ZXIgPSBqUXVlcnkoJy5ib290c19oZWxwZXJfbGVmdCBhc2lkZScpO1xyXG4gICAgdmFyIG1vYmlsZUZpbHRlclRvZ2dsZSA9IGpRdWVyeSgnLm1vYmlsZV9vcGVuX2J1dHRvbicpO1xyXG5cclxuICAgIG1vYmlsZUZpbHRlclRvZ2dsZS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIG1vYmlsZUZpbHRlci5mYWRlVG9nZ2xlKDEwMCk7XHJcbiAgICAgICAgLy8gbW9iaWxlRmlsdGVyVG9nZ2xlLnRvZ2dsZUNsYXNzKCdyZXZlcnNlX2Fycm93Jyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjbG9zZUJ1dHRvbi5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIG1vYmlsZUZpbHRlci5mYWRlT3V0KDEwMCk7XHJcbiAgICAgICAgLy8gbW9iaWxlRmlsdGVyVG9nZ2xlLnJlbW92ZUNsYXNzKCdyZXZlcnNlX2Fycm93Jyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBob3ZlciBzZXJ2aWNlXHJcblxyXG4gICAgZnVuY3Rpb24gaG92ZXIoKSB7XHJcbiAgICAgICAgaWYgKGpRdWVyeSh3aW5kb3cpLndpZHRoKCkgPj0gOTkwKSB7XHJcblxyXG4gICAgICAgICAgICBqUXVlcnkoJy5pbnRlcmFjdGlvbiAuaWNvbl9jb250YWluZXInKS5ob3ZlcihmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5uZXh0KCkubmV4dCgpLmZhZGVJbigxNTApO1xyXG4gICAgICAgICAgICB9LCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLm5leHQoKS5uZXh0KCkuZmFkZU91dCgxNTApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaG92ZXIoKTtcclxuXHJcbiAgICBqUXVlcnkod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKXtcclxuICAgICAgICBob3ZlcigpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gYWRhcHRpdmUgb25lIHBhZ2Ugc2xpZGVcclxuXHJcbiAgICBqUXVlcnkod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgaWYgKGpRdWVyeSh3aW5kb3cpLndpZHRoKCk8NzY4KSB7XHJcbiAgICAgICAgICAgIGpRdWVyeSgnLnBvcnRmb2xpb19waG90byAuY29sLW1kLTQgYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgalF1ZXJ5KCcucG9ydGZvbGlvX3Bob3RvIC5jb2wtbWQtNCBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoalF1ZXJ5KHdpbmRvdykud2lkdGgoKTw3NjgpIHtcclxuICAgICAgICBqUXVlcnkoJy5wb3J0Zm9saW9fcGhvdG8gLmNvbC1tZC00IGEnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBqUXVlcnkoJy5wb3J0Zm9saW9fcGhvdG8gLmNvbC1tZC00IGEnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBhZGFwdGl2ZSBoZWlnaHRcclxuXHJcbiAgICAgICAgLy8gdmFyaWFibGVzXHJcblxyXG4gICAgdmFyIGFkYXB0aXZlVGFyZ2V0ID0galF1ZXJ5KCcuaW1nX3dyYXBwZXInKTtcclxuICAgIHZhciBibG9jayA9IGpRdWVyeSgnLmRhcmtfYmxvY2sgJyk7XHJcbiAgICB2YXIgYnJlYWRjcnVtYnMgPSBqUXVlcnkoJy5icmVhZGNydW1icyAnKTtcclxuXHJcbiAgICAgICAgLy8gdmFyaWFibGVzX2hlaWdodFxyXG5cclxuICAgIHZhciB3aW5kb3dXaWR0aCA9IGpRdWVyeSh3aW5kb3cpLndpZHRoKCk7XHJcbiAgICB2YXIgYmxvY2tIZWlnaHQ7XHJcbiAgICB2YXIgaDJIZWlnaHQ7XHJcbiAgICB2YXIgYmxvY2tMZWZ0SGVpZ2h0O1xyXG4gICAgdmFyIGJyZWFkY3J1bWJzSGVpZ2h0O1xyXG5cclxuICAgICAgICAvLyB2YXJpYWJsZXNfbWF0aFxyXG5cclxuICAgIHZhciBhc2lkZU1hdGg7XHJcbiAgICB2YXIgbWF0aEhlaWdodDtcclxuXHJcbiAgICBmdW5jdGlvbiBhZGFwdGl2ZUhlaWdodEJvcmRlcigpIHtcclxuXHJcbiAgICAgICAgd2luZG93V2lkdGggPSBqUXVlcnkod2luZG93KS53aWR0aCgpO1xyXG4gICAgICAgIHdpbmRvd0hlaWdodCA9IGpRdWVyeSh3aW5kb3cpLmhlaWdodCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHdpbmRvd0hlaWdodCk7XHJcbiAgICAgICAgY29uc29sZS5sb2cod2luZG93V2lkdGgpO1xyXG4gICAgICAgIGJsb2NrSGVpZ2h0ID0gYmxvY2suaGVpZ2h0KCk7XHJcbiAgICAgICAgYmxvY2tMZWZ0SGVpZ2h0ID0gYmxvY2tMZWZ0LmhlaWdodCgpO1xyXG4gICAgICAgIGJyZWFkY3J1bWJzSGVpZ2h0ID0gYnJlYWRjcnVtYnMuaGVpZ2h0KCk7XHJcblxyXG4gICAgICAgIGlmIChqUXVlcnkoJ2RpdicpLmlzKCcuYm9vdHNfaGVscGVyX3JpZ2h0JykgJiYgd2luZG93V2lkdGggPiA3NjgpIHtcclxuICAgICAgICAgICAgaDJIZWlnaHQgPSBqUXVlcnkoJy5ib290c19oZWxwZXJfcmlnaHQgaDInKS5vdXRlckhlaWdodCgpO1xyXG4gICAgICAgICAgICBtYXRoSGVpZ2h0ID0gYmxvY2tIZWlnaHQgLSAoaDJIZWlnaHQpO1xyXG4gICAgICAgICAgICBhc2lkZU1hdGggPSBibG9ja0hlaWdodDtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJzEnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVsc2UgaWYgKHdpbmRvd1dpZHRoIDw9IDc2OCAmJiBqUXVlcnkoJ2RpdicpLmlzKCcuYm9vdHNfaGVscGVyX3JpZ2h0JykpIHtcclxuICAgICAgICAgICAgaDJIZWlnaHQgPSBqUXVlcnkoJy5ib290c19oZWxwZXJfcmlnaHQgaDInKS5vdXRlckhlaWdodCgpO1xyXG4gICAgICAgICAgICBtYXRoSGVpZ2h0ID0gYmxvY2tIZWlnaHQgLSAoaDJIZWlnaHQgKyBicmVhZGNydW1ic0hlaWdodCk7XHJcbiAgICAgICAgICAgIGFzaWRlTWF0aCA9IDYwO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnMicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZWxzZSBpZiAoalF1ZXJ5KCdkaXYnKS5pcygnLmJvb3RzX2hlbHBlcl9yaWdodCcpKSB7XHJcbiAgICAgICAgLy8gICAgIGgySGVpZ2h0ID0gMDtcclxuICAgICAgICAvLyAgICAgbWF0aEhlaWdodCA9IGJsb2NrSGVpZ2h0IC0gKGgySGVpZ2h0ICsgYnJlYWRjcnVtYnNIZWlnaHQpO1xyXG4gICAgICAgIC8vICAgICBhc2lkZU1hdGggPSBibG9ja0hlaWdodDtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIGVsc2UgaWYgKCFqUXVlcnkoJ2RpdicpLmlzKCcuYm9vdHNfaGVscGVyX3JpZ2h0JykgJiYgd2luZG93V2lkdGggPD0gNDgwICYmIHdpbmRvd0hlaWdodCA8IDc2OCkge1xyXG4gICAgICAgICAgICBtYXRoSGVpZ2h0ID0gYmxvY2tIZWlnaHQgLSBicmVhZGNydW1ic0hlaWdodDtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJzMnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVsc2UgaWYgKCFqUXVlcnkoJ2RpdicpLmlzKCcuYm9vdHNfaGVscGVyX3JpZ2h0JykgJiYgd2luZG93V2lkdGggPD0gNzY4ICYmIHdpbmRvd1dpZHRoID49IDQ4MCAmJiB3aW5kb3dIZWlnaHQgPCA3NjgpIHtcclxuICAgICAgICAgICAgbWF0aEhlaWdodCA9IGJsb2NrSGVpZ2h0IC0gYnJlYWRjcnVtYnNIZWlnaHQrNDI7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCc0Jyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlbHNlIGlmICghalF1ZXJ5KCdkaXYnKS5pcygnLmJvb3RzX2hlbHBlcl9yaWdodCcpICYmIHdpbmRvd1dpZHRoIDw9IDc2OCAmJiB3aW5kb3dIZWlnaHQgPD0gMTAyNCkge1xyXG4gICAgICAgICAgICBtYXRoSGVpZ2h0ID0gYmxvY2tIZWlnaHQgLSBicmVhZGNydW1ic0hlaWdodDtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJzUnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVsc2UgaWYgKCFqUXVlcnkoJ2RpdicpLmlzKCcuYm9vdHNfaGVscGVyX3JpZ2h0JykgJiYgd2luZG93V2lkdGggPD0gMTAyNCAmJiB3aW5kb3dXaWR0aCA+IDc2OCAmJiB3aW5kb3dIZWlnaHQgPCA3NjgpIHtcclxuICAgICAgICAgICAgbWF0aEhlaWdodCA9IGJsb2NrSGVpZ2h0IC0gYnJlYWRjcnVtYnNIZWlnaHQ7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCc2Jyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbWF0aEhlaWdodCA9IGJsb2NrSGVpZ2h0IC0gYnJlYWRjcnVtYnNIZWlnaHQ7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCc3Jyk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgIC8vIHBhc3RlIHN0eWxlXHJcblxyXG4gICAgICAgIGFkYXB0aXZlVGFyZ2V0LmNzcygnaGVpZ2h0JyAsIG1hdGhIZWlnaHQrJ3B4Jyk7XHJcbiAgICAgICAgYmxvY2tMZWZ0LmNzcygnaGVpZ2h0JyAsIGFzaWRlTWF0aCsncHgnKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGFwdGl2ZUhlaWdodEJvcmRlcigpO1xyXG5cclxuICAgIGpRdWVyeSh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgYWRhcHRpdmVIZWlnaHRCb3JkZXIoKTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm9yaWVudGF0aW9uY2hhbmdlXCIsIGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICBhZGFwdGl2ZUhlaWdodEJvcmRlcigpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdyb3RhdGUnKTtcclxuXHJcbiAgICB9LCBmYWxzZSk7XHJcblxyXG4gICAgLy8gaW5pdCB0aW1lclxyXG5cclxuICAgIHZhciBydW4gPSBzZXRJbnRlcnZhbCgncm90YXRlKCknLCAxMDAwMCk7XHJcblxyXG4gICAgalF1ZXJ5KCcuY2Fyb3VzZWwnKS5ob3ZlcihcclxuXHJcbiAgICAgICAgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwocnVuKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBydW4gPSBzZXRJbnRlcnZhbCgncm90YXRlKCknLCAxMDAwMCk7XHJcblxyXG4gICAgICAgIH1cclxuICAgICk7XHJcblxyXG4gICAgLy8gcmVhZF9tb3JlXHJcblxyXG4gICAgdmFyIGNoZWtlclRleHQgPSBqUXVlcnkoJ2RpdicpLmlzKCcuc2VvJyk7XHJcbiAgICB2YXIgdGV4dCA9IGpRdWVyeSgnLnNlbyAudGV4dCcpO1xyXG4gICAgY29uc29sZS5sb2codGV4dCk7XHJcbiAgICB2YXIgbW9yZSA9IGpRdWVyeShcIi5tb3JlXCIpO1xyXG4gICAgdmFyIGxlc3MgPSBqUXVlcnkoXCIubGVzc1wiKTtcclxuXHJcbiAgICAvLyBtb3JlLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAvLyAgICAgdGV4dC5zbGlkZURvd24oMTUwKTtcclxuICAgIC8vICAgICBsZXNzLmZhZGVJbigxNTApO1xyXG4gICAgLy8gICAgIG1vcmUuZmFkZU91dCg1MCk7XHJcbiAgICAvLyB9KTtcclxuICAgIC8vXHJcbiAgICAvLyBsZXNzLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAvLyAgICAgdGV4dC5zbGlkZVVwKDE1MCk7XHJcbiAgICAvLyAgICAgbGVzcy5mYWRlT3V0KDUwKTtcclxuICAgIC8vICAgICBtb3JlLmZhZGVJbigxNTApO1xyXG4gICAgLy8gfSk7XHJcblxyXG5cclxuXHJcbiAgICBpZiAoY2hla2VyVGV4dCA9PSB0cnVlKSB7XHJcblxyXG4gICAgICAgIHZhciBoZWlnaHRfYXV0byA9IFtdO1xyXG4gICAgICAgIHZhciBjb3VudCA9IDA7XHJcblxyXG4gICAgICAgIHRleHQuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBoZWlnaHRfYXV0b1tjb3VudF0gPSBqUXVlcnkodGhpcykub3V0ZXJIZWlnaHQoKTtcclxuICAgICAgICAgICAgY291bnQrKztcclxuICAgICAgICB9KTtcclxuICAgICAgICB2YXIgbGluZWhlaWdodCA9IHRleHQuY3NzKCdsaW5lLWhlaWdodCcpLnJlcGxhY2UoXCJweFwiLCBcIlwiKTtcclxuXHJcbiAgICAgICAgLy8gaWYgKGpRdWVyeSh3aW5kb3cpLndpZHRoKCk8NzY4KSB7XHJcbiAgICAgICAgLy8gICAgIHZhciBmaXZlX2xpbmVzID0gbGluZWhlaWdodCoxMTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgIHZhciBmaXZlX2xpbmVzID0gbGluZWhlaWdodCo4O1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgdmFyIGZpdmVfbGluZXMgPSBsaW5laGVpZ2h0KjIrMTI7XHJcblxyXG4gICAgICAgIHRleHQuY3NzKCdoZWlnaHQnLCBmaXZlX2xpbmVzKTtcclxuXHJcbiAgICAgICAgbW9yZS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciB0ID0galF1ZXJ5KHRoaXMpLnByZXYoKS5pbmRleCgnLnNlbyAudGV4dCcpO1xyXG4gICAgICAgICAgICBqUXVlcnkodGhpcykucHJldih0ZXh0KS5hbmltYXRlKHtoZWlnaHQ6IGhlaWdodF9hdXRvW3RdKzI0fSwgNDAwKTtcclxuICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbiAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5uZXh0KGxlc3MpLmNzcygnZGlzcGxheScsICdpbmxpbmUtYmxvY2snKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGVzcy5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5wcmV2KG1vcmUpLnByZXYodGV4dCkuYW5pbWF0ZSh7aGVpZ2h0OiBmaXZlX2xpbmVzfSwgMzAwKTtcclxuICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLnByZXYobW9yZSkuY3NzKCdkaXNwbGF5JywgJ2lubGluZS1ibG9jaycpO1xyXG4gICAgICAgICAgICBqUXVlcnkodGhpcykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxufSk7XHJcblxyXG5mdW5jdGlvbiByb3RhdGUoKSB7XHJcbiAgICBqUXVlcnkoJy5hcnJvdy1yaWdodCcpLmNsaWNrKCk7XHJcbn0iXSwiZmlsZSI6InNjcmlwdC5qcyJ9
