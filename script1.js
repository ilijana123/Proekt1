document.addEventListener('DOMContentLoaded', function() {
    // Get the Log In link by its id
    var loginLink = document.getElementById('loginLink');

    // Add a click event listener
    loginLink.addEventListener('click', function() {
        // Redirect to login.html
        window.location.href = 'login.html';
    });
});