$(document).ready(function(){
	new WOW().init();
	$(".jR3DCarouselGalleryDefault").jR3DCarousel({
		"height": 556,
		"slideLayout": "fill",
		"animation": "slide3D",
		"animationCurve": "ease",
		"animationDuration": 1200,
		"animationInterval": 2000,
		"autoplay": true,
		"rotationDirection": "rtl",
		"navigation": "circles",
		"slides": [
		{
			"src": "images/slider/1.jpg"
		},
		{
			"src": "images/slider/2.jpg"
		},
		{
			"src": "images/slider/3.jpg"
		}
		]
	})
	$(window).scroll(function(){
		if ($(this).scrollTop() > 500) {
			$('.scrollup').fadeIn();
		} else {
			$('.scrollup').fadeOut();
		}
	});
	$('.scrollup').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 1000);
		return false;
	});
	$(document).ready(function() {
		$('.progress .progress-bar').css("width",
			function() {
				return $(this).attr("aria-valuenow") + "%";
			}
			)
	});

	var $container = $('.portfolio-items');
	$container.isotope({
		filter: '*',
		animationOptions: {
			duration: 750,
			easing: 'linear',
			queue: false
		}
	});

	$('.portfolio-filter li a').click(function(){
		$('.portfolio-filter .current').removeClass('current');
		$(this).addClass('current');

		var selector = $(this).attr('data-filter');
		$container.isotope({
			filter: selector,
			animationOptions: {
				duration: 750,
				easing: 'linear',
				queue: false
			}
		});
		return false;
	});

	function showPage(){
		$(".spinner").hide();
		$("#showP").show();
	}
	$(window).load(function(){
		var myTime = setTimeout(showPage,2000);
	});

	$(".img-responsive").click(function(){
		var src = $(this).attr('src');
		$("#myModal").show();
		$(".modal-content").attr('src',src);
		$(".caption").html(this.alt)
	});
	$(".close").click(function(){
		$("#myModal").hide();
	});
});