/* Header Background */
const header = document.querySelector('#header');

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 150) {
        header.style.backgroundColor = '#29323c';
    } else {
        header.style.backgroundColor = 'transparent';
    }
});

/* Navbar Toggle */

const toggleButton = document.querySelector('#toggle-button');
const navlist = document.getElementsByClassName('nav-list')[0];
const navlinks = document.querySelectorAll('.nav-list li');

toggleButton.addEventListener('click', () => {
    switchToggle();
});

navlinks.forEach(navlink => {
    navlink.addEventListener('click', () => {
        switchToggle();	
    });
});

function switchToggle() {
    navlist.classList.toggle("active");
    toggleButton.classList.toggle("active");
    toggleButton.innerHTML = toggleButton.innerHTML === "×" ? "≡" : "×";
}

/* Slideshow */

let slideIndex = 1;
showSlides(slideIndex);
setInterval(autoSlide, 200);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
    lastSlide = new Date();
}

function autoSlide() {
    if (new Date() - lastSlide >= 5000) {
        plusSlides(1);
    }
}
