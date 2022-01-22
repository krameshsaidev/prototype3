// JavaScript source code
$('#navbarDropdownMenuLink').on('click', function () {
    $('.dropdown-unique').css('display', 'block');
});

 $(document).ready(function () {
                $.each($('#NavSection').find('li'), function () {
                    $(this).toggleClass('active',
                        window.location.pathname.indexOf($(this).find('a').attr('href')) > -1);
                    $(this).parents('li').addClass('active').css('background-color', 'black');
                });
 });


//var a = 0;
////$(window).scroll(function () {
//    var oTop = $('#counter').offset().top - window.innerHeight;
//    if (a == 0 && $(window).scrollTop() > oTop) {
//        $('.counter').each(function () {
//            $(this).prop('Counter', 0).animate({
//                Counter: $(this).text()
//            }, {
//                duration: 4000,
//                easing: 'swing',
//                step: function (now) {
//                    $(this).text(Math.ceil(now));
//                }
//            });
//        });
//        a = 1;
//    }
////});

$(document).ready(function () {

    $('.counter').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

});

(function ($) {

    "use strict";

    var fullHeight = function () {

        $('.js-fullheight').css('height', $(window).height());
        $(window).resize(function () {
            $('.js-fullheight').css('height', $(window).height());
        });

    };
    fullHeight();

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

})(jQuery);