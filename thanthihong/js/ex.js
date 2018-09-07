$(document).ready(function() {
	
		$(".counter").counterUp({
			delay: 10,
			time: 5000
		});
		$(".all").click(function(){
			$(".button").not(this).removeClass(" active1");
			$(this).addClass("active1");
			if ($(".part6-2").hide()) {
				$(".part6-2").show();
				new WOW().init();
				for(var i=0;i<$(".part6-2").length;i++){
					$(".part6-2").eq(i).css("order",Math.floor(Math.random() * 8) + 1);
				}
			}
				
		});
		$(".archi").click(function(n){
				new WOW().init();	
				$(".button").not(this).removeClass(" active1");
				$(this).addClass("active1");
				if ($(".part6-2").hide()) {
					$(".part6-2").show();
					for(var j=0;j<$(".archi1").length;j++){
					$(".archi1").eq(j).css("order",Math.floor(Math.random() * 5) + 1);
					$(".part6-2").not($(".archi1")).hide();
				}
				}		
				
		});
		$(".build").click(function(){
				new WOW().init();
				$(".button").not(this).removeClass(" active1");
				$(this).addClass("active1");
				if ($(".part6-2").hide()) {
					$(".part6-2").show();
					for(var j=0;j<$(".building").length;j++){
					$(".building").eq(j).css("order",Math.floor(Math.random() * 2) + 1);
					$(".part6-2").not($(".building")).hide();
				}
				}						
		});
		$(".gar").click(function(){
				new WOW().init();
				$(".button").not(this).removeClass(" active1");
				$(this).addClass("active1");
				if ($(".part6-2").hide()) {
					$(".part6-2").show();
					for(var j=0;j<$(".garden").length;j++){
					$(".garden").eq(j).css("order",Math.floor(Math.random() * 5) + 1);
					$(".part6-2").not($(".garden")).hide();
				}
				}						
		});
		$(".inter").click(function(){
				new WOW().init();
				$(".button").not(this).removeClass(" active1");
				$(this).addClass("active1");
				if ($(".part6-2").hide()) {
					$(".part6-2").show();
					for(var j=0;j<$(".interior").length;j++){
					$(".interior").eq(j).css("order",Math.floor(Math.random() * 3) + 1);
					$(".part6-2").not($(".interior")).hide();
				}
				}						
		});
		$(".offi").click(function(){
				new WOW().init();
				$(".button").not(this).removeClass(" active1");
				$(this).addClass("active1");
				if ($(".part6-2").hide()) {
					$(".part6-2").show();
					for(var j=0;j<$(".office").length;j++){
					$(".office").eq(j).css("order",Math.floor(Math.random() * 5) + 1);
					$(".part6-2").not($(".office")).hide();
				}
				}						
		});
		$(".work").click(function(){
				new WOW().init();
				$(".button").not(this).removeClass(" active1");
				$(this).addClass("active1");
				if ($(".part6-2").hide()) {
					$(".part6-2").show();
					for(var j=0;j<$(".workspace").length;j++){
					$(".workspace").eq(j).css("order",Math.floor(Math.random() * 4) + 1);
					$(".part6-2").not($(".workspace")).hide();
				}
				}						
		});
		$('.part2').vegas({
            slides: [
                { src: 'images/p1.jpg' },
                { src: 'images/b2.jpg' },
                { src: 'images/b3.jpg' }
             ],
             transition: 'zoomOut',
             overlay:true
        });
		// $('.owl-carousel').owlCarousel({
		//     margin:10,
		//     loop:true,
		//     items:3
		// })
		$('.oneSlide').addClass('item');
    $('.slide10 > .owl-carousel').owlCarousel({
        items:3,
        loop:false,
        Width:true,
        // center:true,        
        margin:10,
        URLhashListener:false,
        autoplayHoverPause:true,
        startPosition: 'URLHash',
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
     $('.slide12 > .owl-carousel').owlCarousel({
        items:4,
        loop:false,
        Width:true,
        margin:10,
        URLhashListener:false,
        autoplayHoverPause:true,
        startPosition: 'URLHash',
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
                items:4,
                nav:true,
                loop:false
            }
        }
    });
		function init_map() {
        var var_location = new google.maps.LatLng(45.430817,12.331516);
 
        var var_mapoptions = {
          center: var_location,
          zoom: 14
        };
 
        var var_marker = new google.maps.Marker({
            position: var_location,
            map: var_map,
            title:"Venice"});
 
        var var_map = new google.maps.Map(document.getElementById("map-container"),
            var_mapoptions);
 
        var_marker.setMap(var_map); 
 
      }
 
      google.maps.event.addDomListener(window, 'load', init_map);

      $('#formDemo').validate({
			rules: {
				name:{
					required: true,
					minlength: 3,
					maxlength:20
				},
				email:{
					required: true,
					email:true
				},
				subject:{
					required: true,
					minlength: 6
				},
				textarea:{
					required: true,
					minlength: 2
				}
			},
			// messages:{
			// 	name:{
			// 		required: 'This field is required',
			// 		minlength: 'at least 3 character',
			// 		maxlength: 'most 20 character'
			// 	}
			// }
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
	});
