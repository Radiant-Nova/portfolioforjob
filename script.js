let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-bars');
    menu.classList.toggle('fa-bars-staggered');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-bars-staggered');
    menu.classList.add('fa-bars');
    navbar.classList.remove('active');
}

var typed = new Typed('.multiple-text', {
    strings: ['Marine Scientist', 'GIS Analyst', 'Data Analyst', 'Web Developer'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1000,
    loop: true
});

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .about-img, .skills, .education', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-content h2', { origin: 'right' });
ScrollReveal().reveal('.home-content p, .about-content p', { origin: 'left' });

gsap.to(".sharktip", {
    x: window.innerWidth,
    duration: 8,
    ease: "linear",
    repeat: -1,
    yoyo: true, // This makes it swim back (right to left)
    onRepeat: () => {
        // This flips the image horizontally every time it hits an edge
        let currentScale = gsap.getProperty(".sharktip", "scaleX");
        gsap.set(".sharktip", { scaleX: currentScale === 1 ? -1 : 1 });
    }
});

gsap.to(".sharktip", {
    y: 20,
    duration: 1.5,
    yoyo: true,
    repeat: -1,
    ease: "sine.inOut"
});

gsap.to(".ocean", {
    y: 15,
    x: -20,
    rotation: 2,
    duration: 4,
    yoyo: true,
    repeat: -1,
    ease: "sine.inOut"
});