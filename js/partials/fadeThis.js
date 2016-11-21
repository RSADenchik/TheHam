$(document).ready(function() {

    $('.home').fadeOut(1).fadeIn(4000);
    $('.content').fadeOut(1).fadeIn(3000);

    var md = new MobileDetect(window.navigator.userAgent);

    if ( ! md.mobile() && ! md.tablet() ) {

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
        $('.hover-block').fadeThis({
            speed: 1000,
            distance: 200,
            reverse: false
        });
        $('.about-informations').fadeThis({
            speed: 1500,
            distance: 200,
            reverse: false
        });
        $('.work-title').fadeThis({
            speed: 2000,
            distance: 200,
            reverse: false
        });
        $('.service-title').fadeThis({
            speed: 2000,
            distance: 200,
            reverse: false
        });
    }
    // if ( md.tablet() ) {
    //
    //     $('.option-1').fadeThis({
    //         speed: 2000,
    //         distance: 200,
    //         reverse: false
    //     });
    //     $('.option-2').fadeThis({
    //         speed: 1500,
    //         distance: 200,
    //         reverse: false
    //     });
    //     $('.option-3').fadeThis({
    //         speed: 1500,
    //         distance: 200,
    //         reverse: false
    //     });
    //     $('.option-4').fadeThis({
    //         speed: 2000,
    //         distance: 200,
    //         reverse: false
    //     });
    //     $('.feature-title').fadeThis({
    //         speed: 2000,
    //         distance: 200,
    //         reverse: false
    //     });
    // }
});
