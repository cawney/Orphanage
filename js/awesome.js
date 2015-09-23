


/* 
Mobile Menu Toggle
*/
/*
$(".dropdown-btn").click(function() {
	$(".mobile-nav").slideToggle("slow"); //toggles mobile menu to slide down
	//change starting position to where it isn't visible until you click on it.
	//change to toggleClass
	
	
});*/


$(".dropdown-btn").click(function() {
		console.log("Begin Function");
		$('.mobile-nav').addClass("animated"); //Needed for base to make animated
		$('.mobile-nav').toggleClass("bounceInDown", "bounceOutUp"); //Adds the animation
		$(".mobile-nav").toggleClass("hidden"); //changes from hidden to showing
		
		console.log('End Function');
});



console.log('Hello');