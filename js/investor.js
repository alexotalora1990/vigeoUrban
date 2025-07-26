// logout.js
document.addEventListener('DOMContentLoaded', () => {
  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      // localStorage.clear(); // Descomenta si deseas borrar datos al cerrar sesión
      window.location.href = '../index.html';
    });
  }

   
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    const darkModeBtn = document.getElementById('darkModeBtn');

    // Menú responsive
    if (menuToggle && sidebar) {
      menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
      });
    }

    // Modo oscuro
    darkModeBtn?.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
    });
  
});
