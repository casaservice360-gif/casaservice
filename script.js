
/* =========================================
   CASA SERVICE 360 SRLS
   JAVASCRIPT - FORMSPREE
========================================= */


/* =========================================
   1. MENU SMARTPHONE
========================================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

        const isOpen = navLinks.classList.toggle("active");

        menuToggle.textContent = isOpen ? "✕" : "☰";

        menuToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

    });

    navLinks.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("active");

            menuToggle.textContent = "☰";

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

}


/* =========================================
   2. ANNO AUTOMATICO
========================================= */

const yearElement = document.getElementById("year");

if (yearElement) {

    yearElement.textContent = new Date().getFullYear();

}


/* =========================================
   3. MODULO PREVENTIVO
   INVIO DIRETTO A FORMSPREE
========================================= */

// IMPORTANTE:
// Non intercettare il submit del modulo.
// Il browser invierà i dati direttamente
// all'indirizzo Formspree indicato nell'HTML.


/* =========================================
   4. SCORRIMENTO FLUIDO
========================================= */

document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (!targetId || targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


/* =========================================
   5. CHIUSURA MENU CON TASTO ESC
========================================= */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape" && navLinks && menuToggle) {

        navLinks.classList.remove("active");

        menuToggle.textContent = "☰";

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    }

});
