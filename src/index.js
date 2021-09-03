import 'normalize.css'; 
require('./style.scss')
require('./assets/fonts/CeraPro-Regular.woff2')
require('./assets/fonts/CeraPro-Regular.woff')
require('./assets/img/arrow.svg')
require('./assets/img/header.png')
require('./assets/img/icon_camera.svg')
require('./assets/img/icon_cart.svg')
require('./assets/img/icon_like.svg')
require('./assets/img/logo.svg')
require('./assets/img/logoVirna.svg')
require('./assets/img/mobileHeader.png')
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

import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();