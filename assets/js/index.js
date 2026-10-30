document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".site-header");
    if (header) {
        const updateHeaderHeight = () => {
            document.documentElement.style.setProperty(
                "--header-height",
                `${Math.ceil(header.getBoundingClientRect().height)}px`,
            );
        };
        updateHeaderHeight();
        if ("ResizeObserver" in window) {
            new ResizeObserver(updateHeaderHeight).observe(header);
        } else {
            window.addEventListener("resize", updateHeaderHeight, { passive: true });
        }
    }

    const navLinks = Array.from(document.querySelectorAll('nav a[href^="#"]'));
    document.querySelectorAll('nav a[href^="#"]').forEach((link) => {
        link.addEventListener("click", (event) => {
            const target = document.getElementById(link.hash.slice(1));
            if (!target) return;

            event.preventDefault();
            target.setAttribute("tabindex", "-1");
            target.focus({ preventScroll: true });
            target.scrollIntoView({
                behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
                    ? "auto"
                    : "smooth",
                block: "start",
            });
            history.pushState(null, "", link.hash);
        });
    });

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver((entries) => {
            const visible = entries.filter((entry) => entry.isIntersecting);
            if (!visible.length) return;
            const id = visible[0].target.id;
            navLinks.forEach((link) => {
                if (link.hash === `#${id}`) link.setAttribute("aria-current", "location");
                else link.removeAttribute("aria-current");
            });
        }, { rootMargin: "-10% 0px -70% 0px" });
        document.querySelectorAll("main section[id], footer[id]").forEach((section) => observer.observe(section));
    }
});
