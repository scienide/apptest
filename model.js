$( document ).ready(function() {

	// ==============================
	/* Submit form for validation
	 * Note - using .on - always specify the #main #nav or #footer elements as this is
	 * the only way Jquery knows which containers to look in. 
	 */
	$("#main").on("submit", "form[name=user-set]", function(e) {
	    e.preventDefault();
	   	var email = $('#inputEmail').val();
	    var name = $('#inputName').val();
	    setLogin(email,name);
	    window.location = '#hub'; 
	});

	// ==============================
	// HUB FUNCTIONS

	// links for buttons
	$("#main").on("click", ".hub-button", function(){
		$(this).addClass('warning');
	});


});

// ==========================================================================================
// FIRST RUN FUNCTIONS

// This takes the json files in data/ and stores them in local storage
function setJsonData() {
	var files = ['dayclub','nightclub','service'];

	$.each(files, function(index, value) {
  		console.log( value  );

		$.getJSON('data/'+ value +'.json', function(json) {
			localStorage.setItem(value+'-data', JSON.stringify(json));
			var retrievedObject = localStorage.getItem(value+'-data');
			console.log('retrievedObject: '+ value, JSON.parse(retrievedObject));
		});
	});
}


// Sets the local storage of email and name
function setLogin(email,name) {
	localStorage.setItem("email", email);
	localStorage.setItem("name", name);
}

// ==============================
// EVENT FUNCTIONS

// This gets the event data from 
function setEventData(kind, event) {
	var data = JSON.parse(localStorage.getItem(kind + '-data'));
	
	$.each(data, function(index,value) {
		if(index == event) {
			sessionStorage.nightclub_id 		= value.id; 
			sessionStorage.nightclub_name 		= value.name; 
			sessionStorage.nightclub_long 		= value.long; 
			sessionStorage.nightclub_address 	= value.address;
			sessionStorage.nightclub_latitude 	= value.latitude;
			sessionStorage.nightclub_longitude 	= value.longitude;
		}
	});
}