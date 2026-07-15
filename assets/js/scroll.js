document.addEventListener("DOMContentLoaded", () => {

    const header = document.querySelector(".header");
    const backToTop = document.querySelector(".back-to-top");
    const sections = document.querySelectorAll("section[id]");
    const menuLinks = document.querySelectorAll(".nav a");
    const revealElements = document.querySelectorAll(
        ".reveal, .fade-up"
    );

    /* ======================================================
       HEADER + BOTÃO TOPO
    ====================================================== */

    const handleScroll = () => {
        const scroll = window.scrollY;
        if (scroll > 40) {
            header?.classList.add("scrolled");
        } else {
            header?.classList.remove("scrolled");
        }
        if (backToTop) {
            backToTop.classList.toggle(
                "show",
                scroll > 500
            );
        }
    };
    window.addEventListener(
        "scroll",
        handleScroll,
        { passive: true }
    );
    handleScroll();

    /* ======================================================
       REVEAL ANIMATION
    ====================================================== */

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add(
                    "show",
                    "visible"
                );
                observer.unobserve(entry.target);
            });
        },
        {
            threshold: .15,
            rootMargin: "0px 0px -80px 0px"
        }
    );
    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

    /* ======================================================
       ACTIVE MENU
    ====================================================== */

    const menuObserver = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                const id = entry.target.id;
                menuLinks.forEach(link => {
                    link.classList.remove("active");
                    if (
                        link.getAttribute("href") === `#${id}`
                    ) {
                        link.classList.add("active");
                    }
                });
            });
        },
        {
            threshold: .45
        }
    );
    sections.forEach(section => {
        menuObserver.observe(section);
    });

    /* ======================================================
       BACK TO TOP
    ====================================================== */

    backToTop?.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
