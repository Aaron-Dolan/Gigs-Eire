// Code for bands.html
// Add your JavaScript code specific to the bands.html page here

// Code for venues.html
// Add your JavaScript code specific to the venues.html page here

// Code for events.html
// Add your JavaScript code specific to the events.html page here

// Code for login.html
// Add your JavaScript code specific to the login.html page here

// Code for register.html
// Add your JavaScript code specific to the register.html page here

// Common JavaScript code for all pages

// Function to toggle the mobile navigation menu
function toggleMobileMenu() {
  const menu = document.querySelector(".nav-menu");
  menu.classList.toggle("active");
}

// Add event listener to the mobile menu icon
const menuIcon = document.querySelector(".menu-icon");
menuIcon.addEventListener("click", toggleMobileMenu);

// Function to scroll smoothly to the target element
function smoothScroll(target) {
  const element = document.querySelector(target);
  window.scrollTo({
    top: element.offsetTop,
    behavior: "smooth"
  });
}

// Add event listener to scroll to sections when clicking on navigation links
const navLinks = document.querySelectorAll("nav ul li a");
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = e.target.getAttribute("href");
    smoothScroll(target);
    toggleMobileMenu();
  });
});

// Function to validate the login form
function validateLoginForm() {
  // Add your form validation logic here
  // Return true if the form is valid, false otherwise
}

// Function to validate the registration form
function validateRegistrationForm() {
  // Add your form validation logic here
  // Return true if the form is valid, false otherwise
}

// Add event listener to the login form submission
const loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (validateLoginForm()) {
    // Submit the form or perform other actions
  }
});

// Add event listener to the registration form submission
const registrationForm = document.getElementById("registration-form");
registrationForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (validateRegistrationForm()) {
    // Submit the form or perform other actions
  }
});

