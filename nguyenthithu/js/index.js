// new WOW().init();
$(document).ready(function () {
	$("#myform").validate({
  rules: {
    name: "required",
   	name2: "required",
   	email: "required",
   	subject: "required" 
  },
  messages: {
                name: "Input value",
                name2: "Input value",
                email: "Input value",
                subject: "Input value"
            }
});
	$("#slideshow > div:gt(0)").hide();

	setInterval(function() {
		$('#slideshow > div:first')
		.fadeOut(3000)
		.next()
		.fadeIn(3000)
		.end()
		.appendTo('#slideshow');
	}, 2000);
	$(".tagtitle > div:gt(0)").hide();

	setInterval(function() {
		$('.tagtitle > div:first')
		.fadeOut(2000)
		.next()
		.fadeIn(2000)
		.end()
		.appendTo('.tagtitle');
	}, 4000);
	$('.sixbtn button').click(function () {
		$('.sixbtn button').removeClass('bg-warning');
		$(this).addClass('bg-warning');
	});
	$(".tagtitle > div:gt(0)").hide();

	$('.theBar').click(function () {
		$('.ulMenu').toggleClass('myMenu');
	});
	$('.count1').counterUp({
	 	delay: 10,
	 	time: 3000
	 });
	$('.count2').counterUp({
	 	delay: 10,
	 	time: 1000
	 });
	$('.evi').click(function () {
		$('.divImg').removeClass('theDis');
		$('.type1').addClass('theDis');
		$('.type5').addClass('thePlay wow zoomInRight');
		new WOW().init();
	});
	$('.all').click(function () {
		$('.divImg').removeClass('theDis');
		$('.type1').addClass('thePlay wow zoomInRight');
		$('.type5').addClass('thePlay wow zoomInRight');
		new WOW().init();
	});
	$('.act').click(function () {
		$('.divImg').removeClass('theDis');
		$('.type4').addClass('thePlay wow zoomInRight');
		$('.type3').addClass('theDis');
		new WOW().init();
	})
	$('.cou').click(function () {
		
		$('.divImg').removeClass('theDis');
		$('.divImg').addClass('wow zoomInRight')
		for (var i=0; i < $('.divImg').length; i++) {
			$('.divImg').eq(i).css('order', Math.floor((Math.random() * 8) + 1));
		}
		new WOW().init();
	})
	$('.out').click(function () {
		$('.divImg').removeClass('theDis');
		$('.type1').addClass('thePlay wow zoomInRight');
		$('.type5').addClass('thePlay wow zoomInRight');
		new WOW().init();
	});
	$('.met').click(function () {
		$('.divImg').removeClass('theDis');
		$('.type1').addClass('theDis');
		$('.type5').addClass('thePlay wow zoomInRight');
		new WOW().init();
	});
	$('.ourslide').click(function () {
		$(this).next().slideToggle();
		// if (check == true) {
		// 	$(this).next().slideDown('slow');
		// 	check = !check;
		// } else {
		// 	$(this).next().slideUp('slow');
		// 	check = !check;

	})
	  $('.ourslide').mouseup(function () {
	  	var check = $(this).next().css('display');
	  	if (check == 'none') {
	  		$(this).css('background-color', '#fec934');
	  		$(this).css('color', 'white');
	  	} else {
	  		$(this).css('background-color','white');
	  		$(this).css('color','black');
	  	}
	  })
	  $('.imgengi').hover(function () {
 		
	  	$(this).next().css('display', 'block');
	  	// $(this).next().addClass('wow rotateInDownRight');
	  
	  })
	  $('.imgengi').mouseout(function () {
	  	$(this).next().css('display', 'none');
	  
	  })
	  $('.clickme').click(function () {
	  	console.log('hello');
	  	var gt = $('.error').text();
	  	$('.errorme').text(gt);
	  })

	  $('.slide1 > .owl-carousel').owlCarousel({
	  	items:3,
	  	loop:true,
	  	center:true,
	  	margin:10,
	  	URLhashListener:true,
	  	autoplayHoverPause:true,
	  	startPosition: 'URLhash',
	  	responsiveClass:true,
	  	responsive:{
	  		0:{
	  			items:1,
	  			nav:true,
	  			center:false
	  		},
	  		768:{
	  			items:2,
	  			nav:true,
                // center:true
                Width:true
            },
            992:{
            	items:3,
            	nav:true,
            	loop:false
            }
        }
    });
	  $('.slide2 > .owl-carousel').owlCarousel({
	  	items:4,
	  	loop:true,
	  	center:true,
	  	margin:10,
	  	URLhashListener:true,
	  	autoplayHoverPause:true,
	  	startPosition: 'URLhash',
	  	responsiveClass:true,
	  	responsive:{
	  		0:{
	  			items:1,
	  			nav:true,
	  			center:false
	  		},
	  		768:{
	  			items:2,
	  			nav:true,
                // center:true
                Width:true
            },
            992:{
            	items:3,
            	nav:true,
            	loop:false
            }
        }
    });
	})
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 707 || document.documentElement.scrollTop > 707) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


	  	  // $(document).ready(function() {
   //             $('.owl-carousel').owlCarousel({
   //               margin: 10,
   //               loop: true,
   //               autoWidth: true,
   //               items: 4
   //             })
   //   });
 
	// $('.divIcon').mouseover(function () {
	// 	$(this).addClass('bg-white');
	// 	$(this).find('i').addClass('text-warning wow bounceOutLeft')
 // 		new WOW().init();
	//  })

// #test:hover +div>.abc{
// 	color:red;
// }
// <div id="test">ABC</div>
// <div>
// <div class="abc">
// nguyen thi thu
// </div>
// </div>