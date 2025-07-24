



document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('darkModeToggle');
  const loginBtn = document.getElementById('loginBtn');
  const loginModal = document.getElementById('loginModal');

  // Modo oscuro
  if (localStorage.getItem('vigeo-dark-mode') === 'true') {
    document.body.classList.add('dark');
  }

  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    localStorage.setItem('vigeo-dark-mode', isDark);
  });

  // Mostrar login modal
  loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    loginModal.classList.remove('hidden');
    document.body.style.backgroundColor = '#fff';
  });

  // Cerrar login con clic fuera del modal
  window.addEventListener('click', (e) => {
    if (e.target === loginModal) {
      loginModal.classList.add('hidden');
      document.body.style.backgroundColor = '';
    }
  });
});
