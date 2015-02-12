// Submit form for validation
$(document).on('submit', '#user-set' function(e) { 
    e.preventDefault();
    alert('ungh');
    var email = $('#inputEmail').val();
    var name = $('#inputName').val();
    setLogin(email,name);
    window.location = '#about.html'; 
});


