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
*  4. Susikurti mygtuką "Make small" šalia "Follow on instagram" mygtuko.
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
*               section.team sekciją, naudoti control flow(if/else), kintamuosius, sekti
*               kiek elementų buvo uždaryta, jei buvo uždaryti visi tai animuoti paslėpimą.
*
*/


$(document).ready(function() {

    // 1.
    $('.navigation li').on('click', function() {
        /* Naudoti this, kadangi tai yra efektyviau - jQuery
            neieško elemento visame DOM'e, o paima jį iš click įvykio */

        // $('.navigation li').removeClass('active'); // Neefektyvu, nes ieško visame DOM'e
        // $(this).siblings().removeClass('active');
        $(this).parent().find('li').removeClass('active');
        $(this).addClass('active');
    });

    // 2.
    $("#js-scroll").on('click', function() {

        // Element bottom example
        let height = $(".team").height(),
            y = $(".team").offset().top,
            bottom = height + y;

        $('html, body').animate({
            scrollTop: $('.team').offset().top
            // scrollTop: bottom
        }, 1000);

    });



    // 3.
    $('.member i').on('click', function() {

        $(this).parent().animate({
            opacity: 0
        }, 500);

        // 6.
        clickCounter++;
        // alert(clickCounter);
        // clickCounter = clickCounter + 1;
        var memberCount = $('.member').length;

        // alert(clickCounter + ' ' + memberCount);
        if(memberCount <= clickCounter) {
            $('section.team').animate({
                height: 0,
                opacity: 0,
                padding: 0
            }, 1000, function() {
                $(this).remove();
            })
        }
        // end of 6.

    });

    // 4.1 - su button
    $('#js-make-small').on('click', function() {
        // $('.instagram').toggleClass('small');

        // Efektyviau, nes neieško .instagram elementų visame DOM'e
        $(this).parent().parent().find('.instagram').toggleClass('small');
    })

    // 4.2 - su anchor, reikia "nukillinti" anchor įvykį
    // $('#js-make-small').on('click', function(event) {
    //     event.preventDefault();
    //     $('.instagram').toggleClass('small');
    // })

    // 5. "submit" formos siuntimo įvykis
    $('#contact-form').on('submit', function(event) {
        event.preventDefault(); // Sustabdo formos siuntimą

        $('section.contact').animate({
            height: 0,
            opacity: 0,
            padding: 0
        }, 1000, function() {
            $(this).remove();
            // $(this).css('overflow', 'hidden');
        })

    });

});
