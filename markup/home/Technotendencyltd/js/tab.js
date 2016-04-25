"use strict";

var $ = require('jquery');
var jQuery = require('jquery');

module.exports = function(element) {

    function Tab(obj) {
        if (!obj)
            return;

        this.obj = obj;

        this.target = $(this.obj.attr('data-tab'));

        this.obj.is('.active') ? this.active = true : this.active = false;     

        var self = this;

        // toggle class in tabs
        this.setView = function() {
            if (self.active) {
                self.obj.addClass('active');
                self.target.addClass('active');
            } else {
                self.obj.removeClass('active');
                self.target.removeClass('active');
            }
        };

        this.setView();

    };

    return new Tab(element); 

};

$(document).ready(function() {
    $('.post_tab1').click(function() {
        $(".post_tab1").toggleClass("active");
        $(".post_content1").toggleClass("active");
        $(".post_tab2, .post_tab3").removeClass("active");
        $(".post_content2, .post_content3").removeClass("active");
    });
    $('.post_tab2').click(function() {
        $(".post_tab2").toggleClass("active");
        $(".post_content2").toggleClass("active");
        $(".post_tab1, .post_tab3").removeClass("active");
        $(".post_content3, .post_content1").removeClass("active");
    });
    $('.post_tab3').click(function() {
        $(".post_tab3").toggleClass("active");
        $(".post_content3").toggleClass("active");
        $(".post_tab1, .post_tab2").removeClass("active");
        $(".post_content2, .post_content1").removeClass("active");
    });
});