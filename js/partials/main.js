$(document).ready(function() {

    // Home beckground fade
    $('.home').fadeOut(10).fadeIn(4000);
    $('.content').fadeOut(10).fadeIn(3000);

    // ease scroll on header link
    $('.scrolling').click( function(){
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 4000, 'linear');
        }
        return false;
    });

    // Fade element without mobile
    var md = new MobileDetect(window.navigator.userAgent);
    if ( ! md.mobile() ) {
        $('.slide-bottom').fadeThis({
            speed: 900,
            distance: -50,
            reverse: false
        });
        $('.slide-left').fadeThis({
            speed: 1500,
            distance: 200,
            reverse: false
        });
    }
    // Header on scroll
    $(document).on('scroll', function() {

        var header = $('header');
        var menuList = $('.menu-list');
        var menuListLink = $('.menu-list > .list-items > a');

        if($(document).scrollTop()>100) {
            header.removeClass('header', 'linear').addClass('header-small', 'ease-in-out');
            menuList.css('height', '74px');
            menuListLink.css('padding-bottom', '33px');
        }
        else {
            header.removeClass('header-small').addClass('header', 'ease-in-out');
            menuList.css('height', '92px');
            menuListLink.css('padding-bottom', '50px');
        }
    });
    // End Header on scroll

    // Event on scroll element

    $(window).scroll(function() {
        var y = $(document).scrollTop(); // Height about of top page
        var h = $(window).height();  // Height of viewport
        var about = $('.about'); // target about
        var purchase = $('.purchase'); // target purchase
        var purchase1 = $('.purchase-1');

        // If scroll  up!
        if(y + h < about.position().top) {
            about.css({
                backgroundPositionX: '-74%'
            });
        }
        // If target partical in viewport
        else if(y + h < about.position().top + about.outerHeight()) {
            about.css({
                backgroundPositionX: '4%',
                transition: '5s ease'
            });
        }
        // If scroll bottom!
        else if(y > about.position().top + about.outerHeight()) {
            about.css({
                backgroundPositionX: '-74%',
                transition: '1s ease'
            });
        }
        // If target partical in viewport
        else if(y > about.position().top) {
            about.css({
                backgroundPositionX: '4%',
                transition: '5s ease'
            });
        }
        // If scroll on target
        else {
            about.css({
                backgroundPositionX: '4%'
            });
        }
        // End about

        // Start purchase1
        if(y + h < purchase.position().top) {
            purchase.css({
                opacity: 0
            });
        }
        // If target partical in viewport
        else if(y + h < purchase.position().top + purchase.outerHeight()) {
            purchase.css({
                opacity: 1,
                transition: '8s'
            });
        }
        // If scroll bottom!
        else if(y > purchase.position().top + purchase.outerHeight()) {
            purchase.css({
                opacity: 0,
                transition: '2s'
            });
        }
        // If target partical in viewport
        else if(y > purchase.position().top) {
            purchase.css({
                opacity: 1,
                transition: '8s'
            });
        }
        // If scroll on target
        else {
            purchase.css({
                opacity: 1
            });
        }
        // If scroll  up!
        if(y + h < purchase1.position().top) {
            purchase1.css({
                backgroundPositionX: '-74%'
            });
        }
        // If target partical in viewport
        else if(y + h < purchase1.position().top + purchase1.outerHeight()) {
            purchase1.css({
                backgroundPositionX: '4%',
                transition: '5s ease'
            });
        }
        // If scroll bottom!
        else if(y > purchase1.position().top + purchase1.outerHeight()) {
            purchase1.css({
                backgroundPositionX: '-74%',
                transition: '1s ease'
            });
        }
        // If target partical in viewport
        else if(y > purchase1.position().top) {
            purchase1.css({
                backgroundPositionX: '4%',
                transition: '5s ease'
            });
        }
        // If scroll on target
        else {
            purchase1.css({
                backgroundPositionX: '4%'
            });
        }
        // End purchase1
    });

    // Button-search desktop and tablet
     $('#search-ham').on('click', function () {

        var search_button = $('.search-button');
        var search_input = $('.search-input');
        var search_button_input = $('.search-button-input');

        if(search_button.hasClass('active-button') && search_button_input.hasClass('active-button-input') && search_input.hasClass('active-input')) {
            search_button.removeClass('active-button');
            search_input.removeClass('active-input');
            search_button_input.removeClass('active-button-input');
            return true;
        }
        else {

            search_button.addClass('active-button');
            search_input.addClass('active-input');
            search_button_input.addClass('active-button-input');
        }
    });

    /* Button-search mobile divice */
    $('#m-search').on('click', function () {

        var m_search_btn = $('.m-btn-search');
        var m_search_input = $('.search-m-input');
        var m_search_input_btn = $('.m-btn');

        if ( m_search_btn.hasClass('m-btn-active') && m_search_input.hasClass('active-m-input') && m_search_input_btn.hasClass('m-btn-input-active')) {

            m_search_btn.removeClass('m-btn-active');
            m_search_input.removeClass('active-m-input');
            m_search_input_btn.removeClass('m-btn-input-active');

            return true;
        }
        else {

            m_search_btn.addClass('m-btn-active');
            m_search_input.addClass('active-m-input');
            m_search_input_btn.addClass('m-btn-input-active');

        }
    });

    // Фильтр блока .work
    var filterizd = $('.filtr-container').filterizr( {
        animationDuration: 0.6,
        layout: 'sameWidth',
        delay: 25,
        selector: '.filtr-container',
        setupControls: true,
        filterOutCss: {
            opacity: 0,
            transform: 'scale(0.5)'
        },
        filterInCss: {
            opacity: 1,
            transform: 'scale(1)',
            transition: 'all 0.5s ease-out 0ms'
        }
    });

    //Simple filter controls
    $('.simplefilter .work-li').click(function() {
        $('.simplefilter .work-li').removeClass('active');
        $(this).addClass('active');
    });

    // Selected first li
    $('.work-menu .work-li').hover(function() {
        $('.work-menu li').removeClass('selected');
    });

    /* Slider-slick home */
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

    // Go to the previous item carousel
    $("#myBtn").click(function(){
        $("#myCarousel").carousel("prev");
    });

    // Go to the next item carousel
    $("#myBtn2").click(function(){
        $("#myCarousel").carousel("next");
    });
    // Meet our team input add image
    $('.input-1').on('change', function() {

        // Берем название загруженое в input и выводим в блок
        var filename1 = $(this).val().replace(/.*\\/, " ");
        $('#filename-1').val(filename1).css("display", "block");
        $('#input-file-1').css("display", "block");
    });

    $('.input-2').on('change', function() {
        var filename2 = $(this).val().replace(/.*\\/, " ");
        $('#filename-2').val(filename2).css("display", "block");
        $('#input-file-2').css("display", "block");
    });

    $('.input-3').on('change', function() {
        var filename3 = $(this).val().replace(/.*\\/, " ");
        $('#filename-3').val(filename3).css("display", "block");
        $('#input-file-3').css("display", "block");
    });

    $('.input-4').on('change', function() {
        var filename4 = $(this).val().replace(/.*\\/, " ");
        $('#filename-4').val(filename4).css("display", "block");
        $('#input-file-4').css("display", "block");
    });

    $('#input-file-1').on('click', function() {
        $(this).hide();
        $('#filename-1').hide();
    });
    $('#input-file-2').on('click', function() {
        $(this).hide();
        $('#filename-2').hide();
    });
    $('#input-file-3').on('click', function() {
        $(this).hide();
        $('#filename-3').hide();
    });
    $('#input-file-4').on('click', function() {
        $(this).hide();
        $('#filename-4').hide();
    });

    //upload images

    $(".hover-add-img").on('submit',(function(e) {
            e.preventDefault();
            $.ajax({
                url: "ajaxupload.php",
                type: "POST",
                data:  new FormData(this),
                contentType: false,
                cache: false,
                processData:false,
                beforeSend : function()
                {
                    //$("#preview").fadeOut();
                    // $("#err").fadeOut();
                },
                success: function(data)
                {
                    if(data=='invalid')
                    {
                        // invalid file format.
                        // $("#err").html("Invalid File !").fadeIn();
                    }
                    else
                    {
                        $(".team-person:hover .person-img").html(data).fadeIn();
                        $(".hover-add-img")[0].reset();
                    }
                },
                error: function(e)
                {
                    // $("#err").html(e).fadeIn();
                }
            });
        }));
    // Serealize data fron checkbox
    $('.purchase-1-button').on('click', function() {
        var formCheck = $('.ul-purchase-1 input:checkbox:checked');
        formCheck.each(function(){
            alert($(this).val());
        });
    });

    // Google maps

    $(function() {
        $("#map").googleMap({scrollwheel: true}).addMarker({
            coords: [50.512706, 30.602495],
            url: 'https://RSADenchik.github.io/TheHam'
        });
    });
    // Google maps for mobile
    $(function() {
        $("#map-m").googleMap({scrollwheel: true}).addMarker({
            coords: [50.512706, 30.602495],
            url: 'https://RSADenchik.github.io/TheHam'
        });
    });
        // Форма отправки сообщения

    $("#commentForm").submit(function() { //устанавливаем событие отправки для формы с id=form
        var form_data = $(this).serialize(); //собераем все данные из формы
        $.ajax({
                type: "POST", //Метод отправки
                url: "mail.php", //путь до php фаила отправителя
                data: form_data,
                beforeSend: function () {

                },
                success: function () {
                    //код в этом блоке выполняется при успешной отправке сообщения
                        var inputName = $('.input-name').val();
                        alert(inputName + ", " + "письмо успешно отправлено!");
                }
        });
    });
});