import 'normalize.css'; 
require('./style.scss')
require('./assets/fonts/CeraPro-Regular.woff2')
require('./assets/fonts/CeraPro-Regular.woff')
document.querySelector('.c-hamburger').addEventListener('click', function (e) {
    let mobileMenu = document.getElementById('mobile-menu');
    e.preventDefault();
    this.classList.toggle('is-active')
    if (mobileMenu.style.display !== 'block') {
        mobileMenu.style.display = 'block';
    }
    else {
        mobileMenu.style.display = 'none';
    }

})