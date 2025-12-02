document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const user = document.getElementById("loginUser").value.trim();
    const pass = document.getElementById("loginPassword").value.trim();

    let errores = [];

    if (user.length < 3) {
      errores.push("El usuario debe tener al menos 3 caracteres.");
    }

    if (pass.length < 6) {
      errores.push("La contraseña debe tener mínimo 6 caracteres.");
    }

    if (errores.length > 0) {
      alert("Corrige estos errores:\n\n" + errores.join("\n"));
      return;
    }

    // ----------- LOGIN CORRECTO -----------
    alert("Inicio de sesión correcto ✓ (simulado)");

    // Guardar usuario en sesión (opcional)
    localStorage.setItem("authUser", user);

    // 🔥 REDIRECCIÓN AL DASHBOARD
    window.location.href = "Dashboard.html";

    // Reset del formulario (opcional)
    loginForm.reset();
  });
});
