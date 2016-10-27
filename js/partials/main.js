$(document).ready(function() {
    /* Button-search */
    $('#search-ham').on('click', function () {
        $('#forma').toggle();
    });
    /* Slider-slick */
    $(function() {
        $(".rslides").responsiveSlides({
          auto: false,
            speed: 1000,
            prevText: "<button class='Previous'></button>",
            nextText: "<button class='Next'></button>",
            timeout: 4000,
            maxwidth: "110px",
            nav: true,
            navContainer: ".rslides"
        });
    });
    // Go to the previous item
    $("#myBtn").click(function(){
        $("#myCarousel").carousel("prev");
    });

    // Go to the next item
    $("#myBtn2").click(function(){
        $("#myCarousel").carousel("next");
    });
    // Google maps
    $(function() {
        $("#map").googleMap({
            scrollwheel: true
        });

        // Marker 1
        $("#map").addMarker({
            coords: [50.512706, 30.602495],
            url: 'https://RSADenchik.github.io/second_psd'
        });
    })
});