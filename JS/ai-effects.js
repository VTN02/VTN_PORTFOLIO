// ============================================
// PROFESSIONAL AI ANIMATION SYSTEM
// VTN Portfolio - ai-effects.js
// ============================================

const isMobile = () => window.innerWidth <= 768;
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ============================================
// 1. NEURAL NETWORK CANVAS BACKGROUND
// ============================================
function initNeuralNetwork() {
    if (prefersReducedMotion) return;
    const canvas = document.getElementById('neuralBg');
    if (!canvas) return;

    canvas.style.display = 'block';
    canvas.style.position = 'fixed';
    canvas.style.inset = '0';
    canvas.style.zIndex = '-1';
    canvas.style.pointerEvents = 'none';

    const ctx = canvas.getContext('2d');
    let W, H, nodes, animFrame;

    const NODE_COUNT = isMobile() ? 22 : 48;
    const MAX_DIST = isMobile() ? 140 : 180;

    function resize() {
        W = canvas.width = window.innerWidth;
        H = canvas.height = window.innerHeight;
    }

    function makeNodes() {
        nodes = Array.from({ length: NODE_COUNT }, () => ({
            x: Math.random() * W,
            y: Math.random() * H,
            vx: (Math.random() - 0.5) * 0.4,
            vy: (Math.random() - 0.5) * 0.4,
            r: Math.random() * 2 + 1.2,
            pulse: Math.random() * Math.PI * 2,
        }));
    }

    function draw() {
        ctx.clearRect(0, 0, W, H);

        // Update positions
        nodes.forEach(n => {
            n.x += n.vx;
            n.y += n.vy;
            n.pulse += 0.018;
            if (n.x < 0 || n.x > W) n.vx *= -1;
            if (n.y < 0 || n.y > H) n.vy *= -1;
        });

        // Draw edges
        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                const a = nodes[i], b = nodes[j];
                const dx = a.x - b.x, dy = a.y - b.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < MAX_DIST) {
                    const alpha = (1 - dist / MAX_DIST) * 0.18;
                    ctx.beginPath();
                    ctx.moveTo(a.x, a.y);
                    ctx.lineTo(b.x, b.y);
                    ctx.strokeStyle = `rgba(99,102,241,${alpha})`;
                    ctx.lineWidth = 0.8;
                    ctx.stroke();
                }
            }
        }

        // Draw nodes
        nodes.forEach(n => {
            const glow = Math.sin(n.pulse) * 0.5 + 0.5;
            const r = n.r + glow * 1.2;

            const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, r * 3);
            grad.addColorStop(0, `rgba(139,92,246,${0.7 + glow * 0.3})`);
            grad.addColorStop(1, 'rgba(99,102,241,0)');

            ctx.beginPath();
            ctx.arc(n.x, n.y, r * 3, 0, Math.PI * 2);
            ctx.fillStyle = grad;
            ctx.fill();

            ctx.beginPath();
            ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(200,195,255,${0.8 + glow * 0.2})`;
            ctx.fill();
        });

        animFrame = requestAnimationFrame(draw);
    }

    resize();
    makeNodes();
    draw();
    window.addEventListener('resize', () => { resize(); makeNodes(); });

    // Pause when tab hidden
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) cancelAnimationFrame(animFrame);
        else draw();
    });
}

// ============================================
// 2. FLOATING AI PARTICLES
// ============================================
function initParticles() {
    if (prefersReducedMotion || isMobile()) return;
    const container = document.getElementById('aiParticles');
    if (!container) return;

    container.style.display = 'block';
    container.style.position = 'fixed';
    container.style.inset = '0';
    container.style.zIndex = '0';
    container.style.pointerEvents = 'none';
    container.style.overflow = 'hidden';

    const COUNT = 18;
    const colors = ['rgba(99,102,241,', 'rgba(139,92,246,', 'rgba(236,72,153,', 'rgba(96,165,250,'];

    for (let i = 0; i < COUNT; i++) {
        const p = document.createElement('div');
        const size = Math.random() * 4 + 2;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const duration = Math.random() * 20 + 15;
        const delay = Math.random() * 15;
        const x = Math.random() * 100;

        p.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}%;
            bottom: -10px;
            border-radius: 50%;
            background: ${color}0.8)`;
        p.style.boxShadow = `0 0 ${size * 3}px ${color}0.6), 0 0 ${size * 6}px ${color}0.3)`;
        p.style.animation = `particleFloat ${duration}s ${delay}s linear infinite`;
        p.style.willChange = 'transform, opacity';
        container.appendChild(p);
    }
}

// ============================================
// 3. SCROLL REVEAL ANIMATIONS
// Works alongside index.js section reveal  
// Only reveals CHILDREN after section is visible
// ============================================
function initScrollReveal() {
    if (prefersReducedMotion) return;

    // These are the child elements we want to animate within sections
    const revealSelectors = [
        { selector: '.section-header', delay: 0, from: 'bottom' },
        { selector: '.project-card', delay: 100, from: 'bottom', stagger: true },
        { selector: '.practice-section', delay: 0, from: 'bottom' },
        { selector: '.about-text', delay: 0, from: 'left' },
        { selector: '.about-info', delay: 150, from: 'right' },
        { selector: '.contact-info', delay: 0, from: 'left' },
        { selector: '.contact-form', delay: 150, from: 'right' },
        { selector: '.section-block', delay: 100, from: 'bottom', stagger: true },
        { selector: '.info-item', delay: 60, from: 'left', stagger: true },
    ];

    // Build a flat list of { el, from, delay } to observe
    const targets = [];
    revealSelectors.forEach(({ selector, delay, from, stagger }) => {
        document.querySelectorAll(selector).forEach((el, i) => {
            if (el.classList.contains('reveal-init')) return;
            targets.push({
                el,
                from,
                delay: stagger ? delay * i : delay
            });
        });
    });

    if (targets.length === 0) return;

    // Apply initial hidden state
    targets.forEach(({ el, from, delay }) => {
        el.classList.add('reveal-init', `reveal-from-${from}`);
        el.dataset.revealDelay = delay;
    });

    // Reveal observer — uses a lower threshold so it triggers even
    // when the parent section is mid-reveal
    const observerOpts = {
        threshold: 0.05,
        rootMargin: '0px 0px -20px 0px'
    };

    const obs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const el = entry.target;

            // Check if parent section is visible (index.js reveals sections)
            // If section stil has opacity:0 inline, delay a bit to let it reveal first
            const parentSection = el.closest('section');
            const sectionOpacity = parentSection
                ? parseFloat(window.getComputedStyle(parentSection).opacity)
                : 1;

            const baseDelay = parseInt(el.dataset.revealDelay || 0);
            // If section is still fading in, add 400ms buffer
            const totalDelay = sectionOpacity < 0.5 ? baseDelay + 400 : baseDelay;

            setTimeout(() => {
                el.classList.add('reveal-visible');
            }, totalDelay);

            obs.unobserve(el);
        });
    }, observerOpts);

    targets.forEach(({ el }) => obs.observe(el));
}

// ============================================
// 4. CURSOR TRAIL (Desktop only)
// ============================================
function initCursorTrail() {
    if (prefersReducedMotion || isMobile()) return;

    const trail = [];
    const TRAIL_LENGTH = 12;

    for (let i = 0; i < TRAIL_LENGTH; i++) {
        const dot = document.createElement('div');
        const size = (1 - i / TRAIL_LENGTH) * 8 + 2;
        const opacity = (1 - i / TRAIL_LENGTH) * 0.5;
        dot.style.cssText = `
            position: fixed;
            width: ${size}px;
            height: ${size}px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(139,92,246,${opacity}), rgba(99,102,241,${opacity * 0.5}));
            pointer-events: none;
            z-index: 9998;
            transform: translate(-50%, -50%);
            transition: left ${0.05 + i * 0.015}s ease, top ${0.05 + i * 0.015}s ease;
            will-change: left, top;
        `;
        document.body.appendChild(dot);
        trail.push(dot);
    }

    window.addEventListener('mousemove', (e) => {
        trail.forEach(dot => {
            dot.style.left = e.clientX + 'px';
            dot.style.top = e.clientY + 'px';
        });
    });
}

// ============================================
// 5. CARD 3D TILT (Desktop only)
// ============================================
function initCardTilt() {
    if (prefersReducedMotion || isMobile()) return;

    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const cx = rect.left + rect.width / 2;
            const cy = rect.top + rect.height / 2;
            const dx = (e.clientX - cx) / (rect.width / 2);
            const dy = (e.clientY - cy) / (rect.height / 2);
            const tiltX = -dy * 4;
            const tiltY = dx * 4;
            card.style.transform = `translateY(-8px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
            card.style.transition = 'transform 0.1s ease';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
            card.style.transition = 'transform 0.5s ease';
        });
    });
}

// ============================================
// 6. ANIMATED SECTION ACCENT LINES
// ============================================
function initSectionAccents() {
    if (prefersReducedMotion) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('accent-visible');
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.section-title').forEach(el => {
        observer.observe(el);
    });
}

// ============================================
// 7. TYPING EFFECT FOR HERO NAME
// ============================================
function initTypingEffect() {
    const el = document.getElementById('typingName');
    if (!el) return;

    const name = 'Vithusan Vijayakumar';
    let i = 0;
    el.textContent = '';
    el.classList.remove('typing-complete');

    const delay = prefersReducedMotion ? 0 : 75;

    if (prefersReducedMotion) {
        el.textContent = name;
        el.classList.add('typing-complete');
        return;
    }

    function type() {
        if (i < name.length) {
            el.textContent += name[i++];
            setTimeout(type, delay + Math.random() * 40);
        } else {
            el.classList.add('typing-complete');
        }
    }

    setTimeout(type, 600);
}

// ============================================
// 8. GLOWING SKILL BADGES ON HOVER
// ============================================
function initBadgeGlow() {
    document.querySelectorAll('.tech-badge').forEach(badge => {
        badge.addEventListener('mouseenter', () => {
            badge.style.boxShadow = '0 0 14px rgba(99,102,241,0.5), 0 0 28px rgba(139,92,246,0.2)';
        });
        badge.addEventListener('mouseleave', () => {
            badge.style.boxShadow = '';
        });
    });
}

// ============================================
// 9. HERO GRADIENT ORBS (Ambient background)
// ============================================
function initHeroOrbs() {
    if (prefersReducedMotion) return;
    const hero = document.querySelector('.hero');
    if (!hero) return;

    const orb1 = document.createElement('div');
    const orb2 = document.createElement('div');
    const orb3 = document.createElement('div');

    [orb1, orb2, orb3].forEach((orb, i) => {
        orb.style.cssText = `
            position: absolute;
            border-radius: 50%;
            pointer-events: none;
            filter: blur(${60 + i * 20}px);
            will-change: transform;
            z-index: 0;
        `;
    });

    orb1.style.cssText += `width:420px;height:420px;top:-80px;left:-80px;background:radial-gradient(circle,rgba(99,102,241,0.12),transparent 70%);animation:orbFloat1 12s ease-in-out infinite;`;
    orb2.style.cssText += `width:350px;height:350px;bottom:-60px;right:-40px;background:radial-gradient(circle,rgba(139,92,246,0.10),transparent 70%);animation:orbFloat2 16s ease-in-out infinite;`;
    orb3.style.cssText += `width:280px;height:280px;top:40%;left:40%;background:radial-gradient(circle,rgba(236,72,153,0.07),transparent 70%);animation:orbFloat3 20s ease-in-out infinite;`;

    hero.style.position = 'relative';
    hero.style.overflow = 'hidden';
    [orb1, orb2, orb3].forEach(orb => hero.appendChild(orb));
}

// ============================================
// 10. PERFORMANCE PAUSE ON HIDDEN TAB
// ============================================
let allAnimationsPaused = false;
document.addEventListener('visibilitychange', () => {
    allAnimationsPaused = document.hidden;
});

// ============================================
// INITIALIZE ALL EFFECTS
// ============================================
window.addEventListener('DOMContentLoaded', () => {
    initTypingEffect();
    initHeroOrbs();
    initParticles();
});

window.addEventListener('load', () => {
    initNeuralNetwork();
    initScrollReveal();
    initCursorTrail();
    initCardTilt();
    initSectionAccents();
    initBadgeGlow();
});
