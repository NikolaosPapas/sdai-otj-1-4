document.addEventListener('DOMContentLoaded', () => {
    // Function to add fade-in effect
    const fadeIn = (element, delay = 0, opacity = 1) => {
        element.style.opacity = 0;
        element.style.transition = `opacity 1s ease ${delay}s`;
        element.style.opacity = opacity;
    };

    // Select elements
    const foodTruckIcon = document.querySelector('.food-truck-icon'); // Make sure to add this class or ID in your HTML
    const menuSection = document.querySelector('#menu');
    const favoritesSection = document.querySelector('.gallery');
    const locationHoursSection = document.querySelector('#locations');
    console.log(foodTruckIcon); // Check if the element is selected correctly

    // Check if elements are found
    if (foodTruckIcon) {
        fadeIn(foodTruckIcon, 0, 1); // Apply fade-in effect immediately
    }
    if (menuSection) {
        fadeIn(menuSection, 0.5, 1);
    }
    if (favoritesSection) {
        fadeIn(favoritesSection, 1, 1);
    }
    if (locationHoursSection) {
        fadeIn(locationHoursSection, 1.5, 1);
    }

    // Smooth scrolling for anchor links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default link behavior
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
