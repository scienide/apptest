function setView() {
	$('#main').empty();
	$('#nav').load("views/partials/nav.html" , function() {
		$('#main').load("views/hub.html" );
	});
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Events
setView();