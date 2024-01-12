document.getElementById('sendMessageButton').addEventListener('click', function() {
    alert('Message was successfully sent!');
});

 document.addEventListener('DOMContentLoaded', function () {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

   navbarToggler.addEventListener('click', function () {
       navbarCollapse.classList.toggle('show');
    }); });