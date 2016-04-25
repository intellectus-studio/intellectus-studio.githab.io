"use strict";

var $ = require('jquery');
var jQuery = require('jquery');

/*
    catalog buttons 
    change view (line/box)
*/
module.exports = function() {
    var $items = $('.catalog_box');

    $('.switch').on('click', function(e) {

        console.time('switch: ');
        var $button = $(e.target);

        var view = $button.attr('value');

        if (!view)
            return;

        if (view == 'line') {
            $items.addClass('line');
        } else {
            $items.removeClass('line');
        }

        console.timeEnd('switch: ');

    });


    $(document).ready(function() {
        var view = $('.switch').find('input:checked').attr('value');

        if (view == 'line') {
            $items.addClass('line');
        } else {
            $items.removeClass('line');
        }

    });
};
