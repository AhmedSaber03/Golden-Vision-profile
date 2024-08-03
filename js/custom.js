// JavaScript Document

/*global $, alert, console*/

$(function () {
	
    'use strict';
    $('.navbar .links li:contains("About")').click(function () {
        // Change this value to the number of pixels you want to scroll down by
        var scrollAmount = 711;
        
        // Scroll down by the specified amount from the current position
        $('html, body').animate({
            scrollTop: $(window).scrollTop() + scrollAmount
        }, 711); // Duration of the scroll animation in milliseconds
    });
    $('.navbar .links li:contains("Team")').click(function () {
        // Change this value to the number of pixels you want to scroll down by
        var scrollAmount = 1663;
        
        // Scroll down by the specified amount from the current position
        $('html, body').animate({
            scrollTop: $(window).scrollTop() + scrollAmount
        }, 1663); // Duration of the scroll animation in milliseconds
    });
    $('.navbar .links li:contains("Our WORK")').click(function () {
        // Change this value to the number of pixels you want to scroll down by
        var scrollAmount = 2420;
        
        // Scroll down by the specified amount from the current position
        $('html, body').animate({
            scrollTop: $(window).scrollTop() + scrollAmount
        }, 2480); // Duration of the scroll animation in milliseconds
    });
    $('.navbar .links li:contains("Contact")').click(function () {
        // Change this value to the number of pixels you want to scroll down by
        var scrollAmount = 3255;
        
        // Scroll down by the specified amount from the current position
        $('html, body').animate({
            scrollTop: $(window).scrollTop() + scrollAmount
        }, 3255); // Duration of the scroll animation in milliseconds
    });
	//tiger nice scroll plugin
	$('html').niceScroll({
        cursorcolor: '#f6d202',
        cursorwidth: 6
    });
    //change header height
    $('.header').height($(window).height());
	//scroll to features
    $('.header .arrow i').click(function () {
    
        $('html, body').animate({
            scrollTop: $('.features').offset().top
        }, 1000);
        
    });
    
    $('.links li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
    //show more button hidden
    $('.show-more').click(function () {
        
        $('.our-work .hidden').fadeIn(1000);
        
    });
});


