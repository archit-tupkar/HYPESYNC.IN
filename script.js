/* ==========================================
   HYPESYNC MEDIA - SCRIPT.JS (FIXED)
   Modern Landing Page with GSAP + EmailJS
   ========================================== */

// Wait for DOM and GSAP to be fully loaded
document.addEventListener('DOMContentLoaded', function () {

    // ==========================================
    // EMAILJS INITIALIZATION
    // ==========================================
    emailjs.init('4voppXw-xJvtDE6yK');

    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    // ==========================================
    // THEME TOGGLE FUNCTIONALITY
    // ==========================================
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;

    const currentTheme = localStorage.getItem('theme') || 'light';
    html.setAttribute('data-theme', currentTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', function () {
            const theme = html.getAttribute('data-theme');
            const newTheme = theme === 'light' ? 'dark' : 'light';

            html.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);

            gsap.to(themeToggle, {
                rotation: 360,
                duration: 0.5,
                ease: "back.out(1.7)"
            });
        });
    }

    // ==========================================
    // MOBILE MENU TOGGLE
    // ==========================================
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navWrapper = document.querySelector('.nav-wrapper');

    if (mobileMenuToggle && navWrapper) {
        mobileMenuToggle.addEventListener('click', function () {
            mobileMenuToggle.classList.toggle('active');
            navWrapper.classList.toggle('active');

            if (navWrapper.classList.contains('active')) {
                const navItems = document.querySelectorAll('.nav-menu li');
                gsap.fromTo(navItems,
                    { opacity: 0, x: -20 },
                    {
                        opacity: 1,
                        x: 0,
                        stagger: 0.1,
                        duration: 0.5,
                        ease: "power2.out"
                    }
                );
            }
        });
    }

    // Close mobile menu when clicking nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            if (mobileMenuToggle && navWrapper) {
                mobileMenuToggle.classList.remove('active');
                navWrapper.classList.remove('active');
            }
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function (e) {
        if (mobileMenuToggle && navWrapper) {
            if (!e.target.closest('.navbar') && navWrapper.classList.contains('active')) {
                mobileMenuToggle.classList.remove('active');
                navWrapper.classList.remove('active');
            }
        }
    });

    // ==========================================
    // NAVBAR SCROLL EFFECT
    // ==========================================
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', function () {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        if (window.innerWidth > 768) {
            if (currentScroll > lastScroll && currentScroll > 500) {
                gsap.to(navbar, {
                    y: -100,
                    duration: 0.3,
                    ease: "power2.out"
                });
            } else {
                gsap.to(navbar, {
                    y: 0,
                    duration: 0.3,
                    ease: "power2.out"
                });
            }
        }

        lastScroll = currentScroll <= 0 ? 0 : currentScroll;
    });

    // ==========================================
    // SMOOTH SCROLLING FOR ANCHOR LINKS
    // ==========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            if (href === '#' || href === '') {
                e.preventDefault();
                return;
            }

            const target = document.querySelector(href);

            if (target) {
                e.preventDefault();

                const offsetTop = target.offsetTop - 80;

                gsap.to(window, {
                    duration: 1,
                    scrollTo: {
                        y: offsetTop,
                        autoKill: false
                    },
                    ease: "power3.inOut"
                });
            }
        });
    });

    // ==========================================
    // HERO SECTION ANIMATIONS
    // ==========================================

    const titleLines = document.querySelectorAll('.title-line');
    if (titleLines.length > 0) {
        gsap.from(titleLines, {
            opacity: 0,
            y: 50,
            stagger: 0.2,
            duration: 1,
            ease: "power3.out",
            delay: 0.3
        });
    }

    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        gsap.from(heroSubtitle, {
            opacity: 0,
            y: 30,
            duration: 1,
            ease: "power3.out",
            delay: 0.9
        });
    }

    const heroCTAButtons = document.querySelectorAll('.hero-cta .btn');
    if (heroCTAButtons.length > 0) {
        gsap.from(heroCTAButtons, {
            opacity: 0,
            y: 30,
            stagger: 0.2,
            duration: 1,
            ease: "power3.out",
            delay: 1.1
        });
    }

    const statItems = document.querySelectorAll('.stat-item');
    if (statItems.length > 0) {
        gsap.from(statItems, {
            opacity: 0,
            y: 30,
            stagger: 0.15,
            duration: 1,
            ease: "power3.out",
            delay: 1.3
        });
    }

    // ==========================================
    // FLOATING CARDS ANIMATION
    // ==========================================
    const card1 = document.querySelector('.floating-card.card-1');
    const card2 = document.querySelector('.floating-card.card-2');
    const card3 = document.querySelector('.floating-card.card-3');

    if (card1) {
        gsap.to(card1, {
            y: -20,
            rotation: 5,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        });
    }

    if (card2) {
        gsap.to(card2, {
            y: -30,
            rotation: -5,
            duration: 4,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
            delay: 0.5
        });
    }

    if (card3) {
        gsap.to(card3, {
            y: -25,
            rotation: 3,
            duration: 3.5,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
            delay: 1
        });
    }

    // ==========================================
    // PARALLAX BACKGROUND SHAPES
    // ==========================================
    const shape1 = document.querySelector('.shape-1');
    const shape2 = document.querySelector('.shape-2');
    const shape3 = document.querySelector('.shape-3');

    if (shape1) {
        gsap.to(shape1, {
            y: -100,
            x: 50,
            rotation: 360,
            scrollTrigger: {
                trigger: '.hero-section',
                start: 'top top',
                end: 'bottom top',
                scrub: 1
            }
        });
    }

    if (shape2) {
        gsap.to(shape2, {
            y: 100,
            x: -50,
            rotation: -360,
            scrollTrigger: {
                trigger: '.hero-section',
                start: 'top top',
                end: 'bottom top',
                scrub: 1
            }
        });
    }

    if (shape3) {
        gsap.to(shape3, {
            y: 50,
            scale: 1.5,
            scrollTrigger: {
                trigger: '.hero-section',
                start: 'top top',
                end: 'bottom top',
                scrub: 1
            }
        });
    }

    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        gsap.to(heroContent, {
            y: 100,
            opacity: 0.5,
            scrollTrigger: {
                trigger: '.hero-section',
                start: 'top top',
                end: 'bottom top',
                scrub: 1
            }
        });
    }

    // ==========================================
    // ANIMATED COUNTER FOR STATS
    // ==========================================
    const statNumbers = document.querySelectorAll('.stat-number');

    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-count'));

        if (!isNaN(target)) {
            gsap.to(stat, {
                innerHTML: target,
                duration: 2,
                ease: "power1.out",
                snap: { innerHTML: 1 },
                scrollTrigger: {
                    trigger: stat,
                    start: 'top 80%',
                    once: true
                },
                onUpdate: function () {
                    stat.innerHTML = Math.ceil(stat.innerHTML);
                }
            });
        }
    });

    // ==========================================
    // SECTION ANIMATIONS ON SCROLL
    // ==========================================

    const sectionHeaders = document.querySelectorAll('.section-header');
    sectionHeaders.forEach(header => {
        const children = Array.from(header.children);
        if (children.length > 0) {
            gsap.from(children, {
                opacity: 0,
                y: 50,
                stagger: 0.2,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: header,
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                }
            });
        }
    });

    // ==========================================
    // ABOUT SECTION ANIMATIONS
    // ==========================================

    const aboutImage = document.querySelector('.about-image');
    if (aboutImage) {
        gsap.from(aboutImage, {
            opacity: 1,
            x: -100,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: '.about-content',
                start: 'top 70%'
            }
        });
    }

    const featureItems = document.querySelectorAll('.feature-item');
    if (featureItems.length > 0) {
        gsap.from(featureItems, {
            opacity: 1,
            x: 100,
            stagger: 0.2,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: '.feature-list',
                start: 'top 70%'
            }
        });
    }

    const imagePlaceholder = document.querySelector('.image-placeholder');
    if (imagePlaceholder) {
        gsap.to(imagePlaceholder, {
            y: 50,
            scrollTrigger: {
                trigger: '.about-section',
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1
            }
        });
    }

    // ==========================================
    // SERVICES SECTION ANIMATIONS (FIXED!)
    // ==========================================
    const serviceCards = document.querySelectorAll('.service-card');
    if (serviceCards.length > 0) {
        console.log('Found', serviceCards.length, 'service cards');
        
        gsap.from(serviceCards, {
            opacity: 1,
            y: 80,
            stagger: 0.2,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: '.services-grid',
                start: 'top 90%',  // Changed from 70% to 90% - triggers earlier
                toggleActions: 'play none none none',
                markers: false  // Set to true for debugging
            }
        });
    } else {
        console.warn('No service cards found!');
    }

    // Service icon rotation on scroll
    const serviceIcons = document.querySelectorAll('.service-icon');
    serviceIcons.forEach(icon => {
        gsap.from(icon, {
            rotation: -360,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: icon,
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        });
    });

    // ==========================================
    // TIMELINE SECTION ANIMATIONS
    // ==========================================

    const timelineLine = document.querySelector('.timeline-line');
    if (timelineLine) {
        gsap.from(timelineLine, {
            scaleY: 0,
            transformOrigin: 'top',
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
                trigger: '.timeline',
                start: 'top 70%'
            }
        });
    }

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        const stepNumber = item.querySelector('.step-number');
        if (stepNumber) {
            gsap.from(stepNumber, {
                scale: 0,
                rotation: -180,
                duration: 0.8,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: item,
                    start: 'top 75%'
                }
            });
        }

        const timelineContent = item.querySelector('.timeline-content');
        if (timelineContent) {
            gsap.from(timelineContent, {
                opacity: 0,
                x: 100,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: item,
                    start: 'top 75%'
                }
            });
        }

        const timelineIcon = item.querySelector('.timeline-icon');
        if (timelineIcon) {
            gsap.from(timelineIcon, {
                rotation: 360,
                scale: 0,
                duration: 1,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: item,
                    start: 'top 70%'
                }
            });
        }
    });

    // ==========================================
    // CONTACT SECTION ANIMATIONS
    // ==========================================
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        gsap.from(contactForm, {
            x: -80,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: '.contact-content',
                start: 'top 70%'
            }
        });
    }

    const infoCards = document.querySelectorAll('.info-card');
    if (infoCards.length > 0) {
        gsap.from(infoCards, {
            y: 50,
            stagger: 0.2,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: '.contact-info',
                start: 'top 70%'
            }
        });
    }

    // ==========================================
    // FORM SUBMISSION WITH EMAILJS (FIXED!)
    // ==========================================
    const contactFormElement = document.getElementById('contactForm');

    if (contactFormElement) {
        contactFormElement.addEventListener('submit', function (e) {
            e.preventDefault();

            const submitBtn = contactFormElement.querySelector('.btn-submit');
            if (!submitBtn) return;

            const originalText = submitBtn.textContent;
            const originalBg = submitBtn.style.background;

            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            gsap.to(submitBtn, {
                scale: 0.95,
                duration: 0.1,
                yoyo: true,
                repeat: 1
            });

            // Send email using EmailJS
            emailjs.sendForm(
                'service_71vdpqc',    // Your Service ID
                'template_g1i49bu',   // Your Template ID
                this
            )
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);

                submitBtn.textContent = '✓ Message Sent Successfully!';
                submitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';

                showNotification('Thank you! We\'ll get back to you within 48 hours.', 'success');

                setTimeout(() => {
                    contactFormElement.reset();
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.background = originalBg;
                }, 3000);

            }, function (error) {
                console.error('FAILED...', error);

                submitBtn.textContent = '✗ Failed to Send';
                submitBtn.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';

                showNotification('Failed to send message. Please try again.', 'error');

                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.background = originalBg;
                }, 3000);
            });
        });
    }

    // ==========================================
    // LEGAL TABS FUNCTIONALITY
    // ==========================================
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabButtons.forEach(button => {
        button.addEventListener('click', function () {
            const targetTab = this.getAttribute('data-tab');

            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));

            this.classList.add('active');
            const targetPane = document.getElementById(targetTab);
            if (targetPane) {
                targetPane.classList.add('active');

                gsap.from(targetPane, {
                    opacity: 0,
                    y: 20,
                    duration: 0.5,
                    ease: "power2.out"
                });
            }
        });
    });

    // ==========================================
    // BUTTON HOVER EFFECTS
    // ==========================================
    const buttons = document.querySelectorAll('.btn, .cta-button');
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', function () {
            gsap.to(this, {
                scale: 1.05,
                duration: 0.3,
                ease: "power2.out"
            });
        });

        btn.addEventListener('mouseleave', function () {
            gsap.to(this, {
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });

    // ==========================================
    // CARD TILT EFFECT (DESKTOP ONLY)
    // ==========================================
    if (window.innerWidth > 768) {
        const tiltCards = document.querySelectorAll('.service-card, .info-card, .feature-item');
        tiltCards.forEach(card => {
            card.addEventListener('mousemove', function (e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;

                gsap.to(this, {
                    rotationX: rotateX,
                    rotationY: rotateY,
                    duration: 0.5,
                    ease: "power2.out",
                    transformPerspective: 1000
                });
            });

            card.addEventListener('mouseleave', function () {
                gsap.to(this, {
                    rotationX: 0,
                    rotationY: 0,
                    duration: 0.5,
                    ease: "power2.out"
                });
            });
        });
    }

    // ==========================================
    // SCROLL PROGRESS INDICATOR
    // ==========================================
    const scrollProgress = document.createElement('div');
    scrollProgress.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0;
        height: 4px;
        background: linear-gradient(90deg, #3C467B, #6E8CFB);
        z-index: 9999;
        transform-origin: left;
    `;
    document.body.appendChild(scrollProgress);

    window.addEventListener('scroll', function () {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        scrollProgress.style.width = scrolled + '%';
    });

    // ==========================================
    // NOTIFICATION SYSTEM
    // ==========================================
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        let bgColor;

        if (type === 'success') {
            bgColor = 'linear-gradient(135deg, #10b981, #059669)';
        } else if (type === 'error') {
            bgColor = 'linear-gradient(135deg, #ef4444, #dc2626)';
        } else {
            bgColor = 'linear-gradient(135deg, #3C467B, #6E8CFB)';
        }

        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            padding: 1rem 1.5rem;
            background: ${bgColor};
            color: white;
            border-radius: 12px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
            z-index: 10000;
            font-weight: 600;
            max-width: 300px;
            font-family: 'Inter', sans-serif;
        `;
        notification.textContent = message;
        document.body.appendChild(notification);

        gsap.from(notification, {
            x: 400,
            opacity: 0,
            duration: 0.5,
            ease: "back.out(1.7)"
        });

        setTimeout(() => {
            gsap.to(notification, {
                x: 400,
                opacity: 0,
                duration: 0.5,
                ease: "power2.in",
                onComplete: () => notification.remove()
            });
        }, 5000);
    }

    // ==========================================
    // ACTIVE LINK HIGHLIGHTING
    // ==========================================
    const sections = document.querySelectorAll('section[id]');

    function highlightNav() {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

            if (navLink && scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                navLink.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', throttle(highlightNav, 100));

    // ==========================================
    // UTILITY FUNCTIONS
    // ==========================================
    function throttle(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // ==========================================
    // RESPONSIVE ADJUSTMENTS
    // ==========================================
    function handleResize() {
        ScrollTrigger.refresh();
    }

    window.addEventListener('resize', throttle(handleResize, 250));

    // ==========================================
    // PAGE LOAD ANIMATION
    // ==========================================
    window.addEventListener('load', function () {
        gsap.from(navbar, {
            y: -100,
            duration: 0.8,
            ease: "power3.out"
        });
    });

    // ==========================================
    // CONSOLE LOG
    // ==========================================
    console.log('%c🚀 HypeSync Media', 'font-size: 20px; font-weight: bold; color: #6E8CFB;');
    console.log('%cWebsite loaded successfully!', 'color: #10b981;');

}); // End of DOMContentLoaded
