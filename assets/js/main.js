document.addEventListener("DOMContentLoaded", () => {
    const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;
    const header = document.querySelector(".header");

    /* ======================================================
       SCROLL SUAVE COM OFFSET DO HEADER
    ====================================================== */

    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", event => {
            const href = link.getAttribute("href");
            if (href === "#") return;
            const target = document.querySelector(href);
            if (!target) return;
            event.preventDefault();
            const offset =
                header?.offsetHeight || 0;
            const position =
                target.getBoundingClientRect().top +
                window.pageYOffset -
                offset;
            window.scrollTo({
                top: position,
                behavior: "smooth"
            });
        });
    });

    /* ======================================================
       PARALLAX HERO
    ====================================================== */

    if (
        !prefersReducedMotion &&
        window.innerWidth > 992
    ){
        const heroImage =
            document.querySelector(".hero-image");
        const heroText =
            document.querySelector(".hero-text");
        window.addEventListener(
            "scroll",
            () => {
                const scroll = window.scrollY;
                if(heroImage){
                    heroImage.style.transform =
                        `translateY(${scroll * .10}px)`;
                }
                if(heroText){
                    heroText.style.transform =
                        `translateY(${scroll * .04}px)`;
                }
            },
            { passive:true }
        );
    }

    /* ======================================================
       STAGGER DOS CARDS
    ====================================================== */

    const cards =
        document.querySelectorAll(".card");
    cards.forEach((card,index)=>{
        card.style.transitionDelay =
            `${index * 90}ms`;
    });

    /* ======================================================
       PRELOAD DAS IMAGENS
    ====================================================== */

    document
        .querySelectorAll("img")
        .forEach(image=>{
            if(image.complete){
                image.classList.add("loaded");
                return;
            }
            image.addEventListener("load",()=>{
                image.classList.add("loaded");
            });
        });

    /* ======================================================
       NAVEGAÇÃO POR TECLADO
    ====================================================== */

    document.addEventListener("keydown",(event)=>{
        if(event.key!=="Tab") return;
        document.body.classList.add("keyboard-user");
    });
    document.addEventListener("mousedown",()=>{
        document.body.classList.remove("keyboard-user");
    });

    /* ======================================================
       ANO AUTOMÁTICO
    ====================================================== */

    const year =
        document.querySelector("[data-current-year]");
    if(year){
        year.textContent =
            new Date().getFullYear();
    }

    /* ======================================================
       CONSOLE
    ====================================================== */

    console.info(

`%cAssociação Luará

🥋 Judô
🩰 Ballet

© ${new Date().getFullYear()}`,

"color:#C9A227;font-size:14px;font-weight:bold;"
    );
});
