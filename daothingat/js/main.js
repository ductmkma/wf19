$(document).ready(function() {
	$('.counter').counterUp({
		delay: 5,
		time: 10000
	
	});
	$(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#goTop').fadeIn(); 
        } else { 
            $('#goTop').fadeOut(); 
        } 
    }); 
    $('#goTop').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    });
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 50) { 
            $('.nav').addClass(' scolled'); 
        } else { 
             $('.nav').removeClass(' scolled');
        } 
    }); 
    $(".phan3:not(:first)").css('display','none');
    $('.img1').on("click",function(){
		var src = $(this).attr('src');
		var img1 = $('.img1').val();
		var text1 = $('.text1').val();
		$('.img2').attr('src','images/stabmenubg.png');
		$('.img3').attr('src','images/stabmenubg.png');
		$('.img4').attr('src','images/stabmenubg.png');
		$('.text2').css('color','inherit');
		$('.text3').css('color','inherit');
		$('.text4').css('color','inherit');
		$('.phan3').eq(1).css('display','none');
		$('.phan3').eq(2).css('display','none');
		$('.phan3').eq(3).css('display','none');
		$(this).attr('src','images/stabmenubghv.png');
		$('.phan3').eq(0).css('display','block');		
		$('.text1').css('color','white');		
	});
	$('.img2').on("click",function(){
		var src = $(this).attr('src');
		var img2 = $('.img2').val();
		var text2 = $('.text2').val();
		$('.img1').attr('src','images/stabmenubg.png');
		$('.img3').attr('src','images/stabmenubg.png');
		$('.img4').attr('src','images/stabmenubg.png');
		$('.text1').css('color','inherit');
		$('.text3').css('color','inherit');
		$('.text4').css('color','inherit');
		$('.phan3').eq(0).css('display','none');
		$('.phan3').eq(2).css('display','none');
		$('.phan3').eq(3).css('display','none');
		$(this).attr('src','images/stabmenubghv.png');		
		$('.text2').css('color','white');
		$('.phan3').eq(1).css('display','block');	
	});
	$('.img3').on("click",function(){
		var src = $(this).attr('src');
		var img3 = $('.img3').val();
		var text3 = $('.text3').val();
		$('.img1').attr('src','images/stabmenubg.png');
		$('.img2').attr('src','images/stabmenubg.png');
		$('.img4').attr('src','images/stabmenubg.png');
		$('.text1').css('color','inherit');
		$('.text2').css('color','inherit');
		$('.text4').css('color','inherit');
		$('.phan3').eq(0).css('display','none');
		$('.phan3').eq(1).css('display','none');
		$('.phan3').eq(3).css('display','none');
		$(this).attr('src','images/stabmenubghv.png');		
		$('.text3').css('color','white');
		$('.phan3').eq(2).css('display','block');		
	});
	$('.img4').on("click",function(){
		var src = $(this).attr('src');
		var img4 = $('.img4').val();
		var text4 = $('.text4').val();
		$('.img1').attr('src','images/stabmenubg.png');
		$('.img2').attr('src','images/stabmenubg.png');
		$('.img3').attr('src','images/stabmenubg.png');
		$('.text1').css('color','inherit');
		$('.text3').css('color','inherit');
		$('.text2').css('color','inherit');
		$('.phan3').eq(0).css('display','none');
		$('.phan3').eq(1).css('display','none');
		$('.phan3').eq(2).css('display','none');
		$(this).attr('src','images/stabmenubghv.png');		
		$('.text4').css('color','white');
		$('.phan3').eq(3).css('display','block');		
	});

	$('.ulity').click(function(){
		$(this).css('color','#ea7e0b');
		$(this).siblings().css('color','inherit');
	});
	
	var filterizd = $('.filtr-container').filterizr({
   //options object

});
	var options = {
	   animationDuration: 0.5, // in seconds
	   filter: 'all', // Initial filter
	   callbacks: { 
	      onFilteringStart: function() { },
	      onFilteringEnd: function() { },
	      onShufflingStart: function() { },
	      onShufflingEnd: function() { },
	      onSortingStart: function() { },
	      onSortingEnd: function() { }
	   },
	   controlsSelector: '', // Selector for custom controls
	   delay: 0, // Transition delay in ms
	   delayMode: 'progressive', // 'progressive' or 'alternate'
	   easing: 'ease-out',
	   filterOutCss: { // Filtering out animation
	      opacity: 0,
	      transform: 'scale(0.5)'
	   },
	   filterInCss: { // Filtering in animation
	      opacity: 0,
	      transform: 'scale(1)'
	   },
	   layout: 'sameSize', // See layouts
	   multifilterLogicalOperator: 'or',
	   selector: '.filtr-container',
	   setupControls: true // Should be false if controlsSelector is set 
	} 
	// You can override any of these options and then call...
	var filterizd = $('.filtr-container').filterizr(options);
	// If you have already instantiated your Filterizr then call...
	filterizd.filterizr('setOptions', options);
		

	filterizd.filterizr('setOptions', {layout: 'sameWidth'});

	$('.sub').click(function(){
		$('.video').css('display','block');
	});


	$('.logic1').on("click",function(){
		var change = $(this).attr('src');
		var logic1 = $('.logic1').val();
		var icon1 = $('.icon1').children();
		var icon2 = $('.icon2').children();
		var icon3 = $('.icon3').children();
		$('.logic2').attr('src','images/iconbg1.png');
		$('.logic3').attr('src','images/iconbg1.png');
		$(this).attr('src','images/iconbg1h.png');		
		icon1.css('color','white');	
		icon2.css('color','#565252');
		icon3.css('color','#565252');	
	});
	$('.logic2').on("click",function(){
		var change = $(this).attr('src');
		var logic2 = $('.logic2').val();
		var icon1 = $('.icon1').children();
		var icon2 = $('.icon2').children();
		var icon3 = $('.icon3').children();
		$('.logic1').attr('src','images/iconbg1.png');
		$('.logic3').attr('src','images/iconbg1.png');
		$(this).attr('src','images/iconbg1h.png');		
		icon2.css('color','white');	
		icon1.css('color','#565252');
		icon3.css('color','#565252');	
	});
	$('.logic3').on("click",function(){
		var change = $(this).attr('src');
		var logic3 = $('.logic3').val();
		var icon1 = $('.icon1').children();
		var icon2 = $('.icon2').children();
		var icon3 = $('.icon3').children();
		$('.logic2').attr('src','images/iconbg1.png');
		$('.logic1').attr('src','images/iconbg1.png');
		$(this).attr('src','images/iconbg1h.png');		
		icon3.css('color','white');
		icon2.css('color','#565252');
		icon1.css('color','#565252');		
	});
	$(".choose1").css('display','block');
	$(".choose2").css('display','none');
	$(".choose3").css('display','none');
    $('.box1').on("click",function(){
		var src = $(this).attr('src');
		$('.imgbox').eq(1).attr('src','images/skmenubg.png');
		$('.imgbox').eq(2).attr('src','images/skmenubg.png');
		$('.contentbox').eq(1).css('color','inherit');
		$('.contentbox').eq(2).css('color','inherit');
		$(".choose2").css('display','none');
		$(".choose3").css('display','none');
		$('.imgbox').eq(0).attr('src','images/skmenubgh.png');
		$('.choose1').css('display','block');		
		$('.contentbox').eq(0).css('color','white');		
	});
	$('.box2').on("click",function(){
		var src = $(this).attr('src');
		$('.imgbox').eq(0).attr('src','images/skmenubg.png');
		$('.imgbox').eq(2).attr('src','images/skmenubg.png');
		$('.contentbox').eq(0).css('color','inherit');
		$('.contentbox').eq(2).css('color','inherit');
		$(".choose1").css('display','none');
		$(".choose3").css('display','none');
		$('.imgbox').eq(1).attr('src','images/skmenubgh.png');
		$('.choose2').css('display','block');		
		$('.contentbox').eq(1).css('color','white');		
	});
	$('.box3').on("click",function(){
		var src = $(this).attr('src');
		$('.imgbox').eq(1).attr('src','images/skmenubg.png');
		$('.imgbox').eq(0).attr('src','images/skmenubg.png');
		$('.contentbox').eq(1).css('color','inherit');
		$('.contentbox').eq(0).css('color','inherit');
		$(".choose2").css('display','none');
		$(".choose1").css('display','none');
		$('.imgbox').eq(2).attr('src','images/skmenubgh.png');
		$('.choose3').css('display','block');		
		$('.contentbox').eq(2).css('color','white');		
	});

	$('.info1').on("click",function(){
		var src = $(this).attr('src');
		$('.pic2').attr('src','images/iconbg2.png');
		$('.pic3').attr('src','images/iconbg2.png');
		$('.pic1').attr('src','images/iconbg2.png');
		$('.pic5').attr('src','images/iconbg2.png');
		$('.pic6').attr('src','images/iconbg2.png');
		$('.image').css('color','inherit');
		$('.tivi').css('color','inherit');
		$('.obj1').css('color','inherit');
		$('.obj2').css('color','inherit');
		$('.obj3').css('color','inherit');
		$('.pic4').attr('src','images/iconbgh2.png');		
		$('.watch').css('color','white');		
	});
	$('.info2').on("click",function(){
		var src = $(this).attr('src');
		$('.pic2').attr('src','images/iconbg2.png');
		$('.pic3').attr('src','images/iconbg2.png');
		$('.pic1').attr('src','images/iconbg2.png');
		$('.pic4').attr('src','images/iconbg2.png');
		$('.pic6').attr('src','images/iconbg2.png');
		$('.watch').css('color','inherit');
		$('.tivi').css('color','inherit');
		$('.obj1').css('color','inherit');
		$('.obj2').css('color','inherit');
		$('.obj3').css('color','inherit');
		$('.pic5').attr('src','images/iconbgh2.png');		
		$('.image').css('color','white');		
	});
	$('.info3').on("click",function(){
		var src = $(this).attr('src');
		$('.pic2').attr('src','images/iconbg2.png');
		$('.pic3').attr('src','images/iconbg2.png');
		$('.pic1').attr('src','images/iconbg2.png');
		$('.pic5').attr('src','images/iconbg2.png');
		$('.pic4').attr('src','images/iconbg2.png');
		$('.image').css('color','inherit');
		$('.watch').css('color','inherit');
		$('.obj1').css('color','inherit');
		$('.obj2').css('color','inherit');
		$('.obj3').css('color','inherit');
		$('.pic6').attr('src','images/iconbgh2.png');		
		$('.tivi').css('color','white');		
	});
	$('.info4').on("click",function(){
		var src = $(this).attr('src');
		$('.pic2').attr('src','images/iconbg2.png');
		$('.pic3').attr('src','images/iconbg2.png');
		$('.pic4').attr('src','images/iconbg2.png');
		$('.pic5').attr('src','images/iconbg2.png');
		$('.pic6').attr('src','images/iconbg2.png');
		$('.image').css('color','inherit');
		$('.tivi').css('color','inherit');
		$('.watch').css('color','inherit');
		$('.obj2').css('color','inherit');
		$('.obj3').css('color','inherit');
		$('.pic1').attr('src','images/iconbgh2.png');		
		$('.obj1').css('color','white');		
	});
	$('.info5').on("click",function(){
		var src = $(this).attr('src');
		$('.pic4').attr('src','images/iconbg2.png');
		$('.pic3').attr('src','images/iconbg2.png');
		$('.pic1').attr('src','images/iconbg2.png');
		$('.pic5').attr('src','images/iconbg2.png');
		$('.pic6').attr('src','images/iconbg2.png');
		$('.image').css('color','inherit');
		$('.tivi').css('color','inherit');
		$('.obj1').css('color','inherit');
		$('.watch').css('color','inherit');
		$('.obj3').css('color','inherit');
		$('.pic2').attr('src','images/iconbgh2.png');		
		$('.obj2').css('color','white');		
	});
	$('.info6').on("click",function(){
		var src = $(this).attr('src');
		$('.pic2').attr('src','images/iconbg2.png');
		$('.pic4').attr('src','images/iconbg2.png');
		$('.pic1').attr('src','images/iconbg2.png');
		$('.pic5').attr('src','images/iconbg2.png');
		$('.pic6').attr('src','images/iconbg2.png');
		$('.image').css('color','inherit');
		$('.tivi').css('color','inherit');
		$('.obj1').css('color','inherit');
		$('.obj2').css('color','inherit');
		$('.watch').css('color','inherit');
		$('.pic3').attr('src','images/iconbgh2.png');		
		$('.obj3').css('color','white');		
	});
	$('.borered').eq(0).on("click",function(){
		var src = $(this).attr('src');
		$('.borered').eq(1).attr('src','images/iconbg2.png');
		$('.borered').eq(2).attr('src','images/iconbg2.png');
		$('.borered').eq(3).attr('src','images/iconbg2.png');
		$('.tele').eq(1).css('color','inherit');
		$('.tele').eq(2).css('color','inherit');
		$('.tele').eq(3).css('color','inherit');
		$('.borered').eq(0).attr('src','images/iconbgh2.png');		
		$('.tele').eq(0).css('color','white');		
	});
	$('.borered').eq(1).on("click",function(){
		var src = $(this).attr('src');
		$('.borered').eq(0).attr('src','images/iconbg2.png');
		$('.borered').eq(2).attr('src','images/iconbg2.png');
		$('.borered').eq(3).attr('src','images/iconbg2.png');
		$('.tele').eq(0).css('color','inherit');
		$('.tele').eq(2).css('color','inherit');
		$('.tele').eq(3).css('color','inherit');
		$('.borered').eq(1).attr('src','images/iconbgh2.png');		
		$('.tele').eq(1).css('color','white');		
	});
	$('.borered').eq(2).on("click",function(){
		var src = $(this).attr('src');
		$('.borered').eq(1).attr('src','images/iconbg2.png');
		$('.borered').eq(0).attr('src','images/iconbg2.png');
		$('.borered').eq(3).attr('src','images/iconbg2.png');
		$('.tele').eq(1).css('color','inherit');
		$('.tele').eq(0).css('color','inherit');
		$('.tele').eq(3).css('color','inherit');
		$('.borered').eq(2).attr('src','images/iconbgh2.png');		
		$('.tele').eq(2).css('color','white');		
	});
	$('.borered').eq(3).on("click",function(){
		var src = $(this).attr('src');
		$('.borered').eq(1).attr('src','images/iconbg2.png');
		$('.borered').eq(2).attr('src','images/iconbg2.png');
		$('.borered').eq(0).attr('src','images/iconbg2.png');
		$('.tele').eq(1).css('color','inherit');
		$('.tele').eq(2).css('color','inherit');
		$('.tele').eq(0).css('color','inherit');
		$('.borered').eq(3).attr('src','images/iconbgh2.png');		
		$('.tele').eq(3).css('color','white');		
	});
	
	$("#formDemo").validate({
            rules: {
                lname: {
                	required: true,
                	minlength: 3,
                },
                fname: {
                	required: true,
                },
                email:{
                	required: true,
                	email: true,
                },
                subject: {
                    required: true,
                },
                message:{
                	required: true,
                }
            },
            messages: {
                lname:{
                	required: "Please enter last name",
                	minlength: "Last name is too short"
                } ,
                fname: {
                	required: "Please enter first name",
                },
                email: {
                    required: "Please enter email",
                    email: "Please enter correct email address"
                },
                subject:{
                	required: "Please enter subject",
                },
                message:{
                	required: "Please enter message"
                }
            }
        });
	// $('.pi').mouseenter(function(){
	// 	$(this).parent().addClass(' wow');
	// 	$(this).addClass(' bounceIn');
	// });


	var options = {
   animationDuration: 0.5, // in seconds
   filter: 'all', // Initial filter
   callbacks: { 
	      onFilteringStart: function() { },
	      onFilteringEnd: function() { },
	      onShufflingStart: function() { },
	      onShufflingEnd: function() { },
	      onSortingStart: function() { },
	      onSortingEnd: function() { }
   },
   controlsSelector: '', // Selector for custom controls
   delay: 0, // Transition delay in ms
   delayMode: 'progressive', // 'progressive' or 'alternate'
   easing: 'ease-out',
   filterOutCss: { // Filtering out animation
	      opacity: 0,
	      transform: 'scale(0.5)'
   },
   filterInCss: { // Filtering in animation
	      opacity: 0,
	      transform: 'scale(1)'
   },
   layout: 'sameWidth', // See layouts
   multifilterLogicalOperator: 'or',
   selector: '.filtr-container',
   setupControls: true // Should be false if controlsSelector is set 
} 
$('.imgGallery').children().addClass('filtr-item');
	var filterizd = $('.filtr-container').filterizr({
		   //options object
	});
// You can override any of these options and then call...
var filterizd = $('.filtr-container').filterizr(options);
// If you have already instantiated your Filterizr then call...
});