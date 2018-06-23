$( document ).ready(function() {

    $('.menu-btn').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('menu-btn__active')
    });

    $('.menu-btn').on('click', function (e) {
        e.preventDefault();
        $('.phone-menu').toggleClass('phone-menu__active')
    });

    $('.play_video').click(function(e){
        e.preventDefault();

        var video_link = $(this).data('video');
        video_link = '<iframe src="' + video_link + '" width="500" height="208" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';

        $('.about_video').append(video_link).fadeIn(200);
    });


    $('.close_video').click(function(e){
        e.preventDefault();

        $('.about_video').fadeOut(200,function(){
            $('iframe', this).remove();
        });

    });




    $('.play_video').click(function(e){
        e.preventDefault();

        var video_link = $(this).data('video');
        video_link = '<iframe src="' + video_link + '" width="500" height="208" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';

        $('.about_video').append(video_link).fadeIn(200);
    });


    $('.close_video').click(function(e){
        e.preventDefault();

        $('.about_video').fadeOut(200,function(){
            $('iframe', this).remove();
        });

    });

});
