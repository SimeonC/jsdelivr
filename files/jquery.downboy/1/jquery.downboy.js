$(function() {
	function downBoy(footer) { // Define a new function
		'use strict'; // Be strict
		footer = footer || 'footer'; // Set $footer to Itself, OR footer
		$(footer).css('position', '').css('bottom', ''); // Clear for measurement
		if ( $(window).height() > $('body').height() ) { // Check if it's needed
			$(footer).css('position', 'absolute').css('bottom', '0'); // Absolutely Position it
		};
	};
});
