'use strict';
var clickCounter = 0;

/*  Prieš pradedant darbus jum reikia atsisiųsti bootstrap'o sass versiją
    ir visus sass failiukus įsidėti į scss direktoriją. Tuomet į style.scss
    failą įtraukti bootstrap.scss failą su import taisykle. Bootstrap
    modulius, kurių nenaudosite reikia užkomentuoti bootstrap.scss faile.

    Taip pat reikia nepamiršti įsidėti bootstrap.min.js biblioteką per script
    tagą į head dalį, bootstrap.min.js failą galite išsaugoti js direktorijoje.

    1. Uždėti bootstrap'o tooltip'us ant žmonių vardo (h4 elementas)
      TIP: skaityti dokumentaciją kaip tai padaryti

   2. Įdėti bootstrap'o carousel modulį su 3 nuotraukomis.
      TIP: skaityti dokumentaciją kaip tai padaryti

EXTRA 2.1 Išjungti carousel sustabdymą kai pelė yra ant carousel modulio

   3. Įdėti bootstrap'o tabus "service" sekcijoje, stilizuoti juos, jog jie
      pritaptų prie esamo dizaino.
      TIP: skaityti dokumentaciją kaip tai padaryti, įsidėti _navs.scss failą

   4. Įgyvendinti formos validaciją naudojant http://www.formvalidator.net/index.html
      Naudotis svetainėje esančiu pavyzdžiu, kaip įsidiegti jQuery form validator įskiepį.
      Susirasti validavimo taisykles dokumentacijoje ir panaudoti pagal apačioje aprašytą logiką:

      - City: leidžiamos alphanumeric reikšmės
      - Street: leidžiamos alphanumeric reikšmės, taip pat tarpas ir taškas
      - Number: leidžiami tik skaičiai
*/


$(document).ready(function() {

    // 1.
    $('.navigation li').on('click', function() {
        $('.navigation li').removeClass('active');
        $(this).addClass('active');

        var text = $(this).find('a').text();

        if(text == 'Home') {

            $.ajax({
                type: "GET",
                dataType: 'json',
                url: "http://viktoraslava.lt/pamokos/jquery-practical-03/home.json",
                success: function(data, status) {
                    var h1 = $('<h1>'),
                        h3 = $('<h3>');

                    h1.text(data.title);
                    h3.text(data.description);

                    $('section.intro .text').html('').append(h1).append(h3);
                }
            })

        } else if(text == 'About us') {

            $.ajax({
                type: "GET",
                dataType: 'json',
                url: "http://viktoraslava.lt/pamokos/jquery-practical-03/about.json",
                success: function(data, status) {
                    var h1 = $('<h1>'),
                        p = $('<p>'),
                        button = $('<button id="js-team" class="button">');

                    h1.text(data.title);
                    p.text(data.description);
                    button.text('See our team');

                    $('section.intro .text').html('').append(h1).append(p).append(button);

                    $("#js-team").on('click', function() {
                        $('html, body').animate({
                            scrollTop: $(".team").offset().top
                        }, 1000);
                    });
                }
            })

        }


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

        var img = $('<img width="25" src="/img/loader.gif">');

        $('.contact #js-street').html('');
        $('.contact #js-street').append(img);

        $.ajax({
            method: 'GET',
            dataType: 'json',
            url: $(this).attr('action'),
            data: $(this).serialize(),
            success: function(data, status) {

                $('.contact #js-street img').remove();

                data.data.forEach(function(value, index) {
                    $('.contact #js-street').text(value.post_code + ' ' + value.address);
                })

                if(data.data.length === 0) {
                    $('.contact #js-street').text('No data');
                }
            }
        })


        // $('section.contact').animate({
        //     height: 0,
        //     opacity: 0,
        //     padding: 0
        // }, 1000, function() {
        //     $(this).remove();
        // })

    });

    $('#js-open-menu').click(function() {

        $('.navigation .menu').toggleClass('animated');

    });

});
