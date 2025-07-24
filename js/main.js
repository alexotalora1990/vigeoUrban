



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

  // Mostrar/ocultar menú de idiomas
const languageToggle = document.getElementById('languageToggle');
const languageDropdown = document.getElementById('languageDropdown');
const currentFlag = document.getElementById('currentFlag');

// Mostrar el dropdown al hacer clic
languageToggle.addEventListener('click', (e) => {
  e.stopPropagation();
  languageDropdown.classList.toggle('active');
});

// Cerrar el dropdown si se hace clic afuera
window.addEventListener('click', () => {
  languageDropdown.classList.remove('active');
});

// Cambiar solo la bandera al seleccionar idioma
document.querySelectorAll('.language-dropdown button').forEach(button => {
  button.addEventListener('click', () => {
    const lang = button.getAttribute('data-lang');
    currentFlag.src = `assets/flags/${lang}.png`;
    languageDropdown.classList.remove('active');
  });
});
});
