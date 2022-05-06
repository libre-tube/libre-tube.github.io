/* Theme Toggle */

const themeToggleBtn = document.getElementById('toggleTheme');

themeToggleBtn.addEventListener('click', () => {
    document.querySelector('html').classList.toggle('light');
});

/* ScrollToTOp Button */

window.onscroll = function() {
    scrollFunction()
};

const topBtn = document.getElementById('topBtn');

function scrollFunction() {
    scrollPos = window.scrollY;
    if (scrollPos > 20) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
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

/* Copy to Clipboard */

const donationBtns = document.querySelectorAll('#faq p')
donationBtns.forEach( donationBtn => {
    donationBtn.addEventListener('click', () => {
	var text = donationBtn.querySelector('span').innerHTML
	copyToClipboard(text);
    });
});

function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
  alert("Copied: " + text);
}

/* Fade-In Image Amimations */

AOS.init();

/* Text Change */

const changeStrings = ['Features', 'Trends', 'Subscriptions', 'Playlists', 'Video Player', 'Subtitles'];
const changeText = document.getElementById('changeText');

changeString();

function changeString() {
    changeStrings.forEach(function(string, index) {
	setTimeout(() => {
	changeText.innerHTML = string;
	}, index * 2000);
    });
    setTimeout(changeString, 10000)
}
