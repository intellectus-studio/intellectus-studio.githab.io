
jQuery(document).ready(function(){

    var carousel = jQuery('.carousel');
    var carouselFooter = jQuery('.carousel_footer .carousel');

    carousel.imagesLoaded(function(){
        jQuery('.carousel_block').addClass('loaded');
        jQuery('.carousel_footer').addClass('loaded');
        jQuery('header').addClass('loaded');
        jQuery('.our_service').addClass('loaded');
        carouselFooter.owlCarousel({
            navText: ['<i class="fa fa-chevron-circle-left" aria-hidden="true"></i>',
                '<i class="fa fa-chevron-circle-right" aria-hidden="true"></i>'],
            margin: 5,
            nav: true,
            autoplay: true,
            loop:true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            items:1
        });
        carousel.owlCarousel({
            navText: ['<i class="fa fa-chevron-circle-left" aria-hidden="true"></i>',
                '<i class="fa fa-chevron-circle-right" aria-hidden="true"></i>'],
            margin: 5,
            nav: true,
            autoplay: true,
            loop:true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            items:3,
            responsive: {
                0 : {
                    autoplay: false,
                    items:1
                },
                480 : {
                    autoplay: false,
                    items:2
                },

                768 : {
                    autoplay: false,
                    items:3
                }
            }
        });
    });

    // popup

    var popupButton = jQuery('#popupButton');
    var popup = jQuery('.popup');
    var close = jQuery('.close');

    close.on('click', function(){
        jQuery('.shadow').fadeOut(150);
    });

    popupButton.on('click', function(){
        jQuery('.shadow').fadeIn(250);

        jQuery(document).mouseup(function(e){
            if (!popup.is(e.target) && popup.has(e.target).length == 0) {
                jQuery('.shadow').fadeOut(150);
            }
        });
    });

    // maked input

    jQuery("input[type=tel]").mask("(999) 99-99-999");


});

//map

var map;
function initMap() {
    var myLatLng = {lat: 50.419324, lng: 30.543196};

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
        title: 'Victoria Dent'
    });
}

// lightbox

lightbox.option({
    maxWidth: 1000,
    'resizeDuration': 200,
    'wrapAround': true,
    fadeDuration: 200,
    imageFadeDuration: 400,
    positionFromTop: 200
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuXHJcbiAgICB2YXIgY2Fyb3VzZWwgPSBqUXVlcnkoJy5jYXJvdXNlbCcpO1xyXG4gICAgdmFyIGNhcm91c2VsRm9vdGVyID0galF1ZXJ5KCcuY2Fyb3VzZWxfZm9vdGVyIC5jYXJvdXNlbCcpO1xyXG5cclxuICAgIGNhcm91c2VsLmltYWdlc0xvYWRlZChmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeSgnLmNhcm91c2VsX2Jsb2NrJykuYWRkQ2xhc3MoJ2xvYWRlZCcpO1xyXG4gICAgICAgIGpRdWVyeSgnLmNhcm91c2VsX2Zvb3RlcicpLmFkZENsYXNzKCdsb2FkZWQnKTtcclxuICAgICAgICBqUXVlcnkoJ2hlYWRlcicpLmFkZENsYXNzKCdsb2FkZWQnKTtcclxuICAgICAgICBqUXVlcnkoJy5vdXJfc2VydmljZScpLmFkZENsYXNzKCdsb2FkZWQnKTtcclxuICAgICAgICBjYXJvdXNlbEZvb3Rlci5vd2xDYXJvdXNlbCh7XHJcbiAgICAgICAgICAgIG5hdlRleHQ6IFsnPGkgY2xhc3M9XCJmYSBmYS1jaGV2cm9uLWNpcmNsZS1sZWZ0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPicsXHJcbiAgICAgICAgICAgICAgICAnPGkgY2xhc3M9XCJmYSBmYS1jaGV2cm9uLWNpcmNsZS1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4nXSxcclxuICAgICAgICAgICAgbWFyZ2luOiA1LFxyXG4gICAgICAgICAgICBuYXY6IHRydWUsXHJcbiAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICBsb29wOnRydWUsXHJcbiAgICAgICAgICAgIGF1dG9wbGF5VGltZW91dDogNTAwMCxcclxuICAgICAgICAgICAgYXV0b3BsYXlIb3ZlclBhdXNlOiB0cnVlLFxyXG4gICAgICAgICAgICBpdGVtczoxXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY2Fyb3VzZWwub3dsQ2Fyb3VzZWwoe1xyXG4gICAgICAgICAgICBuYXZUZXh0OiBbJzxpIGNsYXNzPVwiZmEgZmEtY2hldnJvbi1jaXJjbGUtbGVmdFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4nLFxyXG4gICAgICAgICAgICAgICAgJzxpIGNsYXNzPVwiZmEgZmEtY2hldnJvbi1jaXJjbGUtcmlnaHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+J10sXHJcbiAgICAgICAgICAgIG1hcmdpbjogNSxcclxuICAgICAgICAgICAgbmF2OiB0cnVlLFxyXG4gICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgbG9vcDp0cnVlLFxyXG4gICAgICAgICAgICBhdXRvcGxheVRpbWVvdXQ6IDUwMDAsXHJcbiAgICAgICAgICAgIGF1dG9wbGF5SG92ZXJQYXVzZTogdHJ1ZSxcclxuICAgICAgICAgICAgaXRlbXM6MyxcclxuICAgICAgICAgICAgcmVzcG9uc2l2ZToge1xyXG4gICAgICAgICAgICAgICAgMCA6IHtcclxuICAgICAgICAgICAgICAgICAgICBhdXRvcGxheTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6MVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIDQ4MCA6IHtcclxuICAgICAgICAgICAgICAgICAgICBhdXRvcGxheTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6MlxyXG4gICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICA3NjggOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b3BsYXk6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOjNcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gcG9wdXBcclxuXHJcbiAgICB2YXIgcG9wdXBCdXR0b24gPSBqUXVlcnkoJyNwb3B1cEJ1dHRvbicpO1xyXG4gICAgdmFyIHBvcHVwID0galF1ZXJ5KCcucG9wdXAnKTtcclxuICAgIHZhciBjbG9zZSA9IGpRdWVyeSgnLmNsb3NlJyk7XHJcblxyXG4gICAgY2xvc2Uub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkoJy5zaGFkb3cnKS5mYWRlT3V0KDE1MCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBwb3B1cEJ1dHRvbi5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeSgnLnNoYWRvdycpLmZhZGVJbigyNTApO1xyXG5cclxuICAgICAgICBqUXVlcnkoZG9jdW1lbnQpLm1vdXNldXAoZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgIGlmICghcG9wdXAuaXMoZS50YXJnZXQpICYmIHBvcHVwLmhhcyhlLnRhcmdldCkubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSgnLnNoYWRvdycpLmZhZGVPdXQoMTUwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gbWFrZWQgaW5wdXRcclxuXHJcbiAgICBqUXVlcnkoXCJpbnB1dFt0eXBlPXRlbF1cIikubWFzayhcIig5OTkpIDk5LTk5LTk5OVwiKTtcclxuXHJcblxyXG59KTtcclxuXHJcbi8vbWFwXHJcblxyXG52YXIgbWFwO1xyXG5mdW5jdGlvbiBpbml0TWFwKCkge1xyXG4gICAgdmFyIG15TGF0TG5nID0ge2xhdDogNTAuNDE5MzI0LCBsbmc6IDMwLjU0MzE5Nn07XHJcblxyXG4gICAgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJyksIHtcclxuICAgICAgICBjZW50ZXI6IG15TGF0TG5nLFxyXG4gICAgICAgIHpvb206IDE3LFxyXG4gICAgICAgIG1hcFR5cGVDb250cm9sOiBmYWxzZSxcclxuICAgICAgICBzY3JvbGx3aGVlbDogZmFsc2VcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIG1hcC5zZXRPcHRpb25zKHtzdHlsZXM6IHN0eWxlc1snZGVmYXVsdCddfSk7XHJcblxyXG4gICAgdmFyIG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xyXG4gICAgICAgIG1hcDogbWFwLFxyXG4gICAgICAgIHBvc2l0aW9uOiBteUxhdExuZyxcclxuICAgICAgICB0aXRsZTogJ1ZpY3RvcmlhIERlbnQnXHJcbiAgICB9KTtcclxufVxyXG5cclxuLy8gbGlnaHRib3hcclxuXHJcbmxpZ2h0Ym94Lm9wdGlvbih7XHJcbiAgICBtYXhXaWR0aDogMTAwMCxcclxuICAgICdyZXNpemVEdXJhdGlvbic6IDIwMCxcclxuICAgICd3cmFwQXJvdW5kJzogdHJ1ZSxcclxuICAgIGZhZGVEdXJhdGlvbjogMjAwLFxyXG4gICAgaW1hZ2VGYWRlRHVyYXRpb246IDQwMCxcclxuICAgIHBvc2l0aW9uRnJvbVRvcDogMjAwXHJcbn0pOyJdLCJmaWxlIjoic2NyaXB0LmpzIn0=
