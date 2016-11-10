jQuery(document).ready(function(){

    // load_slider

    jQuery('.slider').imagesLoaded(function(){
        jQuery('.slider').addClass('loaded');
        jQuery('.figure').addClass('loaded');
        jQuery('header').addClass('loaded');
        jQuery('.blog_block').addClass('loaded');
        jQuery('.contact_block').addClass('loaded');
        jQuery('.about_us_block').addClass('loaded');
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

        if (jQuery(window).width() > 1024) {
            jQuery('.burger').removeClass('burger_rotate');
            jQuery('.mobile_menu').removeClass('open_mobile_menu');
        }
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

    jQuery('.masonry').imagesLoaded( function() {
    jQuery('.masonry').masonry({
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        percentPosition: true
    });
        jQuery('.masonry').addClass('loaded');
    });

    // lightbox

    lightbox.option({
        'resizeDuration': 300,
        'wrapAround': true,
        'positionFromTop': 150
    });

    // mobile_menu

    jQuery('.burger').on('click', function(){
        jQuery(this).toggleClass('burger_rotate');
        jQuery('.mobile_menu').toggleClass('open_mobile_menu');
    });

    jQuery('.mobile_menu ul li:nth-child(5) > a').on('click', function(){
        jQuery('.mobile_menu ul li:nth-child(5) ul').slideToggle();
        jQuery('.mobile_menu ul li:nth-child(5) > a').toggleClass('toggled');
        return false;
    });

    // menu_item_animation

    jQuery('.responsive_menu ul li').hover(function(){

        jQuery(this).addClass('bounce');
    },function(){
        jQuery(this).removeClass('bounce');
    });

    jQuery('.responsive_menu ul:first-child li:nth-child(5)').on('click', function(){
        jQuery('.sub-menu').toggleClass('open_sub');
        return false;
    });

    if (jQuery(document).scrollTop()>0&&!jQuery('div').is('.inner_page')) {
        jQuery('.figure').addClass('left_figure');
        jQuery('.responsive_menu ul').addClass('menu_to_top');

        if (jQuery(window).width() > 1024)
        jQuery('.logo').fadeOut(200);
    }

    jQuery(window).scroll(function(){
        if (jQuery(document).scrollTop()>0&&!jQuery('div').is('.inner_page')) {
            jQuery('.figure').addClass('left_figure');
            jQuery('.responsive_menu ul').addClass('menu_to_top');
            if (jQuery(window).width() > 1024)
            jQuery('.logo').fadeOut(200);
        }
        else {
            jQuery('.responsive_menu ul ').removeClass('menu_to_top');
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
    var color = ['#b1a400', '#ad33fa', '#01559e', '#c900b0', '#ffa41b', '#009e00'];
    var k = 3;
    var i = 0;

    for (k; k <= newsArray.length;k++) {
        if (i>5) {
            i = 0;
        }
        jQuery(newsArray[k]).css('background', color[i]);
        jQuery(dateArray[k]).css('background', color[i]);
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsialF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG5cclxuICAgIC8vIGxvYWRfc2xpZGVyXHJcblxyXG4gICAgalF1ZXJ5KCcuc2xpZGVyJykuaW1hZ2VzTG9hZGVkKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KCcuc2xpZGVyJykuYWRkQ2xhc3MoJ2xvYWRlZCcpO1xyXG4gICAgICAgIGpRdWVyeSgnLmZpZ3VyZScpLmFkZENsYXNzKCdsb2FkZWQnKTtcclxuICAgICAgICBqUXVlcnkoJ2hlYWRlcicpLmFkZENsYXNzKCdsb2FkZWQnKTtcclxuICAgICAgICBqUXVlcnkoJy5ibG9nX2Jsb2NrJykuYWRkQ2xhc3MoJ2xvYWRlZCcpO1xyXG4gICAgICAgIGpRdWVyeSgnLmNvbnRhY3RfYmxvY2snKS5hZGRDbGFzcygnbG9hZGVkJyk7XHJcbiAgICAgICAgalF1ZXJ5KCcuYWJvdXRfdXNfYmxvY2snKS5hZGRDbGFzcygnbG9hZGVkJyk7XHJcbiAgICAgICAgalF1ZXJ5KCcudGVhbV9ibG9jaycpLmFkZENsYXNzKCdsb2FkZWQnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vbGlmdFxyXG5cclxuICAgIGpRdWVyeSgnI3Njcm9sbHVwJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkoJ2JvZHksaHRtbCcpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICBzY3JvbGxUb3A6IDBcclxuICAgICAgICB9LCA0MDApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgalF1ZXJ5KHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYgKGpRdWVyeShkb2N1bWVudCkuc2Nyb2xsVG9wKCk+NjAwKSB7XHJcbiAgICAgICAgICAgIGpRdWVyeSgnLnNjcm9sbHVwX2NvbnRhaW5lcicpLmZhZGVJbig1MDApO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBqUXVlcnkoJy5zY3JvbGx1cF9jb250YWluZXInKS5mYWRlT3V0KDUwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gaGVhZGVyX3Jlc3BvbnNpdmVcclxuXHJcbiAgICB2YXIgaGVhZGVySGVpZ2h0ID0galF1ZXJ5KCdoZWFkZXInKS5oZWlnaHQoKTtcclxuICAgIGpRdWVyeSgnLnNsaWRlcl9maWd1cmVfYmxvY2sgLmNvbnRhaW5lcicpLmNzcygnbWFyZ2luLXRvcCcsIGhlYWRlckhlaWdodCtcInB4XCIpO1xyXG4gICAgalF1ZXJ5KCcuc2xpZGVyJykuY3NzKCdtYXJnaW4tdG9wJywgaGVhZGVySGVpZ2h0LTgrXCJweFwiKTtcclxuICAgIGpRdWVyeSh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICBpZiAoalF1ZXJ5KHdpbmRvdykud2lkdGgoKSA+IDEwMjQpIHtcclxuICAgICAgICAgICAgalF1ZXJ5KCcuYnVyZ2VyJykucmVtb3ZlQ2xhc3MoJ2J1cmdlcl9yb3RhdGUnKTtcclxuICAgICAgICAgICAgalF1ZXJ5KCcubW9iaWxlX21lbnUnKS5yZW1vdmVDbGFzcygnb3Blbl9tb2JpbGVfbWVudScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoZWFkZXJIZWlnaHQgPSBqUXVlcnkoJ2hlYWRlcicpLmhlaWdodCgpO1xyXG4gICAgICAgIGpRdWVyeSgnLnNsaWRlcl9maWd1cmVfYmxvY2sgLmNvbnRhaW5lcicpLmNzcygnbWFyZ2luLXRvcCcsIGhlYWRlckhlaWdodCtcInB4XCIpO1xyXG4gICAgICAgIGpRdWVyeSgnLnNsaWRlcicpLmNzcygnbWFyZ2luLXRvcCcsIGhlYWRlckhlaWdodC04K1wicHhcIik7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBtYWluX2Nhcm91c2VsXHJcblxyXG4gICAgalF1ZXJ5KCcuc2xpZGVyJykub3dsQ2Fyb3VzZWwoe1xyXG4gICAgICAgIGxvb3A6dHJ1ZSxcclxuICAgICAgICBpdGVtczogMSxcclxuICAgICAgICBkb250OiB0cnVlLFxyXG4gICAgICAgIG1hcmdpbjogMCxcclxuICAgICAgICBuYXY6IGZhbHNlLFxyXG4gICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgIGF1dG9wbGF5VGltZW91dDogNTAwMCxcclxuICAgICAgICBhdXRvcGxheUhvdmVyUGF1c2U6IHRydWUsXHJcbiAgICAgICAgZmFsbGJhY2tFYXNpbmc6ICdlYXNlLWluLW91dCdcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIG1hc29ucnlfZ2FsbGVyeVxyXG5cclxuICAgIGpRdWVyeSgnLm1hc29ucnknKS5pbWFnZXNMb2FkZWQoIGZ1bmN0aW9uKCkge1xyXG4gICAgalF1ZXJ5KCcubWFzb25yeScpLm1hc29ucnkoe1xyXG4gICAgICAgIGl0ZW1TZWxlY3RvcjogJy5ncmlkLWl0ZW0nLFxyXG4gICAgICAgIGNvbHVtbldpZHRoOiAnLmdyaWQtc2l6ZXInLFxyXG4gICAgICAgIHBlcmNlbnRQb3NpdGlvbjogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICAgICAgalF1ZXJ5KCcubWFzb25yeScpLmFkZENsYXNzKCdsb2FkZWQnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGxpZ2h0Ym94XHJcblxyXG4gICAgbGlnaHRib3gub3B0aW9uKHtcclxuICAgICAgICAncmVzaXplRHVyYXRpb24nOiAzMDAsXHJcbiAgICAgICAgJ3dyYXBBcm91bmQnOiB0cnVlLFxyXG4gICAgICAgICdwb3NpdGlvbkZyb21Ub3AnOiAxNTBcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIG1vYmlsZV9tZW51XHJcblxyXG4gICAgalF1ZXJ5KCcuYnVyZ2VyJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkodGhpcykudG9nZ2xlQ2xhc3MoJ2J1cmdlcl9yb3RhdGUnKTtcclxuICAgICAgICBqUXVlcnkoJy5tb2JpbGVfbWVudScpLnRvZ2dsZUNsYXNzKCdvcGVuX21vYmlsZV9tZW51Jyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBqUXVlcnkoJy5tb2JpbGVfbWVudSB1bCBsaTpudGgtY2hpbGQoNSkgPiBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkoJy5tb2JpbGVfbWVudSB1bCBsaTpudGgtY2hpbGQoNSkgdWwnKS5zbGlkZVRvZ2dsZSgpO1xyXG4gICAgICAgIGpRdWVyeSgnLm1vYmlsZV9tZW51IHVsIGxpOm50aC1jaGlsZCg1KSA+IGEnKS50b2dnbGVDbGFzcygndG9nZ2xlZCcpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIG1lbnVfaXRlbV9hbmltYXRpb25cclxuXHJcbiAgICBqUXVlcnkoJy5yZXNwb25zaXZlX21lbnUgdWwgbGknKS5ob3ZlcihmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICBqUXVlcnkodGhpcykuYWRkQ2xhc3MoJ2JvdW5jZScpO1xyXG4gICAgfSxmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS5yZW1vdmVDbGFzcygnYm91bmNlJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBqUXVlcnkoJy5yZXNwb25zaXZlX21lbnUgdWw6Zmlyc3QtY2hpbGQgbGk6bnRoLWNoaWxkKDUpJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkoJy5zdWItbWVudScpLnRvZ2dsZUNsYXNzKCdvcGVuX3N1YicpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChqUXVlcnkoZG9jdW1lbnQpLnNjcm9sbFRvcCgpPjAmJiFqUXVlcnkoJ2RpdicpLmlzKCcuaW5uZXJfcGFnZScpKSB7XHJcbiAgICAgICAgalF1ZXJ5KCcuZmlndXJlJykuYWRkQ2xhc3MoJ2xlZnRfZmlndXJlJyk7XHJcbiAgICAgICAgalF1ZXJ5KCcucmVzcG9uc2l2ZV9tZW51IHVsJykuYWRkQ2xhc3MoJ21lbnVfdG9fdG9wJyk7XHJcblxyXG4gICAgICAgIGlmIChqUXVlcnkod2luZG93KS53aWR0aCgpID4gMTAyNClcclxuICAgICAgICBqUXVlcnkoJy5sb2dvJykuZmFkZU91dCgyMDApO1xyXG4gICAgfVxyXG5cclxuICAgIGpRdWVyeSh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmIChqUXVlcnkoZG9jdW1lbnQpLnNjcm9sbFRvcCgpPjAmJiFqUXVlcnkoJ2RpdicpLmlzKCcuaW5uZXJfcGFnZScpKSB7XHJcbiAgICAgICAgICAgIGpRdWVyeSgnLmZpZ3VyZScpLmFkZENsYXNzKCdsZWZ0X2ZpZ3VyZScpO1xyXG4gICAgICAgICAgICBqUXVlcnkoJy5yZXNwb25zaXZlX21lbnUgdWwnKS5hZGRDbGFzcygnbWVudV90b190b3AnKTtcclxuICAgICAgICAgICAgaWYgKGpRdWVyeSh3aW5kb3cpLndpZHRoKCkgPiAxMDI0KVxyXG4gICAgICAgICAgICBqUXVlcnkoJy5sb2dvJykuZmFkZU91dCgyMDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgalF1ZXJ5KCcucmVzcG9uc2l2ZV9tZW51IHVsICcpLnJlbW92ZUNsYXNzKCdtZW51X3RvX3RvcCcpO1xyXG4gICAgICAgICAgICBqUXVlcnkoJy5maWd1cmUnKS5yZW1vdmVDbGFzcygnbGVmdF9maWd1cmUnKTtcclxuICAgICAgICAgICAgaWYgKGpRdWVyeSh3aW5kb3cpLndpZHRoKCk+NzY4JiYhalF1ZXJ5KCdkaXYnKS5pcygnLmlubmVyX3BhZ2UnKSkge1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KCcubG9nbycpLmZhZGVJbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gZm9vdGVyX3NvY2lhbF9ob3ZlclxyXG5cclxuICAgIGpRdWVyeSgnZm9vdGVyIC5mb290ZXJfaXRlbTpsYXN0LWNoaWxkIHVsIGxpIGEnKS5ob3ZlcihmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS5hZGRDbGFzcygnYm91bmNlJylcclxuICAgIH0sZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkodGhpcykucmVtb3ZlQ2xhc3MoJ2JvdW5jZScpXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyB0YWJcclxuXHJcbiAgICB2YXIgdGFiID0galF1ZXJ5KCcudGFiJyk7XHJcbiAgICB2YXIgbWVudSA9IGpRdWVyeSgnLm1lbnVfb2xkJyk7XHJcbiAgICB2YXIgbWVudUFycmF5ID0gbWVudTtcclxuICAgIHZhciB0YWJJbmRleDtcclxuXHJcblxyXG4gICAgdGFiLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGFiLnJlbW92ZUNsYXNzKCdjdXJyZW50LXRhYicpO1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS5hZGRDbGFzcygnY3VycmVudC10YWInKTtcclxuICAgICAgICBtZW51QXJyYXkuZmFkZU91dCgwKTtcclxuICAgICAgICB0YWJJbmRleCA9IGpRdWVyeSh0aGlzKS5pbmRleCgpO1xyXG4gICAgICAgIGpRdWVyeShtZW51QXJyYXlbdGFiSW5kZXhdKS5mYWRlSW4oKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0YWJJbmRleCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coalF1ZXJ5KG1lbnVBcnJheVt0YWJJbmRleF0pKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIG5ld3NfY29sb3JcclxuXHJcbiAgICB2YXIgbmV3c0FycmF5ID0galF1ZXJ5KCcubmV3c19pdGVtIC5kZXNjcmlwdGlvbicpO1xyXG4gICAgdmFyIGRhdGVBcnJheSA9IGpRdWVyeSgnLm5ld3NfaXRlbSAuZGF0ZScpO1xyXG4gICAgdmFyIGNvbG9yID0gWycjYjFhNDAwJywgJyNhZDMzZmEnLCAnIzAxNTU5ZScsICcjYzkwMGIwJywgJyNmZmE0MWInLCAnIzAwOWUwMCddO1xyXG4gICAgdmFyIGsgPSAzO1xyXG4gICAgdmFyIGkgPSAwO1xyXG5cclxuICAgIGZvciAoazsgayA8PSBuZXdzQXJyYXkubGVuZ3RoO2srKykge1xyXG4gICAgICAgIGlmIChpPjUpIHtcclxuICAgICAgICAgICAgaSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGpRdWVyeShuZXdzQXJyYXlba10pLmNzcygnYmFja2dyb3VuZCcsIGNvbG9yW2ldKTtcclxuICAgICAgICBqUXVlcnkoZGF0ZUFycmF5W2tdKS5jc3MoJ2JhY2tncm91bmQnLCBjb2xvcltpXSk7XHJcbiAgICAgICAgaSsrO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbi8vIHNjcm9sbF9hbmltYXRlX2luaXRcclxuXHJcbm5ldyBXT1coKS5pbml0KCk7XHJcblxyXG4vLyBtYXBcclxuXHJcbnZhciBtYXA7XHJcbmZ1bmN0aW9uIGluaXRNYXAoKSB7XHJcbiAgICB2YXIgbXlMYXRMbmcgPSB7bGF0OiA1MC40MjY1Njg3NCwgbG5nOiAzMC41MzgzNjMxNn07XHJcblxyXG4gICAgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJyksIHtcclxuICAgICAgICBjZW50ZXI6IG15TGF0TG5nLFxyXG4gICAgICAgIHpvb206IDE3LFxyXG4gICAgICAgIG1hcFR5cGVDb250cm9sOiBmYWxzZSxcclxuICAgICAgICBzY3JvbGx3aGVlbDogZmFsc2VcclxuICAgIH0pO1xyXG5cclxuICAgIG1hcC5zZXRPcHRpb25zKHtzdHlsZXM6IHN0eWxlc1snZGVmYXVsdCddfSk7XHJcblxyXG4gICAgdmFyIG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xyXG4gICAgICAgIG1hcDogbWFwLFxyXG4gICAgICAgIHBvc2l0aW9uOiBteUxhdExuZyxcclxuICAgICAgICB0aXRsZTogJ1JlZ2VudCBIaWxsJ1xyXG4gICAgfSk7XHJcblxyXG59Il0sImZpbGUiOiJzY3JpcHQuanMifQ==
