(function($) {
	$(document).on('ready', function() {
		var options = [];
		if ( "undefined" != typeof( imagelightbox ) ) {
			options = imagelightbox.options;
		}
		$('a[href$=".jpg"], a[href$=".png"], a[href$=".gif"]').imageLightbox( options );
	});
})(jQuery);