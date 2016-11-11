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

        jQuery(document).mouseup(function (e) {
            var mobileMenu = jQuery('.mobile_menu');
            var mobileButton = jQuery('.burger i');
            if (!mobileButton.is(e.target) && !mobileMenu.is(e.target) && mobileMenu.has(e.target).length == 0) {
                jQuery('.burger').removeClass('burger_rotate');
                jQuery('.mobile_menu').removeClass('open_mobile_menu');
            }
        });
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsialF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG5cclxuICAgIC8vIGxvYWRfc2xpZGVyXHJcblxyXG4gICAgalF1ZXJ5KCcuc2xpZGVyJykuaW1hZ2VzTG9hZGVkKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KCcuc2xpZGVyJykuYWRkQ2xhc3MoJ2xvYWRlZCcpO1xyXG4gICAgICAgIGpRdWVyeSgnLmZpZ3VyZScpLmFkZENsYXNzKCdsb2FkZWQnKTtcclxuICAgICAgICBqUXVlcnkoJ2hlYWRlcicpLmFkZENsYXNzKCdsb2FkZWQnKTtcclxuICAgICAgICBqUXVlcnkoJy5ibG9nX2Jsb2NrJykuYWRkQ2xhc3MoJ2xvYWRlZCcpO1xyXG4gICAgICAgIGpRdWVyeSgnLmNvbnRhY3RfYmxvY2snKS5hZGRDbGFzcygnbG9hZGVkJyk7XHJcbiAgICAgICAgalF1ZXJ5KCcuYWJvdXRfdXNfYmxvY2snKS5hZGRDbGFzcygnbG9hZGVkJyk7XHJcbiAgICAgICAgalF1ZXJ5KCcudGVhbV9ibG9jaycpLmFkZENsYXNzKCdsb2FkZWQnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vbGlmdFxyXG5cclxuICAgIGpRdWVyeSgnI3Njcm9sbHVwJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkoJ2JvZHksaHRtbCcpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICBzY3JvbGxUb3A6IDBcclxuICAgICAgICB9LCA0MDApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgalF1ZXJ5KHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYgKGpRdWVyeShkb2N1bWVudCkuc2Nyb2xsVG9wKCk+NjAwKSB7XHJcbiAgICAgICAgICAgIGpRdWVyeSgnLnNjcm9sbHVwX2NvbnRhaW5lcicpLmZhZGVJbig1MDApO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBqUXVlcnkoJy5zY3JvbGx1cF9jb250YWluZXInKS5mYWRlT3V0KDUwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gaGVhZGVyX3Jlc3BvbnNpdmVcclxuXHJcbiAgICB2YXIgaGVhZGVySGVpZ2h0ID0galF1ZXJ5KCdoZWFkZXInKS5oZWlnaHQoKTtcclxuICAgIGpRdWVyeSgnLnNsaWRlcl9maWd1cmVfYmxvY2sgLmNvbnRhaW5lcicpLmNzcygnbWFyZ2luLXRvcCcsIGhlYWRlckhlaWdodCtcInB4XCIpO1xyXG4gICAgalF1ZXJ5KCcuc2xpZGVyJykuY3NzKCdtYXJnaW4tdG9wJywgaGVhZGVySGVpZ2h0LTgrXCJweFwiKTtcclxuICAgIGpRdWVyeSh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICBpZiAoalF1ZXJ5KHdpbmRvdykud2lkdGgoKSA+IDEwMjQpIHtcclxuICAgICAgICAgICAgalF1ZXJ5KCcuYnVyZ2VyJykucmVtb3ZlQ2xhc3MoJ2J1cmdlcl9yb3RhdGUnKTtcclxuICAgICAgICAgICAgalF1ZXJ5KCcubW9iaWxlX21lbnUnKS5yZW1vdmVDbGFzcygnb3Blbl9tb2JpbGVfbWVudScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoZWFkZXJIZWlnaHQgPSBqUXVlcnkoJ2hlYWRlcicpLmhlaWdodCgpO1xyXG4gICAgICAgIGpRdWVyeSgnLnNsaWRlcl9maWd1cmVfYmxvY2sgLmNvbnRhaW5lcicpLmNzcygnbWFyZ2luLXRvcCcsIGhlYWRlckhlaWdodCtcInB4XCIpO1xyXG4gICAgICAgIGpRdWVyeSgnLnNsaWRlcicpLmNzcygnbWFyZ2luLXRvcCcsIGhlYWRlckhlaWdodC04K1wicHhcIik7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBtYWluX2Nhcm91c2VsXHJcblxyXG4gICAgalF1ZXJ5KCcuc2xpZGVyJykub3dsQ2Fyb3VzZWwoe1xyXG4gICAgICAgIGxvb3A6dHJ1ZSxcclxuICAgICAgICBpdGVtczogMSxcclxuICAgICAgICBkb250OiB0cnVlLFxyXG4gICAgICAgIG1hcmdpbjogMCxcclxuICAgICAgICBuYXY6IGZhbHNlLFxyXG4gICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgIGF1dG9wbGF5VGltZW91dDogNTAwMCxcclxuICAgICAgICBhdXRvcGxheUhvdmVyUGF1c2U6IHRydWUsXHJcbiAgICAgICAgZmFsbGJhY2tFYXNpbmc6ICdlYXNlLWluLW91dCdcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIG1hc29ucnlfZ2FsbGVyeVxyXG5cclxuICAgIGpRdWVyeSgnLm1hc29ucnknKS5pbWFnZXNMb2FkZWQoIGZ1bmN0aW9uKCkge1xyXG4gICAgalF1ZXJ5KCcubWFzb25yeScpLm1hc29ucnkoe1xyXG4gICAgICAgIGl0ZW1TZWxlY3RvcjogJy5ncmlkLWl0ZW0nLFxyXG4gICAgICAgIGNvbHVtbldpZHRoOiAnLmdyaWQtc2l6ZXInLFxyXG4gICAgICAgIHBlcmNlbnRQb3NpdGlvbjogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICAgICAgalF1ZXJ5KCcubWFzb25yeScpLmFkZENsYXNzKCdsb2FkZWQnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGxpZ2h0Ym94XHJcblxyXG4gICAgbGlnaHRib3gub3B0aW9uKHtcclxuICAgICAgICAncmVzaXplRHVyYXRpb24nOiAzMDAsXHJcbiAgICAgICAgJ3dyYXBBcm91bmQnOiB0cnVlLFxyXG4gICAgICAgICdwb3NpdGlvbkZyb21Ub3AnOiAxNTBcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIG1vYmlsZV9tZW51XHJcblxyXG4gICAgalF1ZXJ5KCcuYnVyZ2VyJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkodGhpcykudG9nZ2xlQ2xhc3MoJ2J1cmdlcl9yb3RhdGUnKTtcclxuICAgICAgICBqUXVlcnkoJy5tb2JpbGVfbWVudScpLnRvZ2dsZUNsYXNzKCdvcGVuX21vYmlsZV9tZW51Jyk7XHJcblxyXG4gICAgICAgIGpRdWVyeShkb2N1bWVudCkubW91c2V1cChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB2YXIgbW9iaWxlTWVudSA9IGpRdWVyeSgnLm1vYmlsZV9tZW51Jyk7XHJcbiAgICAgICAgICAgIHZhciBtb2JpbGVCdXR0b24gPSBqUXVlcnkoJy5idXJnZXIgaScpO1xyXG4gICAgICAgICAgICBpZiAoIW1vYmlsZUJ1dHRvbi5pcyhlLnRhcmdldCkgJiYgIW1vYmlsZU1lbnUuaXMoZS50YXJnZXQpICYmIG1vYmlsZU1lbnUuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KCcuYnVyZ2VyJykucmVtb3ZlQ2xhc3MoJ2J1cmdlcl9yb3RhdGUnKTtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSgnLm1vYmlsZV9tZW51JykucmVtb3ZlQ2xhc3MoJ29wZW5fbW9iaWxlX21lbnUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgalF1ZXJ5KCcubW9iaWxlX21lbnUgdWwgbGk6bnRoLWNoaWxkKDUpID4gYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KCcubW9iaWxlX21lbnUgdWwgbGk6bnRoLWNoaWxkKDUpIHVsJykuc2xpZGVUb2dnbGUoKTtcclxuICAgICAgICBqUXVlcnkoJy5tb2JpbGVfbWVudSB1bCBsaTpudGgtY2hpbGQoNSkgPiBhJykudG9nZ2xlQ2xhc3MoJ3RvZ2dsZWQnKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBtZW51X2l0ZW1fYW5pbWF0aW9uXHJcblxyXG4gICAgalF1ZXJ5KCcucmVzcG9uc2l2ZV9tZW51IHVsIGxpJykuaG92ZXIoZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLmFkZENsYXNzKCdib3VuY2UnKTtcclxuICAgIH0sZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkodGhpcykucmVtb3ZlQ2xhc3MoJ2JvdW5jZScpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgalF1ZXJ5KCcucmVzcG9uc2l2ZV9tZW51IHVsOmZpcnN0LWNoaWxkIGxpOm50aC1jaGlsZCg1KScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KCcuc3ViLW1lbnUnKS50b2dnbGVDbGFzcygnb3Blbl9zdWInKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoalF1ZXJ5KGRvY3VtZW50KS5zY3JvbGxUb3AoKT4wJiYhalF1ZXJ5KCdkaXYnKS5pcygnLmlubmVyX3BhZ2UnKSkge1xyXG4gICAgICAgIGpRdWVyeSgnLmZpZ3VyZScpLmFkZENsYXNzKCdsZWZ0X2ZpZ3VyZScpO1xyXG4gICAgICAgIGpRdWVyeSgnLnJlc3BvbnNpdmVfbWVudSB1bCcpLmFkZENsYXNzKCdtZW51X3RvX3RvcCcpO1xyXG5cclxuICAgICAgICBpZiAoalF1ZXJ5KHdpbmRvdykud2lkdGgoKSA+IDEwMjQpXHJcbiAgICAgICAgalF1ZXJ5KCcubG9nbycpLmZhZGVPdXQoMjAwKTtcclxuICAgIH1cclxuXHJcbiAgICBqUXVlcnkod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKXtcclxuICAgICAgICBpZiAoalF1ZXJ5KGRvY3VtZW50KS5zY3JvbGxUb3AoKT4wJiYhalF1ZXJ5KCdkaXYnKS5pcygnLmlubmVyX3BhZ2UnKSkge1xyXG4gICAgICAgICAgICBqUXVlcnkoJy5maWd1cmUnKS5hZGRDbGFzcygnbGVmdF9maWd1cmUnKTtcclxuICAgICAgICAgICAgalF1ZXJ5KCcucmVzcG9uc2l2ZV9tZW51IHVsJykuYWRkQ2xhc3MoJ21lbnVfdG9fdG9wJyk7XHJcbiAgICAgICAgICAgIGlmIChqUXVlcnkod2luZG93KS53aWR0aCgpID4gMTAyNClcclxuICAgICAgICAgICAgalF1ZXJ5KCcubG9nbycpLmZhZGVPdXQoMjAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGpRdWVyeSgnLnJlc3BvbnNpdmVfbWVudSB1bCAnKS5yZW1vdmVDbGFzcygnbWVudV90b190b3AnKTtcclxuICAgICAgICAgICAgalF1ZXJ5KCcuZmlndXJlJykucmVtb3ZlQ2xhc3MoJ2xlZnRfZmlndXJlJyk7XHJcbiAgICAgICAgICAgIGlmIChqUXVlcnkod2luZG93KS53aWR0aCgpPjc2OCYmIWpRdWVyeSgnZGl2JykuaXMoJy5pbm5lcl9wYWdlJykpIHtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSgnLmxvZ28nKS5mYWRlSW4oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGZvb3Rlcl9zb2NpYWxfaG92ZXJcclxuXHJcbiAgICBqUXVlcnkoJ2Zvb3RlciAuZm9vdGVyX2l0ZW06bGFzdC1jaGlsZCB1bCBsaSBhJykuaG92ZXIoZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkodGhpcykuYWRkQ2xhc3MoJ2JvdW5jZScpXHJcbiAgICB9LGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLnJlbW92ZUNsYXNzKCdib3VuY2UnKVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gdGFiXHJcblxyXG4gICAgdmFyIHRhYiA9IGpRdWVyeSgnLnRhYicpO1xyXG4gICAgdmFyIG1lbnUgPSBqUXVlcnkoJy5tZW51X29sZCcpO1xyXG4gICAgdmFyIG1lbnVBcnJheSA9IG1lbnU7XHJcbiAgICB2YXIgdGFiSW5kZXg7XHJcblxyXG5cclxuICAgIHRhYi5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRhYi5yZW1vdmVDbGFzcygnY3VycmVudC10YWInKTtcclxuICAgICAgICBqUXVlcnkodGhpcykuYWRkQ2xhc3MoJ2N1cnJlbnQtdGFiJyk7XHJcbiAgICAgICAgbWVudUFycmF5LmZhZGVPdXQoMCk7XHJcbiAgICAgICAgdGFiSW5kZXggPSBqUXVlcnkodGhpcykuaW5kZXgoKTtcclxuICAgICAgICBqUXVlcnkobWVudUFycmF5W3RhYkluZGV4XSkuZmFkZUluKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGFiSW5kZXgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGpRdWVyeShtZW51QXJyYXlbdGFiSW5kZXhdKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBuZXdzX2NvbG9yXHJcblxyXG4gICAgdmFyIG5ld3NBcnJheSA9IGpRdWVyeSgnLm5ld3NfaXRlbSAuZGVzY3JpcHRpb24nKTtcclxuICAgIHZhciBkYXRlQXJyYXkgPSBqUXVlcnkoJy5uZXdzX2l0ZW0gLmRhdGUnKTtcclxuICAgIHZhciBjb2xvciA9IFsnI2IxYTQwMCcsICcjYWQzM2ZhJywgJyMwMTU1OWUnLCAnI2M5MDBiMCcsICcjZmZhNDFiJywgJyMwMDllMDAnXTtcclxuICAgIHZhciBrID0gMztcclxuICAgIHZhciBpID0gMDtcclxuXHJcbiAgICBmb3IgKGs7IGsgPD0gbmV3c0FycmF5Lmxlbmd0aDtrKyspIHtcclxuICAgICAgICBpZiAoaT41KSB7XHJcbiAgICAgICAgICAgIGkgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBqUXVlcnkobmV3c0FycmF5W2tdKS5jc3MoJ2JhY2tncm91bmQnLCBjb2xvcltpXSk7XHJcbiAgICAgICAgalF1ZXJ5KGRhdGVBcnJheVtrXSkuY3NzKCdiYWNrZ3JvdW5kJywgY29sb3JbaV0pO1xyXG4gICAgICAgIGkrKztcclxuICAgIH1cclxufSk7XHJcblxyXG4vLyBzY3JvbGxfYW5pbWF0ZV9pbml0XHJcblxyXG5uZXcgV09XKCkuaW5pdCgpO1xyXG5cclxuLy8gbWFwXHJcblxyXG52YXIgbWFwO1xyXG5mdW5jdGlvbiBpbml0TWFwKCkge1xyXG4gICAgdmFyIG15TGF0TG5nID0ge2xhdDogNTAuNDI2NTY4NzQsIGxuZzogMzAuNTM4MzYzMTZ9O1xyXG5cclxuICAgIG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcCcpLCB7XHJcbiAgICAgICAgY2VudGVyOiBteUxhdExuZyxcclxuICAgICAgICB6b29tOiAxNyxcclxuICAgICAgICBtYXBUeXBlQ29udHJvbDogZmFsc2UsXHJcbiAgICAgICAgc2Nyb2xsd2hlZWw6IGZhbHNlXHJcbiAgICB9KTtcclxuXHJcbiAgICBtYXAuc2V0T3B0aW9ucyh7c3R5bGVzOiBzdHlsZXNbJ2RlZmF1bHQnXX0pO1xyXG5cclxuICAgIHZhciBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcclxuICAgICAgICBtYXA6IG1hcCxcclxuICAgICAgICBwb3NpdGlvbjogbXlMYXRMbmcsXHJcbiAgICAgICAgdGl0bGU6ICdSZWdlbnQgSGlsbCdcclxuICAgIH0pO1xyXG5cclxufSJdLCJmaWxlIjoic2NyaXB0LmpzIn0=
