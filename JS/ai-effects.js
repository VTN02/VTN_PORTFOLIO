// ============================================
// PERFORMANCE OPTIMIZED - NO HEAVY EFFECTS
// ============================================

// All heavy effects disabled for better performance

// Disable particle system
function createAIParticles() {
    return; // Disabled
}

// Disable neural network
function createEnhancedNeuralNetwork() {
    return; // Disabled
}

// Disable code rain
function createCodeRain() {
    return; // Disabled
}

// Disable holographic cursor
function createHolographicCursor() {
    return; // Disabled
}

// Disable glitch effect
function addGlitchEffect() {
    return; // Disabled
}

// Keep only lightweight scroll reveal
function initScrollReveal() {
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Only observe major elements
    document.querySelectorAll('.project-card, .practice-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(15px)';
        el.style.transition = 'opacity 0.4s ease-out, transform 0.4s ease-out';
        observer.observe(el);
    });
}

// Minimal tech badge effects (no ripple)
function enhanceTechBadges() {
    // Disabled for performance
    return;
}

// Initialize only lightweight effects (disabled on mobile)
window.addEventListener('load', () => {
    // Only enable scroll reveal on desktop
    if (window.innerWidth > 768) {
        initScrollReveal();
    }
});

// Clean up - no animations to pause
document.addEventListener('visibilitychange', () => {
    // Nothing to pause
});
