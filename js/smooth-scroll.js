/**
 * Smooth Scrolling and Navigation Effects
 * Provides smooth scrolling for anchor links and dynamic navigation styling
 */

/**
 * Initialize smooth scrolling for navigation links
 */
function initializeSmoothScrolling() {
    // Smooth scrolling for navigation links
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
}

/**
 * Initialize scroll effects for navigation
 */
function initializeScrollEffects() {
    // Add scroll effect to navigation
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('.header-nav');
        if (nav) {
            if (window.scrollY > 100) {
                nav.style.backgroundColor = 'rgba(245, 230, 211, 0.98)';
            } else {
                nav.style.backgroundColor = 'rgba(245, 230, 211, 0.95)';
            }
        }
    });
}

/**
 * Main initialization function
 */
function initializeNavigation() {
    initializeSmoothScrolling();
    initializeScrollEffects();
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeNavigation);

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initializeNavigation,
        initializeSmoothScrolling,
        initializeScrollEffects
    };
}
