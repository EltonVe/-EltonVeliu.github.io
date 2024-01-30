document.addEventListener('DOMContentLoaded', function () {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

   navbarToggler.addEventListener('click', function () {
       navbarCollapse.classList.toggle('show');
    }); });

    function attemptLogin() {
        // Get email and password values from the input fields
        var email = document.getElementById('form3Example3').value;
        var password = document.getElementById('form3Example4').value;
    
        // Regular expression pattern for basic email validation
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
        // Check if both email and password are provided
        if (email.trim() === '' || password.trim() === '') {
            alert('Please enter both email and password');
        } else if (password.length < 8) {
            alert('Password must have at least 8 characters');
        } else if (!emailPattern.test(email)) {
            alert('Please enter a valid email address');
        } else {
            // Perform login logic here, for example, redirect to products.html
            window.location.href = 'products.html';
        }
    }
    
