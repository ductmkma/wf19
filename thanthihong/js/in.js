$(document).ready(function(){
	// $("#hide").click(function(){
	// 	$("#bg").hide();
	// })
	$("#hide").click(function(){
		$("#bg").fadeIn(2000);
	})
	$("#show").click(function(){
		$("#bg").slideDown();
	})
	$("#toggle").click(function(){
		$("#bg").toggle(2000,function(){
			if (confirm('do u want to pick color')) {
				window.location.href="https://www.google.com.vn/search?q=pick+color&oq=pick&aqs=chrome.1.69i57j69i59j0l6.2181j0j7&sourceid=chrome&ie=UTF-8"
			}else{
				$("#bg").css("background","lightblue")
			}
		});
	})
})