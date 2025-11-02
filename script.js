// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const html = document.documentElement;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', currentTheme);
updateThemeIcon(currentTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    if (theme === 'dark') {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
}

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth Scroll for Navigation Links
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

// Create Star Field
function createStars() {
    const starsContainer = document.getElementById('stars-container');
    const numberOfStars = 150;

    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Random size between 1-3px
        const size = Math.random() * 2 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        // Random position
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        
        // Random animation delay
        star.style.animationDelay = `${Math.random() * 3}s`;
        star.style.animationDuration = `${Math.random() * 2 + 2}s`;
        
        starsContainer.appendChild(star);
    }
}

// Create Hero Particles
function createHeroParticles() {
    const particlesContainer = document.querySelector('.hero-particles');
    if (!particlesContainer) return;

    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = '4px';
        particle.style.height = '4px';
        particle.style.background = 'rgba(102, 126, 234, 0.6)';
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        particle.style.left = `${x}%`;
        particle.style.top = `${y}%`;
        
        // Animate particles
        gsap.to(particle, {
            x: Math.random() * 200 - 100,
            y: Math.random() * 200 - 100,
            opacity: 0,
            scale: Math.random() * 2 + 0.5,
            duration: Math.random() * 3 + 2,
            repeat: -1,
            ease: 'power1.inOut',
            delay: Math.random() * 2
        });
        
        particlesContainer.appendChild(particle);
    }
}

// Scroll Animations (AOS-like)
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('[data-aos]');
    
    animatedElements.forEach(el => {
        const delay = el.getAttribute('data-aos-delay') || 0;
        
        gsap.from(el, {
            opacity: 0,
            y: 50,
            duration: 0.8,
            delay: parseFloat(delay) / 1000,
            scrollTrigger: {
                trigger: el,
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        });
    });
}

// Animate Section Titles
function animateSectionTitles() {
    const sectionTitles = document.querySelectorAll('.section-title');
    
    sectionTitles.forEach(title => {
        gsap.from(title, {
            opacity: 0,
            scale: 0.8,
            duration: 1,
            scrollTrigger: {
                trigger: title,
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        });
    });
}

// Animate Project Cards on Hover
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        gsap.to(this, {
            scale: 1.02,
            y: -10,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
    
    card.addEventListener('mouseleave', function() {
        gsap.to(this, {
            scale: 1,
            y: 0,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// Navbar Scroll Effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.top = '10px';
        navbar.style.backdropFilter = 'blur(30px) saturate(180%)';
    } else {
        navbar.style.top = '20px';
    }
    
    lastScroll = currentScroll;
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');
const submitBtn = contactForm?.querySelector('.btn-submit');

// Form Validation
function validateForm() {
    let isValid = true;
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    // Reset previous errors
    document.querySelectorAll('.form-group').forEach(group => {
        group.classList.remove('error');
        const errorMsg = group.querySelector('.error-message');
        if (errorMsg) errorMsg.textContent = '';
    });

    // Validate Name
    if (!nameInput.value.trim()) {
        showError(nameInput.parentElement, 'Name is required');
        isValid = false;
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.trim()) {
        showError(emailInput.parentElement, 'Email is required');
        isValid = false;
    } else if (!emailRegex.test(emailInput.value)) {
        showError(emailInput.parentElement, 'Please enter a valid email address');
        isValid = false;
    }

    // Validate Message
    if (!messageInput.value.trim()) {
        showError(messageInput.parentElement, 'Message is required');
        isValid = false;
    } else if (messageInput.value.trim().length < 10) {
        showError(messageInput.parentElement, 'Message must be at least 10 characters long');
        isValid = false;
    }

    return isValid;
}

function showError(formGroup, message) {
    formGroup.classList.add('error');
    const errorMsg = formGroup.querySelector('.error-message');
    if (errorMsg) {
        errorMsg.textContent = message;
    }
}

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }

        // Disable submit button
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.querySelector('.btn-text').textContent = 'Sending...';
        }

        const formData = new FormData(contactForm);
        
        // Replace 'YOUR_FORMSPREE_ID' with actual Formspree endpoint
        // The user needs to replace this with their Formspree form ID
        const formspreeUrl = 'https://formspree.io/f/YOUR_FORMSPREE_ID';

        try {
            const response = await fetch(formspreeUrl, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                // Show success message
                formSuccess.classList.add('show');
                contactForm.reset();
                
                // Scroll to success message
                formSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    formSuccess.classList.remove('show');
                }, 5000);
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            alert('Sorry, there was an error sending your message. Please try again later.');
            console.error('Form submission error:', error);
        } finally {
            // Re-enable submit button
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.querySelector('.btn-text').textContent = 'Send Message';
            }
        }
    });
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    createStars();
    createHeroParticles();
    initScrollAnimations();
    animateSectionTitles();
    
    // Animate hero elements on load
    gsap.from('.hero-title', {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power3.out'
    });
    
    gsap.from('.hero-subtitle', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out'
    });
    
    gsap.from('.hero-description', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.6,
        ease: 'power3.out'
    });
    
    gsap.from('.hero-buttons', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.9,
        ease: 'power3.out'
    });
});

// Update stars theme on theme change
const observer = new MutationObserver(() => {
    const stars = document.querySelectorAll('.star');
    const theme = html.getAttribute('data-theme');
    const starColor = theme === 'dark' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.3)';
    
    stars.forEach(star => {
        star.style.background = starColor;
    });
});

observer.observe(html, {
    attributes: true,
    attributeFilter: ['data-theme']
});
