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

    // footer_menu

    jQuery('.footer_item:first-child > ul li:nth-child(2)').on('click', function(){
        jQuery(this).toggleClass('toggled_footer');
        jQuery(this).find('ul').slideToggle();
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsialF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG5cclxuXHJcbiAgICBpZiAoalF1ZXJ5KCcuaW5uZXJfcGFnZScpLmlzKCdib2R5JykpIHtcclxuICAgICAgICBzZXRUaW1lb3V0KGRlbGF5LCAyMDAwKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkZWxheSgpIHtcclxuICAgICAgICBqUXVlcnkoJy5pbm5lcl9wYWdlIC5yZXNwb25zaXZlX21lbnUnKS5hZGRDbGFzcygndG9wX21lbnUnKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBsb2FkX3NsaWRlclxyXG5cclxuICAgIGpRdWVyeSgnLnNsaWRlcicpLmltYWdlc0xvYWRlZChmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeSgnLnNsaWRlcicpLmFkZENsYXNzKCdsb2FkZWQnKTtcclxuICAgICAgICBqUXVlcnkoJy5maWd1cmUnKS5hZGRDbGFzcygnbG9hZGVkJyk7XHJcbiAgICAgICAgalF1ZXJ5KCdoZWFkZXInKS5hZGRDbGFzcygnbG9hZGVkJyk7XHJcbiAgICAgICAgalF1ZXJ5KCcuYmxvZ19ibG9jaycpLmFkZENsYXNzKCdsb2FkZWQnKTtcclxuICAgICAgICBqUXVlcnkoJy5jb250YWN0X2Jsb2NrJykuYWRkQ2xhc3MoJ2xvYWRlZCcpO1xyXG4gICAgICAgIGpRdWVyeSgnLmFib3V0X3VzX2Jsb2NrJykuYWRkQ2xhc3MoJ2xvYWRlZCcpO1xyXG4gICAgICAgIGpRdWVyeSgnLnRlYW1fYmxvY2snKS5hZGRDbGFzcygnbG9hZGVkJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL2xpZnRcclxuXHJcbiAgICBqUXVlcnkoJyNzY3JvbGx1cCcpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KCdib2R5LGh0bWwnKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgc2Nyb2xsVG9wOiAwXHJcbiAgICAgICAgfSwgNDAwKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGpRdWVyeSh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmIChqUXVlcnkoZG9jdW1lbnQpLnNjcm9sbFRvcCgpPjYwMCkge1xyXG4gICAgICAgICAgICBqUXVlcnkoJy5zY3JvbGx1cF9jb250YWluZXInKS5mYWRlSW4oNTAwKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgalF1ZXJ5KCcuc2Nyb2xsdXBfY29udGFpbmVyJykuZmFkZU91dCg1MDApO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGhlYWRlcl9yZXNwb25zaXZlXHJcblxyXG4gICAgdmFyIGhlYWRlckhlaWdodCA9IGpRdWVyeSgnaGVhZGVyJykuaGVpZ2h0KCk7XHJcbiAgICBqUXVlcnkoJy5zbGlkZXJfZmlndXJlX2Jsb2NrIC5jb250YWluZXInKS5jc3MoJ21hcmdpbi10b3AnLCBoZWFkZXJIZWlnaHQrXCJweFwiKTtcclxuICAgIGpRdWVyeSgnLnNsaWRlcicpLmNzcygnbWFyZ2luLXRvcCcsIGhlYWRlckhlaWdodC04K1wicHhcIik7XHJcbiAgICBqUXVlcnkod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgaWYgKGpRdWVyeSh3aW5kb3cpLndpZHRoKCkgPiAxMDI0KSB7XHJcbiAgICAgICAgICAgIGpRdWVyeSgnLmJ1cmdlcicpLnJlbW92ZUNsYXNzKCdidXJnZXJfcm90YXRlJyk7XHJcbiAgICAgICAgICAgIGpRdWVyeSgnLm1vYmlsZV9tZW51JykucmVtb3ZlQ2xhc3MoJ29wZW5fbW9iaWxlX21lbnUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaGVhZGVySGVpZ2h0ID0galF1ZXJ5KCdoZWFkZXInKS5oZWlnaHQoKTtcclxuICAgICAgICBqUXVlcnkoJy5zbGlkZXJfZmlndXJlX2Jsb2NrIC5jb250YWluZXInKS5jc3MoJ21hcmdpbi10b3AnLCBoZWFkZXJIZWlnaHQrXCJweFwiKTtcclxuICAgICAgICBqUXVlcnkoJy5zbGlkZXInKS5jc3MoJ21hcmdpbi10b3AnLCBoZWFkZXJIZWlnaHQtOCtcInB4XCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gbWFpbl9jYXJvdXNlbFxyXG5cclxuICAgIGpRdWVyeSgnLnNsaWRlcicpLm93bENhcm91c2VsKHtcclxuICAgICAgICBsb29wOnRydWUsXHJcbiAgICAgICAgaXRlbXM6IDEsXHJcbiAgICAgICAgZG9udDogdHJ1ZSxcclxuICAgICAgICBtYXJnaW46IDAsXHJcbiAgICAgICAgbmF2OiBmYWxzZSxcclxuICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICBhdXRvcGxheVRpbWVvdXQ6IDUwMDAsXHJcbiAgICAgICAgYXV0b3BsYXlIb3ZlclBhdXNlOiB0cnVlLFxyXG4gICAgICAgIGZhbGxiYWNrRWFzaW5nOiAnZWFzZS1pbi1vdXQnXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBtYXNvbnJ5X2dhbGxlcnlcclxuXHJcbiAgICBqUXVlcnkoJy5tYXNvbnJ5JykuaW1hZ2VzTG9hZGVkKCBmdW5jdGlvbigpIHtcclxuICAgIGpRdWVyeSgnLm1hc29ucnknKS5tYXNvbnJ5KHtcclxuICAgICAgICBpdGVtU2VsZWN0b3I6ICcuZ3JpZC1pdGVtJyxcclxuICAgICAgICBjb2x1bW5XaWR0aDogJy5ncmlkLXNpemVyJyxcclxuICAgICAgICBwZXJjZW50UG9zaXRpb246IHRydWVcclxuICAgIH0pO1xyXG4gICAgICAgIGpRdWVyeSgnLm1hc29ucnknKS5hZGRDbGFzcygnbG9hZGVkJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBsaWdodGJveFxyXG5cclxuICAgIGxpZ2h0Ym94Lm9wdGlvbih7XHJcbiAgICAgICAgJ3Jlc2l6ZUR1cmF0aW9uJzogMzAwLFxyXG4gICAgICAgICd3cmFwQXJvdW5kJzogdHJ1ZSxcclxuICAgICAgICAncG9zaXRpb25Gcm9tVG9wJzogMTUwXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBmb290ZXJfbWVudVxyXG5cclxuICAgIGpRdWVyeSgnLmZvb3Rlcl9pdGVtOmZpcnN0LWNoaWxkID4gdWwgbGk6bnRoLWNoaWxkKDIpJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkodGhpcykudG9nZ2xlQ2xhc3MoJ3RvZ2dsZWRfZm9vdGVyJyk7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLmZpbmQoJ3VsJykuc2xpZGVUb2dnbGUoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIG1vYmlsZV9tZW51XHJcblxyXG4gICAgalF1ZXJ5KCcuYnVyZ2VyJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkodGhpcykudG9nZ2xlQ2xhc3MoJ2J1cmdlcl9yb3RhdGUnKTtcclxuICAgICAgICBqUXVlcnkoJy5tb2JpbGVfbWVudScpLnRvZ2dsZUNsYXNzKCdvcGVuX21vYmlsZV9tZW51Jyk7XHJcblxyXG4gICAgICAgIGpRdWVyeShkb2N1bWVudCkubW91c2V1cChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB2YXIgbW9iaWxlTWVudSA9IGpRdWVyeSgnLm1vYmlsZV9tZW51Jyk7XHJcbiAgICAgICAgICAgIHZhciBtb2JpbGVCdXR0b24gPSBqUXVlcnkoJy5idXJnZXIgaScpO1xyXG4gICAgICAgICAgICBpZiAoIW1vYmlsZUJ1dHRvbi5pcyhlLnRhcmdldCkgJiYgIW1vYmlsZU1lbnUuaXMoZS50YXJnZXQpICYmIG1vYmlsZU1lbnUuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KCcuYnVyZ2VyJykucmVtb3ZlQ2xhc3MoJ2J1cmdlcl9yb3RhdGUnKTtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSgnLm1vYmlsZV9tZW51JykucmVtb3ZlQ2xhc3MoJ29wZW5fbW9iaWxlX21lbnUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgalF1ZXJ5KCcubW9iaWxlX21lbnUgPiBtZW51ID4gdWwgbGk6bnRoLWNoaWxkKDIpID4gYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KCcubW9iaWxlX21lbnUgPiBtZW51ID4gdWwgbGk6bnRoLWNoaWxkKDIpIHVsJykuc2xpZGVUb2dnbGUoKTtcclxuICAgICAgICBqUXVlcnkoJy5tb2JpbGVfbWVudSA+IG1lbnUgPiB1bCA+IGxpOm50aC1jaGlsZCgyKSA+IGEnKS50b2dnbGVDbGFzcygndG9nZ2xlZCcpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIG1lbnVfaXRlbV9hbmltYXRpb25cclxuXHJcbiAgICBqUXVlcnkoJy5yZXNwb25zaXZlX21lbnUgdWwgbGknKS5ob3ZlcihmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICBqUXVlcnkodGhpcykuYWRkQ2xhc3MoJ2JvdW5jZScpO1xyXG4gICAgfSxmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS5yZW1vdmVDbGFzcygnYm91bmNlJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBqUXVlcnkoJy5yZXNwb25zaXZlX21lbnUgdWw6Zmlyc3QtY2hpbGQgbGk6bnRoLWNoaWxkKDUpJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkoJy5zdWItbWVudScpLnRvZ2dsZUNsYXNzKCdvcGVuX3N1YicpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChqUXVlcnkoZG9jdW1lbnQpLnNjcm9sbFRvcCgpPjAmJiFqUXVlcnkoJ2RpdicpLmlzKCcuaW5uZXJfcGFnZScpKSB7XHJcbiAgICAgICAgalF1ZXJ5KCcuZmlndXJlJykuYWRkQ2xhc3MoJ2xlZnRfZmlndXJlJyk7XHJcbiAgICAgICAgalF1ZXJ5KCcucmVzcG9uc2l2ZV9tZW51IHVsJykuYWRkQ2xhc3MoJ21lbnVfdG9fdG9wJyk7XHJcblxyXG4gICAgICAgIGlmIChqUXVlcnkod2luZG93KS53aWR0aCgpID4gMTAyNClcclxuICAgICAgICBqUXVlcnkoJy5sb2dvJykuZmFkZU91dCgyMDApO1xyXG4gICAgfVxyXG5cclxuICAgIGpRdWVyeSh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmIChqUXVlcnkoZG9jdW1lbnQpLnNjcm9sbFRvcCgpPjAmJiFqUXVlcnkoJ2RpdicpLmlzKCcuaW5uZXJfcGFnZScpKSB7XHJcbiAgICAgICAgICAgIGpRdWVyeSgnLmZpZ3VyZScpLmFkZENsYXNzKCdsZWZ0X2ZpZ3VyZScpO1xyXG4gICAgICAgICAgICBqUXVlcnkoJy5yZXNwb25zaXZlX21lbnUgdWwnKS5hZGRDbGFzcygnbWVudV90b190b3AnKTtcclxuICAgICAgICAgICAgaWYgKGpRdWVyeSh3aW5kb3cpLndpZHRoKCkgPiAxMDI0KVxyXG4gICAgICAgICAgICBqUXVlcnkoJy5sb2dvJykuZmFkZU91dCgyMDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgalF1ZXJ5KCcucmVzcG9uc2l2ZV9tZW51IHVsICcpLnJlbW92ZUNsYXNzKCdtZW51X3RvX3RvcCcpO1xyXG4gICAgICAgICAgICBqUXVlcnkoJy5maWd1cmUnKS5yZW1vdmVDbGFzcygnbGVmdF9maWd1cmUnKTtcclxuICAgICAgICAgICAgaWYgKGpRdWVyeSh3aW5kb3cpLndpZHRoKCk+NzY4JiYhalF1ZXJ5KCdkaXYnKS5pcygnLmlubmVyX3BhZ2UnKSkge1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KCcubG9nbycpLmZhZGVJbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gZm9vdGVyX3NvY2lhbF9ob3ZlclxyXG5cclxuICAgIGpRdWVyeSgnZm9vdGVyIC5mb290ZXJfaXRlbTpsYXN0LWNoaWxkIHVsIGxpIGEnKS5ob3ZlcihmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS5hZGRDbGFzcygnYm91bmNlJylcclxuICAgIH0sZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkodGhpcykucmVtb3ZlQ2xhc3MoJ2JvdW5jZScpXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyB0YWJcclxuXHJcbiAgICB2YXIgdGFiID0galF1ZXJ5KCcudGFiJyk7XHJcbiAgICB2YXIgbWVudSA9IGpRdWVyeSgnLm1lbnVfb2xkJyk7XHJcbiAgICB2YXIgbWVudUFycmF5ID0gbWVudTtcclxuICAgIHZhciB0YWJJbmRleDtcclxuXHJcblxyXG4gICAgdGFiLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGFiLnJlbW92ZUNsYXNzKCdjdXJyZW50LXRhYicpO1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS5hZGRDbGFzcygnY3VycmVudC10YWInKTtcclxuICAgICAgICBtZW51QXJyYXkuZmFkZU91dCgwKTtcclxuICAgICAgICB0YWJJbmRleCA9IGpRdWVyeSh0aGlzKS5pbmRleCgpO1xyXG4gICAgICAgIGpRdWVyeShtZW51QXJyYXlbdGFiSW5kZXhdKS5mYWRlSW4oKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0YWJJbmRleCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coalF1ZXJ5KG1lbnVBcnJheVt0YWJJbmRleF0pKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIG5ld3NfY29sb3JcclxuXHJcbiAgICB2YXIgbmV3c0FycmF5ID0galF1ZXJ5KCcubmV3c19pdGVtIC5kZXNjcmlwdGlvbicpO1xyXG4gICAgdmFyIGRhdGVBcnJheSA9IGpRdWVyeSgnLm5ld3NfaXRlbSAuZGF0ZScpO1xyXG4gICAgdmFyIGNvbG9yID0gWycjYjFhNDAwJywgJyNhZDMzZmEnLCAnIzAxNTU5ZScsICcjYzkwMGIwJywgJyNmZmE0MWInLCAnIzAwOWUwMCddO1xyXG4gICAgdmFyIGsgPSAzO1xyXG4gICAgdmFyIGkgPSAwO1xyXG5cclxuICAgIGZvciAoazsgayA8PSBuZXdzQXJyYXkubGVuZ3RoO2srKykge1xyXG4gICAgICAgIGlmIChpPjUpIHtcclxuICAgICAgICAgICAgaSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGpRdWVyeShuZXdzQXJyYXlba10pLmNzcygnYmFja2dyb3VuZCcsIGNvbG9yW2ldKTtcclxuICAgICAgICBqUXVlcnkoZGF0ZUFycmF5W2tdKS5jc3MoJ2JhY2tncm91bmQnLCBjb2xvcltpXSk7XHJcbiAgICAgICAgaSsrO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbi8vIHNjcm9sbF9hbmltYXRlX2luaXRcclxuXHJcbm5ldyBXT1coKS5pbml0KCk7XHJcblxyXG4vLyBtYXBcclxuXHJcbi8vIGlmIChqUXVlcnkoJ2RpdicpLmlzKCcjbWFwJykpIHtcclxuXHJcbiAgICB2YXIgbWFwO1xyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRNYXAoKSB7XHJcbiAgICAgICAgdmFyIG15TGF0TG5nID0ge2xhdDogNTAuNDI2NTY4NzQsIGxuZzogMzAuNTM4MzYzMTZ9O1xyXG5cclxuICAgICAgICBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXAnKSwge1xyXG4gICAgICAgICAgICBjZW50ZXI6IG15TGF0TG5nLFxyXG4gICAgICAgICAgICB6b29tOiAxNyxcclxuICAgICAgICAgICAgbWFwVHlwZUNvbnRyb2w6IGZhbHNlLFxyXG4gICAgICAgICAgICBzY3JvbGx3aGVlbDogZmFsc2VcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gbWFwLnNldE9wdGlvbnMoe3N0eWxlczogc3R5bGVzWydkZWZhdWx0J119KTtcclxuXHJcbiAgICAgICAgdmFyIG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xyXG4gICAgICAgICAgICBtYXA6IG1hcCxcclxuICAgICAgICAgICAgcG9zaXRpb246IG15TGF0TG5nLFxyXG4gICAgICAgICAgICB0aXRsZTogJ1JlZ2VudCBIaWxsJ1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuLy8gfSJdLCJmaWxlIjoic2NyaXB0LmpzIn0=
