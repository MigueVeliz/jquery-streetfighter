// Ryu animation
$(document).ready(function() {

	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	}).mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	}).mousedown(function() {
		console.log("mosuedown");
		// play hadouken sound
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').show();
    	// show hadouken and animate it to the right of the screen
	}).mouseup(function() {
		console.log("mouse up");
		$('.ryu-ready').show();
		$('.ryu-throwing').hide();
		// ryu goes back to his ready position
	});




});//end of document.ready
