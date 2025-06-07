// JavaScript Document
// Scroll Animation for elements with fade-in classes
function checkFade() {
    const fadeElements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right');
    
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight * 0.85 && elementBottom > 0) {
            element.classList.add('active');
        }
    });
}

// News Cards Navigation
function setupNewsNavigation() {
    const newsCards = document.querySelector('.news-cards');
    const prevBtn = document.querySelector('.swiper-prev');
    const nextBtn = document.querySelector('.swiper-next');
    
    if (prevBtn && nextBtn && newsCards) {
        // Previous button click
        prevBtn.addEventListener('click', () => {
            newsCards.scrollBy({ left: -380, behavior: 'smooth' });
        });
        
        // Next button click
        nextBtn.addEventListener('click', () => {
            newsCards.scrollBy({ left: 380, behavior: 'smooth' });
        });

        // Swipe functionality for news cards
        let isDown = false;
        let startX;
        let scrollLeft;

        newsCards.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX - newsCards.offsetLeft;
            scrollLeft = newsCards.scrollLeft;
        });

        newsCards.addEventListener('mouseleave', () => {
            isDown = false;
        });

        newsCards.addEventListener('mouseup', () => {
            isDown = false;
        });

        newsCards.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - newsCards.offsetLeft;
            const walk = (x - startX) * 2;
            newsCards.scrollLeft = scrollLeft - walk;
        });
    }
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Set up news cards navigation
    setupNewsNavigation();
    
    // Initial check for fade elements
    window.addEventListener('load', checkFade);
    
    // Check fade on scroll
    window.addEventListener('scroll', checkFade);
});