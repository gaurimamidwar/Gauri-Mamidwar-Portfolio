// ============================================
// DARK HYBRID RED - CORE SCRIPT 2026
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // 1. Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 1b. Mobile Menu Toggle
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }

    // Close menu on link click
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu?.classList.remove('active');
            navToggle?.classList.remove('active');
        });
    });

    // 2. Custom Cursor - 2026 Feature
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // 3. Intersection Observer for Animations (Progress & Counters)
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('progress-fill')) {
                    const width = entry.target.dataset.width;
                    entry.target.style.width = width;
                } else if (entry.target.classList.contains('stat-number')) {
                    animateCounter(entry.target);
                }
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Initial setup for obserevable elements
    document.querySelectorAll('.progress-fill').forEach(bar => {
        bar.dataset.width = bar.style.width;
        bar.style.width = '0';
        observer.observe(bar);
    });

    document.querySelectorAll('.stat-number').forEach(stat => {
        observer.observe(stat);
    });

    document.querySelectorAll('.stat-card, .about-portrait, .about-details, .skill-pill, .hero-content').forEach(el => {
        el.classList.add('reveal-on-scroll');
        observer.observe(el);
    });

    // 4. Counter Animation Logic
    function animateCounter(el) {
        const target = parseInt(el.innerText);
        let count = 0;
        const duration = 2000;
        const increment = target / (duration / 16);

        const update = () => {
            count += increment;
            if (count < target) {
                el.innerText = Math.round(count) + (el.innerText.includes('+') ? '+' : '');
                requestAnimationFrame(update);
            } else {
                el.innerText = target + (el.innerText.includes('+') ? '+' : '');
            }
        };
        update();
    }

    // 5. Smooth Scroll for Nav Links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    // 6. Theme Toggle Logic
    const themeToggle = document.getElementById('themeToggle');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'light') {
        document.body.classList.add('light-theme');
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('light-theme');
            let theme = 'dark';
            if (document.body.classList.contains('light-theme')) {
                theme = 'light';
            }
            localStorage.setItem('theme', theme);
        });
    }
});

console.log('--- Dark Hybrid Red: Ready ---');
