
/* =====================================
   CASA SERVICE 360
   JAVASCRIPT
===================================== */

// MENU SMARTPHONE

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

        navLinks.classList.toggle("active");

        menuToggle.textContent =
            navLinks.classList.contains("active") ? "✕" : "☰";

    });

    // Chiude il menu quando si seleziona una voce

    navLinks.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("active");
            menuToggle.textContent = "☰";

        });

    });

}


// ANNO AUTOMATICO NEL FOOTER

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// MODULO CONTATTI WHATSAPP

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const service = document.getElementById("service").value;
        const message = document.getElementById("message").value.trim();

        if (!name || !phone || !service) {

            alert("Compila tutti i campi obbligatori.");
            return;

        }

        const whatsappNumber = "393286546923";

        const whatsappMessage =
            "Buongiorno Casa Service 360!\n\n" +
            "Vorrei richiedere un preventivo.\n\n" +
            "Nome: " + name + "\n" +
            "Telefono: " + phone + "\n" +
            "Servizio: " + service + "\n" +
            "Messaggio: " + (message || "Nessun messaggio aggiuntivo") +
            "\n\nGrazie!";

        const whatsappURL =
            "https://wa.me/" +
            whatsappNumber +
            "?text=" +
            encodeURIComponent(whatsappMessage);

        window.open(whatsappURL, "_blank");

    });

}


// SCORRIMENTO FLUIDO

document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") return;

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
