$(document).ready(function(){
    $('.menu .fa-bars').click(function(){
        $(this).toggleClass('far fa-times');
        $('nav').toggleClass('nav-toggle');
    });
    $('nav ul li a').click(function(){
        $('.fa-bars').removeClass('fa-times');
        $('nav').removeClass('nav-toggle');
    });
    $('.share-icon .fa-share').click(function(){
        $('.share-icon ul').toggle();
    });
    $(window).scroll(function(){
        $('.color-panel , .share-icon ul').hide();

        if($(window).scrollTop() >= 200){
            $('.scroll-icon').show();
        }
        else{
            $('.scroll-icon').hide();
        }
    });
    $('.theme-toggler').click(function(){
        $('.color-panel').toggle();
    });
    $('.color-panel ul li').click(function(){
        var color = $(this).css('background');
        $('.color').css('background', color);
    })
})