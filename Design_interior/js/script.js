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

    var textScroll = jQuery('.package_container .text');
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
            jQuery(slideArray).fadeOut(50);
            jQuery(slideArray[i]).fadeIn(100);
        }
        else {
            jQuery(slideArray).fadeOut(50);
            jQuery(slideArray[i]).fadeIn(100);
        }
    });

    left.on('click', function(){
        i--;

        if (i < 0) {
            i = slideLength-1;
            jQuery(slideArray).fadeOut(50);
            jQuery(slideArray[i]).fadeIn(100);
        }
        else {
            jQuery(slideArray).fadeOut(50);
            jQuery(slideArray[i]).fadeIn(100);
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsialF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG5cclxuICAgIC8vIGxhbmd1YWdlc1xyXG5cclxuICAgIGpRdWVyeSgnLmxhbmd1YWdlcyBsaTpmaXJzdC1jaGlsZCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICBqUXVlcnkoJy5sYW5ndWFnZXMgbGk6bGFzdC1jaGlsZCcpLmZhZGVUb2dnbGUoMCk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gem9vbVxyXG5cclxuICAgIGxpZ2h0Ym94Lm9wdGlvbih7XHJcbiAgICAgICAgJ3Jlc2l6ZUR1cmF0aW9uJzogMjAwLFxyXG4gICAgICAgICd3cmFwQXJvdW5kJzogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy9jYXRhbG9nX3RhYlxyXG4gICAgXHJcbiAgICBqUXVlcnkoJ2FzaWRlIHVsIGxpJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkoJ2FzaWRlIHVsIGxpJykucmVtb3ZlQ2xhc3MoJ2N1cnJlbnQtdGFiJyk7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLmFkZENsYXNzKCdjdXJyZW50LXRhYicpO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIC8vIGN1c3RvbVNjcm9sbFxyXG5cclxuICAgIHZhciB0ZXh0U2Nyb2xsID0galF1ZXJ5KCcucGFja2FnZV9jb250YWluZXIgLnRleHQnKTtcclxuICAgIHZhciBzY3JvbGxJbWdXcmFwcGVyID0galF1ZXJ5KCcuaW1nX3dyYXBwZXInKTtcclxuICAgIHZhciBkYXJrQmxvY2sgPSBqUXVlcnkoJy5kYXJrX2Jsb2NrJyk7XHJcbiAgICB2YXIgYmxvY2tMZWZ0ID0galF1ZXJ5KCcuYm9vdHNfaGVscGVyX2xlZnQnKTtcclxuICAgIC8vIHZhciBtb2JNZW51ID0galF1ZXJ5KCcubW9iaWxlX21lbnUnKTtcclxuXHJcbiAgICAvLyBtb2JNZW51Lm1DdXN0b21TY3JvbGxiYXIoKTtcclxuXHJcbiAgICBkYXJrQmxvY2suaW1hZ2VzTG9hZGVkKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgLy8gc2Nyb2xsSW1nV3JhcHBlci5hZGRDbGFzcygnbG9hZGVkJyk7XHJcbiAgICAgICAgalF1ZXJ5KCcuY2Fyb3VzZWwnKS5hZGRDbGFzcygnbG9hZGVkJyk7XHJcbiAgICAgICAgZGFya0Jsb2NrLmFkZENsYXNzKCdsb2FkZWQnKTtcclxuICAgICAgICBzY3JvbGxJbWdXcmFwcGVyLm1DdXN0b21TY3JvbGxiYXIoKTtcclxuICAgICAgICBibG9ja0xlZnQubUN1c3RvbVNjcm9sbGJhcigpO1xyXG4gICAgICAgIHRleHRTY3JvbGwubUN1c3RvbVNjcm9sbGJhcigpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9tb2JpbGVfbWVudVxyXG5cclxuICAgIHZhciBtb2JpbGVNZW51ID0galF1ZXJ5KCcubW9iaWxlX21lbnUnKTtcclxuICAgIHZhciBtb2JpbGVNZW51U3BhbiA9IGpRdWVyeSgnLm1vYmlsZV9tZW51IG1lbnUgdWwgbGkgc3BhbicpO1xyXG4gICAgdmFyIG1vYmlsZU1lbnVsaSA9IGpRdWVyeSgnLm1vYmlsZV9tZW51IG1lbnUgdWwgbGknKTtcclxuICAgIHZhciBtb2JpbGVCdXR0b24gPSBqUXVlcnkoJy5idXJnZXIgaScpO1xyXG4gICAgdmFyIG1vYmlsZUEgPSBqUXVlcnkoJy5tb2JpbGVfbWVudSBtZW51IHVsIGxpIGEnKTtcclxuXHJcbiAgICBtb2JpbGVCdXR0b24ub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBtb2JpbGVNZW51LnRvZ2dsZUNsYXNzKCdvcGVuX21vYmlsZScpO1xyXG5cclxuICAgICAgICBqUXVlcnkoZG9jdW1lbnQpLm1vdXNldXAoZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgICAgICAgICBpZiAoIW1vYmlsZUEuaXMoZS50YXJnZXQpICYmICFtb2JpbGVNZW51LmlzKGUudGFyZ2V0KSAmJiAhbW9iaWxlTWVudVNwYW4uaXMoZS50YXJnZXQpICYmICFtb2JpbGVNZW51bGkuaXMoZS50YXJnZXQpICYmICEobW9iaWxlQnV0dG9uLmlzKGUudGFyZ2V0KSAmJiBtb2JpbGVNZW51LmhhcyhlLnRhcmdldCkubGVuZ3RoID09IDApKXtcclxuICAgICAgICAgICAgICAgIG1vYmlsZU1lbnUucmVtb3ZlQ2xhc3MoJ29wZW5fbW9iaWxlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGpRdWVyeShtb2JpbGVNZW51U3Bhbikub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBpZiAobW9iaWxlTWVudVNwYW4uaGFzKCcuc3ViLW1lbnUnKSkge1xyXG4gICAgICAgICAgICBqUXVlcnkodGhpcykubmV4dCgpLnNsaWRlVG9nZ2xlKDE1MCk7XHJcbiAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5wYXJlbnQoKS50b2dnbGVDbGFzcygnYmFja2dyb3VuZF9wYWludCcpO1xyXG4gICAgICAgICAgICBqUXVlcnkodGhpcykudG9nZ2xlQ2xhc3MoJ29wZW5fc3BhbicpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHNsaWRlclxyXG5cclxuICAgIHZhciBsZWZ0ID0galF1ZXJ5KCcuYXJyb3ctbGVmdCcpO1xyXG4gICAgdmFyIHJpZ2h0ID0galF1ZXJ5KCcuYXJyb3ctcmlnaHQnKTtcclxuICAgIHZhciBzbGlkZUFycmF5ID0galF1ZXJ5KCcuc2xpZGVfaXRlbScpO1xyXG4gICAgdmFyIHNsaWRlTGVuZ3RoID0gc2xpZGVBcnJheS5sZW5ndGg7XHJcbiAgICB2YXIgaSA9IDA7XHJcblxyXG4gICAgalF1ZXJ5KHNsaWRlQXJyYXlbaV0pLmZhZGVJbigpO1xyXG5cclxuICAgIHJpZ2h0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaSsrO1xyXG5cclxuICAgICAgICBpZiAoaSA9PSBzbGlkZUxlbmd0aCkge1xyXG4gICAgICAgICAgICBpID0gMDtcclxuICAgICAgICAgICAgalF1ZXJ5KHNsaWRlQXJyYXkpLmZhZGVPdXQoNTApO1xyXG4gICAgICAgICAgICBqUXVlcnkoc2xpZGVBcnJheVtpXSkuZmFkZUluKDEwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBqUXVlcnkoc2xpZGVBcnJheSkuZmFkZU91dCg1MCk7XHJcbiAgICAgICAgICAgIGpRdWVyeShzbGlkZUFycmF5W2ldKS5mYWRlSW4oMTAwKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBsZWZ0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaS0tO1xyXG5cclxuICAgICAgICBpZiAoaSA8IDApIHtcclxuICAgICAgICAgICAgaSA9IHNsaWRlTGVuZ3RoLTE7XHJcbiAgICAgICAgICAgIGpRdWVyeShzbGlkZUFycmF5KS5mYWRlT3V0KDUwKTtcclxuICAgICAgICAgICAgalF1ZXJ5KHNsaWRlQXJyYXlbaV0pLmZhZGVJbigxMDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgalF1ZXJ5KHNsaWRlQXJyYXkpLmZhZGVPdXQoNTApO1xyXG4gICAgICAgICAgICBqUXVlcnkoc2xpZGVBcnJheVtpXSkuZmFkZUluKDEwMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIG1vYmlsZV9maWx0ZXJcclxuXHJcbiAgICB2YXIgY2xvc2VCdXR0b24gPSBqUXVlcnkoJy5ib290c19oZWxwZXJfbGVmdCBhc2lkZSAuY2xvc2UnKTtcclxuICAgIHZhciBtb2JpbGVGaWx0ZXIgPSBqUXVlcnkoJy5ib290c19oZWxwZXJfbGVmdCBhc2lkZScpO1xyXG4gICAgdmFyIG1vYmlsZUZpbHRlclRvZ2dsZSA9IGpRdWVyeSgnLm1vYmlsZV9vcGVuX2J1dHRvbicpO1xyXG5cclxuICAgIG1vYmlsZUZpbHRlclRvZ2dsZS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIG1vYmlsZUZpbHRlci5mYWRlVG9nZ2xlKDEwMCk7XHJcbiAgICAgICAgLy8gbW9iaWxlRmlsdGVyVG9nZ2xlLnRvZ2dsZUNsYXNzKCdyZXZlcnNlX2Fycm93Jyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjbG9zZUJ1dHRvbi5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIG1vYmlsZUZpbHRlci5mYWRlT3V0KDEwMCk7XHJcbiAgICAgICAgLy8gbW9iaWxlRmlsdGVyVG9nZ2xlLnJlbW92ZUNsYXNzKCdyZXZlcnNlX2Fycm93Jyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBob3ZlciBzZXJ2aWNlXHJcblxyXG4gICAgZnVuY3Rpb24gaG92ZXIoKSB7XHJcbiAgICAgICAgaWYgKGpRdWVyeSh3aW5kb3cpLndpZHRoKCkgPj0gOTkwKSB7XHJcblxyXG4gICAgICAgICAgICBqUXVlcnkoJy5pbnRlcmFjdGlvbiAuaWNvbl9jb250YWluZXInKS5ob3ZlcihmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5uZXh0KCkubmV4dCgpLmZhZGVJbigxNTApO1xyXG4gICAgICAgICAgICB9LCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLm5leHQoKS5uZXh0KCkuZmFkZU91dCgxNTApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaG92ZXIoKTtcclxuXHJcbiAgICBqUXVlcnkod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKXtcclxuICAgICAgICBob3ZlcigpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gYWRhcHRpdmUgaGVpZ2h0XHJcblxyXG4gICAgICAgIC8vIHZhcmlhYmxlc1xyXG5cclxuICAgIHZhciBhZGFwdGl2ZVRhcmdldCA9IGpRdWVyeSgnLmltZ193cmFwcGVyJyk7XHJcbiAgICB2YXIgYmxvY2sgPSBqUXVlcnkoJy5kYXJrX2Jsb2NrICcpO1xyXG4gICAgdmFyIGJyZWFkY3J1bWJzID0galF1ZXJ5KCcuYnJlYWRjcnVtYnMgJyk7XHJcblxyXG4gICAgICAgIC8vIHZhcmlhYmxlc19oZWlnaHRcclxuXHJcbiAgICB2YXIgd2luZG93V2lkdGggPSBqUXVlcnkod2luZG93KS53aWR0aCgpO1xyXG4gICAgdmFyIGJsb2NrSGVpZ2h0O1xyXG4gICAgdmFyIGgySGVpZ2h0O1xyXG4gICAgdmFyIGJsb2NrTGVmdEhlaWdodDtcclxuICAgIHZhciBicmVhZGNydW1ic0hlaWdodDtcclxuXHJcbiAgICAgICAgLy8gdmFyaWFibGVzX21hdGhcclxuXHJcbiAgICB2YXIgYXNpZGVNYXRoO1xyXG4gICAgdmFyIG1hdGhIZWlnaHQ7XHJcblxyXG4gICAgZnVuY3Rpb24gYWRhcHRpdmVIZWlnaHRCb3JkZXIoKSB7XHJcblxyXG4gICAgICAgIHdpbmRvd1dpZHRoID0galF1ZXJ5KHdpbmRvdykud2lkdGgoKTtcclxuICAgICAgICBibG9ja0hlaWdodCA9IGJsb2NrLmhlaWdodCgpO1xyXG4gICAgICAgIGJsb2NrTGVmdEhlaWdodCA9IGJsb2NrTGVmdC5oZWlnaHQoKTtcclxuICAgICAgICBicmVhZGNydW1ic0hlaWdodCA9IGJyZWFkY3J1bWJzLmhlaWdodCgpO1xyXG5cclxuICAgICAgICBpZiAoalF1ZXJ5KCdkaXYnKS5pcygnLmJvb3RzX2hlbHBlcl9yaWdodCcpICYmIHdpbmRvd1dpZHRoID4gNzY4KSB7XHJcbiAgICAgICAgICAgIGgySGVpZ2h0ID0galF1ZXJ5KCcuYm9vdHNfaGVscGVyX3JpZ2h0IGgyJykub3V0ZXJIZWlnaHQoKTtcclxuICAgICAgICAgICAgbWF0aEhlaWdodCA9IGJsb2NrSGVpZ2h0IC0gKGgySGVpZ2h0KTtcclxuICAgICAgICAgICAgYXNpZGVNYXRoID0gYmxvY2tIZWlnaHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlbHNlIGlmICh3aW5kb3dXaWR0aCA8PSA3NjggJiYgalF1ZXJ5KCdkaXYnKS5pcygnLmJvb3RzX2hlbHBlcl9yaWdodCcpKSB7XHJcbiAgICAgICAgICAgIGgySGVpZ2h0ID0galF1ZXJ5KCcuYm9vdHNfaGVscGVyX3JpZ2h0IGgyJykub3V0ZXJIZWlnaHQoKTtcclxuICAgICAgICAgICAgbWF0aEhlaWdodCA9IGJsb2NrSGVpZ2h0IC0gKGgySGVpZ2h0ICsgYnJlYWRjcnVtYnNIZWlnaHQpO1xyXG4gICAgICAgICAgICBhc2lkZU1hdGggPSA2MDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVsc2UgaWYgKGpRdWVyeSgnZGl2JykuaXMoJy5ib290c19oZWxwZXJfcmlnaHQnKSkge1xyXG4gICAgICAgICAgICBoMkhlaWdodCA9IDA7XHJcbiAgICAgICAgICAgIG1hdGhIZWlnaHQgPSBibG9ja0hlaWdodCAtIChoMkhlaWdodCArIGJyZWFkY3J1bWJzSGVpZ2h0KTtcclxuICAgICAgICAgICAgYXNpZGVNYXRoID0gYmxvY2tIZWlnaHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlbHNlIGlmICghalF1ZXJ5KCdkaXYnKS5pcygnLmJvb3RzX2hlbHBlcl9yaWdodCcpKSB7XHJcbiAgICAgICAgICAgIG1hdGhIZWlnaHQgPSBibG9ja0hlaWdodCAtIGJyZWFkY3J1bWJzSGVpZ2h0O1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC8vIHBhc3RlIHN0eWxlXHJcblxyXG4gICAgICAgIGFkYXB0aXZlVGFyZ2V0LmNzcygnaGVpZ2h0JyAsIG1hdGhIZWlnaHQrJ3B4Jyk7XHJcbiAgICAgICAgYmxvY2tMZWZ0LmNzcygnaGVpZ2h0JyAsIGFzaWRlTWF0aCsncHgnKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGFwdGl2ZUhlaWdodEJvcmRlcigpO1xyXG5cclxuICAgIGpRdWVyeSh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgYWRhcHRpdmVIZWlnaHRCb3JkZXIoKTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBpbml0IHRpbWVyXHJcblxyXG4gICAgdmFyIHJ1biA9IHNldEludGVydmFsKCdyb3RhdGUoKScsIDEwMDAwKTtcclxuXHJcbiAgICBqUXVlcnkoJy5jYXJvdXNlbCcpLmhvdmVyKFxyXG5cclxuICAgICAgICBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChydW4pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHJ1biA9IHNldEludGVydmFsKCdyb3RhdGUoKScsIDEwMDAwKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgKTtcclxuXHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gcm90YXRlKCkge1xyXG4gICAgalF1ZXJ5KCcuYXJyb3ctcmlnaHQnKS5jbGljaygpO1xyXG59Il0sImZpbGUiOiJzY3JpcHQuanMifQ==
