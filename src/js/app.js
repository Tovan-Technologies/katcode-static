document.addEventListener("DOMContentLoaded", () => {

    const button = document.getElementById("mobile-menu-btn");
    const menu = document.getElementById("mobile-menu");

    const line1 = document.getElementById("line1");
    const line2 = document.getElementById("line2");
    const line3 = document.getElementById("line3");

    button.addEventListener("click", () => {

        menu.classList.toggle("hidden");

        line1.classList.toggle("rotate-45");
        line1.classList.toggle("translate-y-2");

        line2.classList.toggle("opacity-0");

        line3.classList.toggle("-rotate-45");
        line3.classList.toggle("-translate-y-2");

    });

    menu.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            if (!menu.classList.contains("hidden")) {

                menu.classList.add("hidden");

                line1.classList.remove("rotate-45", "translate-y-2");
                line2.classList.remove("opacity-0");
                line3.classList.remove("-rotate-45", "-translate-y-2");

            }

        });

    });

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
