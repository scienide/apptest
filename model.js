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
		alert(this.id);
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
function getJson(kind) {
	/*
	var url = 'http://uk2vip.com/event/return-event-json/' + kind;

	var jqxhr = $.get( url, function() {
		alert( "success" );
	}); */
}