// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when a link is clicked
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// CTA Button functionality
const ctaBtn = document.querySelector('.cta-btn');
ctaBtn.addEventListener('click', () => {
    const roomsSection = document.getElementById('rooms');
    const offsetTop = roomsSection.offsetTop - 80;
    window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
    });
});

// Form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const message = contactForm.querySelector('textarea').value;
        
        // Show confirmation message
        alert(`Thank you, ${name}! We've received your message and will get back to you at ${email} soon.`);
        
        // Reset form
        contactForm.reset();
    });
}

// Add animation on scroll
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

// Observe room cards and destination cards for animation
const roomCards = document.querySelectorAll('.room-card');
const destinationCards = document.querySelectorAll('.destination-card');
const amenityCards = document.querySelectorAll('.amenity-card');
const aboutContent = document.querySelector('.about-content');

// Add about section animation with 1500ms delay
if (aboutContent) {
    aboutContent.style.opacity = '0';
    aboutContent.style.transform = 'translateY(20px)';
    aboutContent.style.transition = 'all 0.6s ease-out 1.5s';
    observer.observe(aboutContent);
}

roomCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease-out 1s';
    observer.observe(card);
});

destinationCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease-out 1s';
    observer.observe(card);
});

amenityCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease-out';
    observer.observe(card);
});

// Navbar background on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Active navigation link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// Add animation to stat numbers (if added in future)
const animateNumbers = (element, target) => {
    let count = 0;
    const speed = target / 50;
    
    const updateNumber = () => {
        if (count < target) {
            count += speed;
            element.textContent = Math.ceil(count);
            requestAnimationFrame(updateNumber);
        }
    };
    
    updateNumber();
};

// Lazy load images
const lazyLoadImages = () => {
    const images = document.querySelectorAll('img[data-src]');
    
    images.forEach(img => {
        img.addEventListener('load', () => {
            img.removeAttribute('data-src');
        });
        img.src = img.getAttribute('data-src');
    });
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    lazyLoadImages();
});

// Add active class styling
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: var(--secondary-color);
        border-bottom: 2px solid var(--secondary-color);
    }
    
    @media (max-width: 768px) {
        .nav-link.active {
            border-bottom: none;
            background-color: rgba(212, 175, 55, 0.1);
        }
    }
`;
document.head.appendChild(style);
