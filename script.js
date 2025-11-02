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

// No star field or particles needed for MIT engineering aesthetic

// Scroll Animations (AOS-like) - Decorative only, always visible
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('[data-aos]');
    
    // Make all elements visible immediately - decorative animations only
    animatedElements.forEach(el => {
        // Force visible immediately
        gsap.set(el, { opacity: 1, y: 0 });
        el.style.opacity = '1';
        el.style.visibility = 'visible';
        el.style.transform = 'translateY(0)';
        el.classList.add('aos-animate');
    });
    
    // Optional: Add subtle decorative animation on scroll (non-blocking)
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        animatedElements.forEach(el => {
            const delay = el.getAttribute('data-aos-delay') || 0;
            
            // Subtle decorative animation - elements already visible
            gsap.fromTo(el, 
                {
                    opacity: 0.7,
                    y: 20
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    delay: parseFloat(delay) / 2000,
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 90%',
                        toggleActions: 'play none none none',
                        once: true
                    },
                    ease: 'power2.out'
                }
            );
        });
    }
}

// Animate Section Titles - Decorative only, always visible
function animateSectionTitles() {
    const sectionTitles = document.querySelectorAll('.section-title');
    
    // Make all titles visible immediately
    sectionTitles.forEach(title => {
        title.style.opacity = '1';
        title.style.visibility = 'visible';
        title.style.transform = 'scale(1)';
    });
    
    // Optional decorative animation (non-blocking)
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        sectionTitles.forEach(title => {
            gsap.fromTo(title,
                {
                    opacity: 0.8,
                    scale: 0.95
                },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.5,
                    scrollTrigger: {
                        trigger: title,
                        start: 'top 85%',
                        toggleActions: 'play none none none',
                        once: true
                    },
                    ease: 'power2.out'
                }
            );
        });
    }
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

// Navbar Scroll Effect - Clean engineering style
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
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

// No parallax effect for clean MIT engineering aesthetic

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Force all sections to be visible immediately
    const allSections = document.querySelectorAll('.section, #projects, #contact, #skills');
    allSections.forEach(section => {
        section.style.display = 'block';
        section.style.visibility = 'visible';
        section.style.opacity = '1';
    });
    
    // Force all project cards to be visible
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.style.display = 'block';
        card.style.visibility = 'visible';
        card.style.opacity = '1';
    });
    
    // Force contact form to be visible
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.style.display = 'block';
        contactForm.style.visibility = 'visible';
        contactForm.style.opacity = '1';
    }
    
    // Initialize decorative animations
    initScrollAnimations();
    animateSectionTitles();
    
    // Animate hero elements on load (decorative only)
    if (typeof gsap !== 'undefined') {
        gsap.from('.hero-id', {
            opacity: 0,
            y: 20,
            duration: 0.8,
            ease: 'power2.out'
        });
        
        gsap.from('.hero-title', {
            opacity: 0,
            y: 40,
            duration: 1,
            delay: 0.2,
            ease: 'power3.out'
        });
        
        gsap.from('.hero-meta', {
            opacity: 0,
            y: 20,
            duration: 0.8,
            delay: 0.5,
            ease: 'power2.out'
        });
        
        gsap.from('.hero-tagline', {
            opacity: 0,
            y: 20,
            duration: 0.8,
            delay: 0.7,
            ease: 'power2.out'
        });
        
        gsap.from('.hero-buttons', {
            opacity: 0,
            y: 20,
            duration: 0.8,
            delay: 0.9,
            ease: 'power2.out'
        });
    }
});
