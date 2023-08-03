
// Scripts
window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    let gallery = new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

    
    //let gallery = document.querySelector('#portfolio a.portfolio-box').simpleLightbox();


    /*gallery.on('show.simplelightbox', function () {
        console.log("muestro galeria")
    });

    gallery.on('close.simplelightbox', function () {
        console.log("cierro galeria")
    });*/
    
    new SimpleLightbox({
        elements: '#portfolio1 a.portfolio-box'
    });
    
    new SimpleLightbox({
        elements: '#portfolio2 a.portfolio-box'
    });
    
    

    //modal

    const openmodal = document.getElementById("openmodal");
    const modalcontainer = document.getElementById("modal_container");
    const close = document.getElementById("close");

    openmodal.addEventListener("click",() => {
        modalcontainer.style.display = 'block';
        console.log("lo quise abrir")
    });

    close.addEventListener("click",() => {
        modalcontainer.style.display = 'none';
        console.log("lo quise cerrar")
    });

});




    
