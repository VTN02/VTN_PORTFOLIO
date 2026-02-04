// ============================================
// AI PARTICLE SYSTEM
// ============================================

function createAIParticles() {
    const container = document.getElementById('aiParticles');
    if (!container) return;

    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'ai-particle';

        // Random positioning
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 10 + 's';
        particle.style.animationDuration = (10 + Math.random() * 10) + 's';

        // Random colors
        const colors = ['#00d4ff', '#7c3aed', '#ff006e'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        particle.style.background = randomColor;
        particle.style.boxShadow = `
            0 0 4px ${randomColor},
            0 0 8px ${randomColor}
        `;

        container.appendChild(particle);
    }
}

// ============================================
// ENHANCED NEURAL NETWORK
// ============================================

function createEnhancedNeuralNetwork() {
    const container = document.getElementById('neuralBg');
    if (!container) return;

    const nodeCount = 40;
    const nodes = [];

    // Clear existing content
    container.innerHTML = '';

    // Create SVG for connections
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.style.position = 'absolute';
    svg.style.inset = '0';
    svg.style.width = '100%';
    svg.style.height = '100%';
    svg.style.pointerEvents = 'none';

    // Add gradient definition
    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
    gradient.setAttribute('id', 'neuralGradient');
    gradient.setAttribute('x1', '0%');
    gradient.setAttribute('y1', '0%');
    gradient.setAttribute('x2', '100%');
    gradient.setAttribute('y2', '100%');

    const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    stop1.setAttribute('offset', '0%');
    stop1.setAttribute('stop-color', '#00d4ff');
    stop1.setAttribute('stop-opacity', '0.6');

    const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    stop2.setAttribute('offset', '50%');
    stop2.setAttribute('stop-color', '#7c3aed');
    stop2.setAttribute('stop-opacity', '0.6');

    const stop3 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    stop3.setAttribute('offset', '100%');
    stop3.setAttribute('stop-color', '#ff006e');
    stop3.setAttribute('stop-opacity', '0.6');

    gradient.appendChild(stop1);
    gradient.appendChild(stop2);
    gradient.appendChild(stop3);
    defs.appendChild(gradient);
    svg.appendChild(defs);

    // Create nodes
    for (let i = 0; i < nodeCount; i++) {
        const node = document.createElement('div');
        node.className = 'neural-node';
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        node.style.left = x + '%';
        node.style.top = y + '%';
        node.style.animationDelay = Math.random() * 3 + 's';

        // Random color
        const colors = ['#00d4ff', '#7c3aed', '#ff006e'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        node.style.background = `radial-gradient(circle, ${color}, transparent)`;
        node.style.boxShadow = `
            0 0 10px ${color},
            0 0 20px ${color},
            0 0 30px ${color}40
        `;

        container.appendChild(node);
        nodes.push({ element: node, x, y });
    }

    // Draw connections
    for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
            const dx = nodes[i].x - nodes[j].x;
            const dy = nodes[i].y - nodes[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 25) {
                const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                line.setAttribute('x1', nodes[i].x + '%');
                line.setAttribute('y1', nodes[i].y + '%');
                line.setAttribute('x2', nodes[j].x + '%');
                line.setAttribute('y2', nodes[j].y + '%');
                line.setAttribute('stroke', 'url(#neuralGradient)');
                line.setAttribute('stroke-width', '1.5');
                line.setAttribute('opacity', '0.4');
                svg.appendChild(line);
            }
        }
    }

    container.appendChild(svg);
}

// ============================================
// HOLOGRAPHIC CURSOR EFFECT
// ============================================

function createHolographicCursor() {
    const cursor = document.createElement('div');
    cursor.className = 'ai-cursor';
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        border: 2px solid #00d4ff;
        border-radius: 50%;
        pointer-events: none;
        z-index: 10000;
        mix-blend-mode: difference;
        transition: transform 0.1s ease;
        box-shadow: 0 0 20px rgba(0, 212, 255, 0.5);
    `;
    document.body.appendChild(cursor);

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateCursor() {
        cursorX += (mouseX - cursorX) * 0.1;
        cursorY += (mouseY - cursorY) * 0.1;

        cursor.style.left = cursorX - 10 + 'px';
        cursor.style.top = cursorY - 10 + 'px';

        requestAnimationFrame(animateCursor);
    }

    animateCursor();

    // Scale on click
    document.addEventListener('mousedown', () => {
        cursor.style.transform = 'scale(0.8)';
    });

    document.addEventListener('mouseup', () => {
        cursor.style.transform = 'scale(1)';
    });
}

// ============================================
// GLITCH TEXT EFFECT
// ============================================

function addGlitchEffect() {
    const title = document.querySelector('.hero h1');
    if (!title) return;

    const originalText = title.textContent;

    setInterval(() => {
        if (Math.random() > 0.95) {
            const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
            const glitchedText = originalText.split('').map(char => {
                return Math.random() > 0.9 ? glitchChars[Math.floor(Math.random() * glitchChars.length)] : char;
            }).join('');

            title.textContent = glitchedText;

            setTimeout(() => {
                title.textContent = originalText;
            }, 50);
        }
    }, 3000);
}

// ============================================
// SCROLL REVEAL ANIMATIONS
// ============================================

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
                entry.target.classList.add('revealed');
            }
        });
    }, observerOptions);

    // Observe all major elements
    document.querySelectorAll('.project-card, .practice-item, .info-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
}

// ============================================
// TECH BADGE HOVER EFFECTS
// ============================================

function enhanceTechBadges() {
    document.querySelectorAll('.tech-badge').forEach(badge => {
        badge.addEventListener('mouseenter', function () {
            // Create ripple effect
            const ripple = document.createElement('span');
            ripple.style.cssText = `
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
                background: radial-gradient(circle, rgba(0, 212, 255, 0.4), transparent);
                border-radius: inherit;
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;
            this.appendChild(ripple);

            setTimeout(() => ripple.remove(), 600);
        });
    });
}

// Add ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        from {
            transform: scale(0);
            opacity: 1;
        }
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
    
    .ai-particles {
        position: fixed;
        inset: 0;
        pointer-events: none;
        z-index: 1;
        overflow: hidden;
    }
    
    .ai-cursor {
        display: none;
    }
    
    @media (min-width: 1024px) {
        .ai-cursor {
            display: block;
        }
    }
`;
document.head.appendChild(style);

// ============================================
// INITIALIZE ALL AI EFFECTS
// ============================================

window.addEventListener('load', () => {
    // Add small delay for smoother loading
    setTimeout(() => {
        createAIParticles();
        createEnhancedNeuralNetwork();
        createHolographicCursor();
        addGlitchEffect();
        initScrollReveal();
        enhanceTechBadges();
    }, 500);
});

// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================

// Reduce particles on mobile
if (window.innerWidth < 768) {
    const particleCount = 15; // Reduced for mobile
}

// Pause animations when tab is not visible
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        document.querySelectorAll('.ai-particle, .neural-node').forEach(el => {
            el.style.animationPlayState = 'paused';
        });
    } else {
        document.querySelectorAll('.ai-particle, .neural-node').forEach(el => {
            el.style.animationPlayState = 'running';
        });
    }
});
