;(function($){
    "use strict";
    
    //Hide Loading Box (Preloader)
     $(window).load(function() {
        $('.preloader').delay(500).fadeOut('slow');
        $('body').delay(500).css({'overflow':'visible'});
    });
    
    // Menu JS
    $(".menu-opener").click(function(){
        $(".menu-opener, .menu-opener-inner, .menu").toggleClass("active");
    });
    
    //Animate JS
    new WOW().init();
    
    // Countdown JS
    $('.coundown_area').countdown({
        date: '9/25/2016 23:59:59',
        offset: -8,
        day: 'Day',
        days: 'Days',
    }, function () {
        alert('Done!');
    });
    
    // Counter js
    $('.total-works .counter').counterUp({
        delay: 10,
        time: 1000
    });
    
    // Lightbox
     lightbox.option({
        'showImageNumberLabel': false,  
    })
     
    // Navbar Fixed top    
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 660 ) {
            $(".header-area").addClass("menu_bg");
        } else {
            $(".header-area").removeClass("menu_bg");
        }
    });
    
   /*Smooth Scroll*/
    function smoothScroll4sideNav () {
        if ($('.slider_area').length ) {
            $('.slider_area .slider-content-area a[href*="#"]').on('click', function () {
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                    var target = $(this.hash);
                    if ( $(window).width() < 768 ){
                        offset_top4scroll = 100
                    }
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    if (target.length) {
                        $('html,body').animate({
                            scrollTop: target.offset().top - 70
                        }, 1000);
                        return false
                    }
                }
                return false
            })
        }
    }
    smoothScroll4sideNav();

     
})(jQuery);