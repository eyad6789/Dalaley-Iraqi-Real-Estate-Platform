document.addEventListener("DOMContentLoaded", function() {
    const swiper = new Swiper('#property-single-carousel', {
        loop: true,
        autoplay: {
            delay: 5000, // 5 seconds delay between slides
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    function showImage(element) {
        // Get the source of the clicked image
        const src = element.getAttribute('src');
        
        // Set the source of the main image to the clicked image
        document.getElementById('main-image').setAttribute('src', src);
    }
});


document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll('.nav-pills-a .nav-link');
    const tabContents = document.querySelectorAll('.tab-pane');

    tabs.forEach(tab => {
    tab.addEventListener('click', function(event) {
        event.preventDefault();
        const targetTabId = this.getAttribute('href').substring(1);
        
        // Hide all tab contents
        tabContents.forEach(content => {
        content.classList.remove('show', 'active');
        });

        // Show the clicked tab content
        const targetTab = document.getElementById(targetTabId);
        targetTab.classList.add('show', 'active');

        // Update active state of tabs
        tabs.forEach(tab => {
        tab.classList.remove('active');
        });
        this.classList.add('active');
    });
    });
});




document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".form-a");

    form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    // You can add your code here to handle form submission, e.g., send data to server
    alert("Message sent successfully!");
    // Optionally, you can clear the form fields after submission
    clearFormFields();
    });

    function clearFormFields() {
    const inputName = document.getElementById("inputName");
    const inputEmail = document.getElementById("inputEmail1");
    const textMessage = document.getElementById("textMessage");

    inputName.value = "";
    inputEmail.value = "";
    textMessage.value = "";
    }
});
