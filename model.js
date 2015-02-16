$( document ).ready(function() {

// ==============================
/* Submit form for validation
 * Note - using .on - always specify the #main #nav or #footer elements as this is
 * the only way Jquery knows which containers to look in. 
 */
$("#main").on("submit", "form[name=user-set]", function(e) {
    e.preventDefault();
    alert('lol');
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

// Sets the local storage of email and name
function setLogin(email,name) {
	localStorage.setItem("email", email);
	localStorage.setItem("name", name);
}