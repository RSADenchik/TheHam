    $(document).ready(function() {
        $(function(){
              var filterizd =  $('.filtr-container').filterizr( {
                  animationDuration: 0.6,
                  layout: 'sameSize',
                  filterOutCss: {
                      'opacity': 0,
                      transform: 'scale(0.75)'
                  },
                  filterInCss: {
                      'opacity': 1,
                      transform: 'scale(0.75)',
                      transition: 'all 0.5s ease-out 0ms'
                  }
              });

              $(function() {
                //Simple filter controls
                $('.simplefilter .work-li').click(function () {
                    $('.simplefilter .work-li').removeClass('active');
                    $(this).addClass('active');
                });
              });
        });
        // Selected first li
        $('.work-menu .work-li').hover(function() {
            $('.work-menu li').removeClass('selected');
        });
    });
