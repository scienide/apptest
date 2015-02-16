//This is the core app.js file.
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

		// Check if controller object exists and if not, create it.
		if (typeof controller == "undefined") {
			var controller = new Controller();
		}
/*
		// Load the appropriate model
		$.when(
			$.getScript("models/" 	+ data[0] + "-model.js"),
    		$.Deferred(function( deferred ){
        		$( deferred.resolve );
    		})
			).done(function(){
				
			});

*/
		controller.setview(data);


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