document.addEventListener('DOMContentLoaded', function () {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

   navbarToggler.addEventListener('click', function () {
       navbarCollapse.classList.toggle('show');
    }); });


    var allowRedirect = false; 

    function attemptLogin(event) {
    
        var email = document.getElementById('form3Example3').value;
        var password = document.getElementById('form3Example4').value;
    
        // Check if both email and password are provided
        if (email.trim() !== '') {
            // Check if the password is at least 8 characters long
            if (password.trim() !== '' && password.trim().length >= 8) {
                allowRedirect = true; 
            } else {
                alert('Password must be at least 8 characters long');
                allowRedirect = false; 
            }
        } else {
            alert('Please enter both email and password');
            allowRedirect = false; 
        }
    

        if (allowRedirect) {
            window.location.href = 'products.html'; 
        }
    }
    
   
      