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
    })
    $('.navbar ul li:nth-child(2) a').click(function(e){
        $('html,body').animate({scrollTop:$('#portfolio').offset().top - menuHeight},1500, "easeInOutExpo");
        return false;
    })
    $('.navbar ul li:nth-child(3) a').click(function(e){
        $('html,body').animate({scrollTop:$('#about').offset().top - menuHeight},1500, "easeInOutExpo");
        return false;
    })
    $('.navbar ul li:nth-child(4) a').click(function(e){
        $('html,body').animate({scrollTop:$('#team').offset().top - menuHeight},1500, "easeInOutExpo");
        return false;
    })
    $('.navbar ul li:nth-child(5) a').click(function(e){
        $('html,body').animate({scrollTop:$('#contact').offset().top - menuHeight},1500, "easeInOutExpo");
        return false;
    })

    //Button up top
    $('.btn-up').click(function(){
        $('html,body').animate({scrollTop:0},1500,"easeInOutExpo");
    })
});