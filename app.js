/**
 *
 * @source: app.js
 *
 * @licstart  The following is the entire license notice for the 
 *  JavaScript code in this page.
 *
 * Copyright (C) 2014  Loic J. Duros
 *
 *
 * The JavaScript code in this page is free software: you can
 * redistribute it and/or modify it under the terms of the GNU
 * General Public License (GNU GPL) as published by the Free Software
 * Foundation, either version 3 of the License, or (at your option)
 * any later version.  The code is distributed WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE.  See the GNU GPL for more details.
 *
 * As additional permission under GNU GPL version 3 section 7, you
 * may distribute non-source (e.g., minimized or compacted) forms of
 * that code without the copy of the GNU GPL normally required by
 * section 4, provided you include this license notice and a URL
 * through which recipients can access the Corresponding Source.
 *
 * @licend  The above is the entire license notice
 * for the JavaScript code in this page.
 *
 */

/* Localisation */

localize()

function localize() {
  var supportedLanguages = ['de', 'ru'];
  var language = window.navigator.language;
  var currentLanguage = document.getElementsByTagName("html")[0].getAttribute("lang");
  if (currentLanguage != language && supportedLanguages.includes(language)) {
    window.location.replace(window.location.origin + '/' + language + '/');
  }
}

/* Theme Toggle */

const themeToggleBtn = document.getElementById('toggleTheme');

themeToggleBtn.addEventListener('click', () => {
  document.querySelector('html').classList.toggle('light');
});

/* ScrollToTOp Button */

const topBtn = document.getElementById('topBtn');

window.onscroll = function() {
  scrollFunction()
};
scrollFunction();

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
donationBtns.forEach(donationBtn => {
  donationBtn.addEventListener('click', () => {
    var text = donationBtn.querySelector('span').innerHTML
    copyToClipboard(text);
  });
});

function copyToClipboard(text) {
  Clipboard.copy(text);
  alert("Copied: " + text);
}

window.Clipboard = (function(window, document, navigator) {
  var textArea, copy;

  function isOS() {
    return navigator.userAgent.match(/ipad|iphone/i);
  }

  function createTextArea(text) {
    textArea = document.createElement('textArea');
    textArea.value = text;
    document.body.appendChild(textArea);
  }

  function selectText() {
    var range, selection;
    if (isOS()) {
      range = document.createRange();
      range.selectNodeContents(textArea);
      selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      textArea.setSelectionRange(0, 999999);
    } else {
      textArea.select();
    }
  }

  function copyToClipboard() {
    document.execCommand('copy');
    document.body.removeChild(textArea);
  }
  copy = function(text) {
    createTextArea(text);
    selectText();
    copyToClipboard();
  };
  return {
    copy: copy
  };
})(window, document, navigator);

/* Text Change */

const featuresStrings = document.getElementById('features-text').innerHTML.split(',');
const changeText = document.getElementById('changeText');
var currentStringIndex = 0

changeString();
setInterval(changeString, 2000);

function changeString() {
  changeText.innerHTML = featuresStrings[currentStringIndex];
  currentStringIndex = currentStringIndex != featuresStrings.length - 1 ? currentStringIndex + 1 : 0;
}

// Scroll Fade

var fadeElements = document.querySelectorAll('.scrollFade');

function scrollFade() {
  fadeElements.forEach(element => {
    var rect = element.getBoundingClientRect();
    var elementFourth = rect.height / 4;
    var fadeInPoint = window.innerHeight - elementFourth;
    var fadeOutPoint = -(rect.height / 2);

    if (rect.top <= fadeInPoint) {
      element.classList.add('scrollFade--visible');
      element.classList.add('scrollFade--animate');
      element.classList.remove('scrollFade--hidden');
    } else {
      element.classList.remove('scrollFade--visible');
      element.classList.add('scrollFade--hidden');
    }

    if (rect.top <= fadeOutPoint) {
      element.classList.remove('scrollFade--visible');
      element.classList.add('scrollFade--hidden');
    }
  });
}

document.addEventListener('scroll', scrollFade);
window.addEventListener('resize', scrollFade);
document.addEventListener('DOMContentLoaded', function() {
  scrollFade();
});
