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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsialF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG5cclxuICAgIC8vIGxvYWRfc2xpZGVyXHJcblxyXG4gICAgalF1ZXJ5KCcuc2xpZGVyJykuaW1hZ2VzTG9hZGVkKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KCcuc2xpZGVyJykuYWRkQ2xhc3MoJ2xvYWRlZCcpO1xyXG4gICAgICAgIGpRdWVyeSgnLmZpZ3VyZScpLmFkZENsYXNzKCdsb2FkZWQnKTtcclxuICAgICAgICBqUXVlcnkoJ2hlYWRlcicpLmFkZENsYXNzKCdsb2FkZWQnKTtcclxuICAgICAgICBqUXVlcnkoJy5ibG9nX2Jsb2NrJykuYWRkQ2xhc3MoJ2xvYWRlZCcpO1xyXG4gICAgICAgIGpRdWVyeSgnLmNvbnRhY3RfYmxvY2snKS5hZGRDbGFzcygnbG9hZGVkJyk7XHJcbiAgICAgICAgalF1ZXJ5KCcuZ2FsbGVyeV9ibG9jaycpLmFkZENsYXNzKCdsb2FkZWQnKTtcclxuICAgICAgICBqUXVlcnkoJy50ZWFtX2Jsb2NrJykuYWRkQ2xhc3MoJ2xvYWRlZCcpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gaGVhZGVyX3Jlc3BvbnNpdmVcclxuXHJcbiAgICB2YXIgaGVhZGVySGVpZ2h0ID0galF1ZXJ5KCdoZWFkZXInKS5oZWlnaHQoKTtcclxuICAgIGpRdWVyeSgnLnNsaWRlcl9maWd1cmVfYmxvY2sgLmNvbnRhaW5lcicpLmNzcygnbWFyZ2luLXRvcCcsIGhlYWRlckhlaWdodCtcInB4XCIpO1xyXG4gICAgalF1ZXJ5KCcuc2xpZGVyJykuY3NzKCdtYXJnaW4tdG9wJywgaGVhZGVySGVpZ2h0LTgrXCJweFwiKTtcclxuICAgIGpRdWVyeSh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpe1xyXG4gICAgICAgIGhlYWRlckhlaWdodCA9IGpRdWVyeSgnaGVhZGVyJykuaGVpZ2h0KCk7XHJcbiAgICAgICAgalF1ZXJ5KCcuc2xpZGVyX2ZpZ3VyZV9ibG9jayAuY29udGFpbmVyJykuY3NzKCdtYXJnaW4tdG9wJywgaGVhZGVySGVpZ2h0K1wicHhcIik7XHJcbiAgICAgICAgalF1ZXJ5KCcuc2xpZGVyJykuY3NzKCdtYXJnaW4tdG9wJywgaGVhZGVySGVpZ2h0LTgrXCJweFwiKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIG1haW5fY2Fyb3VzZWxcclxuXHJcbiAgICBqUXVlcnkoJy5zbGlkZXInKS5vd2xDYXJvdXNlbCh7XHJcbiAgICAgICAgbG9vcDp0cnVlLFxyXG4gICAgICAgIGl0ZW1zOiAxLFxyXG4gICAgICAgIGRvbnQ6IHRydWUsXHJcbiAgICAgICAgbWFyZ2luOiAwLFxyXG4gICAgICAgIG5hdjogZmFsc2UsXHJcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgYXV0b3BsYXlUaW1lb3V0OiA1MDAwLFxyXG4gICAgICAgIGF1dG9wbGF5SG92ZXJQYXVzZTogdHJ1ZSxcclxuICAgICAgICBmYWxsYmFja0Vhc2luZzogJ2Vhc2UtaW4tb3V0J1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gbWFzb25yeV9nYWxsZXJ5XHJcblxyXG4gICAgalF1ZXJ5KCcubWFzb25yeScpLm1hc29ucnkoe1xyXG4gICAgICAgIGl0ZW1TZWxlY3RvcjogJy5ncmlkLWl0ZW0nLFxyXG4gICAgICAgIGNvbHVtbldpZHRoOiAnLmdyaWQtc2l6ZXInLFxyXG4gICAgICAgIHBlcmNlbnRQb3NpdGlvbjogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgLy8gbWVudV9pdGVtX2FuaW1hdGlvblxyXG5cclxuICAgIGpRdWVyeSgnbWVudSB1bCBsaScpLmhvdmVyKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLmFkZENsYXNzKCdib3VuY2UnKVxyXG4gICAgfSxmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS5yZW1vdmVDbGFzcygnYm91bmNlJylcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChqUXVlcnkoZG9jdW1lbnQpLnNjcm9sbFRvcCgpPjAmJiFqUXVlcnkoJ2RpdicpLmlzKCcuaW5uZXJfcGFnZScpKSB7XHJcbiAgICAgICAgalF1ZXJ5KCdtZW51IHVsIGxpJykuYWRkQ2xhc3MoJ21lbnVfdG9fdG9wJyk7XHJcbiAgICAgICAgalF1ZXJ5KCcubG9nbycpLmZhZGVPdXQoMjAwKTtcclxuICAgIH1cclxuXHJcbiAgICBqUXVlcnkod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKXtcclxuICAgICAgICBpZiAoalF1ZXJ5KGRvY3VtZW50KS5zY3JvbGxUb3AoKT4wJiYhalF1ZXJ5KCdkaXYnKS5pcygnLmlubmVyX3BhZ2UnKSkge1xyXG4gICAgICAgICAgICBqUXVlcnkoJ21lbnUgdWwgbGknKS5hZGRDbGFzcygnbWVudV90b190b3AnKTtcclxuICAgICAgICAgICAgalF1ZXJ5KCcubG9nbycpLmZhZGVPdXQoMjAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGpRdWVyeSgnbWVudSB1bCBsaScpLnJlbW92ZUNsYXNzKCdtZW51X3RvX3RvcCcpO1xyXG4gICAgICAgICAgICBpZiAoalF1ZXJ5KHdpbmRvdykud2lkdGgoKT43NjgmJiFqUXVlcnkoJ2RpdicpLmlzKCcuaW5uZXJfcGFnZScpKSB7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkoJy5sb2dvJykuZmFkZUluKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBmb290ZXJfc29jaWFsX2hvdmVyXHJcblxyXG4gICAgalF1ZXJ5KCdmb290ZXIgLmZvb3Rlcl9pdGVtOmxhc3QtY2hpbGQgdWwgbGkgYScpLmhvdmVyKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLmFkZENsYXNzKCdib3VuY2UnKVxyXG4gICAgfSxmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS5yZW1vdmVDbGFzcygnYm91bmNlJylcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHRhYlxyXG5cclxuICAgIHZhciB0YWIgPSBqUXVlcnkoJy50YWInKTtcclxuICAgIHZhciBtZW51ID0galF1ZXJ5KCcubWVudV9vbGQnKTtcclxuICAgIHZhciBtZW51QXJyYXkgPSBtZW51O1xyXG4gICAgdmFyIHRhYkluZGV4O1xyXG5cclxuXHJcbiAgICB0YWIub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICB0YWIucmVtb3ZlQ2xhc3MoJ2N1cnJlbnQtdGFiJyk7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLmFkZENsYXNzKCdjdXJyZW50LXRhYicpO1xyXG4gICAgICAgIG1lbnVBcnJheS5mYWRlT3V0KDApO1xyXG4gICAgICAgIHRhYkluZGV4ID0galF1ZXJ5KHRoaXMpLmluZGV4KCk7XHJcbiAgICAgICAgalF1ZXJ5KG1lbnVBcnJheVt0YWJJbmRleF0pLmZhZGVJbigpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRhYkluZGV4KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhqUXVlcnkobWVudUFycmF5W3RhYkluZGV4XSkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gbmV3c19jb2xvclxyXG5cclxuICAgIHZhciBuZXdzQXJyYXkgPSBqUXVlcnkoJy5uZXdzX2l0ZW0gLmRlc2NyaXB0aW9uJyk7XHJcbiAgICB2YXIgZGF0ZUFycmF5ID0galF1ZXJ5KCcubmV3c19pdGVtIC5kYXRlJyk7XHJcbiAgICB2YXIgY29sb3IgPSBbJyNmZmE0MWInLCAnI2FiY2Q1MicsICcjOGU2N2I2JywgJyNhYmNkNTInLCAnIzhlNjdiNicsICcjZmZhNDFiJywgJyM4ZTY3YjYnLCAnI2ZmYTQxYicsICcjYWJjZDUyJ107XHJcbiAgICB2YXIgayA9IDM7XHJcbiAgICB2YXIgaSA9IDA7XHJcblxyXG4gICAgZm9yIChrOyBrIDw9IG5ld3NBcnJheS5sZW5ndGg7aysrKSB7XHJcbiAgICAgICAgaWYgKGk+OCkge1xyXG4gICAgICAgICAgICBpID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coY29sb3JbaV0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGkpO1xyXG4gICAgICAgIGpRdWVyeShuZXdzQXJyYXlba10pLmNzcygnYmFja2dyb3VuZCcgLCBjb2xvcltpXSk7XHJcbiAgICAgICAgalF1ZXJ5KGRhdGVBcnJheVtrXSkuY3NzKCdiYWNrZ3JvdW5kJyAsIGNvbG9yW2ldKTtcclxuICAgICAgICBpKys7XHJcbiAgICB9XHJcblxyXG59KTtcclxuXHJcbi8vIHNjcm9sbF9hbmltYXRlX2luaXRcclxuXHJcbm5ldyBXT1coKS5pbml0KCk7XHJcblxyXG4vLyBtYXBcclxuXHJcbnZhciBtYXA7XHJcbmZ1bmN0aW9uIGluaXRNYXAoKSB7XHJcbiAgICB2YXIgbXlMYXRMbmcgPSB7bGF0OiA1MC40MjY1Njg3NCwgbG5nOiAzMC41MzgzNjMxNn07XHJcblxyXG4gICAgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJyksIHtcclxuICAgICAgICBjZW50ZXI6IG15TGF0TG5nLFxyXG4gICAgICAgIHpvb206IDE3LFxyXG4gICAgICAgIG1hcFR5cGVDb250cm9sOiBmYWxzZSxcclxuICAgICAgICBzY3JvbGx3aGVlbDogZmFsc2VcclxuICAgIH0pO1xyXG5cclxuICAgIG1hcC5zZXRPcHRpb25zKHtzdHlsZXM6IHN0eWxlc1snZGVmYXVsdCddfSk7XHJcblxyXG4gICAgdmFyIG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xyXG4gICAgICAgIG1hcDogbWFwLFxyXG4gICAgICAgIHBvc2l0aW9uOiBteUxhdExuZyxcclxuICAgICAgICB0aXRsZTogJ1JlZ2VudCBIaWxsJ1xyXG4gICAgfSk7XHJcblxyXG59Il0sImZpbGUiOiJzY3JpcHQuanMifQ==
