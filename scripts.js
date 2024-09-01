
    document.addEventListener('DOMContentLoaded', () => {
        // Get all navigation links
        const navLinks = document.querySelectorAll('nav a');

        // Add click event listener to each link
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault(); // Prevent default link behavior
                
                // Get the target element by its ID from the href attribute
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                // Scroll to the target element smoothly
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    });
