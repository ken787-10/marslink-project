// JavaScript Document// JavaScript Document
// Navigation Background Change on Scroll
function handleNavScroll() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
}

// Mobile Menu Toggle
function setupMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            menuBtn.textContent = navLinks.classList.contains('active') ? '×' : '☰';
        });
    }
}

// Hero Background Image Rotation
function setupHeroBackgrounds() {
    const heroBgs = document.querySelectorAll('#hero .hero-bg');
    if (heroBgs.length === 0) return;
    
    let currentBg = 0;
    heroBgs[0].classList.add('active');

    setInterval(function() {
        heroBgs[currentBg].classList.remove('active');
        currentBg = (currentBg + 1) % heroBgs.length;
        heroBgs[currentBg].classList.add('active');
    }, 10000);
}

// Smooth Scrolling for Navigation Links
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const navLinks = document.querySelector('.nav-links');
                const menuBtn = document.querySelector('.mobile-menu-btn');
                if (navLinks && navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    if (menuBtn) menuBtn.textContent = '☰';
                }
            }
        });
    });
}

// Form Submission (prevent default behavior)
function setupContactForm() {
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('お問い合わせありがとうございます。近日中にご連絡いたします。');
            this.reset();
        });
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    try {
        // 既存の初期化処理
        setupMobileMenu();
        setupHeroBackgrounds();
        setupSmoothScrolling();
        setupContactForm();
    } catch (error) {
        console.error('Initialization error:', error);
    }
});

// Handle scroll events
window.addEventListener('scroll', function() {
    handleNavScroll();
    updateScrollIndicator();
    updateSectionIndicators();
});

// Handle window load event
window.addEventListener('load', function() {
    checkFade(); // Initial check for fade elements
});

// Scroll Indicator Visibility
function updateScrollIndicator() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        if (window.scrollY > 100) {
            scrollIndicator.style.opacity = '0';
        } else {
            scrollIndicator.style.opacity = '1';
        }
    }
}

// Section Navigation Indicators
function updateSectionIndicators() {
    const sectionIndicators = document.querySelectorAll('.section-indicator');
    const sections = document.querySelectorAll('section');
    
    if (sectionIndicators.length === 0 || sections.length === 0) return;
    
    const windowHeight = window.innerHeight;
    const scrollPosition = window.scrollY + windowHeight / 2;
    
    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            sectionIndicators.forEach(indicator => {
                indicator.classList.remove('active');
            });
            if (sectionIndicators[index]) {
                sectionIndicators[index].classList.add('active');
            }
        }
    });
}

// Click on indicator to navigate to section
document.querySelectorAll('.section-indicator').forEach(indicator => {
    indicator.addEventListener('click', () => {
        const targetSection = indicator.getAttribute('data-section');
        const targetElement = document.getElementById(targetSection);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});