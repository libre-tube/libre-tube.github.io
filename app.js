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

/* faq: close other details when one is opened */

// Fetch all the details element.
const details = document.querySelectorAll('details')

// Add the onclick listeners.
details.forEach((targetDetail) => {
  targetDetail.addEventListener('click', () => {
    // Close all the details that are not targetDetail.
    details.forEach((detail) => {
      if (detail !== targetDetail) {
        detail.removeAttribute('open')
      }
    })
  })
})

function getScrollbarWidth() {
  var child = document.querySelector('#get')
  var scroll = window.innerWidth - child.offsetWidth
  return scroll
}

document.querySelector('#header').style.width = `calc(100vw - ${getScrollbarWidth()}px)`
