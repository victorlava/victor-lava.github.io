'use strict';
var clickCounter = 0;

/* Tasks:
*  1. Paspaudus ant navigacijos linku jie turi likti "active"
*     būsenoje, t.y pabraukti. TIP: panaudoti "this" žodį.
*
*  2. Paspaudus ant baltos rodyklės rožinėje sekcijoje,
*     ekranas turi gražiai pasislinkit iki "team" sekcijos
*
*  3. Pridėti įkonėlę far fa-times-circle fa-2x prie kiekvieno žmogaus
*     Paspaudus ant jos turi gražiai pradinkit
*     žmogaus nuotrauka kartu su tekstu.
*     TIP: panaudoti "this" ir animate metodą
*
*  4. Susikurti mygtuką "Make small" šali "Follow on instagram" mygtuko.
*     Susikurti klasę .small CSS'e, ji turi pamažinti instagramo nuotraukų aukštį.
*     Paspaudus ant mygtuko "Make small", reikia uždėti klasę .small ant nuotraukų.
*     Jei vartotojas paspaudžia dar kartą ant to mygtuko, tai nuotraukos turi padidėti atgal.
*     TIP: panaudoti toggleClass metodą
*
***  5. (EXTRA) Kai forma yra išsiunčiama paslėpti gražiai visą section.contact sekciją.
*               Kai animacija pasibaigia reikia ištrinti visą section.contact, jog ji
*               neužimtų vietos ir nesugadintų dizaino.
*
*    TIP: Panaudoti formos "submit" įvykį, animate funkciją
*
***   6. (EXTRA) Patobulinti 3. užduotį. Kai visi elementai yra paslėpti ištrinti visą
*              section.team sekciją, naudoti control flow(if/else), kintamuosius, sekti
*   kiek elementų buvo uždaryta, jei buvo uždaryti visi tai animuoti paslėpimą.
*
*/


$(document).ready(function() {

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

        let memberCount = $('.member').length;

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

});
