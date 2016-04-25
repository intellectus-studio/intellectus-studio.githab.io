"use strict";

var $ = require('jquery');
var jQuery = require('jquery');

var Tab = require('./tab.js');
/*
    tabs functionality
*/


module.exports = function(selector) {


    if (!selector)
        return;



    $(selector).each(function() {
        new Tabs($(this));
    });

    function Tabs(item) {

        var root = this;

        root.obj = item;

        root.tabsList = [];

        root.obj.find('[data-tab]').each(function() {
            root.tabsList.push(Tab($(this)));
        });

        root.active = root.tabsList.find(function(element, index, array) {
            if (element.active)
                return true;
            else
                return false;
        });

        var i = 0;

        root.obj.on('click', function(e) {

            var item = $(e.target).closest('[data-tab]').eq(0);

            if (item.length) {
                root.active.active = false;
                root.active.setView();

                root.active = root.tabsList.find(function(element, index, array) {

                    return (item.context === element.obj.context)

                });
                root.active.active = true;
                root.active.setView();
            }


        });



    };





}
