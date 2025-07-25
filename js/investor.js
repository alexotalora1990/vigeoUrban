// logout.js
document.addEventListener('DOMContentLoaded', () => {
  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      // localStorage.clear(); // Descomenta si deseas borrar datos al cerrar sesión
      window.location.href = '../index.html';
    });
  }
});
