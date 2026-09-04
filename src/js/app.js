    // MOBILE MENU LOGIC
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    const l1 = document.getElementById('line1');
    const l2 = document.getElementById('line2');
    const l3 = document.getElementById('line3');
    
    if (btn) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
            l1.classList.toggle('top-3'); l1.classList.toggle('rotate-45');
            l2.classList.toggle('opacity-0');
            l3.classList.toggle('top-3'); l3.classList.toggle('-rotate-45');
        });
    }

    // DESKTOP NAVBAR SLIDING HIGHLIGHT LOGIC
    document.addEventListener("DOMContentLoaded", () => {
        const navContainer = document.getElementById('nav-container');
        const navLinks = document.querySelectorAll('.nav-link');
        const highlight = document.getElementById('nav-highlight');

        if (navContainer && navLinks.length > 0 && highlight) {
            navLinks.forEach(link => {
                link.addEventListener('mouseenter', (e) => {
                    const linkRect = e.target.getBoundingClientRect();
                    const containerRect = navContainer.getBoundingClientRect();
                    
                    highlight.style.width = `${linkRect.width}px`;
                    highlight.style.transform = `translateX(${linkRect.left - containerRect.left}px)`;
                    highlight.style.opacity = '1';
                });
            });

            navContainer.addEventListener('mouseleave', () => {
                highlight.style.opacity = '0';
            });
        }
    });

//__________________________________________________________________________________HAMBURGER-MOBILE__________________________________________________



 document.addEventListener("DOMContentLoaded", () => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove('opacity-0-initial');
                    entry.target.classList.add('animate-fade-in-up');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.scroll-animate').forEach((element) => {
            observer.observe(element);
        });
    });
