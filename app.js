/* Header Background & ScrollToTOp Button*/
window.onscroll = function() {
    scrollFunction()
};

const header = document.getElementById('header');
const topBtn = document.getElementById('topBtn');

function scrollFunction() {
    scrollPos = window.scrollY;
    if (scrollPos > 20) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
    if (scrollPos > 150) {
        header.style.backgroundColor = '#29323c';
    } else {
        header.style.backgroundColor = 'transparent';
    }
}

topBtn.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
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
    navlist.classList.toggle('active');
    toggleButton.innerHTML = toggleButton.innerHTML === '×' ? '≡' : '×';
}

/* Fade-In Image Amimations */

AOS.init();

/* Theme Toggle */

const themeToggleBtn = document.getElementById('toggleTheme');

themeToggleBtn.addEventListener('click', () => {
    document.querySelector('main').classList.toggle('light');
});
