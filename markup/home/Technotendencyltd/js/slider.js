"use strict";

var $ = require('jquery');
var jQuery = require('jquery');

module.exports = function(selector) {
    // simple carusel plagin

    (function($) {

        function Slider(element) {

            var slider = this;
            slider.obj = element;

            slider.list = slider.obj.find('.slider_list');
            slider.slides = slider.obj.find('.slider_item');
            slider.slides.width = slider.obj.width();
            slider.dots = slider.obj.find('.slider_dots');
            slider.active = 1;

            slider.arrow = {
                left: slider.obj.find('.arrow-left'),
                right: slider.obj.find('.arrow-right')
            }

            slider.init();

            slider.bind();

        };

        Slider.prototype.init = function() {
            var slider = this;
            var sliderUlWidth = slider.slides.width * slider.slides.length;

            slider.list.css({
                width: sliderUlWidth,
                marginLeft: -slider.slides.width
            });
            slider.slides.css('width', slider.slides.width);




            slider.createDots();

        };

        Slider.prototype.createDots = function() {
            var slider = this;

            for (var i = 0; i < slider.slides.length; i++) {
                slider.obj.find('.slider_dots')
                    .append($('<div/>', {
                        class: 'slider_dot_hoverspace',
                        'data-slide': i
                    }).append('<div class="slider_dot"></div>'));
            }

            slider.dots.find('.slider_dot_hoverspace').eq(slider.active).addClass('active');
        }

        Slider.prototype.next = function(self) {
            var slider = self;
            console.log(slider);
            slider.dots.find('.slider_dot_hoverspace.active').removeClass('active');
            slider.list.animate({
                left: -slider.slides.width
            }, 400, function() {
                slider.obj.find('.slider_item').first().appendTo(slider.obj.find('.slider_list'));
                slider.list.css('left', '');
            });

            slider.inc(slider);

            slider.dots.find('.slider_dot_hoverspace').eq(slider.active).addClass('active');
        };

        Slider.prototype.prev = function(self) {
            var slider = self;

            slider.dots.find('.slider_dot_hoverspace.active').removeClass('active');

            slider.list.animate({
                    left: slider.slides.width
                }, 400,
                function() {
                    slider.obj.find('.slider_item').last().prependTo(slider.obj.find('.slider_list'));
                    slider.list.css('left', '');
                });

            slider.dec(slider);

            slider.dots.find('.slider_dot_hoverspace').eq(slider.active).addClass('active');
        };

        Slider.prototype.inc = function(slider) {
            slider.active++;
            if (slider.active >= slider.slides.length)
                slider.active = 0;
        }

        Slider.prototype.dec = function(slider) {
            slider.active--;
            if (slider.active < 0)
                slider.active = slider.slides.length - 1;
        }

        Slider.prototype.bind = function() {
            var slider = this;
            slider.arrow.right.on('click', function() {
                slider.next(slider);
            });
            slider.arrow.left.on('click', function() {
                slider.prev(slider);
            });


            $(window).on('resize', function() {
                slider.resize(slider);
            });

            slider.dots.find('.slider_dot_hoverspace').on('click', function() {
                var active = slider.active;
                slider.active = Number($(this).attr('data-slide'));

                var change = active - slider.active;

                if (change > 0) {
                    for (var i = 0; i < Math.abs(change); i++) {

                        slider.obj.find('.slider_item').last().prependTo(slider.obj.find('.slider_list'));
                    }
                } else {
                    for (var i = 0; i < Math.abs(change); i++) {
                        slider.obj.find('.slider_item').first().appendTo(slider.obj.find('.slider_list'));
                    }
                }

                slider.dots.find('.slider_dot_hoverspace.active').removeClass('active');
                slider.dots.find('.slider_dot_hoverspace').eq(slider.active).addClass('active');

            });
        }

        Slider.prototype.resize = function(slider) {
            slider.slides.width = slider.slides.outerWidth();
            var sliderUlWidth = slider.slides.width * slider.slides.length;

            slider.list.css({
                width: sliderUlWidth,
                marginLeft: -slider.slides.width
            });
        }

        $.fn.carusel = function() {
            this.each(function() {
                new Slider($(this));
            });

            return this;
        }

    })(jQuery);

    $(document).ready(function() {
        $(selector).carusel();
    });

};
