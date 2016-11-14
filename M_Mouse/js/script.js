jQuery(document).ready(function(){


    if (jQuery('.inner_page').is('body')) {
        setTimeout(delay, 2000);
    }

    function delay() {
        jQuery('.inner_page .responsive_menu').addClass('top_menu');
    }

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

    jQuery('.mobile_menu > menu > ul li:nth-child(2) > a').on('click', function(){
        jQuery('.mobile_menu > menu > ul li:nth-child(2) ul').slideToggle();
        jQuery('.mobile_menu > menu > ul > li:nth-child(2) > a').toggleClass('toggled');
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

// if (jQuery('div').is('#map')) {

    var map;

    function initMap() {
        var myLatLng = {lat: 50.42656874, lng: 30.53836316};

        map = new google.maps.Map(document.getElementById('map'), {
            center: myLatLng,
            zoom: 17,
            mapTypeControl: false,
            scrollwheel: false
        });

        // map.setOptions({styles: styles['default']});

        var marker = new google.maps.Marker({
            map: map,
            position: myLatLng,
            title: 'Regent Hill'
        });

    }
// }
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsialF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG5cclxuXHJcbiAgICBpZiAoalF1ZXJ5KCcuaW5uZXJfcGFnZScpLmlzKCdib2R5JykpIHtcclxuICAgICAgICBzZXRUaW1lb3V0KGRlbGF5LCAyMDAwKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkZWxheSgpIHtcclxuICAgICAgICBqUXVlcnkoJy5pbm5lcl9wYWdlIC5yZXNwb25zaXZlX21lbnUnKS5hZGRDbGFzcygndG9wX21lbnUnKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBsb2FkX3NsaWRlclxyXG5cclxuICAgIGpRdWVyeSgnLnNsaWRlcicpLmltYWdlc0xvYWRlZChmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeSgnLnNsaWRlcicpLmFkZENsYXNzKCdsb2FkZWQnKTtcclxuICAgICAgICBqUXVlcnkoJy5maWd1cmUnKS5hZGRDbGFzcygnbG9hZGVkJyk7XHJcbiAgICAgICAgalF1ZXJ5KCdoZWFkZXInKS5hZGRDbGFzcygnbG9hZGVkJyk7XHJcbiAgICAgICAgalF1ZXJ5KCcuYmxvZ19ibG9jaycpLmFkZENsYXNzKCdsb2FkZWQnKTtcclxuICAgICAgICBqUXVlcnkoJy5jb250YWN0X2Jsb2NrJykuYWRkQ2xhc3MoJ2xvYWRlZCcpO1xyXG4gICAgICAgIGpRdWVyeSgnLmFib3V0X3VzX2Jsb2NrJykuYWRkQ2xhc3MoJ2xvYWRlZCcpO1xyXG4gICAgICAgIGpRdWVyeSgnLnRlYW1fYmxvY2snKS5hZGRDbGFzcygnbG9hZGVkJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL2xpZnRcclxuXHJcbiAgICBqUXVlcnkoJyNzY3JvbGx1cCcpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KCdib2R5LGh0bWwnKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgc2Nyb2xsVG9wOiAwXHJcbiAgICAgICAgfSwgNDAwKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGpRdWVyeSh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmIChqUXVlcnkoZG9jdW1lbnQpLnNjcm9sbFRvcCgpPjYwMCkge1xyXG4gICAgICAgICAgICBqUXVlcnkoJy5zY3JvbGx1cF9jb250YWluZXInKS5mYWRlSW4oNTAwKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgalF1ZXJ5KCcuc2Nyb2xsdXBfY29udGFpbmVyJykuZmFkZU91dCg1MDApO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGhlYWRlcl9yZXNwb25zaXZlXHJcblxyXG4gICAgdmFyIGhlYWRlckhlaWdodCA9IGpRdWVyeSgnaGVhZGVyJykuaGVpZ2h0KCk7XHJcbiAgICBqUXVlcnkoJy5zbGlkZXJfZmlndXJlX2Jsb2NrIC5jb250YWluZXInKS5jc3MoJ21hcmdpbi10b3AnLCBoZWFkZXJIZWlnaHQrXCJweFwiKTtcclxuICAgIGpRdWVyeSgnLnNsaWRlcicpLmNzcygnbWFyZ2luLXRvcCcsIGhlYWRlckhlaWdodC04K1wicHhcIik7XHJcbiAgICBqUXVlcnkod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgaWYgKGpRdWVyeSh3aW5kb3cpLndpZHRoKCkgPiAxMDI0KSB7XHJcbiAgICAgICAgICAgIGpRdWVyeSgnLmJ1cmdlcicpLnJlbW92ZUNsYXNzKCdidXJnZXJfcm90YXRlJyk7XHJcbiAgICAgICAgICAgIGpRdWVyeSgnLm1vYmlsZV9tZW51JykucmVtb3ZlQ2xhc3MoJ29wZW5fbW9iaWxlX21lbnUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaGVhZGVySGVpZ2h0ID0galF1ZXJ5KCdoZWFkZXInKS5oZWlnaHQoKTtcclxuICAgICAgICBqUXVlcnkoJy5zbGlkZXJfZmlndXJlX2Jsb2NrIC5jb250YWluZXInKS5jc3MoJ21hcmdpbi10b3AnLCBoZWFkZXJIZWlnaHQrXCJweFwiKTtcclxuICAgICAgICBqUXVlcnkoJy5zbGlkZXInKS5jc3MoJ21hcmdpbi10b3AnLCBoZWFkZXJIZWlnaHQtOCtcInB4XCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gbWFpbl9jYXJvdXNlbFxyXG5cclxuICAgIGpRdWVyeSgnLnNsaWRlcicpLm93bENhcm91c2VsKHtcclxuICAgICAgICBsb29wOnRydWUsXHJcbiAgICAgICAgaXRlbXM6IDEsXHJcbiAgICAgICAgZG9udDogdHJ1ZSxcclxuICAgICAgICBtYXJnaW46IDAsXHJcbiAgICAgICAgbmF2OiBmYWxzZSxcclxuICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICBhdXRvcGxheVRpbWVvdXQ6IDUwMDAsXHJcbiAgICAgICAgYXV0b3BsYXlIb3ZlclBhdXNlOiB0cnVlLFxyXG4gICAgICAgIGZhbGxiYWNrRWFzaW5nOiAnZWFzZS1pbi1vdXQnXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBtYXNvbnJ5X2dhbGxlcnlcclxuXHJcbiAgICBqUXVlcnkoJy5tYXNvbnJ5JykuaW1hZ2VzTG9hZGVkKCBmdW5jdGlvbigpIHtcclxuICAgIGpRdWVyeSgnLm1hc29ucnknKS5tYXNvbnJ5KHtcclxuICAgICAgICBpdGVtU2VsZWN0b3I6ICcuZ3JpZC1pdGVtJyxcclxuICAgICAgICBjb2x1bW5XaWR0aDogJy5ncmlkLXNpemVyJyxcclxuICAgICAgICBwZXJjZW50UG9zaXRpb246IHRydWVcclxuICAgIH0pO1xyXG4gICAgICAgIGpRdWVyeSgnLm1hc29ucnknKS5hZGRDbGFzcygnbG9hZGVkJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBsaWdodGJveFxyXG5cclxuICAgIGxpZ2h0Ym94Lm9wdGlvbih7XHJcbiAgICAgICAgJ3Jlc2l6ZUR1cmF0aW9uJzogMzAwLFxyXG4gICAgICAgICd3cmFwQXJvdW5kJzogdHJ1ZSxcclxuICAgICAgICAncG9zaXRpb25Gcm9tVG9wJzogMTUwXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBtb2JpbGVfbWVudVxyXG5cclxuICAgIGpRdWVyeSgnLmJ1cmdlcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLnRvZ2dsZUNsYXNzKCdidXJnZXJfcm90YXRlJyk7XHJcbiAgICAgICAgalF1ZXJ5KCcubW9iaWxlX21lbnUnKS50b2dnbGVDbGFzcygnb3Blbl9tb2JpbGVfbWVudScpO1xyXG5cclxuICAgICAgICBqUXVlcnkoZG9jdW1lbnQpLm1vdXNldXAoZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgdmFyIG1vYmlsZU1lbnUgPSBqUXVlcnkoJy5tb2JpbGVfbWVudScpO1xyXG4gICAgICAgICAgICB2YXIgbW9iaWxlQnV0dG9uID0galF1ZXJ5KCcuYnVyZ2VyIGknKTtcclxuICAgICAgICAgICAgaWYgKCFtb2JpbGVCdXR0b24uaXMoZS50YXJnZXQpICYmICFtb2JpbGVNZW51LmlzKGUudGFyZ2V0KSAmJiBtb2JpbGVNZW51LmhhcyhlLnRhcmdldCkubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSgnLmJ1cmdlcicpLnJlbW92ZUNsYXNzKCdidXJnZXJfcm90YXRlJyk7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkoJy5tb2JpbGVfbWVudScpLnJlbW92ZUNsYXNzKCdvcGVuX21vYmlsZV9tZW51Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGpRdWVyeSgnLm1vYmlsZV9tZW51ID4gbWVudSA+IHVsIGxpOm50aC1jaGlsZCgyKSA+IGEnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeSgnLm1vYmlsZV9tZW51ID4gbWVudSA+IHVsIGxpOm50aC1jaGlsZCgyKSB1bCcpLnNsaWRlVG9nZ2xlKCk7XHJcbiAgICAgICAgalF1ZXJ5KCcubW9iaWxlX21lbnUgPiBtZW51ID4gdWwgPiBsaTpudGgtY2hpbGQoMikgPiBhJykudG9nZ2xlQ2xhc3MoJ3RvZ2dsZWQnKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBtZW51X2l0ZW1fYW5pbWF0aW9uXHJcblxyXG4gICAgalF1ZXJ5KCcucmVzcG9uc2l2ZV9tZW51IHVsIGxpJykuaG92ZXIoZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLmFkZENsYXNzKCdib3VuY2UnKTtcclxuICAgIH0sZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkodGhpcykucmVtb3ZlQ2xhc3MoJ2JvdW5jZScpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgalF1ZXJ5KCcucmVzcG9uc2l2ZV9tZW51IHVsOmZpcnN0LWNoaWxkIGxpOm50aC1jaGlsZCg1KScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KCcuc3ViLW1lbnUnKS50b2dnbGVDbGFzcygnb3Blbl9zdWInKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoalF1ZXJ5KGRvY3VtZW50KS5zY3JvbGxUb3AoKT4wJiYhalF1ZXJ5KCdkaXYnKS5pcygnLmlubmVyX3BhZ2UnKSkge1xyXG4gICAgICAgIGpRdWVyeSgnLmZpZ3VyZScpLmFkZENsYXNzKCdsZWZ0X2ZpZ3VyZScpO1xyXG4gICAgICAgIGpRdWVyeSgnLnJlc3BvbnNpdmVfbWVudSB1bCcpLmFkZENsYXNzKCdtZW51X3RvX3RvcCcpO1xyXG5cclxuICAgICAgICBpZiAoalF1ZXJ5KHdpbmRvdykud2lkdGgoKSA+IDEwMjQpXHJcbiAgICAgICAgalF1ZXJ5KCcubG9nbycpLmZhZGVPdXQoMjAwKTtcclxuICAgIH1cclxuXHJcbiAgICBqUXVlcnkod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKXtcclxuICAgICAgICBpZiAoalF1ZXJ5KGRvY3VtZW50KS5zY3JvbGxUb3AoKT4wJiYhalF1ZXJ5KCdkaXYnKS5pcygnLmlubmVyX3BhZ2UnKSkge1xyXG4gICAgICAgICAgICBqUXVlcnkoJy5maWd1cmUnKS5hZGRDbGFzcygnbGVmdF9maWd1cmUnKTtcclxuICAgICAgICAgICAgalF1ZXJ5KCcucmVzcG9uc2l2ZV9tZW51IHVsJykuYWRkQ2xhc3MoJ21lbnVfdG9fdG9wJyk7XHJcbiAgICAgICAgICAgIGlmIChqUXVlcnkod2luZG93KS53aWR0aCgpID4gMTAyNClcclxuICAgICAgICAgICAgalF1ZXJ5KCcubG9nbycpLmZhZGVPdXQoMjAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGpRdWVyeSgnLnJlc3BvbnNpdmVfbWVudSB1bCAnKS5yZW1vdmVDbGFzcygnbWVudV90b190b3AnKTtcclxuICAgICAgICAgICAgalF1ZXJ5KCcuZmlndXJlJykucmVtb3ZlQ2xhc3MoJ2xlZnRfZmlndXJlJyk7XHJcbiAgICAgICAgICAgIGlmIChqUXVlcnkod2luZG93KS53aWR0aCgpPjc2OCYmIWpRdWVyeSgnZGl2JykuaXMoJy5pbm5lcl9wYWdlJykpIHtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSgnLmxvZ28nKS5mYWRlSW4oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGZvb3Rlcl9zb2NpYWxfaG92ZXJcclxuXHJcbiAgICBqUXVlcnkoJ2Zvb3RlciAuZm9vdGVyX2l0ZW06bGFzdC1jaGlsZCB1bCBsaSBhJykuaG92ZXIoZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkodGhpcykuYWRkQ2xhc3MoJ2JvdW5jZScpXHJcbiAgICB9LGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLnJlbW92ZUNsYXNzKCdib3VuY2UnKVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gdGFiXHJcblxyXG4gICAgdmFyIHRhYiA9IGpRdWVyeSgnLnRhYicpO1xyXG4gICAgdmFyIG1lbnUgPSBqUXVlcnkoJy5tZW51X29sZCcpO1xyXG4gICAgdmFyIG1lbnVBcnJheSA9IG1lbnU7XHJcbiAgICB2YXIgdGFiSW5kZXg7XHJcblxyXG5cclxuICAgIHRhYi5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRhYi5yZW1vdmVDbGFzcygnY3VycmVudC10YWInKTtcclxuICAgICAgICBqUXVlcnkodGhpcykuYWRkQ2xhc3MoJ2N1cnJlbnQtdGFiJyk7XHJcbiAgICAgICAgbWVudUFycmF5LmZhZGVPdXQoMCk7XHJcbiAgICAgICAgdGFiSW5kZXggPSBqUXVlcnkodGhpcykuaW5kZXgoKTtcclxuICAgICAgICBqUXVlcnkobWVudUFycmF5W3RhYkluZGV4XSkuZmFkZUluKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGFiSW5kZXgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGpRdWVyeShtZW51QXJyYXlbdGFiSW5kZXhdKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBuZXdzX2NvbG9yXHJcblxyXG4gICAgdmFyIG5ld3NBcnJheSA9IGpRdWVyeSgnLm5ld3NfaXRlbSAuZGVzY3JpcHRpb24nKTtcclxuICAgIHZhciBkYXRlQXJyYXkgPSBqUXVlcnkoJy5uZXdzX2l0ZW0gLmRhdGUnKTtcclxuICAgIHZhciBjb2xvciA9IFsnI2IxYTQwMCcsICcjYWQzM2ZhJywgJyMwMTU1OWUnLCAnI2M5MDBiMCcsICcjZmZhNDFiJywgJyMwMDllMDAnXTtcclxuICAgIHZhciBrID0gMztcclxuICAgIHZhciBpID0gMDtcclxuXHJcbiAgICBmb3IgKGs7IGsgPD0gbmV3c0FycmF5Lmxlbmd0aDtrKyspIHtcclxuICAgICAgICBpZiAoaT41KSB7XHJcbiAgICAgICAgICAgIGkgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBqUXVlcnkobmV3c0FycmF5W2tdKS5jc3MoJ2JhY2tncm91bmQnLCBjb2xvcltpXSk7XHJcbiAgICAgICAgalF1ZXJ5KGRhdGVBcnJheVtrXSkuY3NzKCdiYWNrZ3JvdW5kJywgY29sb3JbaV0pO1xyXG4gICAgICAgIGkrKztcclxuICAgIH1cclxufSk7XHJcblxyXG4vLyBzY3JvbGxfYW5pbWF0ZV9pbml0XHJcblxyXG5uZXcgV09XKCkuaW5pdCgpO1xyXG5cclxuLy8gbWFwXHJcblxyXG4vLyBpZiAoalF1ZXJ5KCdkaXYnKS5pcygnI21hcCcpKSB7XHJcblxyXG4gICAgdmFyIG1hcDtcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0TWFwKCkge1xyXG4gICAgICAgIHZhciBteUxhdExuZyA9IHtsYXQ6IDUwLjQyNjU2ODc0LCBsbmc6IDMwLjUzODM2MzE2fTtcclxuXHJcbiAgICAgICAgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJyksIHtcclxuICAgICAgICAgICAgY2VudGVyOiBteUxhdExuZyxcclxuICAgICAgICAgICAgem9vbTogMTcsXHJcbiAgICAgICAgICAgIG1hcFR5cGVDb250cm9sOiBmYWxzZSxcclxuICAgICAgICAgICAgc2Nyb2xsd2hlZWw6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIG1hcC5zZXRPcHRpb25zKHtzdHlsZXM6IHN0eWxlc1snZGVmYXVsdCddfSk7XHJcblxyXG4gICAgICAgIHZhciBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcclxuICAgICAgICAgICAgbWFwOiBtYXAsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBteUxhdExuZyxcclxuICAgICAgICAgICAgdGl0bGU6ICdSZWdlbnQgSGlsbCdcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcbi8vIH0iXSwiZmlsZSI6InNjcmlwdC5qcyJ9
