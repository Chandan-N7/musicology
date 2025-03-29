const searchBtn = document.getElementById('search-btn')
const searchBox = document.querySelector('.search-input')

searchBtn.addEventListener('click', () => {
    if (window.getComputedStyle(searchBox).display === 'none') {
        searchBox.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Disable scrolling
    } else {
        searchBox.style.display = 'none';
        document.body.style.overflow = ''; // Restore scrolling
    }
});

const toggleBtn = document.getElementById('toggle-button');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav ul li a'); // Select all links inside the menu

// Toggle menu visibility
toggleBtn.addEventListener('click', () => {
    nav.classList.toggle('show');
});

// Hide menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('show'); // Hide menu
    });
});
