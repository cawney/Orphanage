


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
		
		$('.mobile-nav').addClass("animated"); //Needed for base to make animated
		$('.mobile-nav').toggleClass("bounceInDown", "bounceOutUp"); //Adds the animation
		$(".mobile-nav").toggleClass("hidden"); //changes from hidden to showing
		
});



//Get Text from the select form
//Append the text to the subject line



/*
$(".volunteer-signup").focusout(function() {
	console.log("Begin Function");
	alert("Stuff");
	var a = $("option:selected").text(); //Works only when there is an alert before it? Might be due to the "click" function
	console.log(a);
	console.log('End Function');
});
*/

//$(".volunteer-email").click(function(){
//		console.log("Begin function");
//		var a = $(".volunteer-signup option:selected").text(); //Works when you click the email button
//		console.log(a); //Need to append the value to the href, subject line
//		
//		console.log("End Function");
//		//Maybe... Make the "Email" section hidden, but when you click on the function the email will be appended on
//		
//});
//

$(".volunteer-signup").change(function(){
		console.log("Begin Function");
		var a = $("option:selected").val();
		console.log(a);
		$(".volunteer").append("I'm Here!");
		console.log("End Function");
});



console.log('Hello');