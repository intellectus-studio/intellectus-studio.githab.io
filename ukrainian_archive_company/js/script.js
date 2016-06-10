//slider
/**
 * @Titulo: Slider Responsivo
 * @Autor: Creaticode
 * @URL: http://creaticode.com 
 */
jQuery(function() {
	/** -----------------------------------------
	 * Modulo del Slider 
	 -------------------------------------------*/
	 var SliderModule = (function() {
	 	var pb = {};
	 	pb.el = jQuery('#slider');
	 	pb.items = {
	 		panels: pb.el.find('.slider-wrapper > li'),
	 	}

	 	// Interval del Slider
	 	var SliderInterval,
	 		currentSlider = 0,
	 		nextSlider = 1,
	 		lengthSlider = pb.items.panels.length;

	 	// Constructor del Slider
	 	pb.init = function(settings) {
	 		this.settings = settings || {duration: 8000};
	 		var items = this.items,
	 			lengthPanels = items.panels.length,
	 			output = '';

	 		// Insertamos nuestros botones
	 		for(var i = 0; i < lengthPanels; i++) {
	 			if(i == 0) {
	 				output += '<li class="active"></li>';
	 			} else {
	 				output += '<li></li>';
	 			}
	 		}

	 		jQuery('#control-buttons').html(output);

	 		// Activamos nuestro Slider
	 		activateSlider();
	 		// Eventos para los controles
	 		jQuery('#control-buttons').on('click', 'li', function(e) {
	 			var $this = jQuery(this);
	 			if(!(currentSlider === $this.index())) {
	 				changePanel($this.index());
	 			}
	 		});

	 	}

	 	// Funcion para activar el Slider
	 	var activateSlider = function() {
	 		SliderInterval = setInterval(pb.startSlider, pb.settings.duration);
	 	}

	 	// Funcion para la Animacion
	 	pb.startSlider = function() {
	 		var items = pb.items,
	 			controls = jQuery('#control-buttons li');
	 		// Comprobamos si es el ultimo panel para reiniciar el conteo
	 		if(nextSlider >= lengthSlider) {
	 			nextSlider = 0;
	 			currentSlider = lengthSlider-1;
	 		}

	 		controls.removeClass('active').eq(nextSlider).addClass('active');
	 		items.panels.eq(currentSlider).fadeOut('slow');
	 		items.panels.eq(nextSlider).fadeIn('slow');

	 		// Actualizamos los datos del slider
	 		currentSlider = nextSlider;
	 		nextSlider += 1;
	 	}

	 	// Funcion para Cambiar de Panel con Los Controles
	 	var changePanel = function(id) {
	 		clearInterval(SliderInterval);
	 		var items = pb.items,
	 			controls = jQuery('#control-buttons li');
	 		// Comprobamos si el ID esta disponible entre los paneles
	 		if(id >= lengthSlider) {
	 			id = 0;
	 		} else if(id < 0) {
	 			id = lengthSlider-1;
	 		}

	 		controls.removeClass('active').eq(id).addClass('active');
	 		items.panels.eq(currentSlider).fadeOut('slow');
	 		items.panels.eq(id).fadeIn('slow');;

	 		// Volvemos a actualizar los datos del slider
	 		currentSlider = id;
	 		nextSlider = id+1;
	 		// Reactivamos nuestro slider
	 		activateSlider();
	 	}

		return pb;
	 }());

	 SliderModule.init({duration: 5000});

});

//slider

//animation

// jQuery(document).ready(function() {
//     jQuery('.sub_slider_item').addClass("hidden").viewportChecker({
//         classToAdd: 'visible animated bounceInDown',
//         offset: 100
//        });
// });
// jQuery(document).ready(function() {
//     jQuery('.main_content_text').addClass("hidden").viewportChecker({
//         classToAdd: 'visible animated bounceInDown',
//         offset: 100
//        });
// });
// jQuery(document).ready(function() {
//     jQuery('.carousel_container').addClass("hidden").viewportChecker({
//         classToAdd: 'visible animated fadeInDown',
//         offset: 100
//        });
// });
// jQuery(document).ready(function() {
//     jQuery('.skills_item').addClass("hidden").viewportChecker({
//         classToAdd: 'visible animated zoomInDown',
//         offset: 100
//        });
// });
// jQuery(document).ready(function() {
//     jQuery('.block_four_sub_img').addClass("hidden").viewportChecker({
//         classToAdd: 'visible animated fadeInLeft',
//         offset: 100
//        });
// });
// jQuery(document).ready(function() {
//     jQuery('.block_four_sub_container').addClass("hidden").viewportChecker({
//         classToAdd: 'visible animated fadeInRight',
//         offset: 100
//        });
// });
jQuery(document).ready(function() {
    jQuery('.block_five_list_item').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated bounceInDown',
        offset: 100
       });
});




/*lift*/
jQuery(document).ready(function () {

    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > 100) {
            jQuery('.scrollup').fadeIn();
        } else {
            jQuery('.scrollup').fadeOut();
        }
    });

    jQuery('.scrollup').click(function () {
        jQuery("html, body").animate({
            scrollTop: 0
        }, 1200);
        return false;
    });

});


jQuery(document).ready(function() {
	
	setTimeout(function(){
		jQuery('body').addClass('loaded');
	}, 3000);
	
});


//text slider
jQuery(function(){
    var i=1;
  
 	 
    function slider(){
      var l = jQuery(".fadeslider .slide").length;
      if(i==l){i=0;}
      jQuery(".fadeslider .slide").hide();
      i++;
      jQuery(".fadeslider .slide:nth-child("+i+")").show();

      if(i >= l){i = 0;}
    }
  
    function sliderback(){
      var l = $(".fadeslider .slide").length;
      if(i==0){i=l+1;}
      jQuery(".fadeslider .slide").hide();
      i--;
      if(i <= 0){i = l;}
      jQuery(".fadeslider .slide:nth-child("+i+")").show();
      jQuery(".slidelist div:nth-child("+i+")").addClass("active");


    }
  	
    jQuery(".slidenext").click(function(){
      slider();
    });

    jQuery(".slideback").click(function(){
      sliderback();
    });
   
    var timer = setInterval(slider, 5000);
    jQuery('.slideback,.slidenext').hover(function(ev){
        clearInterval(timer);
    }, function(ev){
        timer = setInterval( slider, 5000);
    });
  
})

//slider_text_bottom

// jQuery(document).ready(function() {
//  jQuery(".slider_text_bottom").each(function () { // обрабатываем каждый слайдер
//   var obj = jQuery(this);
//   jQuery(obj).append("<div class='nav clearfix'></div>");
//   jQuery(obj).find("li").each(function () {
//    jQuery(obj).find(".nav").append("<span rel='"+jQuery(this).index()+"'></span>"); // добавляем блок навигации
//    jQuery(this).addClass("slider_text_bottom"+jQuery(this).index());
//   });
//   jQuery(obj).find("span").first().addClass("on"); // делаем активным первый элемент меню
//  });
// });
// function sliderJS (obj, sl) { // slider function
//  var ul = jQuery(sl).find("ul"); // находим блок
//  var bl = jQuery(sl).find("li.slider_text_bottom"+obj); // находим любой из элементов блока
//  var step = jQuery(bl).width(); // ширина объекта
//  jQuery(ul).animate({marginLeft: "-"+step*obj}, 500); // 500 это скорость перемотки
// }
// jQuery(document).on("click", ".slider_text_bottom .nav span", function() { // slider click navigate
//  var sl = jQuery(this).closest(".slider_text_bottom"); // находим, в каком блоке был клик
//  jQuery(sl).find("span").removeClass("on"); // убираем активный элемент
//  jQuery(this).addClass("on"); // делаем активным текущий
//  var obj = jQuery(this).attr("rel"); // узнаем его номер
//  sliderJS(obj, sl); // слайдим
//  return false;
// });

	jQuery(document).ready(function(){
    jQuery('.bxslider').bxSlider({
     speed: 1000,
     responsive: true,
     auto: true
});
});
	
jQuery(document).ready(function() {
	jQuery(window).resize(function(){
  if( jQuery(this).width() <= 768 ) {
    jQuery('script[src="js/jquery.bxslider.js"]').remove();
  } 
});
})


//validate
jQuery(document).ready(function(){

    jQuery("#callback_form").validate({

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
