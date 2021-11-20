$(document).ready(function(){

    // change the bar icon to times when clicked
    // then view the nav
    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    }); 

    // scrolling the window
    $(window).on('scroll load', function(){
        $('.fa-bars').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');
        // position the header to the top
        if($(window).scrollTop()>30){
            $('header').addClass('header-active');
        }
        else{
            $('header').removeClass('header-active');
        }

        //remove the Active class from an element, and place it to a current one 
        $('section').each(function(){
            var top = $(window).scrollTop();
            var id = $(this).attr('id');
            var height = $(this).height();
            var offset = $(this).offset().top - 200;
            if(top >= offset && top < height + offset){
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find('[href="#' + id +'"]').addClass('active');
            }
        });
    });

});