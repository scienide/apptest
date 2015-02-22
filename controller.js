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

			// ------------------------------------------------------------------------------------------
			// [2] Hub
			case 'hub':
				$('#nav').load("views/partials/nav.html" , function() {
					$('#main').load("views/hub.html" );

					// IMPORTANT - First run Hide the welcome text after first view
					if(localStorage.initial == undefined) {
						$("#hub-welcome").removeClass('hide');

						localStorage.setItem("initial", "true");
					}	
					setJsonData();								// Set the embedded JSON file in local storage
				});
				break;

			// ------------------------------------------------------------------------------------------
			// [3] About
			case 'about':
				$('#nav').load("views/partials/nav.html" , function() {
					$('#main').load("views/about.html" );
				});
				break;
			
			// ------------------------------------------------------------------------------------------
			// [4] Nightclubs
			case 'nightclubs':
				$('#nav').load("views/partials/nav.html" , function() {
					$('#main').load("views/nightclubs.html" );
				});
				break;

			// ------------------------------------------------------------------------------------------
			// [5] Dayclubs
			case 'dayclubs':
				$('#nav').load("views/partials/nav.html" , function() {
					$('#main').load("views/dayclubs.html" );
				});
				break;
			
			// ------------------------------------------------------------------------------------------
			// [6] Services
			case 'services':
				$('#nav').load("views/partials/nav.html" , function() {
					$('#main').load("views/services.html" );
				});
				break;
			
			// ------------------------------------------------------------------------------------------
			// [7] Nightclub
			case 'nightclub':
				$('#nav').load("views/partials/nav.html" , function() {
					setEventData('nightclub',data[1]);
					$('#main').load("views/nightclub.html" );
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
