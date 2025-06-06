// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Fade in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Enhanced hover effects
document.querySelectorAll('.card, .stat-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.02)';
        this.style.transition = 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Parallax effect for mars background
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const marsBackground = document.querySelector('.mars-bg');
    if (marsBackground) {
        marsBackground.style.transform = `translateY(${scrolled * 0.2}px)`;
    }
});

// Timeline reveal animations
const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 150);
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.timeline-item').forEach(item => {
    timelineObserver.observe(item);
});

// Enhanced CTA button interactions
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-4px) scale(1.05)';
        this.style.boxShadow = '0 20px 60px rgba(205, 92, 92, 0.5)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = '0 8px 32px rgba(205, 92, 92, 0.3)';
    });
});

// Research items interactive effects
document.querySelectorAll('.research-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-4px)';
        this.style.boxShadow = '0 8px 24px rgba(205, 92, 92, 0.15)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = 'none';
    });
});

// Add smooth reveal for stats
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const numberElement = entry.target.querySelector('.stat-number');
            const finalValue = numberElement.textContent;
            
            // Only animate numeric values
            if (!isNaN(parseInt(finalValue.replace(/[^\d]/g, '')))) {
                let currentValue = 0;
                const numericValue = parseInt(finalValue.replace(/[^\d]/g, ''));
                const increment = numericValue / 30;
                const timer = setInterval(() => {
                    currentValue += increment;
                    if (currentValue >= numericValue) {
                        numberElement.textContent = finalValue;
                        clearInterval(timer);
                    } else {
                        const displayValue = Math.floor(currentValue);
                        if (finalValue.includes('+')) {
                            numberElement.textContent = displayValue + '+';
                        } else if (finalValue.includes('M')) {
                            numberElement.textContent = displayValue + 'M';
                        } else {
                            numberElement.textContent = displayValue;
                        }
                    }
                }, 50);
            }
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-item').forEach(item => {
    statsObserver.observe(item);
});

// Add subtle animation to topic heroes
document.querySelectorAll('.topic-hero').forEach(hero => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.transform = 'scale(1)';
                entry.target.style.opacity = '1';
            }
        });
    });
    
    hero.style.transform = 'scale(0.98)';
    hero.style.opacity = '0.8';
    hero.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    
    observer.observe(hero);
});// JavaScript Document