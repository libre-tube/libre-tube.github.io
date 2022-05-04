/* Header Background */
const header = document.querySelector('#header');

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 150) {
        header.style.backgroundColor = '#29323c';
    } else {
        header.style.backgroundColor = 'transparent';
    }
    highlinghtNavlink();
});

/* Navbar Current Page */

function highlinghtNavlink(){
    for (var i = 0; i < document.links.length; i++) {
	document.links[i].classList.remove('current');
	if (document.links[i].href === document.URL) {
	    document.links[i].className = 'current';
	}
    }
}

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
    toggleButton.innerHTML = toggleButton.innerHTML === "×" ? "≡" : "×";
}

/* Fade-In Image Amimations */

AOS.init();
