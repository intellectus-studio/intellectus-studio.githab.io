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
        blockLeft.mCustomScrollbar();
        textScroll.mCustomScrollbar();
    });

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
        blockHeight = block.height();
        blockLeftHeight = blockLeft.height();
        breadcrumbsHeight = breadcrumbs.height();

        if (jQuery('div').is('.boots_helper_right') && windowWidth > 768) {
            h2Height = jQuery('.boots_helper_right h2').outerHeight();
            mathHeight = blockHeight - (h2Height);
            asideMath = blockHeight;
        }

        else if (windowWidth <= 768 && jQuery('div').is('.boots_helper_right')) {
            h2Height = jQuery('.boots_helper_right h2').outerHeight();
            mathHeight = blockHeight - (h2Height + breadcrumbsHeight);
            asideMath = 60;
        }

        else if (jQuery('div').is('.boots_helper_right')) {
            h2Height = 0;
            mathHeight = blockHeight - (h2Height + breadcrumbsHeight);
            asideMath = blockHeight;
        }

        else if (!jQuery('div').is('.boots_helper_right')) {
            mathHeight = blockHeight - breadcrumbsHeight;
        }


        // paste style

        adaptiveTarget.css('height' , mathHeight+'px');
        blockLeft.css('height' , asideMath+'px');
    }

    adaptiveHeightBorder();

    jQuery(window).resize(function() {

        adaptiveHeightBorder();

    });

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

});

function rotate() {
    jQuery('.arrow-right').click();
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsialF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG5cclxuICAgIC8vIGxhbmd1YWdlc1xyXG5cclxuICAgIGpRdWVyeSgnLmxhbmd1YWdlcyBsaTpmaXJzdC1jaGlsZCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICBqUXVlcnkoJy5sYW5ndWFnZXMgbGk6bGFzdC1jaGlsZCcpLmZhZGVUb2dnbGUoMCk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gem9vbVxyXG5cclxuICAgIGxpZ2h0Ym94Lm9wdGlvbih7XHJcbiAgICAgICAgJ3Jlc2l6ZUR1cmF0aW9uJzogMjAwLFxyXG4gICAgICAgICd3cmFwQXJvdW5kJzogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy9jYXRhbG9nX3RhYlxyXG4gICAgXHJcbiAgICBqUXVlcnkoJ2FzaWRlIHVsIGxpJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkoJ2FzaWRlIHVsIGxpJykucmVtb3ZlQ2xhc3MoJ2N1cnJlbnQtdGFiJyk7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLmFkZENsYXNzKCdjdXJyZW50LXRhYicpO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIC8vIGN1c3RvbVNjcm9sbFxyXG5cclxuICAgIHZhciB0ZXh0U2Nyb2xsID0galF1ZXJ5KCcubWFpbj4uY29udGFpbmVyICcpO1xyXG4gICAgdmFyIHNjcm9sbEltZ1dyYXBwZXIgPSBqUXVlcnkoJy5pbWdfd3JhcHBlcicpO1xyXG4gICAgdmFyIGRhcmtCbG9jayA9IGpRdWVyeSgnLmRhcmtfYmxvY2snKTtcclxuICAgIHZhciBibG9ja0xlZnQgPSBqUXVlcnkoJy5ib290c19oZWxwZXJfbGVmdCcpO1xyXG4gICAgLy8gdmFyIG1vYk1lbnUgPSBqUXVlcnkoJy5tb2JpbGVfbWVudScpO1xyXG5cclxuICAgIC8vIG1vYk1lbnUubUN1c3RvbVNjcm9sbGJhcigpO1xyXG5cclxuICAgIGRhcmtCbG9jay5pbWFnZXNMb2FkZWQoZnVuY3Rpb24oKXtcclxuICAgICAgICAvLyBzY3JvbGxJbWdXcmFwcGVyLmFkZENsYXNzKCdsb2FkZWQnKTtcclxuICAgICAgICBqUXVlcnkoJy5jYXJvdXNlbCcpLmFkZENsYXNzKCdsb2FkZWQnKTtcclxuICAgICAgICBkYXJrQmxvY2suYWRkQ2xhc3MoJ2xvYWRlZCcpO1xyXG4gICAgICAgIHNjcm9sbEltZ1dyYXBwZXIubUN1c3RvbVNjcm9sbGJhcih7XHJcbiAgICAgICAgICAgIHRoZW1lOiAnZGFyaydcclxuICAgICAgICB9KTtcclxuICAgICAgICBibG9ja0xlZnQubUN1c3RvbVNjcm9sbGJhcigpO1xyXG4gICAgICAgIHRleHRTY3JvbGwubUN1c3RvbVNjcm9sbGJhcigpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gcmVhZF9tb3JlXHJcbiAgICBcclxuICAgIFxyXG5cclxuICAgIHZhciBjaGVrZXJUZXh0ID0galF1ZXJ5KCdkaXYnKS5pcygnLnNlbycpO1xyXG4gICAgdmFyIHRleHQgPSBqUXVlcnkoJy5zZW8gLnRleHQnKTtcclxuICAgIGNvbnNvbGUubG9nKHRleHQpO1xyXG4gICAgdmFyIG1vcmUgPSBqUXVlcnkoXCIubW9yZVwiKTtcclxuICAgIHZhciBsZXNzID0galF1ZXJ5KFwiLmxlc3NcIik7XHJcblxyXG4gICAgLy8gbW9yZS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgLy8gICAgIHRleHQuc2xpZGVEb3duKDE1MCk7XHJcbiAgICAvLyAgICAgbGVzcy5mYWRlSW4oMTUwKTtcclxuICAgIC8vICAgICBtb3JlLmZhZGVPdXQoNTApO1xyXG4gICAgLy8gfSk7XHJcbiAgICAvL1xyXG4gICAgLy8gbGVzcy5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgLy8gICAgIHRleHQuc2xpZGVVcCgxNTApO1xyXG4gICAgLy8gICAgIGxlc3MuZmFkZU91dCg1MCk7XHJcbiAgICAvLyAgICAgbW9yZS5mYWRlSW4oMTUwKTtcclxuICAgIC8vIH0pO1xyXG5cclxuXHJcblxyXG4gICAgaWYgKGNoZWtlclRleHQgPT0gdHJ1ZSkge1xyXG5cclxuICAgICAgICB2YXIgaGVpZ2h0X2F1dG8gPSBbXTtcclxuICAgICAgICB2YXIgY291bnQgPSAwO1xyXG5cclxuICAgICAgICB0ZXh0LmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgaGVpZ2h0X2F1dG9bY291bnRdID0galF1ZXJ5KHRoaXMpLm91dGVySGVpZ2h0KCk7XHJcbiAgICAgICAgICAgIGNvdW50Kys7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmFyIGxpbmVoZWlnaHQgPSB0ZXh0LmNzcygnbGluZS1oZWlnaHQnKS5yZXBsYWNlKFwicHhcIiwgXCJcIik7XHJcblxyXG4gICAgICAgIC8vIGlmIChqUXVlcnkod2luZG93KS53aWR0aCgpPDc2OCkge1xyXG4gICAgICAgIC8vICAgICB2YXIgZml2ZV9saW5lcyA9IGxpbmVoZWlnaHQqMTE7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGVsc2Uge1xyXG4gICAgICAgIC8vICAgICB2YXIgZml2ZV9saW5lcyA9IGxpbmVoZWlnaHQqODtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIHZhciBmaXZlX2xpbmVzID0gbGluZWhlaWdodCoyKzEyO1xyXG5cclxuICAgICAgICB0ZXh0LmNzcygnaGVpZ2h0JywgZml2ZV9saW5lcyk7XHJcblxyXG4gICAgICAgIG1vcmUuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgdCA9IGpRdWVyeSh0aGlzKS5wcmV2KCkuaW5kZXgoJy5zZW8gLnRleHQnKTtcclxuICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLnByZXYodGV4dCkuYW5pbWF0ZSh7aGVpZ2h0OiBoZWlnaHRfYXV0b1t0XSsyNH0sIDQwMCk7XHJcbiAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgICAgICAgICBqUXVlcnkodGhpcykubmV4dChsZXNzKS5jc3MoJ2Rpc3BsYXknLCAnaW5saW5lLWJsb2NrJyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxlc3MuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBqUXVlcnkodGhpcykucHJldihtb3JlKS5wcmV2KHRleHQpLmFuaW1hdGUoe2hlaWdodDogZml2ZV9saW5lc30sIDMwMCk7XHJcbiAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5wcmV2KG1vcmUpLmNzcygnZGlzcGxheScsICdpbmxpbmUtYmxvY2snKTtcclxuICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vbW9iaWxlX21lbnVcclxuXHJcbiAgICB2YXIgbW9iaWxlTWVudSA9IGpRdWVyeSgnLm1vYmlsZV9tZW51Jyk7XHJcbiAgICB2YXIgbW9iaWxlTWVudVNwYW4gPSBqUXVlcnkoJy5tb2JpbGVfbWVudSBtZW51IHVsIGxpIHNwYW4nKTtcclxuICAgIHZhciBtb2JpbGVNZW51bGkgPSBqUXVlcnkoJy5tb2JpbGVfbWVudSBtZW51IHVsIGxpJyk7XHJcbiAgICB2YXIgbW9iaWxlQnV0dG9uID0galF1ZXJ5KCcuYnVyZ2VyIGknKTtcclxuICAgIHZhciBtb2JpbGVBID0galF1ZXJ5KCcubW9iaWxlX21lbnUgbWVudSB1bCBsaSBhJyk7XHJcblxyXG4gICAgbW9iaWxlQnV0dG9uLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgbW9iaWxlTWVudS50b2dnbGVDbGFzcygnb3Blbl9tb2JpbGUnKTtcclxuXHJcbiAgICAgICAgalF1ZXJ5KGRvY3VtZW50KS5tb3VzZXVwKGZ1bmN0aW9uKGUpe1xyXG5cclxuICAgICAgICAgICAgaWYgKCFtb2JpbGVBLmlzKGUudGFyZ2V0KSAmJiAhbW9iaWxlTWVudS5pcyhlLnRhcmdldCkgJiYgIW1vYmlsZU1lbnVTcGFuLmlzKGUudGFyZ2V0KSAmJiAhbW9iaWxlTWVudWxpLmlzKGUudGFyZ2V0KSAmJiAhKG1vYmlsZUJ1dHRvbi5pcyhlLnRhcmdldCkgJiYgbW9iaWxlTWVudS5oYXMoZS50YXJnZXQpLmxlbmd0aCA9PSAwKSl7XHJcbiAgICAgICAgICAgICAgICBtb2JpbGVNZW51LnJlbW92ZUNsYXNzKCdvcGVuX21vYmlsZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBqUXVlcnkobW9iaWxlTWVudVNwYW4pLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYgKG1vYmlsZU1lbnVTcGFuLmhhcygnLnN1Yi1tZW51JykpIHtcclxuICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLm5leHQoKS5zbGlkZVRvZ2dsZSgxNTApO1xyXG4gICAgICAgICAgICBqUXVlcnkodGhpcykucGFyZW50KCkudG9nZ2xlQ2xhc3MoJ2JhY2tncm91bmRfcGFpbnQnKTtcclxuICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLnRvZ2dsZUNsYXNzKCdvcGVuX3NwYW4nKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBzbGlkZXJcclxuXHJcbiAgICB2YXIgbGVmdCA9IGpRdWVyeSgnLmFycm93LWxlZnQnKTtcclxuICAgIHZhciByaWdodCA9IGpRdWVyeSgnLmFycm93LXJpZ2h0Jyk7XHJcbiAgICB2YXIgc2xpZGVBcnJheSA9IGpRdWVyeSgnLnNsaWRlX2l0ZW0nKTtcclxuICAgIHZhciBzbGlkZUxlbmd0aCA9IHNsaWRlQXJyYXkubGVuZ3RoO1xyXG4gICAgdmFyIGkgPSAwO1xyXG5cclxuICAgIGpRdWVyeShzbGlkZUFycmF5W2ldKS5mYWRlSW4oKTtcclxuXHJcbiAgICByaWdodC5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIGkrKztcclxuXHJcbiAgICAgICAgaWYgKGkgPT0gc2xpZGVMZW5ndGgpIHtcclxuICAgICAgICAgICAgaSA9IDA7XHJcbiAgICAgICAgICAgIGpRdWVyeShzbGlkZUFycmF5KS5mYWRlT3V0KDQwMCk7XHJcbiAgICAgICAgICAgIGpRdWVyeShzbGlkZUFycmF5W2ldKS5mYWRlSW4oNDAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGpRdWVyeShzbGlkZUFycmF5KS5mYWRlT3V0KDQwMCk7XHJcbiAgICAgICAgICAgIGpRdWVyeShzbGlkZUFycmF5W2ldKS5mYWRlSW4oNDAwKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBsZWZ0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaS0tO1xyXG5cclxuICAgICAgICBpZiAoaSA8IDApIHtcclxuICAgICAgICAgICAgaSA9IHNsaWRlTGVuZ3RoLTE7XHJcbiAgICAgICAgICAgIGpRdWVyeShzbGlkZUFycmF5KS5mYWRlT3V0KDQwMCk7XHJcbiAgICAgICAgICAgIGpRdWVyeShzbGlkZUFycmF5W2ldKS5mYWRlSW4oNDAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGpRdWVyeShzbGlkZUFycmF5KS5mYWRlT3V0KDQwMCk7XHJcbiAgICAgICAgICAgIGpRdWVyeShzbGlkZUFycmF5W2ldKS5mYWRlSW4oNDAwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gbW9iaWxlX2ZpbHRlclxyXG5cclxuICAgIHZhciBjbG9zZUJ1dHRvbiA9IGpRdWVyeSgnLmJvb3RzX2hlbHBlcl9sZWZ0IGFzaWRlIC5jbG9zZScpO1xyXG4gICAgdmFyIG1vYmlsZUZpbHRlciA9IGpRdWVyeSgnLmJvb3RzX2hlbHBlcl9sZWZ0IGFzaWRlJyk7XHJcbiAgICB2YXIgbW9iaWxlRmlsdGVyVG9nZ2xlID0galF1ZXJ5KCcubW9iaWxlX29wZW5fYnV0dG9uJyk7XHJcblxyXG4gICAgbW9iaWxlRmlsdGVyVG9nZ2xlLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgbW9iaWxlRmlsdGVyLmZhZGVUb2dnbGUoMTAwKTtcclxuICAgICAgICAvLyBtb2JpbGVGaWx0ZXJUb2dnbGUudG9nZ2xlQ2xhc3MoJ3JldmVyc2VfYXJyb3cnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNsb3NlQnV0dG9uLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgbW9iaWxlRmlsdGVyLmZhZGVPdXQoMTAwKTtcclxuICAgICAgICAvLyBtb2JpbGVGaWx0ZXJUb2dnbGUucmVtb3ZlQ2xhc3MoJ3JldmVyc2VfYXJyb3cnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGhvdmVyIHNlcnZpY2VcclxuXHJcbiAgICBmdW5jdGlvbiBob3ZlcigpIHtcclxuICAgICAgICBpZiAoalF1ZXJ5KHdpbmRvdykud2lkdGgoKSA+PSA5OTApIHtcclxuXHJcbiAgICAgICAgICAgIGpRdWVyeSgnLmludGVyYWN0aW9uIC5pY29uX2NvbnRhaW5lcicpLmhvdmVyKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLm5leHQoKS5uZXh0KCkuZmFkZUluKDE1MCk7XHJcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkodGhpcykubmV4dCgpLm5leHQoKS5mYWRlT3V0KDE1MCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBob3ZlcigpO1xyXG5cclxuICAgIGpRdWVyeSh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpe1xyXG4gICAgICAgIGhvdmVyKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBhZGFwdGl2ZSBvbmUgcGFnZSBzbGlkZVxyXG5cclxuICAgIGpRdWVyeSh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICBpZiAoalF1ZXJ5KHdpbmRvdykud2lkdGgoKTw3NjgpIHtcclxuICAgICAgICAgICAgalF1ZXJ5KCcucG9ydGZvbGlvX3Bob3RvIC5jb2wtbWQtNCBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBqUXVlcnkoJy5wb3J0Zm9saW9fcGhvdG8gLmNvbC1tZC00IGEnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChqUXVlcnkod2luZG93KS53aWR0aCgpPDc2OCkge1xyXG4gICAgICAgIGpRdWVyeSgnLnBvcnRmb2xpb19waG90byAuY29sLW1kLTQgYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGpRdWVyeSgnLnBvcnRmb2xpb19waG90byAuY29sLW1kLTQgYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGFkYXB0aXZlIGhlaWdodFxyXG5cclxuICAgICAgICAvLyB2YXJpYWJsZXNcclxuXHJcbiAgICB2YXIgYWRhcHRpdmVUYXJnZXQgPSBqUXVlcnkoJy5pbWdfd3JhcHBlcicpO1xyXG4gICAgdmFyIGJsb2NrID0galF1ZXJ5KCcuZGFya19ibG9jayAnKTtcclxuICAgIHZhciBicmVhZGNydW1icyA9IGpRdWVyeSgnLmJyZWFkY3J1bWJzICcpO1xyXG5cclxuICAgICAgICAvLyB2YXJpYWJsZXNfaGVpZ2h0XHJcblxyXG4gICAgdmFyIHdpbmRvd1dpZHRoID0galF1ZXJ5KHdpbmRvdykud2lkdGgoKTtcclxuICAgIHZhciBibG9ja0hlaWdodDtcclxuICAgIHZhciBoMkhlaWdodDtcclxuICAgIHZhciBibG9ja0xlZnRIZWlnaHQ7XHJcbiAgICB2YXIgYnJlYWRjcnVtYnNIZWlnaHQ7XHJcblxyXG4gICAgICAgIC8vIHZhcmlhYmxlc19tYXRoXHJcblxyXG4gICAgdmFyIGFzaWRlTWF0aDtcclxuICAgIHZhciBtYXRoSGVpZ2h0O1xyXG5cclxuICAgIGZ1bmN0aW9uIGFkYXB0aXZlSGVpZ2h0Qm9yZGVyKCkge1xyXG5cclxuICAgICAgICB3aW5kb3dXaWR0aCA9IGpRdWVyeSh3aW5kb3cpLndpZHRoKCk7XHJcbiAgICAgICAgYmxvY2tIZWlnaHQgPSBibG9jay5oZWlnaHQoKTtcclxuICAgICAgICBibG9ja0xlZnRIZWlnaHQgPSBibG9ja0xlZnQuaGVpZ2h0KCk7XHJcbiAgICAgICAgYnJlYWRjcnVtYnNIZWlnaHQgPSBicmVhZGNydW1icy5oZWlnaHQoKTtcclxuXHJcbiAgICAgICAgaWYgKGpRdWVyeSgnZGl2JykuaXMoJy5ib290c19oZWxwZXJfcmlnaHQnKSAmJiB3aW5kb3dXaWR0aCA+IDc2OCkge1xyXG4gICAgICAgICAgICBoMkhlaWdodCA9IGpRdWVyeSgnLmJvb3RzX2hlbHBlcl9yaWdodCBoMicpLm91dGVySGVpZ2h0KCk7XHJcbiAgICAgICAgICAgIG1hdGhIZWlnaHQgPSBibG9ja0hlaWdodCAtIChoMkhlaWdodCk7XHJcbiAgICAgICAgICAgIGFzaWRlTWF0aCA9IGJsb2NrSGVpZ2h0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZWxzZSBpZiAod2luZG93V2lkdGggPD0gNzY4ICYmIGpRdWVyeSgnZGl2JykuaXMoJy5ib290c19oZWxwZXJfcmlnaHQnKSkge1xyXG4gICAgICAgICAgICBoMkhlaWdodCA9IGpRdWVyeSgnLmJvb3RzX2hlbHBlcl9yaWdodCBoMicpLm91dGVySGVpZ2h0KCk7XHJcbiAgICAgICAgICAgIG1hdGhIZWlnaHQgPSBibG9ja0hlaWdodCAtIChoMkhlaWdodCArIGJyZWFkY3J1bWJzSGVpZ2h0KTtcclxuICAgICAgICAgICAgYXNpZGVNYXRoID0gNjA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlbHNlIGlmIChqUXVlcnkoJ2RpdicpLmlzKCcuYm9vdHNfaGVscGVyX3JpZ2h0JykpIHtcclxuICAgICAgICAgICAgaDJIZWlnaHQgPSAwO1xyXG4gICAgICAgICAgICBtYXRoSGVpZ2h0ID0gYmxvY2tIZWlnaHQgLSAoaDJIZWlnaHQgKyBicmVhZGNydW1ic0hlaWdodCk7XHJcbiAgICAgICAgICAgIGFzaWRlTWF0aCA9IGJsb2NrSGVpZ2h0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZWxzZSBpZiAoIWpRdWVyeSgnZGl2JykuaXMoJy5ib290c19oZWxwZXJfcmlnaHQnKSkge1xyXG4gICAgICAgICAgICBtYXRoSGVpZ2h0ID0gYmxvY2tIZWlnaHQgLSBicmVhZGNydW1ic0hlaWdodDtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAvLyBwYXN0ZSBzdHlsZVxyXG5cclxuICAgICAgICBhZGFwdGl2ZVRhcmdldC5jc3MoJ2hlaWdodCcgLCBtYXRoSGVpZ2h0KydweCcpO1xyXG4gICAgICAgIGJsb2NrTGVmdC5jc3MoJ2hlaWdodCcgLCBhc2lkZU1hdGgrJ3B4Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRhcHRpdmVIZWlnaHRCb3JkZXIoKTtcclxuXHJcbiAgICBqUXVlcnkod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIGFkYXB0aXZlSGVpZ2h0Qm9yZGVyKCk7XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gaW5pdCB0aW1lclxyXG5cclxuICAgIHZhciBydW4gPSBzZXRJbnRlcnZhbCgncm90YXRlKCknLCAxMDAwMCk7XHJcblxyXG4gICAgalF1ZXJ5KCcuY2Fyb3VzZWwnKS5ob3ZlcihcclxuXHJcbiAgICAgICAgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwocnVuKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBydW4gPSBzZXRJbnRlcnZhbCgncm90YXRlKCknLCAxMDAwMCk7XHJcblxyXG4gICAgICAgIH1cclxuICAgICk7XHJcblxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIHJvdGF0ZSgpIHtcclxuICAgIGpRdWVyeSgnLmFycm93LXJpZ2h0JykuY2xpY2soKTtcclxufSJdLCJmaWxlIjoic2NyaXB0LmpzIn0=
