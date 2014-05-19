(function($) {
	$(document).on('ready', function() {
		var options = [];
		if ( "undefined" != typeof( imagelightbox ) ) {
			options = imagelightbox.options;
		}
		var links = $('a[href$=".jpg"], a[href$=".png"], a[href$=".gif"]');
		links.imageLightbox( options );
	});
})(jQuery);