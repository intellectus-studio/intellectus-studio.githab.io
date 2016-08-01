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
            slideBy: 1,
            items: 5,
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


 /*lang_click*/
 jQuery(document).ready(function() {
    jQuery('.lang_item').click(function() {
        jQuery(this).css('backgroundColor', "rgb(117,191,46)").siblings().css('backgroundColor', '#243b00');
    })
 })
 /*dropdown hover*/
 jQuery(document).ready(function() {
    jQuery('.dropdown').click(function() {
        jQuery(this).find('.dropdown-content').toggleClass('active');
        jQuery(this).siblings().find('.dropdown-content').removeClass('active');
    });
    jQuery('.dropdown-content').mouseleave(function() {
        jQuery(this).removeClass('active');
    })
 })
 /*hamburger menu*/
 jQuery(document).ready(function() {
    jQuery('.hamburger_menu').click(function() {
        jQuery('.nav').toggleClass('active');
        jQuery('.nav_item').toggleClass('active');
    })
 })

 /*fixed_head*/
 jQuery(document).ready(function() {
    jQuery(window).scroll(function(){
  var sticky = jQuery('.fixed_header'),
      scroll = jQuery(window).scrollTop();

  if (scroll >= 50) sticky.addClass('fixed');
  else sticky.removeClass('fixed');
});
});

 /*slider_manufacture*/
  jQuery('.slider__controls-button').on('click', function(e){
      e.preventDefault();
      var
      $this = jQuery(this),
      container = $this.closest('.slider');
      list = container.find('.slider__list'),
      items = container.find('.slider__item'),
      activeSlide = items.filter('.active'),
      nextSlide = activeSlide.next(),
      prevSlide = activeSlide.prev(),
      firstSlide = items.first(),
      lastSlide = items.last(),
      sliderOffset = container.offset().left,
      reqPos = 0,
    $slide = ($this.hasClass('slider__controls-button_next')) ? ((nextSlide.length) ? nextSlide : firstSlide) : ((prevSlide.length) ? prevSlide : lastSlide);
        
      slideImg($slide);

    list.css('left', '-=' + reqPos + 'px');
    function removeActiveClass (reqSLide) {
      reqSLide.addClass('active').siblings().removeClass('active');
    }
    function findReqPos (slide) {
      reqPos = slide.offset().left - sliderOffset;
    }
        function slideImg(slide){
            findReqPos(slide);
            removeActiveClass(slide);
        }
        
  });
/*fancybox*/
jQuery(document).ready(function() {
  jQuery("a.veres").fancybox();
  jQuery("a.oleyna").fancybox();
  jQuery("a.rolton").fancybox();
  jQuery("a.shchedro").fancybox();
  jQuery("a.arroz").fancybox();
})
/*tabs*/
jQuery(document).ready(function() {
    jQuery('.tabs_controls_item').on('click', function() {

      var item = jQuery(this).closest('.tabs_controls_item'),
        contentItem = jQuery('.tabs_item'),
        itemPosition = item.index();
        console.log(itemPosition);


        contentItem.eq(itemPosition)
          .addClass('active')
          .siblings()
          .removeClass('active');

          item.addClass('active')
          .siblings()
          .removeClass('active');
    });
  });

/*validate*/
//validate
jQuery(document).ready(function(){

    jQuery(".contact_form").validate({

       rules:{

            name:{
                required: true,
            },

            email:{
                required: true,
            },
            phone:{
                required: true,
            },
       },

       messages:{

            name:{
                required: "Это поле обязательно для заполнения",
            },

            email:{
                required: "Это поле обязательно для заполнения",
            },
            phone:{
                required: "Это поле обязательно для заполнения",
            },

       }

    });

});
