document.addEventListener('DOMContentLoaded', () => {
  const setThemeBtn = document.querySelector('.theme-switch');

  // 🟡 STEP 1: Check if user had already selected a theme before
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    setThemeBtn.value = 'TryLight';
  } else {
    setThemeBtn.value = 'TryDark';
  }

  // 🔵 STEP 2: When user clicks the theme button
  setThemeBtn.addEventListener('click', function () {
    document.body.classList.toggle('dark-theme');

    // Save the theme to localStorage
    if (document.body.classList.contains('dark-theme')) {
      localStorage.setItem('theme', 'dark');
      setThemeBtn.value = 'TryLight';
    } else {
      localStorage.setItem('theme', 'light');
      setThemeBtn.value = 'TryDark';
    }
  });

  // ✅ Back to Top Button
  const backToTopBtn = document.getElementById('backToTopBtn');
  backToTopBtn.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});
