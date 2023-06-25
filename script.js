// Code for bands.html
// Add your JavaScript code specific to the bands.html page here
// JavaScript for bands.html

// Wait for the document to load
document.addEventListener("DOMContentLoaded", function() {
  // Get all the band cards
  const bandCards = document.querySelectorAll(".band-card");

  // Add event listeners to each band card
  bandCards.forEach(function(card) {
    card.addEventListener("click", function() {
      // Toggle the active class when a band card is clicked
      this.classList.toggle("active");
    });
  });
});

// script.js

// Function to handle logo click event
function handleLogoClick() {
  window.location.href = "index.html"; // Replace "index.html" with the actual filename of your homepage
}

// Add event listener to logo element
const logo = document.querySelector('.logo');
logo.addEventListener('click', handleLogoClick);

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

<script>
  // Search bar functionality
  const searchBar = document.getElementById('searchBar');
  searchBar.addEventListener('input', searchEvents);

  function searchEvents() {
    const searchQuery = searchBar.value.toLowerCase();
    const eventItems = document.querySelectorAll('.event-item');

    eventItems.forEach((eventItem) => {
      const eventName = eventItem.id.replace(/-/g, ' ').toLowerCase();
      if (eventName.includes(searchQuery)) {
        eventItem.style.display = 'flex';
      } else {
        eventItem.style.display = 'none';
      }
    });
  }

  // Filter bar functionality
  const filterBar = document.getElementById('filterBar');
  filterBar.addEventListener('change', filterEvents);

  function filterEvents() {
    const selectedCategory = filterBar.value;
    const eventItems = document.querySelectorAll('.event-item');

    eventItems.forEach((eventItem) => {
      const eventCategories = eventItem.id.split('-');
      if (selectedCategory === 'all' || eventCategories.includes(selectedCategory)) {
        eventItem.style.display = 'flex';
      } else {
        eventItem.style.display = 'none';
      }
    });
  }
</script>

<script>
  // Search bar functionality
  const searchBar = document.getElementById('searchBar');
  searchBar.addEventListener('input', searchBands);

  function searchBands() {
    const searchQuery = searchBar.value.toLowerCase();
    const bandItems = document.querySelectorAll('.band-item');

    bandItems.forEach((bandItem) => {
      const bandName = bandItem.querySelector('h3').textContent.toLowerCase();
      if (bandName.includes(searchQuery)) {
        bandItem.style.display = 'flex';
      } else {
        bandItem.style.display = 'none';
      }
    });
  }

  // Filter bar functionality
  const filterBar = document.getElementById('filterBar');
  filterBar.addEventListener('change', filterBands);

  function filterBands() {
    const selectedCategory = filterBar.value;
    const bandItems = document.querySelectorAll('.band-item');

    bandItems.forEach((bandItem) => {
      const bandCategories = bandItem.dataset.categories.split(',');
      if (selectedCategory === 'all' || bandCategories.includes(selectedCategory)) {
        bandItem.style.display = 'flex';
      } else {
        bandItem.style.display = 'none';
      }
    });
  }

  document.getElementById('registration-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Retrieve form input values
  var name = document.getElementById('registration-name').value;
  var email = document.getElementById('registration-email').value;
  var password = document.getElementById('registration-password').value;
  var userType = document.querySelector('input[name="user-type"]:checked').value;

  // Perform input validation

  // Make an API request to register the user
  var userData = {
    name: name,
    email: email,
    password: password,
    userType: userType
  };

  // Perform an AJAX request or use fetch to send the registration data to your API endpoint
  // Example using fetch:
  fetch('/api/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  })
    .then(function(response) {
      if (response.ok) {
        // Registration successful, redirect or show a success message
        window.location.href = 'login.html'; // Redirect to the login page
      } else {
        // Registration failed, display an error message
        throw new Error('Registration failed.');
      }
    })
    .catch(function(error) {
      // Handle any errors that occurred during the registration process
      console.error(error);
      // Display an error message to the user
    });
});


// Define the band and venue lists
var bandList = document.querySelectorAll('.band-card');
var venueList = document.querySelectorAll('.venue-card');

// Get a random band and venue card
var randomBandCard = bandList[Math.floor(Math.random() * bandList.length)];
var randomVenueCard = venueList[Math.floor(Math.random() * venueList.length)];

// Extract the band and venue names from the selected cards
var randomBandName = randomBandCard.querySelector('h3').textContent;
var randomVenueName = randomVenueCard.querySelector('h3').textContent;

// Update the band and venue names in the HTML
document.getElementById('featured-band-name').textContent = randomBandName;
document.getElementById('featured-venue-name').textContent = randomVenueName;
</script>

