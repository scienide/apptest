/*
 * This is the controller/router
 * It defines the view
 * Also loads the models when required
 */
function Controller() {

	// [1] Set the view for the hub
	this.setview = function(data) {


		switch(data[0]) {		
			// [1] Index (homepage)
			case 'index': 				
				if(localStorage.email == undefined || localStorage.name == undefined) {
					$('#main').load("views/index.html #logged-out");
				} else {
					$('#main').load("views/index.html #logged-in");
					// Try to get latest JSON from server here
					setTimeout(function () {
       					window.location.href = "#hub"; //will redirect to your blog page (an ex: blog.html)
    				}, 2000);

				}
				break;

			// [2] Hub
			case 'hub':
				$('#nav').load("views/partials/nav.html" , function() {
					$('#main').load("views/hub.html" );
					// Hide the welcome text after first view
					if(localStorage.initial == undefined) {
						$("#hub-welcome").removeclass('hide');
						localStorage.setItem("initial", "true");
					}	
				});
				break;
			// [3] About
			case 'about':
				$('#nav').load("views/partials/nav.html" , function() {
					$('#main').load("views/about.html" );
				});
				break;
 			// [n] Default = hub
 			default: 
				$('#nav').load("views/partials/nav.html" , function() {
					$('#main').load("views/hub.html" );
				});
				break;
		}


	}

};
