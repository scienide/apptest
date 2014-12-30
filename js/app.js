/* index.html */
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Checks if login credentials have been set
function checkLogin() {
    var email = localStorage.getItem('user-email');
    var name = localStorage.getItem('user-name');
    var delay = 5000;
    var url = 'about.html';
    
    if((email === null) && (name === null)) {
        $('#user-form').removeClass('hidden');
    } else {
        $('#ticker').removeClass('hidden');
        setTimeout(function(){ window.location = url; }, delay);
    }
}

// Stores the user-email & name in memeory
function setLogin(email,name) {
   localStorage.setItem('user-email', 'email');
   localStorage.setItem('user-name', 'name');
}

// Remove the user-email & name in memeory
function deleteLogin() {
    localStorage.removeItem('user-email');
    localStorage.removeItem('user-name');
}




// Actions

// [1] - First action - check if user has previously stored login credentials
$(document).ready(function() {


// [2] - Second action - if credentials are required, store them from the form
    $('#user-set').submit(function(event) { 
        event.preventDefault();
        var email = $('#inputEmail').val();
        var name = $('#inputName').val();
        setLogin(email,name);
        window.location = 'about.html'; 
    });
    
    $('#user-reset').click(function() {
        deleteLogin();
        window.location = 'index.html'; 
    });
            

});
