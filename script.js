// Additional JavaScript functionality can be added here
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Mobile menu toggle functionality
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const navLinks = document.querySelector('.md\\:flex.items-center.space-x-1');
    
    mobileMenuButton.addEventListener('click', () => {
        navLinks.classList.toggle('hidden');
        navLinks.classList.toggle('flex');
        navLinks.classList.toggle('flex-col');
        navLinks.classList.toggle('absolute');
        navLinks.classList.toggle('top-16');
        navLinks.classList.toggle('left-0');
        navLinks.classList.toggle('right-0');
        navLinks.classList.toggle('bg-white');
        navLinks.classList.toggle('shadow-lg');
        navLinks.classList.toggle('p-4');
    });
});
