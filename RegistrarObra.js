// ===== Sesión: mostrar usuario si viene del login =====
const user = localStorage.getItem("authUser");
const usernameEl = document.getElementById("username");

if (user && usernameEl) {
  usernameEl.textContent = "Bienvenido, " + user;
}

// ===== Logout =====
const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("authUser");
    window.location.href = "index.html"; // o tu página de login
  });
}

// ===== Sidebar responsive =====
const sidebar = document.getElementById("sidebar");
const toggleSidebarBtn = document.getElementById("toggleSidebar");
const closeSidebarBtn = document.getElementById("closeSidebar");

// Abrir sidebar en móvil
if (toggleSidebarBtn && sidebar) {
  toggleSidebarBtn.addEventListener("click", () => {
    sidebar.classList.add("open");
  });
}

// Cerrar sidebar en móvil
if (closeSidebarBtn && sidebar) {
  closeSidebarBtn.addEventListener("click", () => {
    sidebar.classList.remove("open");
  });
}

// Cerrar sidebar tocando fuera (solo móvil)
document.addEventListener("click", (e) => {
  if (!sidebar) return;

  const isClickInsideSidebar = sidebar.contains(e.target);
  const isClickMenuBtn =
    toggleSidebarBtn && toggleSidebarBtn.contains(e.target);

  if (!isClickInsideSidebar && !isClickMenuBtn && window.innerWidth <= 768) {
    sidebar.classList.remove("open");
  }
});

// ===== Envío del formulario de registro =====
const form = document.getElementById("obraForm");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const titulo = document.getElementById("titulo").value.trim();
    const autor = document.getElementById("autor").value.trim();
    const tecnica = document.getElementById("tecnica").value.trim();
    const acepto = document.getElementById("acepto").checked;

    if (!titulo || !autor || !tecnica) {
      alert("⚠️ Completa Título, Autor y Técnica.");
      return;
    }

    if (!acepto) {
      alert("⚠️ Debes confirmar que tienes derechos para registrar esta obra.");
      return;
    }

    alert(
      "✅ Obra registrada correctamente (simulado). Aquí luego conectarás con tu backend."
    );
    form.reset();
  });
}
