// This is the core app.js file.
$( document ).ready(function() {
	
	// Get the URL and parse as array
	function bootstrap() {
  		var pathString	=  window.location.hash.replace('#','');	// Get the URL
		var pathArray	= pathString.split('/');
		if(pathArray[0] == '') {
			var data = ['index'];
			loadController(data);
			return true;
		} else {
			loadController(pathArray);
			return true;
		}
	}
	
	/* Load controller
	* data	= array 
	* [0]	= controller name
	* [1+] 	= params to pass on to intitial function
	*/
	function loadController(data) {
		$.getScript("controllers/" + data[0] + "-controller.js")
			.done(function(script, textStatus) {
			})
			.fail(function( jqxhr, settings, exception ) {
				$( "div.log" ).text( "Triggered ajaxError handler." );
			});

		$.getScript("/models/" + data[0] + "-model.js")
			.done(function(script, textStatus) {
			})
			.fail(function( jqxhr, settings, exception ) {
				$( "div.log" ).text( "Triggered ajaxError handler." );
			});
	}
	
	
	// Gets the state change also applies a nice fade
	$(window).on('hashchange', function(e){
		$( "#main" ).fadeOut( "fast", function() {
    		if(bootstrap()) {
    			$( "#main" ).fadeIn( "fast" );
			}
		});
	});
    
    bootstrap();

});