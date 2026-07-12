/* ==========================================================
   AssetFlow Navbar Controller
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const sidebar = document.getElementById("sidebar");
    const mobileMenu = document.getElementById("mobileMenu");
    const searchInput = document.getElementById("searchInput");
    const notificationBtn = document.querySelector(".icon-btn");
    const profile = document.querySelector(".profile");

    /* ==========================================
       Mobile Sidebar Toggle
    ========================================== */

    if (mobileMenu) {

        mobileMenu.addEventListener("click", () => {

            sidebar.classList.toggle("show");

        });

    }

    /* ==========================================
       Close Sidebar on Outside Click
    ========================================== */

    document.addEventListener("click", (e) => {

        if (window.innerWidth > 1100) return;

        if (
            sidebar &&
            !sidebar.contains(e.target) &&
            mobileMenu &&
            !mobileMenu.contains(e.target)
        ) {

            sidebar.classList.remove("show");

        }

    });

    /* ==========================================
       Search Animation
    ========================================== */

    if (searchInput) {

        searchInput.addEventListener("focus", () => {

            searchInput.parentElement.classList.add("active-search");

        });

        searchInput.addEventListener("blur", () => {

            searchInput.parentElement.classList.remove("active-search");

        });

    }

    /* ==========================================
       Notification Animation
    ========================================== */

    if (notificationBtn) {

        notificationBtn.addEventListener("click", () => {

            notificationBtn.classList.add("pulse");

            setTimeout(() => {

                notificationBtn.classList.remove("pulse");

            }, 500);

        });

    }

    /* ==========================================
       Profile Click
    ========================================== */

    if (profile) {

        profile.addEventListener("click", () => {

            alert("Profile dropdown will be added later.");

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
       Responsive Reset
    ========================================== */

    window.addEventListener("resize", () => {

        if (window.innerWidth > 1100) {

            sidebar.classList.remove("show");

        }

    });

});