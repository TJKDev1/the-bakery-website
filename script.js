/* ===================================
   The Bakery Shop - JavaScript
   =================================== */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all features
    initNavbar();
    initMobileMenu();
    initScrollAnimations();
    initSmoothScroll();
});

/* ===================================
   Navbar Scroll Effect
   =================================== */
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        // Add scrolled class when page is scrolled
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });
}

/* ===================================
   Mobile Menu Toggle
   =================================== */
function initMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const navCta = document.querySelector('.nav-cta');

    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            // Create mobile menu if it doesn't exist
            let mobileMenu = document.querySelector('.mobile-menu');
            
            if (!mobileMenu) {
                mobileMenu = document.createElement('div');
                mobileMenu.className = 'mobile-menu';
                mobileMenu.innerHTML = `
                    <div class="mobile-menu-content">
                        <ul class="mobile-nav-links">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#shop">Shop</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                        <a href="https://www.redbubble.com/people/the-bakery-shop/" target="_blank" class="mobile-nav-cta">Visit Shop</a>
                    </div>
                `;
                document.body.appendChild(mobileMenu);

                // Add styles for mobile menu
                const style = document.createElement('style');
                style.textContent = `
                    .mobile-menu {
                        position: fixed;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background: rgba(253, 249, 243, 0.98);
                        backdrop-filter: blur(20px);
                        z-index: 999;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        opacity: 0;
                        visibility: hidden;
                        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    }
                    .mobile-menu.active {
                        opacity: 1;
                        visibility: visible;
                    }
                    .mobile-menu-content {
                        text-align: center;
                    }
                    .mobile-nav-links {
                        list-style: none;
                        padding: 0;
                        margin: 0 0 30px 0;
                    }
                    .mobile-nav-links li {
                        margin: 20px 0;
                    }
                    .mobile-nav-links a {
                        font-size: 1.8rem;
                        font-weight: 700;
                        color: #2C2C2C;
                        text-decoration: none;
                        transition: color 0.3s ease;
                    }
                    .mobile-nav-links a:hover {
                        color: #8B6914;
                    }
                    .mobile-nav-cta {
                        display: inline-block;
                        background: linear-gradient(135deg, #8B6914 0%, #D4A843 100%);
                        color: white;
                        padding: 16px 40px;
                        border-radius: 50px;
                        text-decoration: none;
                        font-weight: 600;
                        font-size: 1rem;
                    }
                `;
                document.head.appendChild(style);

                // Close menu when clicking links
                mobileMenu.querySelectorAll('a').forEach(link => {
                    link.addEventListener('click', () => {
                        mobileMenu.classList.remove('active');
                        menuBtn.classList.remove('active');
                    });
                });
            }

            // Toggle menu
            mobileMenu.classList.toggle('active');
            menuBtn.classList.toggle('active');
        });
    }
}

/* ===================================
   Scroll Animations
   =================================== */
function initScrollAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Add animation classes and observe elements
    const animateElements = document.querySelectorAll(
        '.about-content, .product-card, .contact-card, .section-header'
    );

    animateElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });

    // Add styles for animated state
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
}

/* ===================================
   Smooth Scroll for Anchor Links
   =================================== */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/* ===================================
   Parallax Effect on Hero
   =================================== */
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const heroLogo = document.querySelector('.hero-logo');
    
    if (hero && heroLogo) {
        const scrolled = window.pageYOffset;
        const heroHeight = hero.offsetHeight;
        
        if (scrolled < heroHeight) {
            heroLogo.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
    }
});

/* ===================================
   Product Card Hover Effects
   =================================== */
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});
