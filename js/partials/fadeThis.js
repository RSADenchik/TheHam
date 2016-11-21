$(document).ready(function() {

    var md = new MobileDetect(window.navigator.userAgent);

    if ( ! md.mobile() ) {

        $('.option-1').fadeThis({
            speed: 2000,
            distance: 200,
            reverse: false
        });
        $('.option-2').fadeThis({
            speed: 1500,
            distance: 200,
            reverse: false
        });
        $('.option-3').fadeThis({
            speed: 1500,
            distance: 200,
            reverse: false
        });
        $('.option-4').fadeThis({
            speed: 2000,
            distance: 200,
            reverse: false
        });
        $('.feature-title').fadeThis({
            speed: 2000,
            distance: 200,
            reverse: false
        });
    }
    if ( md.tablet() ) {

        $('.option-1').fadeThis({
            speed: 2000,
            distance: 200,
            reverse: false
        });
        $('.option-2').fadeThis({
            speed: 1500,
            distance: 200,
            reverse: false
        });
        $('.option-3').fadeThis({
            speed: 1500,
            distance: 200,
            reverse: false
        });
        $('.option-4').fadeThis({
            speed: 2000,
            distance: 200,
            reverse: false
        });
        $('.feature-title').fadeThis({
            speed: 2000,
            distance: 200,
            reverse: false
        });
    }

    $('.home').fadeOut(1).fadeIn(4000);
    $('.content').fadeOut(1).fadeIn(3000);

});

// var md = new MobileDetect(window.navigator.userAgent);
//
// if ( ! md.mobile() ) {
//
// $(window).fadeThis({
//     speed: 1500,
//
// });

// }
//
// if ( md.tablet() ) {
//
//     $('.first-screen-animation').animate({
//         bottom: "+=10vh",
//         opacity: 1
//     }, 1500);
// }



// $('.home').animate({
//     width: "70%",
//     opacity: 0.4,
//     marginLeft: "0.6in",
//     fontSize: "3em",
//     borderWidth: "10px"
// }, 1500 );
