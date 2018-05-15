'use strict';
var clickCounter = 0;


$(document).ready(function() {


    var test = {
        title: 'test',
        description: 'sdf'
    }

    console.log(JSON.stringify(test));

    $.ajax({
        type: "GET",
        url: "http://viktoraslava.lt",
        success: function(data, status) {

            // var images = $.parseJSON(data);
            console.log(data);




        }
    })

    // 1.
    $('.navigation li').on('click', function() {
        $('.navigation li').removeClass('active');
        $(this).addClass('active');
    });

    // 2.
    $("#js-scroll").on('click', function() {
        $('html, body').animate({
            scrollTop: $(".team").offset().top
        }, 1000);
    });

    // 3.
    $('.member i').on('click', function() {
        // 6.
        clickCounter++;

        var memberCount = $('.member').length;

        if(memberCount == clickCounter) {
            $('section.team').animate({
                height: 0,
                opacity: 0,
                padding: 0
            }, 1000, function() {
                $(this).remove();
            })
        }
        // end of 6.

        $(this).parent().animate({
            opacity: 0
        }, 500, function() {
            $(this).addClass('hidden');
        });


    });

    // 4.
    $('#follow').on('click', function() {
        $('.instagram').toggleClass('small');
    })

    // 5.
    $('#contact-form').on('submit', function(e) {
        e.preventDefault();

        $('section.contact').animate({
            height: 0,
            opacity: 0,
            padding: 0
        }, 1000, function() {
            $(this).remove();
        })

    });

    $('#js-open-menu').click(function() {

        $('.navigation .menu').toggleClass('animated');

    });

});
