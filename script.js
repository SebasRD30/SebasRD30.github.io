document.addEventListener("DOMContentLoaded", function () {

const contactForm = document.getElementById("contactForm");

if (contactForm) {
contactForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe de la manera predeterminada

    alert("¡Gracias por ponerte en contacto con nosotros!");
    contactForm.reset();
});
}
});
