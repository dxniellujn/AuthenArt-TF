document.addEventListener("DOMContentLoaded", () => {
  /* -------------------
      VALIDACIÓN FORMULARIO CONTACTO
    ------------------- */
  const form = document.getElementById("contactForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // evita que el formulario se envíe si hay errores

      const name = document.getElementById("fname").value.trim();
      const email = document.getElementById("femail").value.trim();
      const motivo = document.getElementById("fcontacto").value.trim();

      let errores = [];

      // Validar nombre
      if (name.length < 3) {
        errores.push("El nombre debe tener al menos 3 caracteres.");
      }

      // Validar correo con expresión regular
      const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!regexEmail.test(email)) {
        errores.push("El correo electrónico no es válido.");
      }

      // Validar motivo
      if (motivo.length < 5) {
        errores.push("El motivo debe tener mínimo 5 caracteres.");
      }

      // Mostrar errores
      if (errores.length > 0) {
        alert("Corrige estos errores:\n\n" + errores.join("\n"));
        return;
      }

      // Si no hay errores
      alert("Formulario enviado correctamente 🎉");
      form.reset();
    });
  }

  /* -------------------
    MENÚ HAMBURGUESA RESPONSIVE
    ------------------- */
  const toggleButton = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".Menu-horizontal");
  const loginButton = document.querySelector(".Login");

  if (toggleButton && menu) {
    toggleButton.addEventListener("click", () => {
      menu.classList.toggle("active");
      if (loginButton) {
        loginButton.classList.toggle("active");
      }
    });
  }
});
