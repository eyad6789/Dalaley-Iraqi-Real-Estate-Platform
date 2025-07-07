// Get the page links and navigation buttons
const pageLinks = document.querySelectorAll('.page-link');
const previousPage = document.getElementById('previousPage');
const nextPage = document.getElementById('nextPage');

// Add event listeners to page links for navigation
pageLinks.forEach(link => {
link.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default link behavior

    // Remove 'active' class from all page links
    pageLinks.forEach(link => {
    link.parentElement.classList.remove('active');
    });

    // Add 'active' class to the clicked page link
    event.target.parentElement.classList.add('active');
});
});

// Function to handle navigation to previous page
previousPage.addEventListener('click', () => {
const currentPage = document.querySelector('.page-item.active');
const previous = currentPage.previousElementSibling;

if (!previous.classList.contains('disabled')) {
    currentPage.classList.remove('active');
    previous.classList.add('active');
}
});

// Function to handle navigation to next page
nextPage.addEventListener('click', () => {
const currentPage = document.querySelector('.page-item.active');
const next = currentPage.nextElementSibling;

if (!next.classList.contains('disabled')) {
    currentPage.classList.remove('active');
    next.classList.add('active');
}
});
