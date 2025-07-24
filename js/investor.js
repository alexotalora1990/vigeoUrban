// investor.js

document.addEventListener('DOMContentLoaded', () => {
  const darkToggle = document.getElementById('darkModeToggle');
  const languageToggle = document.getElementById('languageToggle');
  const languageDropdown = document.getElementById('languageDropdown');
  const flagButtons = languageDropdown?.querySelectorAll('button[data-lang]') || [];

  // MODO OSCURO
  if (localStorage.getItem('vigeo-investor-dark') === 'true') {
    document.body.classList.add('dark');
  }

  if (darkToggle) {
    darkToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      localStorage.setItem('vigeo-investor-dark', document.body.classList.contains('dark'));
    });
  }

  // CAMBIO DE IDIOMA - Mostrar/Ocultar Dropdown
  if (languageToggle && languageDropdown) {
    languageToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      languageDropdown.classList.toggle('show');
    });

    document.addEventListener('click', () => {
      languageDropdown.classList.remove('show');
    });

    flagButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        const flagImg = btn.querySelector('img').src;
        document.getElementById('currentFlag').src = flagImg;
        localStorage.setItem('vigeo-investor-lang', lang);
        alert('Idioma cambiado a: ' + lang);
      });
    });
  }

  // FORMULARIO DE MI CUENTA
  const accountForm = document.querySelector('.account-form');
  if (accountForm) {
    accountForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Cambios guardados. (Simulación)');
    });
  }

  
});
