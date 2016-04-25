"use strict";

var $ = require('jquery');
var jQuery = require('jquery');

/*
 *  hover to the main menu
 *
 */

module.exports = function(selector, itemSelector) {

    function Hover(element) {
        var menu = this;

        menu = {
            obj: element,
            item: element.find(itemSelector)
        };

        menu.obj.hover(function() {

            menu.item.addClass('active');

            if ((typeof menu.offset == "undefined") ||
                (menu.winWidth !== $(window).width())) {

                menu.offset = menu.item.offset();

                menu.item.css('margin-left', -menu.offset.left);
                menu.winWidth = $(window).width();
                console.log('reset');
            }

        }, function() {
            menu.item.removeClass('active');
        });

        $(window).resize(function() {

        });
    };

    $(selector).each(function() {
        Hover($(this));
    });


    // hovered - visible part of menu selector
    // swithed - hidden part of menu selector

    /* var hover = {};

    hover.hovered = $(hovered);
    hover.switched = $(switched);

    hover.hovered.hover(function() {
        var obj = $(this);
        var menu = obj.find('data-menu');

        if (!menu.length) {
            menu = hover.hovered.index(obj);
            console.warn('No data atribute');
        }

        if (hover.switched.eq(menu).length) {
            menu = hover.switched.eq(menu);
        } else {
            console.warn('Menu item not found');
            return;
        }


        hover.active = menu;

        hover.active.addClass('active');

    }, function (){
        if (hover.active.is(':hover')) {
            console.log('menu is on focus');
            return;
        }
        hover.active.removeClass('active');

        hover.active = null;
    });

    // hover.hovered.on('mouseout', function() {

        

    // });


    $('body').delegate(switched + '.active', 'mouseover', function() {
      
      $(this).addClass('active');

      hover.active = $(this);
  });


    $('body').delegate(switched + '.active', 'mouseout', function() {
      console.log(this);
      console.log('menu item is out of focus');
      hover.active.removeClass('active');

      hover.active = null;
  });
*/
};
