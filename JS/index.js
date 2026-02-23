// Mobile Navigation Toggle
const mobileToggle = document.getElementById('mobileToggle');
const navLinks = document.getElementById('navLinks');

mobileToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});


// Smooth scroll for navigation links
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

// Add scroll animations (Desktop only for performance)
if (window.innerWidth > 768) {
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

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(section);
    });
}

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(10, 10, 20, 0.95)';
    } else {
        nav.style.background = 'rgba(10, 10, 20, 0.8)';
    }
});

// Neural Network Background Animation (Desktop only)
function createNeuralNetwork() {
    // Skip on mobile for performance
    if (window.innerWidth <= 768) return;

    const container = document.getElementById('neuralBg');
    if (!container) return;

    const nodeCount = 30;
    const nodes = [];

    // Create nodes
    for (let i = 0; i < nodeCount; i++) {
        const node = document.createElement('div');
        node.className = 'neural-node';
        node.style.left = Math.random() * 100 + '%';
        node.style.top = Math.random() * 100 + '%';
        node.style.animationDelay = Math.random() * 3 + 's';
        container.appendChild(node);
        nodes.push({
            element: node,
            x: parseFloat(node.style.left),
            y: parseFloat(node.style.top)
        });
    }

    // Create connections with SVG
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.style.position = 'absolute';
    svg.style.inset = '0';
    svg.style.width = '100%';
    svg.style.height = '100%';
    svg.style.pointerEvents = 'none';
    container.appendChild(svg);

    // Draw lines between close nodes
    for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
            const dx = nodes[i].x - nodes[j].x;
            const dy = nodes[i].y - nodes[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 20) {
                const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                line.setAttribute('x1', nodes[i].x + '%');
                line.setAttribute('y1', nodes[i].y + '%');
                line.setAttribute('x2', nodes[j].x + '%');
                line.setAttribute('y2', nodes[j].y + '%');
                line.setAttribute('stroke', '#6366f1');
                line.setAttribute('stroke-width', '1');
                line.setAttribute('opacity', '0.2');
                line.style.filter = 'blur(0.5px)';
                svg.appendChild(line);
            }
        }
    }
}

// Initialize neural network on load (desktop only)
window.addEventListener('load', createNeuralNetwork);

// AI Code Rain Animation (Desktop only)
function createCodeRain() {
    // Skip on mobile for performance
    if (window.innerWidth <= 768) return;

    const container = document.getElementById('codeRain');
    if (!container) return;

    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const columns = Math.floor(window.innerWidth / 20);

    for (let i = 0; i < columns; i++) {
        const createChar = () => {
            const char = document.createElement('div');
            char.className = 'code-char';
            char.textContent = chars[Math.floor(Math.random() * chars.length)];
            char.style.left = (i * 20) + 'px';
            char.style.animationDelay = Math.random() * 5 + 's';
            char.style.animationDuration = (Math.random() * 5 + 5) + 's';
            container.appendChild(char);

            setTimeout(() => {
                char.remove();
                createChar();
            }, (Math.random() * 5 + 5) * 1000);
        };

        createChar();
    }
}

window.addEventListener('load', createCodeRain);

// Practice Section Slideshow
let slideshowInterval = null;
let currentSlide = 0;
let isPaused = false;

function initSlideshow() {
    startSlideshow();
}

function startSlideshow() {
    const items = document.querySelectorAll('.practice-item');
    if (items.length === 0) return;

    currentSlide = 0;
    isPaused = false;

    // Hide all items and remove animation classes
    items.forEach(item => {
        item.classList.remove('slide-in', 'slide-out');
        item.style.display = 'none';
    });

    // Show first item with animation
    items[0].style.display = 'flex';
    items[0].classList.add('slide-in');
    updateDots();

    // Start auto-rotation
    slideshowInterval = setInterval(() => {
        if (!isPaused) {
            showNextSlide();
        }
    }, 1000);
}

function showNextSlide() {
    const items = document.querySelectorAll('.practice-item');
    if (items.length === 0) return;

    // Scroll out current slide
    items[currentSlide].classList.remove('slide-in');
    items[currentSlide].classList.add('slide-out');

    // Move to next slide
    currentSlide = (currentSlide + 1) % items.length;

    // Scroll in next slide after transition completes
    setTimeout(() => {
        items.forEach(item => item.style.display = 'none');
        items[currentSlide].style.display = 'flex';
        items[currentSlide].classList.remove('slide-out');
        items[currentSlide].classList.add('slide-in');
        updateDots();
    }, 300);
}

function toggleSlideshow() {
    isPaused = !isPaused;
    const pauseIcon = document.getElementById('pauseIcon');
    const playIcon = document.getElementById('playIcon');

    if (isPaused) {
        pauseIcon.style.display = 'none';
        playIcon.style.display = 'inline';
    } else {
        pauseIcon.style.display = 'inline';
        playIcon.style.display = 'none';
    }
}

function updateDots() {
    const dotsContainer = document.getElementById('slideshowDots');
    const items = document.querySelectorAll('.practice-item');
    if (!dotsContainer || items.length === 0) return;

    dotsContainer.innerHTML = '';
    items.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.className = 'slideshow-dot' + (index === currentSlide ? ' active' : '');
        dotsContainer.appendChild(dot);
    });
}

// Initialize slideshow on page load
document.addEventListener('DOMContentLoaded', initSlideshow);

// Like Button Functionality
function toggleLike(button) {
    button.classList.toggle('liked');
    const countElement = button.querySelector('.like-count');
    let count = parseInt(countElement.textContent);

    if (button.classList.contains('liked')) {
        countElement.textContent = count + 1;
    } else {
        countElement.textContent = Math.max(0, count - 1);
    }
}

// Auto-play video when in viewport
const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const video = entry.target;
        if (entry.isIntersecting) {
            video.play().catch(err => console.log('Video autoplay failed:', err));
        } else {
            video.pause();
        }
    });
}, {
    threshold: 0.5
});

// Observe all project videos
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.project-video').forEach(video => {
        videoObserver.observe(video);
    });

    // Typing effect for name
    const typingElement = document.getElementById('typingName');
    if (typingElement) {
        const fullText = 'Vithusan Vijayakumar';
        let charIndex = 0;

        function typeNextChar() {
            if (charIndex < fullText.length) {
                typingElement.textContent += fullText.charAt(charIndex);
                charIndex++;
                setTimeout(typeNextChar, 100);
            } else {
                // Remove cursor after typing completes
                setTimeout(() => {
                    typingElement.classList.add('typing-complete');
                }, 500);
            }
        }

        setTimeout(typeNextChar, 500);
    }
});