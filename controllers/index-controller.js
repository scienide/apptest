function setView() {
	var email  = localStorage.getItem('user-email');
    var name   = localStorage.getItem('user-name');

    if((email === null) && (name === null)) {
		$('#main').load("views/index.html #logged-out" );
	} else {
		$('#main').load("views/index.html #logged-in" );
	}
}

function setLogin(email,name) {
   localStorage.setItem('user-email', 'email');
   localStorage.setItem('user-name', 'name');
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Events
setView();