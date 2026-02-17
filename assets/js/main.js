// Lovely Harbor - Main JavaScript

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    console.log('Lovely Harbor loaded successfully');
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    // Newsletter form handling
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            console.log('Newsletter signup:', email);
            alert('Thank you for subscribing! Check your email for confirmation.');
            this.reset();
        });
    }
    
    // Affiliate link tracking (GA ready)
    document.querySelectorAll('a[href*="fktr.in"]').forEach(link => {
        link.addEventListener('click', function() {
            console.log('Affiliate link clicked:', this.href);
            // GA tracking can be added here
        });
    });
});

// Lazy loading for images
if ('IntersectionObserver' in window) {
    const images = document.querySelectorAll('img');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Mobile navigation menu
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Analytics tracking helper
function trackEvent(category, action, label) {
    if (window.gtag) {
        gtag('event', action, {
            'event_category': category,
            'event_label': label
        });
    }
}

// Initialize Pinterest integration
function initPinterestSharing() {
    document.querySelectorAll('[data-pin-description]').forEach(element => {
        element.addEventListener('click', function() {
            const description = this.dataset.pinDescription;
            const imageUrl = this.dataset.pinImage;
            const pinUrl = `https://pinterest.com/pin/create/button/?url=${window.location.href}&media=${imageUrl}&description=${description}`;
            window.open(pinUrl, 'pinterest', 'width=750,height=320');
        });
    });
}

// Performance optimization
window.addEventListener('load', function() {
    // Remove loading states
    document.body.classList.remove('loading');
});
