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
const navbarFragment = document.createDocumentFragment();

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

for (const section of sections) { 
  const item = document.createElement('li');
  const anchor = document.createElement('a');
  anchor.setAttribute('href', `#${section.id}`);
  anchor.textContent = section.dataset['nav'];
  item.appendChild(anchor);
  navbarFragment.appendChild(item);
};

navbarList.appendChild(navbarFragment);

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
