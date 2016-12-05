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
        scrollImgWrapper.mCustomScrollbar();
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsialF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG5cclxuICAgIC8vIGxhbmd1YWdlc1xyXG5cclxuICAgIGpRdWVyeSgnLmxhbmd1YWdlcyBsaTpmaXJzdC1jaGlsZCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICBqUXVlcnkoJy5sYW5ndWFnZXMgbGk6bGFzdC1jaGlsZCcpLmZhZGVUb2dnbGUoMCk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gem9vbVxyXG5cclxuICAgIGxpZ2h0Ym94Lm9wdGlvbih7XHJcbiAgICAgICAgJ3Jlc2l6ZUR1cmF0aW9uJzogMjAwLFxyXG4gICAgICAgICd3cmFwQXJvdW5kJzogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy9jYXRhbG9nX3RhYlxyXG4gICAgXHJcbiAgICBqUXVlcnkoJ2FzaWRlIHVsIGxpJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkoJ2FzaWRlIHVsIGxpJykucmVtb3ZlQ2xhc3MoJ2N1cnJlbnQtdGFiJyk7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLmFkZENsYXNzKCdjdXJyZW50LXRhYicpO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIC8vIGN1c3RvbVNjcm9sbFxyXG5cclxuICAgIHZhciB0ZXh0U2Nyb2xsID0galF1ZXJ5KCcubWFpbj4uY29udGFpbmVyICcpO1xyXG4gICAgdmFyIHNjcm9sbEltZ1dyYXBwZXIgPSBqUXVlcnkoJy5pbWdfd3JhcHBlcicpO1xyXG4gICAgdmFyIGRhcmtCbG9jayA9IGpRdWVyeSgnLmRhcmtfYmxvY2snKTtcclxuICAgIHZhciBibG9ja0xlZnQgPSBqUXVlcnkoJy5ib290c19oZWxwZXJfbGVmdCcpO1xyXG4gICAgLy8gdmFyIG1vYk1lbnUgPSBqUXVlcnkoJy5tb2JpbGVfbWVudScpO1xyXG5cclxuICAgIC8vIG1vYk1lbnUubUN1c3RvbVNjcm9sbGJhcigpO1xyXG5cclxuICAgIGRhcmtCbG9jay5pbWFnZXNMb2FkZWQoZnVuY3Rpb24oKXtcclxuICAgICAgICAvLyBzY3JvbGxJbWdXcmFwcGVyLmFkZENsYXNzKCdsb2FkZWQnKTtcclxuICAgICAgICBqUXVlcnkoJy5jYXJvdXNlbCcpLmFkZENsYXNzKCdsb2FkZWQnKTtcclxuICAgICAgICBkYXJrQmxvY2suYWRkQ2xhc3MoJ2xvYWRlZCcpO1xyXG4gICAgICAgIHNjcm9sbEltZ1dyYXBwZXIubUN1c3RvbVNjcm9sbGJhcigpO1xyXG4gICAgICAgIGJsb2NrTGVmdC5tQ3VzdG9tU2Nyb2xsYmFyKCk7XHJcbiAgICAgICAgdGV4dFNjcm9sbC5tQ3VzdG9tU2Nyb2xsYmFyKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyByZWFkX21vcmVcclxuICAgIFxyXG4gICAgXHJcblxyXG4gICAgdmFyIGNoZWtlclRleHQgPSBqUXVlcnkoJ2RpdicpLmlzKCcuc2VvJyk7XHJcbiAgICB2YXIgdGV4dCA9IGpRdWVyeSgnLnNlbyAudGV4dCcpO1xyXG4gICAgY29uc29sZS5sb2codGV4dCk7XHJcbiAgICB2YXIgbW9yZSA9IGpRdWVyeShcIi5tb3JlXCIpO1xyXG4gICAgdmFyIGxlc3MgPSBqUXVlcnkoXCIubGVzc1wiKTtcclxuXHJcbiAgICAvLyBtb3JlLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAvLyAgICAgdGV4dC5zbGlkZURvd24oMTUwKTtcclxuICAgIC8vICAgICBsZXNzLmZhZGVJbigxNTApO1xyXG4gICAgLy8gICAgIG1vcmUuZmFkZU91dCg1MCk7XHJcbiAgICAvLyB9KTtcclxuICAgIC8vXHJcbiAgICAvLyBsZXNzLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAvLyAgICAgdGV4dC5zbGlkZVVwKDE1MCk7XHJcbiAgICAvLyAgICAgbGVzcy5mYWRlT3V0KDUwKTtcclxuICAgIC8vICAgICBtb3JlLmZhZGVJbigxNTApO1xyXG4gICAgLy8gfSk7XHJcblxyXG5cclxuXHJcbiAgICBpZiAoY2hla2VyVGV4dCA9PSB0cnVlKSB7XHJcblxyXG4gICAgICAgIHZhciBoZWlnaHRfYXV0byA9IFtdO1xyXG4gICAgICAgIHZhciBjb3VudCA9IDA7XHJcblxyXG4gICAgICAgIHRleHQuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBoZWlnaHRfYXV0b1tjb3VudF0gPSBqUXVlcnkodGhpcykub3V0ZXJIZWlnaHQoKTtcclxuICAgICAgICAgICAgY291bnQrKztcclxuICAgICAgICB9KTtcclxuICAgICAgICB2YXIgbGluZWhlaWdodCA9IHRleHQuY3NzKCdsaW5lLWhlaWdodCcpLnJlcGxhY2UoXCJweFwiLCBcIlwiKTtcclxuXHJcbiAgICAgICAgLy8gaWYgKGpRdWVyeSh3aW5kb3cpLndpZHRoKCk8NzY4KSB7XHJcbiAgICAgICAgLy8gICAgIHZhciBmaXZlX2xpbmVzID0gbGluZWhlaWdodCoxMTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgIHZhciBmaXZlX2xpbmVzID0gbGluZWhlaWdodCo4O1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgdmFyIGZpdmVfbGluZXMgPSBsaW5laGVpZ2h0KjIrMTI7XHJcblxyXG4gICAgICAgIHRleHQuY3NzKCdoZWlnaHQnLCBmaXZlX2xpbmVzKTtcclxuXHJcbiAgICAgICAgbW9yZS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciB0ID0galF1ZXJ5KHRoaXMpLnByZXYoKS5pbmRleCgnLnNlbyAudGV4dCcpO1xyXG4gICAgICAgICAgICBqUXVlcnkodGhpcykucHJldih0ZXh0KS5hbmltYXRlKHtoZWlnaHQ6IGhlaWdodF9hdXRvW3RdKzI0fSwgNDAwKTtcclxuICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbiAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5uZXh0KGxlc3MpLmNzcygnZGlzcGxheScsICdpbmxpbmUtYmxvY2snKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGVzcy5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5wcmV2KG1vcmUpLnByZXYodGV4dCkuYW5pbWF0ZSh7aGVpZ2h0OiBmaXZlX2xpbmVzfSwgMzAwKTtcclxuICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLnByZXYobW9yZSkuY3NzKCdkaXNwbGF5JywgJ2lubGluZS1ibG9jaycpO1xyXG4gICAgICAgICAgICBqUXVlcnkodGhpcykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9tb2JpbGVfbWVudVxyXG5cclxuICAgIHZhciBtb2JpbGVNZW51ID0galF1ZXJ5KCcubW9iaWxlX21lbnUnKTtcclxuICAgIHZhciBtb2JpbGVNZW51U3BhbiA9IGpRdWVyeSgnLm1vYmlsZV9tZW51IG1lbnUgdWwgbGkgc3BhbicpO1xyXG4gICAgdmFyIG1vYmlsZU1lbnVsaSA9IGpRdWVyeSgnLm1vYmlsZV9tZW51IG1lbnUgdWwgbGknKTtcclxuICAgIHZhciBtb2JpbGVCdXR0b24gPSBqUXVlcnkoJy5idXJnZXIgaScpO1xyXG4gICAgdmFyIG1vYmlsZUEgPSBqUXVlcnkoJy5tb2JpbGVfbWVudSBtZW51IHVsIGxpIGEnKTtcclxuXHJcbiAgICBtb2JpbGVCdXR0b24ub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBtb2JpbGVNZW51LnRvZ2dsZUNsYXNzKCdvcGVuX21vYmlsZScpO1xyXG5cclxuICAgICAgICBqUXVlcnkoZG9jdW1lbnQpLm1vdXNldXAoZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgICAgICAgICBpZiAoIW1vYmlsZUEuaXMoZS50YXJnZXQpICYmICFtb2JpbGVNZW51LmlzKGUudGFyZ2V0KSAmJiAhbW9iaWxlTWVudVNwYW4uaXMoZS50YXJnZXQpICYmICFtb2JpbGVNZW51bGkuaXMoZS50YXJnZXQpICYmICEobW9iaWxlQnV0dG9uLmlzKGUudGFyZ2V0KSAmJiBtb2JpbGVNZW51LmhhcyhlLnRhcmdldCkubGVuZ3RoID09IDApKXtcclxuICAgICAgICAgICAgICAgIG1vYmlsZU1lbnUucmVtb3ZlQ2xhc3MoJ29wZW5fbW9iaWxlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGpRdWVyeShtb2JpbGVNZW51U3Bhbikub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBpZiAobW9iaWxlTWVudVNwYW4uaGFzKCcuc3ViLW1lbnUnKSkge1xyXG4gICAgICAgICAgICBqUXVlcnkodGhpcykubmV4dCgpLnNsaWRlVG9nZ2xlKDE1MCk7XHJcbiAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5wYXJlbnQoKS50b2dnbGVDbGFzcygnYmFja2dyb3VuZF9wYWludCcpO1xyXG4gICAgICAgICAgICBqUXVlcnkodGhpcykudG9nZ2xlQ2xhc3MoJ29wZW5fc3BhbicpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHNsaWRlclxyXG5cclxuICAgIHZhciBsZWZ0ID0galF1ZXJ5KCcuYXJyb3ctbGVmdCcpO1xyXG4gICAgdmFyIHJpZ2h0ID0galF1ZXJ5KCcuYXJyb3ctcmlnaHQnKTtcclxuICAgIHZhciBzbGlkZUFycmF5ID0galF1ZXJ5KCcuc2xpZGVfaXRlbScpO1xyXG4gICAgdmFyIHNsaWRlTGVuZ3RoID0gc2xpZGVBcnJheS5sZW5ndGg7XHJcbiAgICB2YXIgaSA9IDA7XHJcblxyXG4gICAgalF1ZXJ5KHNsaWRlQXJyYXlbaV0pLmZhZGVJbigpO1xyXG5cclxuICAgIHJpZ2h0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaSsrO1xyXG5cclxuICAgICAgICBpZiAoaSA9PSBzbGlkZUxlbmd0aCkge1xyXG4gICAgICAgICAgICBpID0gMDtcclxuICAgICAgICAgICAgalF1ZXJ5KHNsaWRlQXJyYXkpLmZhZGVPdXQoNDAwKTtcclxuICAgICAgICAgICAgalF1ZXJ5KHNsaWRlQXJyYXlbaV0pLmZhZGVJbig0MDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgalF1ZXJ5KHNsaWRlQXJyYXkpLmZhZGVPdXQoNDAwKTtcclxuICAgICAgICAgICAgalF1ZXJ5KHNsaWRlQXJyYXlbaV0pLmZhZGVJbig0MDApO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGxlZnQub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBpLS07XHJcblxyXG4gICAgICAgIGlmIChpIDwgMCkge1xyXG4gICAgICAgICAgICBpID0gc2xpZGVMZW5ndGgtMTtcclxuICAgICAgICAgICAgalF1ZXJ5KHNsaWRlQXJyYXkpLmZhZGVPdXQoNDAwKTtcclxuICAgICAgICAgICAgalF1ZXJ5KHNsaWRlQXJyYXlbaV0pLmZhZGVJbig0MDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgalF1ZXJ5KHNsaWRlQXJyYXkpLmZhZGVPdXQoNDAwKTtcclxuICAgICAgICAgICAgalF1ZXJ5KHNsaWRlQXJyYXlbaV0pLmZhZGVJbig0MDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBtb2JpbGVfZmlsdGVyXHJcblxyXG4gICAgdmFyIGNsb3NlQnV0dG9uID0galF1ZXJ5KCcuYm9vdHNfaGVscGVyX2xlZnQgYXNpZGUgLmNsb3NlJyk7XHJcbiAgICB2YXIgbW9iaWxlRmlsdGVyID0galF1ZXJ5KCcuYm9vdHNfaGVscGVyX2xlZnQgYXNpZGUnKTtcclxuICAgIHZhciBtb2JpbGVGaWx0ZXJUb2dnbGUgPSBqUXVlcnkoJy5tb2JpbGVfb3Blbl9idXR0b24nKTtcclxuXHJcbiAgICBtb2JpbGVGaWx0ZXJUb2dnbGUub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBtb2JpbGVGaWx0ZXIuZmFkZVRvZ2dsZSgxMDApO1xyXG4gICAgICAgIC8vIG1vYmlsZUZpbHRlclRvZ2dsZS50b2dnbGVDbGFzcygncmV2ZXJzZV9hcnJvdycpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY2xvc2VCdXR0b24ub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBtb2JpbGVGaWx0ZXIuZmFkZU91dCgxMDApO1xyXG4gICAgICAgIC8vIG1vYmlsZUZpbHRlclRvZ2dsZS5yZW1vdmVDbGFzcygncmV2ZXJzZV9hcnJvdycpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gaG92ZXIgc2VydmljZVxyXG5cclxuICAgIGZ1bmN0aW9uIGhvdmVyKCkge1xyXG4gICAgICAgIGlmIChqUXVlcnkod2luZG93KS53aWR0aCgpID49IDk5MCkge1xyXG5cclxuICAgICAgICAgICAgalF1ZXJ5KCcuaW50ZXJhY3Rpb24gLmljb25fY29udGFpbmVyJykuaG92ZXIoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkodGhpcykubmV4dCgpLm5leHQoKS5mYWRlSW4oMTUwKTtcclxuICAgICAgICAgICAgfSwgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5uZXh0KCkubmV4dCgpLmZhZGVPdXQoMTUwKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhvdmVyKCk7XHJcblxyXG4gICAgalF1ZXJ5KHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaG92ZXIoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGFkYXB0aXZlIG9uZSBwYWdlIHNsaWRlXHJcblxyXG4gICAgalF1ZXJ5KHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIGlmIChqUXVlcnkod2luZG93KS53aWR0aCgpPDc2OCkge1xyXG4gICAgICAgICAgICBqUXVlcnkoJy5wb3J0Zm9saW9fcGhvdG8gLmNvbC1tZC00IGEnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGpRdWVyeSgnLnBvcnRmb2xpb19waG90byAuY29sLW1kLTQgYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKGpRdWVyeSh3aW5kb3cpLndpZHRoKCk8NzY4KSB7XHJcbiAgICAgICAgalF1ZXJ5KCcucG9ydGZvbGlvX3Bob3RvIC5jb2wtbWQtNCBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgalF1ZXJ5KCcucG9ydGZvbGlvX3Bob3RvIC5jb2wtbWQtNCBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gYWRhcHRpdmUgaGVpZ2h0XHJcblxyXG4gICAgICAgIC8vIHZhcmlhYmxlc1xyXG5cclxuICAgIHZhciBhZGFwdGl2ZVRhcmdldCA9IGpRdWVyeSgnLmltZ193cmFwcGVyJyk7XHJcbiAgICB2YXIgYmxvY2sgPSBqUXVlcnkoJy5kYXJrX2Jsb2NrICcpO1xyXG4gICAgdmFyIGJyZWFkY3J1bWJzID0galF1ZXJ5KCcuYnJlYWRjcnVtYnMgJyk7XHJcblxyXG4gICAgICAgIC8vIHZhcmlhYmxlc19oZWlnaHRcclxuXHJcbiAgICB2YXIgd2luZG93V2lkdGggPSBqUXVlcnkod2luZG93KS53aWR0aCgpO1xyXG4gICAgdmFyIGJsb2NrSGVpZ2h0O1xyXG4gICAgdmFyIGgySGVpZ2h0O1xyXG4gICAgdmFyIGJsb2NrTGVmdEhlaWdodDtcclxuICAgIHZhciBicmVhZGNydW1ic0hlaWdodDtcclxuXHJcbiAgICAgICAgLy8gdmFyaWFibGVzX21hdGhcclxuXHJcbiAgICB2YXIgYXNpZGVNYXRoO1xyXG4gICAgdmFyIG1hdGhIZWlnaHQ7XHJcblxyXG4gICAgZnVuY3Rpb24gYWRhcHRpdmVIZWlnaHRCb3JkZXIoKSB7XHJcblxyXG4gICAgICAgIHdpbmRvd1dpZHRoID0galF1ZXJ5KHdpbmRvdykud2lkdGgoKTtcclxuICAgICAgICBibG9ja0hlaWdodCA9IGJsb2NrLmhlaWdodCgpO1xyXG4gICAgICAgIGJsb2NrTGVmdEhlaWdodCA9IGJsb2NrTGVmdC5oZWlnaHQoKTtcclxuICAgICAgICBicmVhZGNydW1ic0hlaWdodCA9IGJyZWFkY3J1bWJzLmhlaWdodCgpO1xyXG5cclxuICAgICAgICBpZiAoalF1ZXJ5KCdkaXYnKS5pcygnLmJvb3RzX2hlbHBlcl9yaWdodCcpICYmIHdpbmRvd1dpZHRoID4gNzY4KSB7XHJcbiAgICAgICAgICAgIGgySGVpZ2h0ID0galF1ZXJ5KCcuYm9vdHNfaGVscGVyX3JpZ2h0IGgyJykub3V0ZXJIZWlnaHQoKTtcclxuICAgICAgICAgICAgbWF0aEhlaWdodCA9IGJsb2NrSGVpZ2h0IC0gKGgySGVpZ2h0KTtcclxuICAgICAgICAgICAgYXNpZGVNYXRoID0gYmxvY2tIZWlnaHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlbHNlIGlmICh3aW5kb3dXaWR0aCA8PSA3NjggJiYgalF1ZXJ5KCdkaXYnKS5pcygnLmJvb3RzX2hlbHBlcl9yaWdodCcpKSB7XHJcbiAgICAgICAgICAgIGgySGVpZ2h0ID0galF1ZXJ5KCcuYm9vdHNfaGVscGVyX3JpZ2h0IGgyJykub3V0ZXJIZWlnaHQoKTtcclxuICAgICAgICAgICAgbWF0aEhlaWdodCA9IGJsb2NrSGVpZ2h0IC0gKGgySGVpZ2h0ICsgYnJlYWRjcnVtYnNIZWlnaHQpO1xyXG4gICAgICAgICAgICBhc2lkZU1hdGggPSA2MDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVsc2UgaWYgKGpRdWVyeSgnZGl2JykuaXMoJy5ib290c19oZWxwZXJfcmlnaHQnKSkge1xyXG4gICAgICAgICAgICBoMkhlaWdodCA9IDA7XHJcbiAgICAgICAgICAgIG1hdGhIZWlnaHQgPSBibG9ja0hlaWdodCAtIChoMkhlaWdodCArIGJyZWFkY3J1bWJzSGVpZ2h0KTtcclxuICAgICAgICAgICAgYXNpZGVNYXRoID0gYmxvY2tIZWlnaHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlbHNlIGlmICghalF1ZXJ5KCdkaXYnKS5pcygnLmJvb3RzX2hlbHBlcl9yaWdodCcpKSB7XHJcbiAgICAgICAgICAgIG1hdGhIZWlnaHQgPSBibG9ja0hlaWdodCAtIGJyZWFkY3J1bWJzSGVpZ2h0O1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC8vIHBhc3RlIHN0eWxlXHJcblxyXG4gICAgICAgIGFkYXB0aXZlVGFyZ2V0LmNzcygnaGVpZ2h0JyAsIG1hdGhIZWlnaHQrJ3B4Jyk7XHJcbiAgICAgICAgYmxvY2tMZWZ0LmNzcygnaGVpZ2h0JyAsIGFzaWRlTWF0aCsncHgnKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGFwdGl2ZUhlaWdodEJvcmRlcigpO1xyXG5cclxuICAgIGpRdWVyeSh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgYWRhcHRpdmVIZWlnaHRCb3JkZXIoKTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBpbml0IHRpbWVyXHJcblxyXG4gICAgdmFyIHJ1biA9IHNldEludGVydmFsKCdyb3RhdGUoKScsIDEwMDAwKTtcclxuXHJcbiAgICBqUXVlcnkoJy5jYXJvdXNlbCcpLmhvdmVyKFxyXG5cclxuICAgICAgICBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChydW4pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHJ1biA9IHNldEludGVydmFsKCdyb3RhdGUoKScsIDEwMDAwKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgKTtcclxuXHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gcm90YXRlKCkge1xyXG4gICAgalF1ZXJ5KCcuYXJyb3ctcmlnaHQnKS5jbGljaygpO1xyXG59Il0sImZpbGUiOiJzY3JpcHQuanMifQ==
