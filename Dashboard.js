// ===== Sesión (opcional, si vienes del login) =====
const user = localStorage.getItem("authUser");

// Si quieres forzar login previo, deja este bloque.
// Si no, puedes comentar el if.
if (!user) {
  // window.location.href = "index.html";
} else {
  const usernameEl = document.getElementById("username");
  if (usernameEl) {
    usernameEl.textContent = "Bienvenido, " + user;
  }
}

// ===== Logout =====
const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("authUser");
    window.location.href = "index.html";
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
  const isClickInsideSidebar = sidebar.contains(e.target);
  const isClickMenuBtn =
    toggleSidebarBtn && toggleSidebarBtn.contains(e.target);

  if (!isClickInsideSidebar && !isClickMenuBtn && window.innerWidth <= 768) {
    sidebar.classList.remove("open");
  }
});
