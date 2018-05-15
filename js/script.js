'use strict';
var clickCounter = 0;

/* 1. Jūsų tikslas yra įgyvendinti asinchroninį duomenų įkelimą vaikštant tarp "Home" ir
      "About us" nuorodų. Tam reikia oanaudoti AJAX technologiją ir gauti duomenis iš
      nuotolinio serverio JSON formatu. Reikia papildyti pirmajį kodo gabaliuką, kur ".navigation li" ...
      Panaudoti control flow (if/else), nustatant ant kokios nuorodos vartotojas paspaudė.

      Nuorodas į kurias reikia kreiptis:
        - "Home" tekstui - http://viktoraslava.lt/pamokos/jquery-practical-03/home.json,
        - "About us" tekstui - http://viktoraslava.lt/pamokos/jquery-practical-03/about.json

        TIP: Naudokites šiandienos codepenais, viskas labai panašiai.
            Galite panaudoti html(), append(), text() metodus, taip pat
            jQuery elemento kūrimo komandą, pvz. $('<h1>');
 */


$(document).ready(function() {

    // 1.
    $('.navigation li').on('click', function() {
        $('.navigation li').removeClass('active');
        $(this).addClass('active');

        /* AJAX code */


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
