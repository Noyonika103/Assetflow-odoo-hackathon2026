/* ==========================================================
   AssetFlow Sidebar
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const sidebar = document.getElementById("sidebar");
    const collapseBtn = document.getElementById("collapseBtn");
    const menuLinks = document.querySelectorAll(".menu a");
    const logoutBtn = document.querySelector(".logout-btn");

    /* ==========================================
       Restore Sidebar State
    ========================================== */

    const savedState = localStorage.getItem("sidebarCollapsed");

    if (savedState === "true") {
        sidebar.classList.add("collapsed");
    }

    /* ==========================================
       Collapse / Expand
    ========================================== */

    if (collapseBtn) {

        collapseBtn.addEventListener("click", () => {

            sidebar.classList.toggle("collapsed");

            localStorage.setItem(
                "sidebarCollapsed",
                sidebar.classList.contains("collapsed")
            );

        });

    }

    /* ==========================================
       Active Menu
    ========================================== */

    const currentPage = window.location.pathname
        .split("/")
        .pop();

    menuLinks.forEach(link => {

        const href = link.getAttribute("href");

        if (href === currentPage) {

            link.classList.add("active");

        } else {

            link.classList.remove("active");

        }

    });

    /* ==========================================
       Hover Animation
    ========================================== */

    menuLinks.forEach(link => {

        link.addEventListener("mouseenter", () => {

            link.style.transition = ".3s ease";

        });

    });

    /* ==========================================
       Logout
    ========================================== */

    if (logoutBtn) {

        logoutBtn.addEventListener("click", () => {

            const confirmLogout = confirm(
                "Are you sure you want to logout?"
            );

            if (!confirmLogout) return;

            localStorage.removeItem("token");

            window.location.href = "login.html";

        });

    }

    /* ==========================================
       ESC closes mobile sidebar
    ========================================== */

    document.addEventListener("keydown", (e) => {

        if (e.key === "Escape") {

            sidebar.classList.remove("show");

        }

    });

    /* ==========================================
       Outside Click (Mobile)
    ========================================== */

    document.addEventListener("click", (e) => {

        if (window.innerWidth > 1100) return;

        const mobileBtn = document.getElementById("mobileMenu");

        if (
            sidebar &&
            !sidebar.contains(e.target) &&
            mobileBtn &&
            !mobileBtn.contains(e.target)
        ) {

            sidebar.classList.remove("show");

        }

    });

    /* ==========================================
       Resize
    ========================================== */

    window.addEventListener("resize", () => {

        if (window.innerWidth > 1100) {

            sidebar.classList.remove("show");

        }

    });

});