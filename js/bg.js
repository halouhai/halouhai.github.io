// templatemo 467 easy profile

// PRELOADER  预加载

$(window).load(function(){
    $('.preloader').delay(1000).fadeOut("slow"); // set duration in brackets    
});

// HOME BACKGROUND SLIDESHOW
//首页背景滑动展示
$(function(){
    jQuery(document).ready(function() {
		$('body').backstretch([
	 		 "images/tm-bg-slide-1.jpg", 
	 		 "images/tm-bg-slide-2.jpg",
			 "images/tm-bg-slide-3.jpg",
			 "images/tm-bg-slide-4.jpg"
	 			], 	{duration: 3200, fade: 1300});
		});
})