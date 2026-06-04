document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (!navToggle || !navMenu) {
        return;
    }

    const setToggleState = (isOpen) => {
        navToggle.setAttribute('aria-expanded', String(isOpen));
        navToggle.textContent = isOpen ? '✕' : '☰';
    };

    const closeMenu = () => {
        navMenu.classList.remove('open');
        setToggleState(false);
    };

    navToggle.addEventListener('click', () => {
        const isOpen = navMenu.classList.toggle('open');
        setToggleState(isOpen);
    });

    navMenu.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                closeMenu();
            }
        });
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            closeMenu();
        }
    });

    closeMenu();
});
