// Ryu animation
$(document).ready(function() {

	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	}).mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	}).mousedown(function() {
		playHadouken();
		// console.log("mosuedown");
		// play hadouken sound
		$('.actions').hide();
		$('.ryu-throwing').show();
		// $('.hadouken').show();
		$('.hadouken').finish().show().animate(
		  {'left': '1020px'},
		  	500,
		  	function() {
		    	$(this).hide();
		    	$(this).css('left', '520px');
		 	 }
			);
    // show hadouken and animate it to the right of the screen
	}).mouseup(function() {
		console.log("mouse up");
		$('.actions').hide();
		$('.ryu-still').show();
		// ryu goes back to his ready position
	});

	$(document).keydown(function(e) {
    	if (e.keyCode == 88) {
    		$('.actions').hide();
     	 	$('.ryu-cool').show();
    	};
	}).keyup(function(e) {
		if (e.keyCode == 88 ) {
			$('.ryu-cool').hide();
			$('.ryu-still').show();

		};
	});

});//end of document.ready


function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}