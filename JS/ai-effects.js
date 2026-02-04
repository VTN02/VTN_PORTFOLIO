// ============================================
// MINIMIZED AI EFFECTS - SUBTLE & PROFESSIONAL
// ============================================

// Disable intensive particle system
function createAIParticles() {
    // Disabled for minimal theme
    return;
}

// Minimal neural network (reduced nodes)
function createEnhancedNeuralNetwork() {
    const container = document.getElementById('neuralBg');
    if (!container) return;

    const nodeCount = 15; // Reduced from 40
    const nodes = [];

    container.innerHTML = '';

    // Create minimal nodes
    for (let i = 0; i < nodeCount; i++) {
        const node = document.createElement('div');
        node.className = 'neural-node';
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        node.style.left = x + '%';
        node.style.top = y + '%';
        node.style.animationDelay = Math.random() * 3 + 's';
        node.style.opacity = '0.3'; // More subtle

        container.appendChild(node);
        nodes.push({ element: node, x, y });
    }

    // No connection lines for minimal theme
}

// Disable holographic cursor
function createHolographicCursor() {
    // Disabled for minimal theme
    return;
}

// Disable glitch effect
function addGlitchEffect() {
    // Disabled for minimal theme
    return;
}

// Keep scroll reveal (subtle)
function initScrollReveal() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.project-card, .practice-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)'; // Reduced from 30px
        el.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
        observer.observe(el);
    });
}

// Minimal tech badge effects
function enhanceTechBadges() {
    // Simple hover only, no ripple
    document.querySelectorAll('.tech-badge').forEach(badge => {
        badge.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-2px)';
        });
        badge.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Minimal styles
const style = document.createElement('style');
style.textContent = `
    .neural-node {
        width: 4px;
        height: 4px;
        background: rgba(99, 102, 241, 0.4);
        border-radius: 50%;
        box-shadow: 0 0 8px rgba(99, 102, 241, 0.3);
    }
`;
document.head.appendChild(style);

// Initialize minimal effects
window.addEventListener('load', () => {
    setTimeout(() => {
        createEnhancedNeuralNetwork();
        initScrollReveal();
        enhanceTechBadges();
    }, 300);
});

// Performance optimization
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        document.querySelectorAll('.neural-node').forEach(el => {
            el.style.animationPlayState = 'paused';
        });
    } else {
        document.querySelectorAll('.neural-node').forEach(el => {
            el.style.animationPlayState = 'running';
        });
    }
});
