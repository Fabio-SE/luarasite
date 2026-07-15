/**
 * Menu Mobile
 */

document.addEventListener("DOMContentLoaded", () => {

    const menuButton = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".nav");
    const links = document.querySelectorAll(".nav a");

    if (!menuButton || !navigation) return;

    /**
     * Abre/Fecha Menu
     */

    const toggleMenu = () => {

        const expanded =
            menuButton.getAttribute("aria-expanded") === "true";

        menuButton.setAttribute(
            "aria-expanded",
            !expanded
        );
        navigation.classList.toggle("active");
        document.body.classList.toggle("menu-open");
    };
    menuButton.addEventListener("click", toggleMenu);

    /**
     * Fecha ao clicar em um link
     */

    links.forEach(link => {
        link.addEventListener("click", () => {
            navigation.classList.remove("active");
            document.body.classList.remove("menu-open");
            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );
        });
    });

    /**
     * Fecha clicando fora
     */

    document.addEventListener("click", (event) => {
        const clickInsideNav =
            navigation.contains(event.target);
        const clickButton =
            menuButton.contains(event.target);
        if (clickInsideNav || clickButton) return;
        navigation.classList.remove("active");
        document.body.classList.remove("menu-open");
        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );
    });

    /**
     * Fecha ao redimensionar
     */

    window.addEventListener("resize", () => {
        if (window.innerWidth > 860) {
            navigation.classList.remove("active");
            document.body.classList.remove("menu-open");
            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );
        }
    });
});
