$(function () {
    //Responsive header
    $(window).resize(function () { 
        var docao = $(window).height();
        $('#header').css({height: docao});
    });

    //Shrink navbar
    $(window).scroll(function(){
        if($(this).scrollTop()>100){
            $('.navbar').addClass('navbar-shrink');
        }
        else{
            $('.navbar').removeClass('navbar-shrink');
        }
    });

    //Menu scroll
    var menuHeight = $('.navbar').height();
    $('.navbar ul li:nth-child(1) a').click(function(e){
        $('html,body').animate({scrollTop:$('#services').offset().top - menuHeight},1500, "easeInOutExpo");
        return false;
    });
    $('.navbar ul li:nth-child(2) a').click(function(e){
        $('html,body').animate({scrollTop:$('#portfolio').offset().top - menuHeight},1500, "easeInOutExpo");
        return false;
    });
    $('.navbar ul li:nth-child(3) a').click(function(e){
        $('html,body').animate({scrollTop:$('#about').offset().top - menuHeight},1500, "easeInOutExpo");
        return false;
    });
    $('.navbar ul li:nth-child(4) a').click(function(e){
        $('html,body').animate({scrollTop:$('#team').offset().top - menuHeight},1500, "easeInOutExpo");
        return false;
    });
    $('.navbar ul li:nth-child(5) a').click(function(e){
        $('html,body').animate({scrollTop:$('#contact').offset().top - menuHeight},1500, "easeInOutExpo");
        return false;
    });

    // Hover menu of navbar
    $(window).scroll(function(){
        $('.navbar ul li a').removeClass('active');
        if (($(this).scrollTop() >= $('#services').offset().top - menuHeight) &&
            ($(this).scrollTop() < $('#portfolio').offset().top - menuHeight)) {
            $('.navbar ul li:nth-child(1) a').addClass('active');
        } else {
            $('.navbar ul li a').removeClass('active');
            if (($(this).scrollTop() >= $('#portfolio').offset().top - menuHeight) &&
                ($(this).scrollTop() < $('#about').offset().top - menuHeight)) {
                $('.navbar ul li:nth-child(2) a').addClass('active');
            } else {
                $('.navbar ul li a').removeClass('active');
                if (($(this).scrollTop() >= $('#about').offset().top - menuHeight) &&
                    ($(this).scrollTop() < $('#team').offset().top - menuHeight)) {
                    $('.navbar ul li:nth-child(3) a').addClass('active');
                } else {
                    $('.navbar ul li a').removeClass('active');
                    if (($(this).scrollTop() >= $('#team').offset().top - menuHeight) &&
                        ($(this).scrollTop() < $('#contact').offset().top - menuHeight)) {
                        $('.navbar ul li:nth-child(4) a').addClass('active');
                    } else {
                        $('.navbar ul li a').removeClass('active');
                        if (($(this).scrollTop() >= $('#contact').offset().top - menuHeight)) {
                            $('.navbar ul li:nth-child(5) a').addClass('active');
                        } else {
                            $('.navbar ul li a').removeClass('active');
                        };
                    };
                };
            };
        };
    });

    //Button up top
    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $('.btn-up').fadeIn('slow');
        } else{
            $('.btn-up').fadeOut('slow');
        }
    });

    $('.btn-up').click(function(){
        $('html,body').animate({scrollTop:0},1500,"easeInOutExpo");
    })
});