document.addEventListener('DOMContentLoaded', function() {
    const $navbar = document.querySelector("[dat-navbar]");
    const $navToggler = document.querySelector("[dat-nav-toggler]");
    const $selectedLang = document.querySelector(".selected-lang .material-symbols-outlined");

    // Function to handle language selection
    function selectLanguage(event) {
        event.preventDefault(); // Prevent default link behavior
        const selectedLanguage = event.target.textContent;
        $selectedLang.textContent = selectedLanguage;
        $navbar.classList.remove("active"); // Hide the language menu after selection
    }

    // Add click event listeners to each language option
    document.querySelectorAll(".lang-menu ul li a").forEach(link => {
        link.addEventListener('click', selectLanguage);
    });

    // Toggle language menu visibility
    $navToggler.addEventListener('click', () => {
        $navbar.classList.toggle("active");
    });

    // Add scroll listener to header
    const $header = document.querySelector("[data-header]");
    window.addEventListener('scroll', () => {
        $header.classList.toggle("active", window.scrollY > 50);
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const $profileMenu = document.querySelector("[dat-profile-menu]");
    const $profileToggler = document.querySelector("[dat-profile-toggler]");

    // Function to handle profile menu toggle
    function toggleProfileMenu() {
        $profileMenu.classList.toggle("active");
    }

    // Add click event listener to profile icon
    $profileToggler.addEventListener('click', toggleProfileMenu);

    // Close profile menu when clicking outside of it
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.profile-menu')) {
            $profileMenu.classList.remove("active");
        }
    });
});
