// Hero Background Image Rotation
function setupHeroBackgrounds() {
    const heroBgs = document.querySelectorAll('#hero .hero-bg');
    if (heroBgs.length === 0) return;
    
    let currentBg = 0;
    heroBgs[0].classList.add('active');

    setInterval(function() {
        // Remove active class and reset transform from current background
        heroBgs[currentBg].classList.remove('active');
        heroBgs[currentBg].style.transform = 'scale(1)';
        
        // Update to next background
        currentBg = (currentBg + 1) % heroBgs.length;
        
        // Reset transform and add active class to new background
        heroBgs[currentBg].style.transform = 'scale(1)';
        setTimeout(() => {
            heroBgs[currentBg].classList.add('active');
        }, 50); // Small delay to ensure transform reset is applied
    }, 10000);
}

// Call the function when the document is ready
document.addEventListener('DOMContentLoaded', function() {
    setupHeroBackgrounds();
}); 