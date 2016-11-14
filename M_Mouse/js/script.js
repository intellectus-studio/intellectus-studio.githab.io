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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsialF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG5cclxuXHJcbiAgICBpZiAoalF1ZXJ5KCcuaW5uZXJfcGFnZScpLmlzKCdib2R5JykpIHtcclxuICAgICAgICBzZXRUaW1lb3V0KGRlbGF5LCAyMDAwKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkZWxheSgpIHtcclxuICAgICAgICBqUXVlcnkoJy5pbm5lcl9wYWdlIC5yZXNwb25zaXZlX21lbnUnKS5hZGRDbGFzcygndG9wX21lbnUnKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBsb2FkX3NsaWRlclxyXG5cclxuICAgIGpRdWVyeSgnLnNsaWRlcicpLmltYWdlc0xvYWRlZChmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeSgnLnNsaWRlcicpLmFkZENsYXNzKCdsb2FkZWQnKTtcclxuICAgICAgICBqUXVlcnkoJy5maWd1cmUnKS5hZGRDbGFzcygnbG9hZGVkJyk7XHJcbiAgICAgICAgalF1ZXJ5KCdoZWFkZXInKS5hZGRDbGFzcygnbG9hZGVkJyk7XHJcbiAgICAgICAgalF1ZXJ5KCcuYmxvZ19ibG9jaycpLmFkZENsYXNzKCdsb2FkZWQnKTtcclxuICAgICAgICBqUXVlcnkoJy5jb250YWN0X2Jsb2NrJykuYWRkQ2xhc3MoJ2xvYWRlZCcpO1xyXG4gICAgICAgIGpRdWVyeSgnLmFib3V0X3VzX2Jsb2NrJykuYWRkQ2xhc3MoJ2xvYWRlZCcpO1xyXG4gICAgICAgIGpRdWVyeSgnLnRlYW1fYmxvY2snKS5hZGRDbGFzcygnbG9hZGVkJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL2xpZnRcclxuXHJcbiAgICBqUXVlcnkoJyNzY3JvbGx1cCcpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KCdib2R5LGh0bWwnKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgc2Nyb2xsVG9wOiAwXHJcbiAgICAgICAgfSwgNDAwKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGpRdWVyeSh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmIChqUXVlcnkoZG9jdW1lbnQpLnNjcm9sbFRvcCgpPjYwMCkge1xyXG4gICAgICAgICAgICBqUXVlcnkoJy5zY3JvbGx1cF9jb250YWluZXInKS5mYWRlSW4oNTAwKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgalF1ZXJ5KCcuc2Nyb2xsdXBfY29udGFpbmVyJykuZmFkZU91dCg1MDApO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGhlYWRlcl9yZXNwb25zaXZlXHJcblxyXG4gICAgdmFyIGhlYWRlckhlaWdodCA9IGpRdWVyeSgnaGVhZGVyJykuaGVpZ2h0KCk7XHJcbiAgICBqUXVlcnkoJy5zbGlkZXJfZmlndXJlX2Jsb2NrIC5jb250YWluZXInKS5jc3MoJ21hcmdpbi10b3AnLCBoZWFkZXJIZWlnaHQrXCJweFwiKTtcclxuICAgIGpRdWVyeSgnLnNsaWRlcicpLmNzcygnbWFyZ2luLXRvcCcsIGhlYWRlckhlaWdodC04K1wicHhcIik7XHJcbiAgICBqUXVlcnkod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgaWYgKGpRdWVyeSh3aW5kb3cpLndpZHRoKCkgPiAxMDI0KSB7XHJcbiAgICAgICAgICAgIGpRdWVyeSgnLmJ1cmdlcicpLnJlbW92ZUNsYXNzKCdidXJnZXJfcm90YXRlJyk7XHJcbiAgICAgICAgICAgIGpRdWVyeSgnLm1vYmlsZV9tZW51JykucmVtb3ZlQ2xhc3MoJ29wZW5fbW9iaWxlX21lbnUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaGVhZGVySGVpZ2h0ID0galF1ZXJ5KCdoZWFkZXInKS5oZWlnaHQoKTtcclxuICAgICAgICBqUXVlcnkoJy5zbGlkZXJfZmlndXJlX2Jsb2NrIC5jb250YWluZXInKS5jc3MoJ21hcmdpbi10b3AnLCBoZWFkZXJIZWlnaHQrXCJweFwiKTtcclxuICAgICAgICBqUXVlcnkoJy5zbGlkZXInKS5jc3MoJ21hcmdpbi10b3AnLCBoZWFkZXJIZWlnaHQtOCtcInB4XCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gbWFpbl9jYXJvdXNlbFxyXG5cclxuICAgIGpRdWVyeSgnLnNsaWRlcicpLm93bENhcm91c2VsKHtcclxuICAgICAgICBsb29wOnRydWUsXHJcbiAgICAgICAgaXRlbXM6IDEsXHJcbiAgICAgICAgZG9udDogdHJ1ZSxcclxuICAgICAgICBtYXJnaW46IDAsXHJcbiAgICAgICAgbmF2OiBmYWxzZSxcclxuICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICBhdXRvcGxheVRpbWVvdXQ6IDUwMDAsXHJcbiAgICAgICAgYXV0b3BsYXlIb3ZlclBhdXNlOiB0cnVlLFxyXG4gICAgICAgIGZhbGxiYWNrRWFzaW5nOiAnZWFzZS1pbi1vdXQnXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBtYXNvbnJ5X2dhbGxlcnlcclxuXHJcbiAgICBqUXVlcnkoJy5tYXNvbnJ5JykuaW1hZ2VzTG9hZGVkKCBmdW5jdGlvbigpIHtcclxuICAgIGpRdWVyeSgnLm1hc29ucnknKS5tYXNvbnJ5KHtcclxuICAgICAgICBpdGVtU2VsZWN0b3I6ICcuZ3JpZC1pdGVtJyxcclxuICAgICAgICBjb2x1bW5XaWR0aDogJy5ncmlkLXNpemVyJyxcclxuICAgICAgICBwZXJjZW50UG9zaXRpb246IHRydWVcclxuICAgIH0pO1xyXG4gICAgICAgIGpRdWVyeSgnLm1hc29ucnknKS5hZGRDbGFzcygnbG9hZGVkJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBsaWdodGJveFxyXG5cclxuICAgIGxpZ2h0Ym94Lm9wdGlvbih7XHJcbiAgICAgICAgJ3Jlc2l6ZUR1cmF0aW9uJzogMzAwLFxyXG4gICAgICAgICd3cmFwQXJvdW5kJzogdHJ1ZSxcclxuICAgICAgICAncG9zaXRpb25Gcm9tVG9wJzogMTUwXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBmb290ZXJfbWVudVxyXG5cclxuICAgIGpRdWVyeSgnLmZvb3Rlcl9pdGVtOmZpcnN0LWNoaWxkID4gdWwgbGk6bnRoLWNoaWxkKDIpJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgIGpRdWVyeSh0aGlzKS50b2dnbGVDbGFzcygndG9nZ2xlZF9mb290ZXInKTtcclxuICAgICAgICBqUXVlcnkodGhpcykuZmluZCgndWwnKS5zbGlkZVRvZ2dsZSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gbW9iaWxlX21lbnVcclxuXHJcbiAgICBqUXVlcnkoJy5idXJnZXInKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS50b2dnbGVDbGFzcygnYnVyZ2VyX3JvdGF0ZScpO1xyXG4gICAgICAgIGpRdWVyeSgnLm1vYmlsZV9tZW51JykudG9nZ2xlQ2xhc3MoJ29wZW5fbW9iaWxlX21lbnUnKTtcclxuXHJcbiAgICAgICAgalF1ZXJ5KGRvY3VtZW50KS5tb3VzZXVwKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHZhciBtb2JpbGVNZW51ID0galF1ZXJ5KCcubW9iaWxlX21lbnUnKTtcclxuICAgICAgICAgICAgdmFyIG1vYmlsZUJ1dHRvbiA9IGpRdWVyeSgnLmJ1cmdlciBpJyk7XHJcbiAgICAgICAgICAgIGlmICghbW9iaWxlQnV0dG9uLmlzKGUudGFyZ2V0KSAmJiAhbW9iaWxlTWVudS5pcyhlLnRhcmdldCkgJiYgbW9iaWxlTWVudS5oYXMoZS50YXJnZXQpLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkoJy5idXJnZXInKS5yZW1vdmVDbGFzcygnYnVyZ2VyX3JvdGF0ZScpO1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KCcubW9iaWxlX21lbnUnKS5yZW1vdmVDbGFzcygnb3Blbl9tb2JpbGVfbWVudScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBqUXVlcnkoJy5tb2JpbGVfbWVudSA+IG1lbnUgPiB1bCBsaTpudGgtY2hpbGQoMikgPiBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkoJy5tb2JpbGVfbWVudSA+IG1lbnUgPiB1bCBsaTpudGgtY2hpbGQoMikgdWwnKS5zbGlkZVRvZ2dsZSgpO1xyXG4gICAgICAgIGpRdWVyeSgnLm1vYmlsZV9tZW51ID4gbWVudSA+IHVsID4gbGk6bnRoLWNoaWxkKDIpID4gYScpLnRvZ2dsZUNsYXNzKCd0b2dnbGVkJyk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gbWVudV9pdGVtX2FuaW1hdGlvblxyXG5cclxuICAgIGpRdWVyeSgnLnJlc3BvbnNpdmVfbWVudSB1bCBsaScpLmhvdmVyKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIGpRdWVyeSh0aGlzKS5hZGRDbGFzcygnYm91bmNlJyk7XHJcbiAgICB9LGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLnJlbW92ZUNsYXNzKCdib3VuY2UnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGpRdWVyeSgnLnJlc3BvbnNpdmVfbWVudSB1bDpmaXJzdC1jaGlsZCBsaTpudGgtY2hpbGQoNSknKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeSgnLnN1Yi1tZW51JykudG9nZ2xlQ2xhc3MoJ29wZW5fc3ViJyk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKGpRdWVyeShkb2N1bWVudCkuc2Nyb2xsVG9wKCk+MCYmIWpRdWVyeSgnZGl2JykuaXMoJy5pbm5lcl9wYWdlJykpIHtcclxuICAgICAgICBqUXVlcnkoJy5maWd1cmUnKS5hZGRDbGFzcygnbGVmdF9maWd1cmUnKTtcclxuICAgICAgICBqUXVlcnkoJy5yZXNwb25zaXZlX21lbnUgdWwnKS5hZGRDbGFzcygnbWVudV90b190b3AnKTtcclxuXHJcbiAgICAgICAgaWYgKGpRdWVyeSh3aW5kb3cpLndpZHRoKCkgPiAxMDI0KVxyXG4gICAgICAgIGpRdWVyeSgnLmxvZ28nKS5mYWRlT3V0KDIwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgalF1ZXJ5KHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYgKGpRdWVyeShkb2N1bWVudCkuc2Nyb2xsVG9wKCk+MCYmIWpRdWVyeSgnZGl2JykuaXMoJy5pbm5lcl9wYWdlJykpIHtcclxuICAgICAgICAgICAgalF1ZXJ5KCcuZmlndXJlJykuYWRkQ2xhc3MoJ2xlZnRfZmlndXJlJyk7XHJcbiAgICAgICAgICAgIGpRdWVyeSgnLnJlc3BvbnNpdmVfbWVudSB1bCcpLmFkZENsYXNzKCdtZW51X3RvX3RvcCcpO1xyXG4gICAgICAgICAgICBpZiAoalF1ZXJ5KHdpbmRvdykud2lkdGgoKSA+IDEwMjQpXHJcbiAgICAgICAgICAgIGpRdWVyeSgnLmxvZ28nKS5mYWRlT3V0KDIwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBqUXVlcnkoJy5yZXNwb25zaXZlX21lbnUgdWwgJykucmVtb3ZlQ2xhc3MoJ21lbnVfdG9fdG9wJyk7XHJcbiAgICAgICAgICAgIGpRdWVyeSgnLmZpZ3VyZScpLnJlbW92ZUNsYXNzKCdsZWZ0X2ZpZ3VyZScpO1xyXG4gICAgICAgICAgICBpZiAoalF1ZXJ5KHdpbmRvdykud2lkdGgoKT43NjgmJiFqUXVlcnkoJ2RpdicpLmlzKCcuaW5uZXJfcGFnZScpKSB7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkoJy5sb2dvJykuZmFkZUluKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBmb290ZXJfc29jaWFsX2hvdmVyXHJcblxyXG4gICAgalF1ZXJ5KCdmb290ZXIgLmZvb3Rlcl9pdGVtOmxhc3QtY2hpbGQgdWwgbGkgYScpLmhvdmVyKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLmFkZENsYXNzKCdib3VuY2UnKVxyXG4gICAgfSxmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS5yZW1vdmVDbGFzcygnYm91bmNlJylcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHRhYlxyXG5cclxuICAgIHZhciB0YWIgPSBqUXVlcnkoJy50YWInKTtcclxuICAgIHZhciBtZW51ID0galF1ZXJ5KCcubWVudV9vbGQnKTtcclxuICAgIHZhciBtZW51QXJyYXkgPSBtZW51O1xyXG4gICAgdmFyIHRhYkluZGV4O1xyXG5cclxuXHJcbiAgICB0YWIub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICB0YWIucmVtb3ZlQ2xhc3MoJ2N1cnJlbnQtdGFiJyk7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLmFkZENsYXNzKCdjdXJyZW50LXRhYicpO1xyXG4gICAgICAgIG1lbnVBcnJheS5mYWRlT3V0KDApO1xyXG4gICAgICAgIHRhYkluZGV4ID0galF1ZXJ5KHRoaXMpLmluZGV4KCk7XHJcbiAgICAgICAgalF1ZXJ5KG1lbnVBcnJheVt0YWJJbmRleF0pLmZhZGVJbigpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRhYkluZGV4KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhqUXVlcnkobWVudUFycmF5W3RhYkluZGV4XSkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gbmV3c19jb2xvclxyXG5cclxuICAgIHZhciBuZXdzQXJyYXkgPSBqUXVlcnkoJy5uZXdzX2l0ZW0gLmRlc2NyaXB0aW9uJyk7XHJcbiAgICB2YXIgZGF0ZUFycmF5ID0galF1ZXJ5KCcubmV3c19pdGVtIC5kYXRlJyk7XHJcbiAgICB2YXIgY29sb3IgPSBbJyNiMWE0MDAnLCAnI2FkMzNmYScsICcjMDE1NTllJywgJyNjOTAwYjAnLCAnI2ZmYTQxYicsICcjMDA5ZTAwJ107XHJcbiAgICB2YXIgayA9IDM7XHJcbiAgICB2YXIgaSA9IDA7XHJcblxyXG4gICAgZm9yIChrOyBrIDw9IG5ld3NBcnJheS5sZW5ndGg7aysrKSB7XHJcbiAgICAgICAgaWYgKGk+NSkge1xyXG4gICAgICAgICAgICBpID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgalF1ZXJ5KG5ld3NBcnJheVtrXSkuY3NzKCdiYWNrZ3JvdW5kJywgY29sb3JbaV0pO1xyXG4gICAgICAgIGpRdWVyeShkYXRlQXJyYXlba10pLmNzcygnYmFja2dyb3VuZCcsIGNvbG9yW2ldKTtcclxuICAgICAgICBpKys7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuLy8gc2Nyb2xsX2FuaW1hdGVfaW5pdFxyXG5cclxubmV3IFdPVygpLmluaXQoKTtcclxuXHJcbi8vIG1hcFxyXG5cclxuLy8gaWYgKGpRdWVyeSgnZGl2JykuaXMoJyNtYXAnKSkge1xyXG5cclxuICAgIHZhciBtYXA7XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdE1hcCgpIHtcclxuICAgICAgICB2YXIgbXlMYXRMbmcgPSB7bGF0OiA1MC40MjY1Njg3NCwgbG5nOiAzMC41MzgzNjMxNn07XHJcblxyXG4gICAgICAgIG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcCcpLCB7XHJcbiAgICAgICAgICAgIGNlbnRlcjogbXlMYXRMbmcsXHJcbiAgICAgICAgICAgIHpvb206IDE3LFxyXG4gICAgICAgICAgICBtYXBUeXBlQ29udHJvbDogZmFsc2UsXHJcbiAgICAgICAgICAgIHNjcm9sbHdoZWVsOiBmYWxzZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBtYXAuc2V0T3B0aW9ucyh7c3R5bGVzOiBzdHlsZXNbJ2RlZmF1bHQnXX0pO1xyXG5cclxuICAgICAgICB2YXIgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XHJcbiAgICAgICAgICAgIG1hcDogbWFwLFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogbXlMYXRMbmcsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnUmVnZW50IEhpbGwnXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG4vLyB9Il0sImZpbGUiOiJzY3JpcHQuanMifQ==
