// ==================== Navigation ====================
const navLinks = document.querySelectorAll('.nav-item');
const sections = document.querySelectorAll('section[id]');

// Active navigation on scroll
function activateNavOnScroll() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-item[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            navLink?.classList.add('active');
        }
    });
}

window.addEventListener('scroll', activateNavOnScroll);

// Smooth scroll for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==================== Theme Toggle ====================
const themeToggle = document.getElementById('theme-toggle');
let isDarkMode = true;

// Check for saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    isDarkMode = false;
    applyLightTheme();
}

function applyLightTheme() {
    document.documentElement.style.setProperty('--bg-dark', '#f0f0f0');
    document.documentElement.style.setProperty('--bg-panel', '#ffffff');
    document.documentElement.style.setProperty('--bg-card', '#fafafa');
    document.documentElement.style.setProperty('--text-primary', '#1a1a1a');
    document.documentElement.style.setProperty('--text-secondary', '#4d4d4d');
    document.documentElement.style.setProperty('--border-dark', '#d0d0d0');
}

function applyDarkTheme() {
    document.documentElement.style.setProperty('--bg-dark', '#0d0d0d');
    document.documentElement.style.setProperty('--bg-panel', '#1a1a1a');
    document.documentElement.style.setProperty('--bg-card', '#242424');
    document.documentElement.style.setProperty('--text-primary', '#ffffff');
    document.documentElement.style.setProperty('--text-secondary', '#b3b3b3');
    document.documentElement.style.setProperty('--border-dark', '#333333');
}

themeToggle.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    
    if (!isDarkMode) {
        applyLightTheme();
        localStorage.setItem('theme', 'light');
    } else {
        applyDarkTheme();
        localStorage.setItem('theme', 'dark');
    }
});

// ==================== Skills Animation ====================
let skillsAnimated = false;

function animateSkills() {
    if (skillsAnimated) return;

    const skillsSection = document.getElementById('skills');
    if (!skillsSection) return;
    
    const sectionTop = skillsSection.offsetTop;
    const sectionHeight = skillsSection.offsetHeight;
    const scrollY = window.pageYOffset + window.innerHeight;

    if (scrollY > sectionTop + sectionHeight / 3) {
        const skillBars = document.querySelectorAll('.skill-bar');
        skillBars.forEach(bar => {
            const level = bar.getAttribute('data-level');
            if (level) {
                bar.style.setProperty('--level', level + '%');
            }
        });
        skillsAnimated = true;
    }
}

window.addEventListener('scroll', animateSkills);

// ==================== XP Bar Animation ====================
window.addEventListener('load', () => {
    const xpFill = document.querySelector('.xp-fill');
    if (xpFill) {
        const width = xpFill.style.width;
        xpFill.style.width = '0%';
        setTimeout(() => {
            xpFill.style.width = width;
        }, 500);
    }
    
    // Trigger skills animation if section is visible
    setTimeout(animateSkills, 100);
});

// ==================== Contact Form ====================
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // You can integrate with FormSpree, EmailJS, or your own backend here
    alert('Thank you for your message! I will get back to you soon.');
    
    // Reset form
    contactForm.reset();
});

// ==================== Mobile Menu Toggle ====================
const menuBtn = document.getElementById('menu-btn');
const navCenter = document.querySelector('.nav-center');

menuBtn.addEventListener('click', () => {
    navCenter.classList.toggle('mobile-active');
    
    if (window.innerWidth <= 768) {
        if (navCenter.classList.contains('mobile-active')) {
            navCenter.style.display = 'flex';
            navCenter.style.position = 'fixed';
            navCenter.style.top = '60px';
            navCenter.style.left = '0';
            navCenter.style.right = '0';
            navCenter.style.flexDirection = 'column';
            navCenter.style.background = 'var(--bg-panel)';
            navCenter.style.padding = '20px';
            navCenter.style.borderTop = '2px solid var(--primary-red)';
            navCenter.style.boxShadow = 'var(--shadow-lg)';
            navCenter.style.zIndex = '999';
        } else {
            navCenter.style.display = 'none';
        }
    }
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navCenter.classList.remove('mobile-active');
            navCenter.style.display = 'none';
        }
    });
});

// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navCenter.style.display = 'flex';
        navCenter.style.position = 'static';
        navCenter.style.flexDirection = 'row';
        navCenter.style.padding = '0';
        navCenter.classList.remove('mobile-active');
    } else {
        if (!navCenter.classList.contains('mobile-active')) {
            navCenter.style.display = 'none';
        }
    }
});

// ==================== Smooth Animations ====================
const observerOptions = {
    threshold: 0.1,
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

// Observe elements for fade-in animation
const observeElements = document.querySelectorAll('.project-card, .info-item, .skill-item, .sidebar-card');
observeElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// ==================== Console Message ====================
console.log('%c⚔️ Welcome to the Portfolio! ⚔️', 'font-size: 20px; color: #c23a2b; font-weight: bold;');
console.log('%cBuilt with passion by Clint Harvey Quimno', 'font-size: 14px; color: #d4a959;');
