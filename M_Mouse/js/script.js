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
        'positionFromTop': 150,
        'resizeDuration': 300
    });

    // menu_item_animation

    jQuery('menu ul li').hover(function(){
        jQuery(this).addClass('bounce')
    },function(){
        jQuery(this).removeClass('bounce')
    });

    if (jQuery(document).scrollTop()>0&&!jQuery('div').is('.inner_page')) {
        jQuery('menu ul li').addClass('menu_to_top');
        jQuery('.logo').fadeOut(200);
    }

    jQuery(window).scroll(function(){
        if (jQuery(document).scrollTop()>0&&!jQuery('div').is('.inner_page')) {
            jQuery('menu ul li').addClass('menu_to_top');
            jQuery('.logo').fadeOut(200);
        }
        else {
            jQuery('menu ul li').removeClass('menu_to_top');
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsialF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG5cclxuICAgIC8vIGxvYWRfc2xpZGVyXHJcblxyXG4gICAgalF1ZXJ5KCcuc2xpZGVyJykuaW1hZ2VzTG9hZGVkKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KCcuc2xpZGVyJykuYWRkQ2xhc3MoJ2xvYWRlZCcpO1xyXG4gICAgICAgIGpRdWVyeSgnLmZpZ3VyZScpLmFkZENsYXNzKCdsb2FkZWQnKTtcclxuICAgICAgICBqUXVlcnkoJ2hlYWRlcicpLmFkZENsYXNzKCdsb2FkZWQnKTtcclxuICAgICAgICBqUXVlcnkoJy5ibG9nX2Jsb2NrJykuYWRkQ2xhc3MoJ2xvYWRlZCcpO1xyXG4gICAgICAgIGpRdWVyeSgnLmNvbnRhY3RfYmxvY2snKS5hZGRDbGFzcygnbG9hZGVkJyk7XHJcbiAgICAgICAgalF1ZXJ5KCcuZ2FsbGVyeV9ibG9jaycpLmFkZENsYXNzKCdsb2FkZWQnKTtcclxuICAgICAgICBqUXVlcnkoJy50ZWFtX2Jsb2NrJykuYWRkQ2xhc3MoJ2xvYWRlZCcpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gaGVhZGVyX3Jlc3BvbnNpdmVcclxuXHJcbiAgICB2YXIgaGVhZGVySGVpZ2h0ID0galF1ZXJ5KCdoZWFkZXInKS5oZWlnaHQoKTtcclxuICAgIGpRdWVyeSgnLnNsaWRlcl9maWd1cmVfYmxvY2sgLmNvbnRhaW5lcicpLmNzcygnbWFyZ2luLXRvcCcsIGhlYWRlckhlaWdodCtcInB4XCIpO1xyXG4gICAgalF1ZXJ5KCcuc2xpZGVyJykuY3NzKCdtYXJnaW4tdG9wJywgaGVhZGVySGVpZ2h0LTgrXCJweFwiKTtcclxuICAgIGpRdWVyeSh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpe1xyXG4gICAgICAgIGhlYWRlckhlaWdodCA9IGpRdWVyeSgnaGVhZGVyJykuaGVpZ2h0KCk7XHJcbiAgICAgICAgalF1ZXJ5KCcuc2xpZGVyX2ZpZ3VyZV9ibG9jayAuY29udGFpbmVyJykuY3NzKCdtYXJnaW4tdG9wJywgaGVhZGVySGVpZ2h0K1wicHhcIik7XHJcbiAgICAgICAgalF1ZXJ5KCcuc2xpZGVyJykuY3NzKCdtYXJnaW4tdG9wJywgaGVhZGVySGVpZ2h0LTgrXCJweFwiKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIG1haW5fY2Fyb3VzZWxcclxuXHJcbiAgICBqUXVlcnkoJy5zbGlkZXInKS5vd2xDYXJvdXNlbCh7XHJcbiAgICAgICAgbG9vcDp0cnVlLFxyXG4gICAgICAgIGl0ZW1zOiAxLFxyXG4gICAgICAgIGRvbnQ6IHRydWUsXHJcbiAgICAgICAgbWFyZ2luOiAwLFxyXG4gICAgICAgIG5hdjogZmFsc2UsXHJcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgYXV0b3BsYXlUaW1lb3V0OiA1MDAwLFxyXG4gICAgICAgIGF1dG9wbGF5SG92ZXJQYXVzZTogdHJ1ZSxcclxuICAgICAgICBmYWxsYmFja0Vhc2luZzogJ2Vhc2UtaW4tb3V0J1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gbWFzb25yeV9nYWxsZXJ5XHJcblxyXG4gICAgalF1ZXJ5KCcubWFzb25yeScpLm1hc29ucnkoe1xyXG4gICAgICAgIGl0ZW1TZWxlY3RvcjogJy5ncmlkLWl0ZW0nLFxyXG4gICAgICAgIGNvbHVtbldpZHRoOiAnLmdyaWQtc2l6ZXInLFxyXG4gICAgICAgIHBlcmNlbnRQb3NpdGlvbjogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gbGlnaHRib3hcclxuXHJcbiAgICBsaWdodGJveC5vcHRpb24oe1xyXG4gICAgICAgICdyZXNpemVEdXJhdGlvbic6IDMwMCxcclxuICAgICAgICAnd3JhcEFyb3VuZCc6IHRydWUsXHJcbiAgICAgICAgJ3Bvc2l0aW9uRnJvbVRvcCc6IDE1MCxcclxuICAgICAgICAncmVzaXplRHVyYXRpb24nOiAzMDBcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIG1lbnVfaXRlbV9hbmltYXRpb25cclxuXHJcbiAgICBqUXVlcnkoJ21lbnUgdWwgbGknKS5ob3ZlcihmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS5hZGRDbGFzcygnYm91bmNlJylcclxuICAgIH0sZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkodGhpcykucmVtb3ZlQ2xhc3MoJ2JvdW5jZScpXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoalF1ZXJ5KGRvY3VtZW50KS5zY3JvbGxUb3AoKT4wJiYhalF1ZXJ5KCdkaXYnKS5pcygnLmlubmVyX3BhZ2UnKSkge1xyXG4gICAgICAgIGpRdWVyeSgnbWVudSB1bCBsaScpLmFkZENsYXNzKCdtZW51X3RvX3RvcCcpO1xyXG4gICAgICAgIGpRdWVyeSgnLmxvZ28nKS5mYWRlT3V0KDIwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgalF1ZXJ5KHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYgKGpRdWVyeShkb2N1bWVudCkuc2Nyb2xsVG9wKCk+MCYmIWpRdWVyeSgnZGl2JykuaXMoJy5pbm5lcl9wYWdlJykpIHtcclxuICAgICAgICAgICAgalF1ZXJ5KCdtZW51IHVsIGxpJykuYWRkQ2xhc3MoJ21lbnVfdG9fdG9wJyk7XHJcbiAgICAgICAgICAgIGpRdWVyeSgnLmxvZ28nKS5mYWRlT3V0KDIwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBqUXVlcnkoJ21lbnUgdWwgbGknKS5yZW1vdmVDbGFzcygnbWVudV90b190b3AnKTtcclxuICAgICAgICAgICAgaWYgKGpRdWVyeSh3aW5kb3cpLndpZHRoKCk+NzY4JiYhalF1ZXJ5KCdkaXYnKS5pcygnLmlubmVyX3BhZ2UnKSkge1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KCcubG9nbycpLmZhZGVJbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gZm9vdGVyX3NvY2lhbF9ob3ZlclxyXG5cclxuICAgIGpRdWVyeSgnZm9vdGVyIC5mb290ZXJfaXRlbTpsYXN0LWNoaWxkIHVsIGxpIGEnKS5ob3ZlcihmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS5hZGRDbGFzcygnYm91bmNlJylcclxuICAgIH0sZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkodGhpcykucmVtb3ZlQ2xhc3MoJ2JvdW5jZScpXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyB0YWJcclxuXHJcbiAgICB2YXIgdGFiID0galF1ZXJ5KCcudGFiJyk7XHJcbiAgICB2YXIgbWVudSA9IGpRdWVyeSgnLm1lbnVfb2xkJyk7XHJcbiAgICB2YXIgbWVudUFycmF5ID0gbWVudTtcclxuICAgIHZhciB0YWJJbmRleDtcclxuXHJcblxyXG4gICAgdGFiLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGFiLnJlbW92ZUNsYXNzKCdjdXJyZW50LXRhYicpO1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS5hZGRDbGFzcygnY3VycmVudC10YWInKTtcclxuICAgICAgICBtZW51QXJyYXkuZmFkZU91dCgwKTtcclxuICAgICAgICB0YWJJbmRleCA9IGpRdWVyeSh0aGlzKS5pbmRleCgpO1xyXG4gICAgICAgIGpRdWVyeShtZW51QXJyYXlbdGFiSW5kZXhdKS5mYWRlSW4oKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0YWJJbmRleCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coalF1ZXJ5KG1lbnVBcnJheVt0YWJJbmRleF0pKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIG5ld3NfY29sb3JcclxuXHJcbiAgICB2YXIgbmV3c0FycmF5ID0galF1ZXJ5KCcubmV3c19pdGVtIC5kZXNjcmlwdGlvbicpO1xyXG4gICAgdmFyIGRhdGVBcnJheSA9IGpRdWVyeSgnLm5ld3NfaXRlbSAuZGF0ZScpO1xyXG4gICAgdmFyIGNvbG9yID0gWycjZmZhNDFiJywgJyNhYmNkNTInLCAnIzhlNjdiNicsICcjYWJjZDUyJywgJyM4ZTY3YjYnLCAnI2ZmYTQxYicsICcjOGU2N2I2JywgJyNmZmE0MWInLCAnI2FiY2Q1MiddO1xyXG4gICAgdmFyIGsgPSAzO1xyXG4gICAgdmFyIGkgPSAwO1xyXG5cclxuICAgIGZvciAoazsgayA8PSBuZXdzQXJyYXkubGVuZ3RoO2srKykge1xyXG4gICAgICAgIGlmIChpPjgpIHtcclxuICAgICAgICAgICAgaSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGNvbG9yW2ldKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhpKTtcclxuICAgICAgICBqUXVlcnkobmV3c0FycmF5W2tdKS5jc3MoJ2JhY2tncm91bmQnICwgY29sb3JbaV0pO1xyXG4gICAgICAgIGpRdWVyeShkYXRlQXJyYXlba10pLmNzcygnYmFja2dyb3VuZCcgLCBjb2xvcltpXSk7XHJcbiAgICAgICAgaSsrO1xyXG4gICAgfVxyXG5cclxufSk7XHJcblxyXG4vLyBzY3JvbGxfYW5pbWF0ZV9pbml0XHJcblxyXG5uZXcgV09XKCkuaW5pdCgpO1xyXG5cclxuLy8gbWFwXHJcblxyXG52YXIgbWFwO1xyXG5mdW5jdGlvbiBpbml0TWFwKCkge1xyXG4gICAgdmFyIG15TGF0TG5nID0ge2xhdDogNTAuNDI2NTY4NzQsIGxuZzogMzAuNTM4MzYzMTZ9O1xyXG5cclxuICAgIG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcCcpLCB7XHJcbiAgICAgICAgY2VudGVyOiBteUxhdExuZyxcclxuICAgICAgICB6b29tOiAxNyxcclxuICAgICAgICBtYXBUeXBlQ29udHJvbDogZmFsc2UsXHJcbiAgICAgICAgc2Nyb2xsd2hlZWw6IGZhbHNlXHJcbiAgICB9KTtcclxuXHJcbiAgICBtYXAuc2V0T3B0aW9ucyh7c3R5bGVzOiBzdHlsZXNbJ2RlZmF1bHQnXX0pO1xyXG5cclxuICAgIHZhciBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcclxuICAgICAgICBtYXA6IG1hcCxcclxuICAgICAgICBwb3NpdGlvbjogbXlMYXRMbmcsXHJcbiAgICAgICAgdGl0bGU6ICdSZWdlbnQgSGlsbCdcclxuICAgIH0pO1xyXG5cclxufSJdLCJmaWxlIjoic2NyaXB0LmpzIn0=
