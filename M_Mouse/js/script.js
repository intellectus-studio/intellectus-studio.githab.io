jQuery(document).ready(function(){

    // load_slider

    jQuery('.slider').imagesLoaded(function(){
        jQuery('.slider').addClass('loaded');
        jQuery('.figure').addClass('loaded');
        jQuery('header').addClass('loaded');
        jQuery('.blog_block').addClass('loaded');
        jQuery('.contact_block').addClass('loaded');
        jQuery('.gallery_block').addClass('loaded');
        jQuery('.team_block').addClass('loaded');
    });

    //lift

    jQuery('#scrollup').click(function(){
        jQuery('body,html').animate({
            scrollTop: 0
        }, 400);
    });

    jQuery(window).scroll(function(){
        if (jQuery(document).scrollTop()>600) {
            jQuery('.scrollup_container').fadeIn(500);
        }else{
            jQuery('.scrollup_container').fadeOut(500);
        }
    });

    // header_responsive

    var headerHeight = jQuery('header').height();
    jQuery('.slider_figure_block .container').css('margin-top', headerHeight+"px");
    jQuery('.slider').css('margin-top', headerHeight-8+"px");
    jQuery(window).resize(function(){
        headerHeight = jQuery('header').height();
        jQuery('.slider_figure_block .container').css('margin-top', headerHeight+"px");
        jQuery('.slider').css('margin-top', headerHeight-8+"px");
    });

    // main_carousel

    jQuery('.slider').owlCarousel({
        loop:true,
        items: 1,
        dont: true,
        margin: 0,
        nav: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        fallbackEasing: 'ease-in-out'
    });

    // masonry_gallery

    jQuery('.masonry').masonry({
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        percentPosition: true
    });

    // lightbox

    lightbox.option({
        'resizeDuration': 300,
        'wrapAround': true,
        'positionFromTop': 150
    });

    // menu_item_animation

    jQuery('menu ul li').hover(function(){

        jQuery(this).addClass('bounce');
    },function(){
        jQuery(this).removeClass('bounce');
    });

    jQuery('menu ul:first-child li:nth-child(5)').on('click', function(){
        jQuery('.sub-menu').toggleClass('open_sub');
        return false;
    });

    if (jQuery(document).scrollTop()>0&&!jQuery('div').is('.inner_page')) {
        jQuery('.figure').addClass('left_figure');
        jQuery('menu ul').addClass('menu_to_top');
        jQuery('.logo').fadeOut(200);
    }

    jQuery(window).scroll(function(){
        if (jQuery(document).scrollTop()>0&&!jQuery('div').is('.inner_page')) {
            jQuery('.figure').addClass('left_figure');
            jQuery('menu ul').addClass('menu_to_top');
            jQuery('.logo').fadeOut(200);
        }
        else {
            jQuery('menu ul ').removeClass('menu_to_top');
            jQuery('.figure').removeClass('left_figure');
            if (jQuery(window).width()>768&&!jQuery('div').is('.inner_page')) {
                jQuery('.logo').fadeIn();
            }
        }
    });

    // footer_social_hover

    jQuery('footer .footer_item:last-child ul li a').hover(function(){
        jQuery(this).addClass('bounce')
    },function(){
        jQuery(this).removeClass('bounce')
    });

    // tab

    var tab = jQuery('.tab');
    var menu = jQuery('.menu_old');
    var menuArray = menu;
    var tabIndex;


    tab.on('click', function(){
        tab.removeClass('current-tab');
        jQuery(this).addClass('current-tab');
        menuArray.fadeOut(0);
        tabIndex = jQuery(this).index();
        jQuery(menuArray[tabIndex]).fadeIn();
        console.log(tabIndex);
        console.log(jQuery(menuArray[tabIndex]));
    });

    // news_color

    var newsArray = jQuery('.news_item .description');
    var dateArray = jQuery('.news_item .date');
    var color = ['#ffa41b', '#abcd52', '#8e67b6', '#abcd52', '#8e67b6', '#ffa41b', '#8e67b6', '#ffa41b', '#abcd52'];
    var k = 3;
    var i = 0;

    for (k; k <= newsArray.length;k++) {
        if (i>8) {
            i = 0;
        }
        console.log(color[i]);
        console.log(i);
        jQuery(newsArray[k]).css('background' , color[i]);
        jQuery(dateArray[k]).css('background' , color[i]);
        i++;
    }

});

// scroll_animate_init

new WOW().init();

// map

var map;
function initMap() {
    var myLatLng = {lat: 50.42656874, lng: 30.53836316};

    map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        zoom: 17,
        mapTypeControl: false,
        scrollwheel: false
    });

    map.setOptions({styles: styles['default']});

    var marker = new google.maps.Marker({
        map: map,
        position: myLatLng,
        title: 'Regent Hill'
    });

}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsialF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG5cclxuICAgIC8vIGxvYWRfc2xpZGVyXHJcblxyXG4gICAgalF1ZXJ5KCcuc2xpZGVyJykuaW1hZ2VzTG9hZGVkKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KCcuc2xpZGVyJykuYWRkQ2xhc3MoJ2xvYWRlZCcpO1xyXG4gICAgICAgIGpRdWVyeSgnLmZpZ3VyZScpLmFkZENsYXNzKCdsb2FkZWQnKTtcclxuICAgICAgICBqUXVlcnkoJ2hlYWRlcicpLmFkZENsYXNzKCdsb2FkZWQnKTtcclxuICAgICAgICBqUXVlcnkoJy5ibG9nX2Jsb2NrJykuYWRkQ2xhc3MoJ2xvYWRlZCcpO1xyXG4gICAgICAgIGpRdWVyeSgnLmNvbnRhY3RfYmxvY2snKS5hZGRDbGFzcygnbG9hZGVkJyk7XHJcbiAgICAgICAgalF1ZXJ5KCcuZ2FsbGVyeV9ibG9jaycpLmFkZENsYXNzKCdsb2FkZWQnKTtcclxuICAgICAgICBqUXVlcnkoJy50ZWFtX2Jsb2NrJykuYWRkQ2xhc3MoJ2xvYWRlZCcpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9saWZ0XHJcblxyXG4gICAgalF1ZXJ5KCcjc2Nyb2xsdXAnKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeSgnYm9keSxodG1sJykuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgIHNjcm9sbFRvcDogMFxyXG4gICAgICAgIH0sIDQwMCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBqUXVlcnkod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKXtcclxuICAgICAgICBpZiAoalF1ZXJ5KGRvY3VtZW50KS5zY3JvbGxUb3AoKT42MDApIHtcclxuICAgICAgICAgICAgalF1ZXJ5KCcuc2Nyb2xsdXBfY29udGFpbmVyJykuZmFkZUluKDUwMCk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGpRdWVyeSgnLnNjcm9sbHVwX2NvbnRhaW5lcicpLmZhZGVPdXQoNTAwKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBoZWFkZXJfcmVzcG9uc2l2ZVxyXG5cclxuICAgIHZhciBoZWFkZXJIZWlnaHQgPSBqUXVlcnkoJ2hlYWRlcicpLmhlaWdodCgpO1xyXG4gICAgalF1ZXJ5KCcuc2xpZGVyX2ZpZ3VyZV9ibG9jayAuY29udGFpbmVyJykuY3NzKCdtYXJnaW4tdG9wJywgaGVhZGVySGVpZ2h0K1wicHhcIik7XHJcbiAgICBqUXVlcnkoJy5zbGlkZXInKS5jc3MoJ21hcmdpbi10b3AnLCBoZWFkZXJIZWlnaHQtOCtcInB4XCIpO1xyXG4gICAgalF1ZXJ5KHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaGVhZGVySGVpZ2h0ID0galF1ZXJ5KCdoZWFkZXInKS5oZWlnaHQoKTtcclxuICAgICAgICBqUXVlcnkoJy5zbGlkZXJfZmlndXJlX2Jsb2NrIC5jb250YWluZXInKS5jc3MoJ21hcmdpbi10b3AnLCBoZWFkZXJIZWlnaHQrXCJweFwiKTtcclxuICAgICAgICBqUXVlcnkoJy5zbGlkZXInKS5jc3MoJ21hcmdpbi10b3AnLCBoZWFkZXJIZWlnaHQtOCtcInB4XCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gbWFpbl9jYXJvdXNlbFxyXG5cclxuICAgIGpRdWVyeSgnLnNsaWRlcicpLm93bENhcm91c2VsKHtcclxuICAgICAgICBsb29wOnRydWUsXHJcbiAgICAgICAgaXRlbXM6IDEsXHJcbiAgICAgICAgZG9udDogdHJ1ZSxcclxuICAgICAgICBtYXJnaW46IDAsXHJcbiAgICAgICAgbmF2OiBmYWxzZSxcclxuICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICBhdXRvcGxheVRpbWVvdXQ6IDUwMDAsXHJcbiAgICAgICAgYXV0b3BsYXlIb3ZlclBhdXNlOiB0cnVlLFxyXG4gICAgICAgIGZhbGxiYWNrRWFzaW5nOiAnZWFzZS1pbi1vdXQnXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBtYXNvbnJ5X2dhbGxlcnlcclxuXHJcbiAgICBqUXVlcnkoJy5tYXNvbnJ5JykubWFzb25yeSh7XHJcbiAgICAgICAgaXRlbVNlbGVjdG9yOiAnLmdyaWQtaXRlbScsXHJcbiAgICAgICAgY29sdW1uV2lkdGg6ICcuZ3JpZC1zaXplcicsXHJcbiAgICAgICAgcGVyY2VudFBvc2l0aW9uOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBsaWdodGJveFxyXG5cclxuICAgIGxpZ2h0Ym94Lm9wdGlvbih7XHJcbiAgICAgICAgJ3Jlc2l6ZUR1cmF0aW9uJzogMzAwLFxyXG4gICAgICAgICd3cmFwQXJvdW5kJzogdHJ1ZSxcclxuICAgICAgICAncG9zaXRpb25Gcm9tVG9wJzogMTUwXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBtZW51X2l0ZW1fYW5pbWF0aW9uXHJcblxyXG4gICAgalF1ZXJ5KCdtZW51IHVsIGxpJykuaG92ZXIoZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLmFkZENsYXNzKCdib3VuY2UnKTtcclxuICAgIH0sZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkodGhpcykucmVtb3ZlQ2xhc3MoJ2JvdW5jZScpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgalF1ZXJ5KCdtZW51IHVsOmZpcnN0LWNoaWxkIGxpOm50aC1jaGlsZCg1KScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KCcuc3ViLW1lbnUnKS50b2dnbGVDbGFzcygnb3Blbl9zdWInKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoalF1ZXJ5KGRvY3VtZW50KS5zY3JvbGxUb3AoKT4wJiYhalF1ZXJ5KCdkaXYnKS5pcygnLmlubmVyX3BhZ2UnKSkge1xyXG4gICAgICAgIGpRdWVyeSgnLmZpZ3VyZScpLmFkZENsYXNzKCdsZWZ0X2ZpZ3VyZScpO1xyXG4gICAgICAgIGpRdWVyeSgnbWVudSB1bCcpLmFkZENsYXNzKCdtZW51X3RvX3RvcCcpO1xyXG4gICAgICAgIGpRdWVyeSgnLmxvZ28nKS5mYWRlT3V0KDIwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgalF1ZXJ5KHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYgKGpRdWVyeShkb2N1bWVudCkuc2Nyb2xsVG9wKCk+MCYmIWpRdWVyeSgnZGl2JykuaXMoJy5pbm5lcl9wYWdlJykpIHtcclxuICAgICAgICAgICAgalF1ZXJ5KCcuZmlndXJlJykuYWRkQ2xhc3MoJ2xlZnRfZmlndXJlJyk7XHJcbiAgICAgICAgICAgIGpRdWVyeSgnbWVudSB1bCcpLmFkZENsYXNzKCdtZW51X3RvX3RvcCcpO1xyXG4gICAgICAgICAgICBqUXVlcnkoJy5sb2dvJykuZmFkZU91dCgyMDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgalF1ZXJ5KCdtZW51IHVsICcpLnJlbW92ZUNsYXNzKCdtZW51X3RvX3RvcCcpO1xyXG4gICAgICAgICAgICBqUXVlcnkoJy5maWd1cmUnKS5yZW1vdmVDbGFzcygnbGVmdF9maWd1cmUnKTtcclxuICAgICAgICAgICAgaWYgKGpRdWVyeSh3aW5kb3cpLndpZHRoKCk+NzY4JiYhalF1ZXJ5KCdkaXYnKS5pcygnLmlubmVyX3BhZ2UnKSkge1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KCcubG9nbycpLmZhZGVJbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gZm9vdGVyX3NvY2lhbF9ob3ZlclxyXG5cclxuICAgIGpRdWVyeSgnZm9vdGVyIC5mb290ZXJfaXRlbTpsYXN0LWNoaWxkIHVsIGxpIGEnKS5ob3ZlcihmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS5hZGRDbGFzcygnYm91bmNlJylcclxuICAgIH0sZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkodGhpcykucmVtb3ZlQ2xhc3MoJ2JvdW5jZScpXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyB0YWJcclxuXHJcbiAgICB2YXIgdGFiID0galF1ZXJ5KCcudGFiJyk7XHJcbiAgICB2YXIgbWVudSA9IGpRdWVyeSgnLm1lbnVfb2xkJyk7XHJcbiAgICB2YXIgbWVudUFycmF5ID0gbWVudTtcclxuICAgIHZhciB0YWJJbmRleDtcclxuXHJcblxyXG4gICAgdGFiLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGFiLnJlbW92ZUNsYXNzKCdjdXJyZW50LXRhYicpO1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS5hZGRDbGFzcygnY3VycmVudC10YWInKTtcclxuICAgICAgICBtZW51QXJyYXkuZmFkZU91dCgwKTtcclxuICAgICAgICB0YWJJbmRleCA9IGpRdWVyeSh0aGlzKS5pbmRleCgpO1xyXG4gICAgICAgIGpRdWVyeShtZW51QXJyYXlbdGFiSW5kZXhdKS5mYWRlSW4oKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0YWJJbmRleCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coalF1ZXJ5KG1lbnVBcnJheVt0YWJJbmRleF0pKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIG5ld3NfY29sb3JcclxuXHJcbiAgICB2YXIgbmV3c0FycmF5ID0galF1ZXJ5KCcubmV3c19pdGVtIC5kZXNjcmlwdGlvbicpO1xyXG4gICAgdmFyIGRhdGVBcnJheSA9IGpRdWVyeSgnLm5ld3NfaXRlbSAuZGF0ZScpO1xyXG4gICAgdmFyIGNvbG9yID0gWycjZmZhNDFiJywgJyNhYmNkNTInLCAnIzhlNjdiNicsICcjYWJjZDUyJywgJyM4ZTY3YjYnLCAnI2ZmYTQxYicsICcjOGU2N2I2JywgJyNmZmE0MWInLCAnI2FiY2Q1MiddO1xyXG4gICAgdmFyIGsgPSAzO1xyXG4gICAgdmFyIGkgPSAwO1xyXG5cclxuICAgIGZvciAoazsgayA8PSBuZXdzQXJyYXkubGVuZ3RoO2srKykge1xyXG4gICAgICAgIGlmIChpPjgpIHtcclxuICAgICAgICAgICAgaSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGNvbG9yW2ldKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhpKTtcclxuICAgICAgICBqUXVlcnkobmV3c0FycmF5W2tdKS5jc3MoJ2JhY2tncm91bmQnICwgY29sb3JbaV0pO1xyXG4gICAgICAgIGpRdWVyeShkYXRlQXJyYXlba10pLmNzcygnYmFja2dyb3VuZCcgLCBjb2xvcltpXSk7XHJcbiAgICAgICAgaSsrO1xyXG4gICAgfVxyXG5cclxufSk7XHJcblxyXG4vLyBzY3JvbGxfYW5pbWF0ZV9pbml0XHJcblxyXG5uZXcgV09XKCkuaW5pdCgpO1xyXG5cclxuLy8gbWFwXHJcblxyXG52YXIgbWFwO1xyXG5mdW5jdGlvbiBpbml0TWFwKCkge1xyXG4gICAgdmFyIG15TGF0TG5nID0ge2xhdDogNTAuNDI2NTY4NzQsIGxuZzogMzAuNTM4MzYzMTZ9O1xyXG5cclxuICAgIG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcCcpLCB7XHJcbiAgICAgICAgY2VudGVyOiBteUxhdExuZyxcclxuICAgICAgICB6b29tOiAxNyxcclxuICAgICAgICBtYXBUeXBlQ29udHJvbDogZmFsc2UsXHJcbiAgICAgICAgc2Nyb2xsd2hlZWw6IGZhbHNlXHJcbiAgICB9KTtcclxuXHJcbiAgICBtYXAuc2V0T3B0aW9ucyh7c3R5bGVzOiBzdHlsZXNbJ2RlZmF1bHQnXX0pO1xyXG5cclxuICAgIHZhciBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcclxuICAgICAgICBtYXA6IG1hcCxcclxuICAgICAgICBwb3NpdGlvbjogbXlMYXRMbmcsXHJcbiAgICAgICAgdGl0bGU6ICdSZWdlbnQgSGlsbCdcclxuICAgIH0pO1xyXG5cclxufSJdLCJmaWxlIjoic2NyaXB0LmpzIn0=
