'use strict';



window.onload = function() {

    let navigation = document.querySelector('.navigation-top'), // Vienam elementui
        liActive = navigation.querySelector('li.active');

        window.onresize = function() {

            console.log(window.screen.width);

            if(window.screen.width < 300) {
                navigation.classList.add('animated');
                navigation.classList.add('fadeOut');
            }
            else {
                navigation.classList.add('fadeIn')
                navigation.classList.remove('fadeOut');
            }

        }


        // liActive.classList.add('test');
    // console.log();
    // var navigation = document.querySelectorAll('.navigation'); // Elementams

}


//
// window.onresize = function() {
//
//     // console.log('width:' + window.screen.width);
//     // console.log('height:' + window.screen.height);
//     //
//     // if(window.screen.height < 200) {
//     //     alert('per mazas ekranas');
//     // }
//
//
//     if (window.matchMedia("(min-width: 600px)").matches) {
//       /* the viewport is at least 600 pixels wide */
//       console.log('daugiau nei 600px');
//     } else {
//         console.log('mazesnis nei 600px');
//       /* the viewport is less than 400 pixels wide */
//     }
// }

//
// window.onscroll = function() {
//
//
//     console.log('scrollinu');
//
//
// }


//
//
// //
//
// if(vardas == 'viktoras') { // false
//     alert('viktoras');
//
// }
// else if(vardas == 'dovydas') {
//     alert('dovydas');
// }
// else if(vardas == 'tomas') {
//     alert('tomas');
// }
// else {
//     alert('tuscia');
// }
//
// // switch (vardas) {
// //     case 'viktoras':
// //         alert('viktoras');
// //
// //         // break;
// //     case 'dovydas':
// //         alert('dovydas');
// //         // break;
// //     case 'tomas':
// //         alert('tomas');
// //         break;
// //     default:
// //     alert('tuscia');
// //
// // }
//
//
// // function atspausdink(tekstas) {
// //     console.log(tekstas);
// //     alert(tekstas);
// //
// //     return 'viktoras';
// // }
// //
// //     var vardas = atspausdink();
//
//
// // var test = 'sdfsdwerwer';
//
// // console.log(vardas);
// //
// // atspausdink('tekstas 2');
// // atspausdink('2');
// // atspausdink('5');
