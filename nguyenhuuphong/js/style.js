$(document).ready(function () {
    setTimeout(function(){
    	$(".loaded").fadeOut();
        $('.preloader').fadeOut('slow');
    }, 1000);
});

$(window).scroll(function () {
    var top = $(document).scrollTop();
    var height = 300;
    if (top > height) {
        $('.navbar-fixed-top').addClass('menu-scroll');
    } else {
        $('.navbar-fixed-top').removeClass('menu-scroll');
    }
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 600) {
        $('.scrollup').fadeIn('slow');
        $('.scrollup').css({'display': 'block'});
    } else {
        $('.scrollup').fadeOut('slow');
        $('.scrollup').css({'display': 'none'});
    }
});
$('.scrollup').click(function () {
    $("html, body").animate({'scrollTop': 0}, 1000);
    return false;
});
new WOW().init();
$('.counter').counterUp({
	delay:100,
	time: 2000
});