/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */

const sections = document.querySelectorAll('section');
const navbarList = document.getElementById('navbar__list');

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
/**
 * @function buildMenu
 * @description this function builds the nav list items dynamically as elements of unordered list
 */

const buildMenu = () => {
  const navbarFragment = document.createDocumentFragment();
  for (const section of sections) {
    const item = document.createElement('li');
    const anchor = document.createElement('a');
    anchor.setAttribute('href', `#${section.id}`);
    anchor.textContent = section.dataset['nav'];
    item.appendChild(anchor);
    navbarFragment.appendChild(item);
  }

  navbarList.appendChild(navbarFragment);
};

// Add class 'active' to section when near top of viewport
/**
 * @function setSectionActive
 * @description this function activate the section when comes near to the top by 300px
 */
const setSectionActive = () => {
  for (const section of sections) {
    const { top, bottom } = section.getBoundingClientRect();
    if (top <= 300 && top > -150 && bottom > window.innerHeight * 0.25) {
      section.classList.add('active');
    } else {
      section.classList.remove('active');
    }
  }
};

// Scroll to anchor ID using scrollTO event
/**
 * @function linkClickScroll
 * @description this functions move the scroll smoothly to the section whose link was clicked in nav bar
 * @param {Object} e - event handled by this function
 */
const linkClickScroll = (e) => {
  if (e.target.nodeName !== 'A') {
    return;
  }
  e.preventDefault();
  const selectedSection = document.getElementById(
    e.target.getAttribute('href').slice(1)
  );
  selectedSection.scrollIntoView({
    behavior: 'smooth',
  });
};

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
document.addEventListener('DOMContentLoaded', buildMenu);

// Scroll to section on link click
navbarList.addEventListener('click', linkClickScroll);

// Set sections as active
document.addEventListener('scroll', setSectionActive);
