/* =====================================================
   BLUSHBERRY GLOBAL DARK MODE
   ===================================================== */

(function () {

    /* ---------- DARK MODE CSS ---------- */

    const darkModeCSS = `
        body.dark-mode {
            background: #181818 !important;
            color: #f5f5f5 !important;
        }

        body.dark-mode .navbar {
            background: #222222 !important;
            color: #ffffff !important;
        }

        body.dark-mode .navbar-brand {
            color: #ff6b9d !important;
        }

        body.dark-mode .card,
        body.dark-mode .profile-card,
        body.dark-mode .action-card,
        body.dark-mode .setting-card,
        body.dark-mode .payment-card,
        body.dark-mode .address-card,
        body.dark-mode .order-card,
        body.dark-mode .wishlist-card,
        body.dark-mode .checkout-card,
        body.dark-mode .login-container,
        body.dark-mode .login-right,
        body.dark-mode .register-box {
            background: #242424 !important;
            color: #f5f5f5 !important;
        }

        body.dark-mode h1,
        body.dark-mode h2,
        body.dark-mode h3,
        body.dark-mode h4,
        body.dark-mode h5,
        body.dark-mode h6,
        body.dark-mode p,
        body.dark-mode label,
        body.dark-mode span {
            color: #f5f5f5;
        }

        body.dark-mode .text-muted {
            color: #bbbbbb !important;
        }

        body.dark-mode input,
        body.dark-mode textarea,
        body.dark-mode select {
            background: #303030 !important;
            color: #ffffff !important;
            border-color: #555555 !important;
        }

        body.dark-mode input::placeholder,
        body.dark-mode textarea::placeholder {
            color: #aaaaaa !important;
        }

        body.dark-mode .form-control {
            background: #303030 !important;
            color: #ffffff !important;
            border-color: #555555 !important;
        }

        body.dark-mode .form-check-label {
            color: #ffffff !important;
        }

        body.dark-mode .table {
            --bs-table-bg: #242424 !important;
            --bs-table-color: #ffffff !important;
            color: #ffffff !important;
        }

        body.dark-mode .table td,
        body.dark-mode .table th {
            color: #ffffff !important;
            background: #242424 !important;
        }

        body.dark-mode footer {
            background: #111111 !important;
            color: #ffffff !important;
        }

        body.dark-mode a {
            color: #ff7aa8;
        }

        body.dark-mode .btn-outline-danger {
            color: #ff6b9d !important;
            border-color: #ff6b9d !important;
        }

        body.dark-mode .btn-outline-danger:hover {
            background: #ff4f87 !important;
            color: white !important;
        }

        body.dark-mode .setting-card i,
        body.dark-mode .action-card i {
            color: #ff6b9d !important;
        }

        body.dark-mode .price {
            color: #ff7aa8 !important;
        }
    `;


    /* ---------- ADD CSS TO PAGE ---------- */

    const style = document.createElement("style");

    style.id = "blushberry-dark-mode-style";

    style.innerHTML = darkModeCSS;

    document.head.appendChild(style);


    /* ---------- APPLY SAVED THEME ---------- */

    function applyTheme() {

        const darkMode =
            localStorage.getItem("darkMode");

        if (darkMode === "enabled") {

            document.body.classList.add("dark-mode");

        } else {

            document.body.classList.remove("dark-mode");

        }
    }


    /* ---------- TOGGLE DARK MODE ---------- */

    window.toggleDarkMode = function () {

        const isDark =
            document.body.classList.toggle("dark-mode");


        if (isDark) {

            localStorage.setItem(
                "darkMode",
                "enabled"
            );

        } else {

            localStorage.setItem(
                "darkMode",
                "disabled"
            );

        }
    };


    /* ---------- RUN AFTER PAGE LOAD ---------- */

    if (document.readyState === "loading") {

        document.addEventListener(
            "DOMContentLoaded",
            applyTheme
        );

    } else {

        applyTheme();

    }

})();