jQuery('.bxslider').bxSlider({
  auto: true,
  pause: 10000,
  autoControls: true
});

jQuery(document).ready(function () {
  
    jQuery("#partners").owlCarousel({
            autoPlay: 3000,
            stopOnHover: true,
            navigation: true,
            paginationSpeed: 1000,
            goToFirstSpeed: 3500,
            singleItem: false,
            transitionStyle: "fade",
                    navigationText: [
                    "<i class='fa fa-angle-left'></i>",
                    "<i class='fa fa-angle-right'></i>"
            ]
        });	
  
});


/*callback*/
jQuery(document).ready(function () {
     jQuery('#modal_form_recall').removeClass('recall_toggle')
 });

 jQuery('.callback_btn').on('click', function () {
     jQuery('#modal_form_recall').toggleClass('recall_toggle')
         jQuery('#modal_form_recall').addClass('slideInDown');
 });

 jQuery(document).mouseup(function (e) {
     var popup = jQuery("#modal_form_recall");
     if (!jQuery('.callback_btn').is(e.target) && !popup.is(e.target) && popup.has(e.target).length == 0) {
         popup.removeClass('recall_toggle');
     }
 });

//  jQuery(document).ready(function() {
//     function initialize()
// {
//     var latlng = new google.maps.LatLng(50.465668, 30.499538);
//     var latlng2 = new google.maps.LatLng(50.465668, 30.499538);
//     var imagePath = 'http://m.schuepfen.ch/icons/helveticons/black/60/Pin-location.png'
//     var myOptions =
//     {
//         zoom: 17,
//          scrollwheel: false,
//         center: latlng,
//         mapTypeId: google.maps.MapTypeId.ROADMAP
//     };

//     var myOptions2 =
//     {
//         zoom: 17,
//          scrollwheel: false,
//         center: latlng2,
//         mapTypeId: google.maps.MapTypeId.ROADMAP
//     };

//     var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
    
//     var map2 = new google.maps.Map(document.getElementById("map_canvas_2"), myOptions2);
// var goldStar = {
//     path: 'M 125,5 155,90 245,90 175,145 200,230 125,180 50,230 75,145 5,90 95,90 z',
//     fillColor: 'yellow',
//     fillOpacity: 0.8,
//     scale: 1,
//     strokeColor: 'gold',
//     strokeWeight: 14
//   };

//     var myMarker = new google.maps.Marker(
//     {
//         position: latlng,
//         map: map,
//         title:'ул. Лукьяновская, 46'
//    });

//     var myMarker2 = new google.maps.Marker(
//     {
//         position: latlng2,
//         map: map2,
//         title:'ул. Лукьяновская, 46'
//     });
// }
// initialize();
//  })

 /*lang_click*/
 jQuery(document).ready(function() {
    jQuery('.lang_item').click(function() {
        jQuery(this).css('backgroundColor', "rgb(117,191,46)").siblings().css('backgroundColor', '#243b00');
    })
 })