$( document ).ready(function() {

    $('.menu-btn').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('menu-btn__active')
    });

    $('.menu-btn').on('click', function (e) {
        e.preventDefault();
        $('.phone-menu').toggleClass('phone-menu__active')
    });

});
